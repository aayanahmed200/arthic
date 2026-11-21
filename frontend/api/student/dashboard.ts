import type { VercelRequest, VercelResponse } from "@vercel/node";
import { checkRateLimit } from "../_rate_limit.js";
import { sql } from "../_db.js";
import { authenticateStudent } from "./_supabase-auth.js";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ error: "method not allowed" });
  }
  res.setHeader("Cache-Control", "no-store");
  res.setHeader("Vary", "Authorization");
  if (!(await checkRateLimit(req, res, "student-dashboard", 60, 60, true))) return;
  const auth = await authenticateStudent(req);
  if (!auth.ok) return res.status(auth.kind === "missing-token" || auth.kind === "invalid-token" ? 401 : 403).json({ error: auth.message });
  if (!process.env.POSTGRES_URL) return res.status(503).json({ error: "Student storage is not configured." });

  try {
    const account = await sql`SELECT id FROM student_accounts WHERE id = ${auth.identity.id} AND disabled_at IS NULL LIMIT 1`;
    if (!account.rows[0]) return res.status(409).json({ error: "Complete student account setup before opening your dashboard." });

    const totals = await sql`
      SELECT COUNT(*)::int AS sessions,
        COALESCE(SUM(answered_count), 0)::int AS answered,
        COALESCE(SUM(correct_count), 0)::int AS correct
      FROM study_sessions WHERE student_id = ${auth.identity.id}
    `;
    const recent = await sql`
      SELECT exam_code, subject_code, status, question_count, answered_count, correct_count, started_at
      FROM study_sessions
      WHERE student_id = ${auth.identity.id}
      ORDER BY started_at DESC LIMIT 12
    `;
    const row = totals.rows[0] as Record<string, unknown>;
    const answered = Number(row.answered ?? 0);
    const correct = Number(row.correct ?? 0);
    return res.status(200).json({
      totals: {
        sessions: Number(row.sessions ?? 0),
        answered,
        correct,
        accuracy: answered ? Math.round((correct / answered) * 100) : null,
      },
      recentSessions: recent.rows.map((item) => ({
        examCode: String(item.exam_code),
        subjectCode: String(item.subject_code),
        status: String(item.status),
        questionCount: Number(item.question_count),
        answered: Number(item.answered_count),
        correct: Number(item.correct_count),
        startedAt: item.started_at instanceof Date ? item.started_at.toISOString() : String(item.started_at),
      })),
    });
  } catch (error) {
    console.error("student dashboard read failed", error);
    return res.status(503).json({ error: "Your practice history is temporarily unavailable. Check that the student database has been initialized." });
  }
}
