import type { VercelRequest, VercelResponse } from "@vercel/node";
import { checkRateLimit } from "../_rate_limit.js";
import { sql } from "../_db.js";
import { authenticateStudent } from "./_supabase-auth.js";

const TERMS_VERSION = "2026-11-21";
const PRIVACY_VERSION = "2026-11-21";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "GET" && req.method !== "POST") {
    res.setHeader("Allow", "GET, POST");
    return res.status(405).json({ error: "method not allowed" });
  }
  res.setHeader("Cache-Control", "no-store");
  res.setHeader("Vary", "Authorization");
  if (!(await checkRateLimit(req, res, "student-account", 12, 300, true))) return;
  const auth = await authenticateStudent(req);
  if (!auth.ok) {
    const status = auth.kind === "missing-token" || auth.kind === "invalid-token" ? 401 :
      auth.kind === "email-unverified" ? 403 : 503;
    return res.status(status).json({ error: auth.message, code: auth.kind });
  }
  if (!process.env.POSTGRES_URL) return res.status(503).json({ error: "Student storage is not configured." });

  try {
    if (req.method === "GET") {
      const { rows } = await sql`
        SELECT id, email, display_name, created_at, privacy_notice_version, terms_version, disabled_at
        FROM student_accounts WHERE id = ${auth.identity.id} LIMIT 1
      `;
      if (!rows[0]) return res.status(404).json({ account: null, needsSetup: true });
      if (rows[0].disabled_at) return res.status(403).json({ error: "This Arthic account is disabled." });
      return res.status(200).json({ account: rows[0] });
    }

    const body = req.body && typeof req.body === "object" && !Array.isArray(req.body)
      ? req.body as Record<string, unknown> : {};
    if (body.acceptTerms !== true || body.acceptPrivacy !== true || body.ageDeclaration !== true) {
      return res.status(400).json({ error: "Review and accept the current policies and age requirements before creating an account." });
    }
    if (body.termsVersion !== TERMS_VERSION || body.privacyVersion !== PRIVACY_VERSION) {
      return res.status(409).json({ error: "The policies have been updated. Refresh this page and review the current versions." });
    }

    const displayName = auth.identity.displayName.trim().slice(0, 120) || auth.identity.email.split("@")[0].slice(0, 120);
    const { rows } = await sql`
      INSERT INTO student_accounts (
        id, email, display_name, auth_provider, provider_subject,
        email_verified_at, privacy_notice_version, terms_version
      )
      VALUES (
        ${auth.identity.id}, ${auth.identity.email}, ${displayName}, 'supabase',
        ${auth.identity.id}, ${auth.identity.emailVerifiedAt}, ${PRIVACY_VERSION}, ${TERMS_VERSION}
      )
      ON CONFLICT (id) DO UPDATE SET
        email = EXCLUDED.email,
        display_name = EXCLUDED.display_name,
        email_verified_at = EXCLUDED.email_verified_at,
        privacy_notice_version = EXCLUDED.privacy_notice_version,
        terms_version = EXCLUDED.terms_version
      WHERE student_accounts.disabled_at IS NULL
      RETURNING id, email, display_name, created_at, privacy_notice_version, terms_version
    `;
    if (!rows[0]) return res.status(403).json({ error: "This Arthic account is disabled or cannot be updated." });
    return res.status(200).json({ account: rows[0], created: true });
  } catch (error) {
    const message = String((error as Error)?.message ?? "");
    if (message.toLowerCase().includes("student_accounts_email_key") || message.toLowerCase().includes("duplicate key")) {
      return res.status(409).json({ error: "An Arthic account already exists for this email. Contact support to resolve it." });
    }
    console.error("student account request failed", error);
    return res.status(503).json({ error: "Student account storage is unavailable. Ask an administrator to initialize the workspace database." });
  }
}
