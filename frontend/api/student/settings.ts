import type { VercelRequest, VercelResponse } from "@vercel/node";
import { checkRateLimit } from "../_rate_limit.js";
import { sql } from "../_db.js";
import { authenticateStudent } from "./_supabase-auth.js";

const EXAMS = new Set(["LCAT", "NET", "CSS", "MDCAT"]);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "GET" && req.method !== "PUT") {
    res.setHeader("Allow", "GET, PUT");
    return res.status(405).json({ error: "method not allowed" });
  }
  res.setHeader("Cache-Control", "no-store");
  res.setHeader("Vary", "Authorization");
  if (!(await checkRateLimit(req, res, "student-settings", 30, 60, true))) return;
  const auth = await authenticateStudent(req);
  if (!auth.ok) return res.status(auth.kind === "missing-token" || auth.kind === "invalid-token" ? 401 : 403).json({ error: auth.message });
  if (!process.env.POSTGRES_URL) return res.status(503).json({ error: "Student storage is not configured." });

  try {
    const account = await sql`SELECT id FROM student_accounts WHERE id = ${auth.identity.id} AND disabled_at IS NULL LIMIT 1`;
    if (!account.rows[0]) return res.status(409).json({ error: "Complete student account setup first." });

    if (req.method === "GET") {
      const { rows } = await sql`
        SELECT preferred_exam_code, email_updates
        FROM student_preferences WHERE student_id = ${auth.identity.id} LIMIT 1
      `;
      const row = rows[0] as Record<string, unknown> | undefined;
      return res.status(200).json({
        preferences: {
          preferredExam: typeof row?.preferred_exam_code === "string" ? row.preferred_exam_code : "",
          emailUpdates: row?.email_updates === true,
        },
      });
    }

    const body = req.body && typeof req.body === "object" && !Array.isArray(req.body)
      ? req.body as Record<string, unknown> : {};
    const preferred = body.preferredExam === "" || body.preferredExam === null ? null :
      typeof body.preferredExam === "string" ? body.preferredExam.toUpperCase() : "__INVALID__";
    if (preferred !== null && (typeof preferred !== "string" || !EXAMS.has(preferred))) {
      return res.status(400).json({ error: "Choose a valid exam preference." });
    }
    if (typeof body.emailUpdates !== "boolean") {
      return res.status(400).json({ error: "Choose whether to receive optional email updates." });
    }
    await sql`
      INSERT INTO student_preferences (student_id, preferred_exam_code, email_updates, updated_at)
      VALUES (${auth.identity.id}, ${preferred}, ${body.emailUpdates}, now())
      ON CONFLICT (student_id) DO UPDATE SET
        preferred_exam_code = EXCLUDED.preferred_exam_code,
        email_updates = EXCLUDED.email_updates,
        updated_at = now()
    `;
    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error("student settings request failed", error);
    return res.status(503).json({ error: "Settings storage is unavailable. Initialize the student workspace schema first." });
  }
}
