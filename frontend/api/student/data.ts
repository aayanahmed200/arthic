import { randomUUID } from "node:crypto";
import type { VercelRequest, VercelResponse } from "@vercel/node";
import { checkRateLimit } from "../_rate_limit.js";
import { sql } from "../_db.js";
import { authenticateStudent } from "./_supabase-auth.js";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "GET" && req.method !== "POST") {
    res.setHeader("Allow", "GET, POST");
    return res.status(405).json({ error: "method not allowed" });
  }
  res.setHeader("Cache-Control", "no-store");
  res.setHeader("Vary", "Authorization");
  if (!(await checkRateLimit(req, res, "student-data", 8, 300, true))) return;
  const auth = await authenticateStudent(req);
  if (!auth.ok) return res.status(auth.kind === "missing-token" || auth.kind === "invalid-token" ? 401 : 403).json({ error: auth.message });
  if (!process.env.POSTGRES_URL) return res.status(503).json({ error: "Student storage is not configured." });

  try {
    if (req.method === "POST") {
      const body = req.body && typeof req.body === "object" && !Array.isArray(req.body)
        ? req.body as Record<string, unknown> : {};
      if (body.requestType !== "delete") return res.status(400).json({ error: "Choose a supported data request." });
      const requestId = randomUUID();
      const inserted = await sql`
        INSERT INTO student_data_requests (id, student_id, request_type, status)
        SELECT ${requestId}, id, 'delete', 'requested'
        FROM student_accounts WHERE id = ${auth.identity.id} AND disabled_at IS NULL
        RETURNING id, status, created_at
      `;
      if (!inserted.rows[0]) return res.status(409).json({ error: "Your Arthic account could not be found." });
      return res.status(202).json({ request: inserted.rows[0], message: "Your request has been recorded for review. This does not delete your separate Google account." });
    }

    const account = await sql`
      SELECT id, email, display_name, created_at, privacy_notice_version, terms_version
      FROM student_accounts WHERE id = ${auth.identity.id} AND disabled_at IS NULL LIMIT 1
    `;
    if (!account.rows[0]) return res.status(404).json({ error: "Arthic account not found." });
    const sessions = await sql`
      SELECT id, exam_code, subject_code, status, question_count, answered_count,
             correct_count, started_at, completed_at
      FROM study_sessions WHERE student_id = ${auth.identity.id}
      ORDER BY started_at DESC
    `;
    const answers = await sql`
      SELECT question_id, question_version, selected_option, is_correct, answered_at, study_session_id
      FROM study_answers WHERE student_id = ${auth.identity.id}
      ORDER BY answered_at DESC
    `;
    const preferences = await sql`
      SELECT preferred_exam_code, email_updates, updated_at
      FROM student_preferences WHERE student_id = ${auth.identity.id} LIMIT 1
    `;
    return res.status(200).json({
      exportedAt: new Date().toISOString(),
      account: account.rows[0],
      preferences: preferences.rows[0] ?? { preferred_exam_code: null, email_updates: false },
      practiceSessions: sessions.rows,
      answers: answers.rows,
    });
  } catch (error) {
    console.error("student data request failed", error);
    return res.status(503).json({ error: "Your data request could not be completed right now." });
  }
}
