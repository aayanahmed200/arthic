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
  if (!(await checkRateLimit(req, res, "student-me", 40, 60, true))) return;

  const result = await authenticateStudent(req);
  if (!result.ok) {
    const status = result.kind === "missing-token" || result.kind === "invalid-token" ? 401 :
      result.kind === "email-unverified" ? 403 : 503;
    return res.status(status).json({
      authenticated: false,
      code: result.kind,
      error: result.message,
    });
  }
  if (!process.env.POSTGRES_URL) {
    return res.status(503).json({ authenticated: true, error: "Student storage is not configured." });
  }

  try {
    const { rows } = await sql`
      SELECT id, disabled_at, privacy_notice_version, terms_version
      FROM student_accounts WHERE id = ${result.identity.id} LIMIT 1
    `;
    if (rows[0]?.disabled_at) {
      return res.status(403).json({ authenticated: true, error: "This Arthic account is disabled." });
    }
    const provisioned = Boolean(rows[0]);
    return res.status(200).json({
      authenticated: true,
      emailVerified: true,
      identity: {
        id: result.identity.id,
        email: result.identity.email,
        displayName: result.identity.displayName,
      },
      workspace: {
        available: provisioned,
        needsSetup: !provisioned,
        termsVersion: rows[0]?.terms_version ?? null,
        privacyVersion: rows[0]?.privacy_notice_version ?? null,
      },
    });
  } catch (error) {
    console.error("student identity and account lookup failed", error);
    return res.status(503).json({ authenticated: true, error: "Student account storage is temporarily unavailable." });
  }
}
