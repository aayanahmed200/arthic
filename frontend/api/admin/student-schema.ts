import type { VercelRequest, VercelResponse } from "@vercel/node";
import { requireAdmin } from "../_auth.js";
import { ensureStudentWorkspaceSchema } from "../_student-schema.js";
import { checkRateLimit } from "../_rate_limit.js";
import { SAMPLE_QUESTIONS } from "../study/_sample-content.js";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "method not allowed" });
  }

  if (!(await checkRateLimit(req, res, "admin-schema-setup", 5, 300, true))) return;
  if (!requireAdmin(req, res)) return;

  if (!process.env.POSTGRES_URL) {
    return res.status(503).json({ error: "Postgres is not configured." });
  }

  try {
    await ensureStudentWorkspaceSchema();
    return res.status(200).json({
      ok: true,
      schemaVersion: 5,
      seededDraftQuestions: SAMPLE_QUESTIONS.length,
      message: "Student workspace and question-bank tables are ready. Sample questions were seeded as drafts; student account access remains closed.",
    });
  } catch (error) {
    console.error("student workspace schema setup failed", error);
    return res.status(500).json({ error: "Could not prepare the student workspace schema." });
  }
}
