import type { VercelRequest, VercelResponse } from "@vercel/node";
import { checkRateLimit } from "../_rate_limit.js";
import { ensureTables, sql } from "../_db.js";
import { requireGoogleAdmin } from "./_google-admin.js";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ error: "method not allowed" });
  }
  res.setHeader("Cache-Control", "no-store");
  res.setHeader("Vary", "Authorization");
  if (!(await checkRateLimit(req, res, "google-admin-stats", 30, 60, true))) return;
  if (!(await requireGoogleAdmin(req, res))) return;
  if (!process.env.POSTGRES_URL) return res.status(503).json({ error: "Postgres is not configured." });

  try {
    await ensureTables();
    const totalsResult = await sql`
      SELECT
        (SELECT COUNT(*) FROM student_accounts WHERE disabled_at IS NULL)::int AS users,
        (SELECT COUNT(*) FROM student_accounts WHERE disabled_at IS NULL AND created_at >= now() - interval '7 days')::int AS new_users_7d,
        (SELECT COUNT(*) FROM study_sessions)::int AS sessions,
        (SELECT COUNT(*) FROM study_answers)::int AS answers,
        (SELECT COUNT(*) FROM study_answers WHERE is_correct = true)::int AS correct,
        (SELECT COUNT(*) FROM question_bank WHERE is_published = true AND is_archived = false)::int AS published_questions,
        (SELECT COUNT(*) FROM subscribers)::int AS waitlist,
        (SELECT COUNT(*) FROM applications)::int AS applications,
        (SELECT COUNT(*) FROM student_data_requests WHERE status IN ('requested', 'in_progress'))::int AS pending_data_requests
    `;
    const row = totalsResult.rows[0] as Record<string, unknown>;
    const answers = Number(row.answers ?? 0);
    const correct = Number(row.correct ?? 0);
    const examRows = await sql`
      SELECT exam_code, COUNT(*)::int AS sessions,
        COALESCE(SUM(answered_count), 0)::int AS answered,
        COALESCE(SUM(correct_count), 0)::int AS correct
      FROM study_sessions GROUP BY exam_code ORDER BY exam_code
    `;
    return res.status(200).json({
      totals: {
        users: Number(row.users ?? 0),
        newUsers7d: Number(row.new_users_7d ?? 0),
        sessions: Number(row.sessions ?? 0),
        answers,
        accuracy: answers ? Math.round((correct / answers) * 100) : null,
        publishedQuestions: Number(row.published_questions ?? 0),
        waitlist: Number(row.waitlist ?? 0),
        applications: Number(row.applications ?? 0),
        pendingDataRequests: Number(row.pending_data_requests ?? 0),
      },
      examActivity: examRows.rows.map((item) => ({
        examCode: String(item.exam_code),
        sessions: Number(item.sessions ?? 0),
        answered: Number(item.answered ?? 0),
        correct: Number(item.correct ?? 0),
      })),
      privacyNote: "Aggregate account and practice statistics only; no anonymous page-view tracking is collected by this endpoint.",
    });
  } catch (error) {
    console.error("admin statistics request failed", error);
    return res.status(503).json({ error: "Admin statistics are unavailable. Run the protected student-schema setup once and check the database connection." });
  }
}
