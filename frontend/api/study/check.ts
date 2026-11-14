import type { VercelRequest, VercelResponse } from "@vercel/node";
import { SAMPLE_QUESTIONS } from "./_sample-content.js";
import { checkRateLimit } from "../_rate_limit.js";

const QUESTION_ID_MAX = 100;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "method not allowed" });
  }

  // The demo uses a shared Postgres limiter when it is configured.
  // The question set is original public demonstration material, not a
  // protected live exam bank or a student-record endpoint.
  if (!(await checkRateLimit(req, res, "study-check", 30, 60))) return;

  res.setHeader("Cache-Control", "no-store");
  res.setHeader("X-Content-Type-Options", "nosniff");

  const body = req.body && typeof req.body === "object" && !Array.isArray(req.body)
    ? req.body as Record<string, unknown>
    : {};
  const questionId = typeof body.questionId === "string" ? body.questionId.trim() : "";
  const selectedOption = typeof body.selectedOption === "string"
    ? body.selectedOption.trim().toUpperCase()
    : "";

  if (!questionId || questionId.length > QUESTION_ID_MAX || !/^[A-D]$/.test(selectedOption)) {
    return res.status(400).json({ error: "provide a question ID and one answer option (A–D)." });
  }

  const question = SAMPLE_QUESTIONS.find((item) => item.id === questionId);
  if (!question) {
    return res.status(404).json({ error: "that question is not available." });
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
