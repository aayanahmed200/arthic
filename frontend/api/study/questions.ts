import type { VercelRequest, VercelResponse } from "@vercel/node";
import { SAMPLE_QUESTIONS } from "./_sample-content.js";
import { sql } from "../_db.js";

function toPublicQuestion(row: Record<string, unknown>) {
  const rawOptions = typeof row.options === "string" ? JSON.parse(row.options) : row.options;
  if (!Array.isArray(rawOptions)) return null;
  return {
    id: String(row.id),
    examCode: String(row.exam_code),
    subjectCode: String(row.subject_code),
    topic: String(row.topic),
    prompt: String(row.prompt),
    instruction: String(row.instruction || "Choose one answer."),
    options: rawOptions.map((raw) => {
      const option = raw as Record<string, unknown>;
      return { key: String(option.key), text: String(option.text) };
    }),
    sourceKind: String(row.source_kind),
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
        SELECT id, exam_code, subject_code, topic, prompt, instruction, options, source_kind
        FROM question_bank
        WHERE is_published = true AND is_archived = false
        ORDER BY exam_code, subject_code, topic, id
        LIMIT 200
      `;
      const published = rows
        .map((row) => toPublicQuestion(row as Record<string, unknown>))
        .filter((question) => question !== null);
      if (published.length) {
        res.setHeader("Cache-Control", "public, max-age=30, s-maxage=60, stale-while-revalidate=300");
        return res.status(200).json({
          dataVersion: "question-bank-v3",
          sourceKind: "curated-question-bank",
          isOfficialPastPaper: null,
          questions: published,
        });
      }
    } catch (error) {
      console.error("published question bank read failed", error);
    }
  }

  // Keep a clearly labelled demo feed available until questions are published.
  res.setHeader("Cache-Control", "public, max-age=60, s-maxage=300, stale-while-revalidate=3600");
  return res.status(200).json({
    dataVersion: "sample-mdcat-biology-v2",
    sourceKind: "original-sample",
    isOfficialPastPaper: false,
    questions: SAMPLE_QUESTIONS.map((question) => ({
      id: question.id,
      examCode: question.examCode,
      subjectCode: question.subjectCode,
      topic: question.topic,
      prompt: question.prompt,
      instruction: question.instruction,
      options: question.options,
      sourceKind: question.sourceKind,
    })),
  });
}
