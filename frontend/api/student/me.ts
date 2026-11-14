import type { VercelRequest, VercelResponse } from "@vercel/node";
import { authenticateStudent } from "./_supabase-auth.js";

/**
 * Auth verification only. This endpoint does not provision a student
 * profile, create a local session, or grant access to the closed workspace.
 */
export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ error: "method not allowed" });
  }

  res.setHeader("Cache-Control", "no-store");
  res.setHeader("Vary", "Authorization");

  const result = await authenticateStudent(req);
  if (!result.ok) {
    const status =
      result.kind === "missing-token" || result.kind === "invalid-token" ? 401 :
      result.kind === "email-unverified" ? 403 : 503;
    return res.status(status).json({
      authenticated: false,
      code: result.kind,
      error: result.message,
    });
  }

  return res.status(200).json({
    authenticated: true,
    emailVerified: true,
    identity: {
      id: result.identity.id,
      email: result.identity.email,
      displayName: result.identity.displayName,
    },
    workspace: {
      available: false,
      reason: "Student workspace onboarding is not open yet.",
    },
  });
}
