import type { VercelRequest, VercelResponse } from "@vercel/node";
import { checkRateLimit } from "../_rate_limit.js";
import { ensureStudentWorkspaceSchema } from "../_student-schema.js";
import { SAMPLE_QUESTIONS } from "../study/_sample-content.js";
import { requireGoogleAdmin } from "./_google-admin.js";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "method not allowed" });
  }
  res.setHeader("Cache-Control", "no-store");
  res.setHeader("Vary", "Authorization");
  if (!(await checkRateLimit(req, res, "google-admin-schema", 3, 300, true))) return;
  if (!(await requireGoogleAdmin(req, res))) return;
  if (!process.env.POSTGRES_URL) return res.status(503).json({ error: "Postgres is not configured." });

  try {
    await ensureStudentWorkspaceSchema();
    return res.status(200).json({
      ok: true,
      schemaVersion: 5,
      seededDraftQuestions: SAMPLE_QUESTIONS.length,
      message: "Student accounts, practice history, preferences and question-bank tables are ready. Sample questions are drafts and are not published automatically.",
    });
  } catch (error) {
    console.error("Google-admin student schema setup failed", error);
    return res.status(503).json({ error: "The student database setup could not be completed." });
  }
}
