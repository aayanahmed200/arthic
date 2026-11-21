import { randomUUID } from "node:crypto";
import type { VercelRequest, VercelResponse } from "@vercel/node";
import { checkRateLimit } from "../_rate_limit.js";
import { sql } from "../_db.js";
import { authenticateStudent } from "./_supabase-auth.js";

const EXAMS = new Set(["LCAT", "NET", "CSS", "MDCAT"]);
const SUBJECT_RE = /^[A-Z0-9_-]{2,32}$/;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST" && req.method !== "PATCH") {
    res.setHeader("Allow", "POST, PATCH");
    return res.status(405).json({ error: "method not allowed" });
  }
  res.setHeader("Cache-Control", "no-store");
  res.setHeader("Vary", "Authorization");
  if (!(await checkRateLimit(req, res, "student-sessions", 30, 60, true))) return;
  const auth = await authenticateStudent(req);
  if (!auth.ok) return res.status(auth.kind === "missing-token" || auth.kind === "invalid-token" ? 401 : 403).json({ error: auth.message });
  if (!process.env.POSTGRES_URL) return res.status(503).json({ error: "Student storage is not configured." });

  const body = req.body && typeof req.body === "object" && !Array.isArray(req.body)
    ? req.body as Record<string, unknown> : {};
  try {
    if (req.method === "POST") {
      const examCode = typeof body.examCode === "string" ? body.examCode.trim().toUpperCase() : "";
      const subjectCode = typeof body.subjectCode === "string" ? body.subjectCode.trim().toUpperCase() : "ALL";
      const questionCount = Number(body.questionCount);
      if (!EXAMS.has(examCode) || !SUBJECT_RE.test(subjectCode) ||
          !Number.isInteger(questionCount) || questionCount < 1 || questionCount > 50) {
        return res.status(400).json({ error: "Choose a supported exam, subject and valid question count." });
      }
      const account = await sql`SELECT id FROM student_accounts WHERE id = ${auth.identity.id} AND disabled_at IS NULL LIMIT 1`;
      if (!account.rows[0]) return res.status(409).json({ error: "Complete student account setup first." });
      const id = randomUUID();
      await sql`
        INSERT INTO study_sessions (id, student_id, exam_code, subject_code, question_count, status)
        VALUES (${id}, ${auth.identity.id}, ${examCode}, ${subjectCode}, ${questionCount}, 'active')
      `;
      return res.status(201).json({ sessionId: id });
    }

    const sessionId = typeof body.sessionId === "string" ? body.sessionId.trim() : "";
    const status = body.status === "completed" || body.status === "abandoned" ? body.status : "";
    if (!/^[0-9a-f-]{36}$/i.test(sessionId) || !status) {
      return res.status(400).json({ error: "Provide a valid session and final status." });
    }
    const updated = await sql`
      UPDATE study_sessions
      SET status = ${status},
          completed_at = CASE WHEN ${status} = 'completed' THEN now() ELSE completed_at END,
          updated_at = now()
      WHERE id = ${sessionId} AND student_id = ${auth.identity.id} AND status = 'active'
      RETURNING id, status, answered_count, correct_count
    `;
    if (!updated.rows[0]) return res.status(404).json({ error: "That active practice session was not found." });
    return res.status(200).json({ session: updated.rows[0] });
  } catch (error) {
    console.error("student practice session request failed", error);
    return res.status(503).json({ error: "Practice session storage is temporarily unavailable." });
  }
}
