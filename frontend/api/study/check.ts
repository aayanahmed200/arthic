import type { VercelRequest, VercelResponse } from "@vercel/node";
import { RETIRED_NEAR_DUPLICATE_IDS, SAMPLE_QUESTIONS } from "./_sample-content.js";
import { sql } from "../_db.js";
import { checkRateLimit } from "../_rate_limit.js";
import { authenticateStudent } from "../student/_supabase-auth.js";

const QUESTION_ID_MAX = 100;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "method not allowed" });
  }
  const authorization = req.headers.authorization;
  if (!(await checkRateLimit(req, res, "study-check", 30, 60, Boolean(authorization)))) return;

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
  let saved = false;
  if (authorization) {
    const auth = await authenticateStudent(req);
    if (!auth.ok) {
      const status = auth.kind === "missing-token" || auth.kind === "invalid-token" ? 401 :
        auth.kind === "email-unverified" ? 403 : 503;
      return res.status(status).json({ error: auth.message });
    }
    const sessionId = typeof body.sessionId === "string" ? body.sessionId.trim() : "";
    if (!/^[0-9a-f-]{36}$/i.test(sessionId)) {
      return res.status(400).json({ error: "A valid active practice session is required to sync this answer." });
    }
    if (!process.env.POSTGRES_URL) {
      return res.status(503).json({ error: "Practice syncing is unavailable because student storage is not configured." });
    }
    try {
      const persisted = await sql`
        WITH active_session AS (
          SELECT id
          FROM study_sessions
          WHERE id = ${sessionId}
            AND student_id = ${auth.identity.id}
            AND status = 'active'
            AND answered_count < question_count
          FOR UPDATE
        ),
        inserted_answer AS (
          INSERT INTO study_answers (
            study_session_id, student_id, question_id, question_version,
            selected_option, is_correct, answered_at
          )
          SELECT id, ${auth.identity.id}, ${question.id}, 1,
            ${selectedOption}, ${isCorrect}, now()
          FROM active_session
          ON CONFLICT (study_session_id, question_id) DO NOTHING
          RETURNING id
        )
        UPDATE study_sessions
        SET answered_count = answered_count + 1,
            correct_count = correct_count + CASE WHEN ${isCorrect} THEN 1 ELSE 0 END,
            updated_at = now()
        WHERE id = ${sessionId}
          AND student_id = ${auth.identity.id}
          AND status = 'active'
          AND EXISTS (SELECT 1 FROM inserted_answer)
        RETURNING id
      `;
      if (!persisted.rows[0]) {
        return res.status(409).json({ error: "This session is closed, full or this question has already been answered in it." });
      }
      saved = true;
    } catch (error) {
      console.error("student answer sync failed", error);
      return res.status(503).json({ error: "Your answer was checked, but it could not be synced. Try again after checking your connection." });
    }
  }
  return res.status(200).json({
    questionId: question.id,
    selectedOption,
    correctOption: question.answer,
    isCorrect,
    explanation: question.explanation,
    takeaway: question.takeaway,
    saved,
  });
}
