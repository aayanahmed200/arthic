import type { VercelRequest, VercelResponse } from "@vercel/node";
import { RETIRED_NEAR_DUPLICATE_IDS, SAMPLE_QUESTIONS } from "./_sample-content.js";

const SUPPORTED_EXAMS = new Set(["LCAT", "NET", "CSS", "MDCAT"]);
const DATA_VERSION = "arthic-original-four-track-v19-1060";

function normalizedSubjectCode(examCode: string, subjectCode: string): string {
  return examCode === "LCAT" && ["ENGLISH", "LOGIC", "ANALYTICAL"].includes(subjectCode)
    ? "VERBAL"
    : subjectCode;
}
import { sql } from "../_db.js";
import { classifyPracticeDifficulty } from "../../src/data/question-difficulty.js";

function toPublicQuestion(row: Record<string, unknown>) {
  const rawOptions = typeof row.options === "string" ? JSON.parse(row.options) : row.options;
  if (!Array.isArray(rawOptions)) return null;
  return {
    id: String(row.id),
    examCode: String(row.exam_code),
    subjectCode: normalizedSubjectCode(String(row.exam_code), String(row.subject_code)),
    topic: String(row.topic),
    prompt: String(row.prompt),
    instruction: String(row.instruction || "Choose one answer."),
    options: rawOptions.map((raw) => {
      const option = raw as Record<string, unknown>;
      return { key: String(option.key), text: String(option.text) };
    }),
    sourceKind: String(row.source_kind),
    sourceNote: typeof row.source_note === "string" ? row.source_note : null,
    difficulty: ["EASY", "STANDARD", "CHALLENGING"].includes(String(row.difficulty))
      ? String(row.difficulty)
      : classifyPracticeDifficulty({
          examCode: String(row.exam_code),
          subjectCode: String(row.subject_code),
          topic: String(row.topic),
          prompt: String(row.prompt),
        }),
    examYear: Number.isInteger(Number(row.exam_year)) && row.exam_year !== null ? Number(row.exam_year) : null,
    examMonth: Number.isInteger(Number(row.exam_month)) && Number(row.exam_month) >= 1 && Number(row.exam_month) <= 12 ? Number(row.exam_month) : null,
    examSession: typeof row.exam_session === "string" ? row.exam_session : null,
  };
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ error: "method not allowed" });
  }
  res.setHeader("X-Content-Type-Options", "nosniff");

  if (process.env.POSTGRES_URL) {
    try {
      const { rows } = await sql`
        SELECT id, exam_code, subject_code, topic, prompt, instruction, options,
               source_kind, source_note, difficulty, exam_year, exam_month, exam_session
        FROM question_bank
        WHERE is_published = true AND is_archived = false
          AND exam_code IN ('LCAT', 'NET', 'CSS', 'MDCAT')
        ORDER BY exam_code, subject_code, topic, id
        LIMIT 900
      `;
      const published = rows
        .map((row) => toPublicQuestion(row as Record<string, unknown>))
        .filter((question): question is NonNullable<ReturnType<typeof toPublicQuestion>> =>
          question !== null &&
          SUPPORTED_EXAMS.has(question.examCode) &&
          !RETIRED_NEAR_DUPLICATE_IDS.has(question.id)
        );
      const merged = new Map<string, NonNullable<ReturnType<typeof toPublicQuestion>>>();
      SAMPLE_QUESTIONS.forEach((question) => merged.set(question.id, {
        id: question.id,
        examCode: question.examCode,
        subjectCode: normalizedSubjectCode(question.examCode, question.subjectCode),
        topic: question.topic,
        prompt: question.prompt,
        instruction: question.instruction,
        options: question.options,
        sourceKind: question.sourceKind,
        sourceNote: question.sourceNote ?? "Original Arthic practice question; not taken from an official past paper.",
        difficulty: question.difficulty ?? classifyPracticeDifficulty(question),
        examYear: question.examYear ?? null,
        examMonth: question.examMonth ?? null,
        examSession: question.examSession ?? null,
      }));
      published.forEach((question) => merged.set(question.id, question));
      if (merged.size) {
        res.setHeader("Cache-Control", "public, max-age=30, s-maxage=60, stale-while-revalidate=300");
        return res.status(200).json({
          dataVersion: DATA_VERSION,
          sourceKind: "mixed-original-and-curated",
          isOfficialPastPaper: Array.from(merged.values()).some((question) =>
            question.sourceKind === "past-paper" &&
            Number.isInteger(question.examYear) &&
            Number.isInteger(question.examMonth)
          ),
          questions: Array.from(merged.values()),
        });
      }
    } catch (error) {
      console.error("published question bank read failed", error);
    }
  }

  // Keep a clearly labelled demo feed available until questions are published.
  res.setHeader("Cache-Control", "public, max-age=60, s-maxage=300, stale-while-revalidate=3600");
  return res.status(200).json({
    dataVersion: DATA_VERSION,
    sourceKind: "original-sample",
    isOfficialPastPaper: false,
    questions: SAMPLE_QUESTIONS.map((question) => ({
      id: question.id,
      examCode: question.examCode,
      subjectCode: normalizedSubjectCode(question.examCode, question.subjectCode),
      topic: question.topic,
      prompt: question.prompt,
      instruction: question.instruction,
      options: question.options,
      sourceKind: question.sourceKind,
      sourceNote: question.sourceNote ?? "Original Arthic practice question; not taken from an official past paper.",
      difficulty: question.difficulty ?? classifyPracticeDifficulty(question),
      examYear: question.examYear ?? null,
      examMonth: question.examMonth ?? null,
      examSession: question.examSession ?? null,
    })),
  });
}
