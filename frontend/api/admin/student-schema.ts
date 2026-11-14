import type { VercelRequest, VercelResponse } from "@vercel/node";
import { requireAdmin } from "../_auth.js";
import { ensureStudentWorkspaceSchema } from "../_student-schema.js";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "method not allowed" });
  }

  if (!requireAdmin(req, res)) return;

  if (!process.env.POSTGRES_URL) {
    return res.status(503).json({ error: "Postgres is not configured." });
  }

  try {
    await ensureStudentWorkspaceSchema();
    return res.status(200).json({
      ok: true,
      schemaVersion: 1,
      message: "Student workspace tables are ready. Student account access remains closed.",
    });
  } catch (error) {
    console.error("student workspace schema setup failed", error);
    return res.status(500).json({ error: "Could not prepare the student workspace schema." });
  }
}
