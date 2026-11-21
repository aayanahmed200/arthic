import type { VercelRequest, VercelResponse } from "@vercel/node";
import { authenticateStudent } from "../student/_supabase-auth.js";

export async function requireGoogleAdmin(req: VercelRequest, res: VercelResponse): Promise<boolean> {
  const auth = await authenticateStudent(req);
  if (!auth.ok) {
    const status = auth.kind === "missing-token" || auth.kind === "invalid-token" ? 401 :
      auth.kind === "email-unverified" ? 403 : 503;
    res.status(status).json({ error: auth.message });
    return false;
  }
  const allowlist = (process.env.ADMIN_EMAILS ?? "")
    .split(",")
    .map((email) => email.trim().toLowerCase())
    .filter(Boolean);
  if (!allowlist.length) {
    res.status(503).json({ error: "Admin Google access is not configured. Add ADMIN_EMAILS in the server environment." });
    return false;
  }
  if (!allowlist.includes(auth.identity.email.toLowerCase())) {
    res.status(403).json({ error: "This Google account is not authorised for Arthic administration." });
    return false;
  }
  return true;
}
