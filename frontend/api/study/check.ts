import type { VercelRequest, VercelResponse } from "@vercel/node";
import { RETIRED_NEAR_DUPLICATE_IDS, SAMPLE_QUESTIONS } from "./_sample-content.js";
import { sql } from "../_db.js";
import { checkRateLimit } from "../_rate_limit.js";

const QUESTION_ID_MAX = 100;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "method not allowed" });
  }
  if (!(await checkRateLimit(req, res, "study-check", 30, 60))) return;

  res.setHeader("Cache-Control", "no-store");
  res.setHeader("X-Content-Type-Options", "nosniff");
  const body = req.body && typeof req.body === "object" && !Array.isArray(req.body)
    ? req.body as Record<string, unknown> : {};
  const questionId = typeof body.questionId === "string" ? body.questionId.trim() : "";
  const selectedOption = typeof body.selectedOption === "string" ? body.selectedOption.trim().toUpperCase() : "";
  if (!questionId || questionId.length > QUESTION_ID_MAX || !/^[A-F]$/.test(selectedOption)) {
    return res.status(400).json({ error: "provide a question ID and one answer option (A–F)." });
  }

  if (RETIRED_NEAR_DUPLICATE_IDS.has(questionId)) {
    return res.status(404).json({ error: "that question is no longer available." });
  }

  let question: {
    id: string;
    answer: string;
    explanation: string;
    takeaway: string;
    options: Array<{ key: string; text: string }>;
  } | null = null;
  let bankUnavailable = false;

  if (process.env.POSTGRES_URL) {
    try {
      const { rows } = await sql`
        SELECT id, answer_key, explanation, takeaway, options
        FROM question_bank
        WHERE id = ${questionId} AND is_published = true AND is_archived = false
          AND exam_code IN ('LCAT', 'NET', 'CSS', 'MDCAT')
        LIMIT 1
      `;
      if (rows[0]) {
        const row = rows[0] as Record<string, unknown>;
        const rawOptions = typeof row.options === "string" ? JSON.parse(row.options) : row.options;
        if (!Array.isArray(rawOptions)) return res.status(503).json({ error: "question data is unavailable." });
        question = {
          id: String(row.id),
          answer: String(row.answer_key),
          explanation: String(row.explanation),
          takeaway: String(row.takeaway),
          options: rawOptions.map((raw) => {
            const option = raw as Record<string, unknown>;
            return { key: String(option.key), text: String(option.text) };
          }),
        };
      }
    } catch (error) {
      console.error("published question check failed", error);
      bankUnavailable = true;
    }
  }

  if (!question) {
    const sample = SAMPLE_QUESTIONS.find((item) => item.id === questionId);
    if (sample) question = sample;
  }
  if (!question) {
    return res.status(bankUnavailable ? 503 : 404).json({
      error: bankUnavailable ? "answer checking is temporarily unavailable." : "that question is not available.",
    });
  }
  if (!question.options.some((option) => option.key === selectedOption)) {
    return res.status(400).json({ error: "that answer option is not available for this question." });
  }

  const isCorrect = selectedOption === question.answer;
  return res.status(200).json({
    questionId: question.id,
    selectedOption,
    correctOption: question.answer,
    isCorrect,
    explanation: question.explanation,
    takeaway: question.takeaway,
  });
}
