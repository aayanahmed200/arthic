import type { VercelRequest, VercelResponse } from "@vercel/node";

export default function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ error: "method not allowed" });
  }

  res.setHeader("Cache-Control", "no-store");
  const authConfigured = Boolean(
    process.env.SUPABASE_URL?.trim() && process.env.SUPABASE_PUBLISHABLE_KEY?.trim()
  );

  return res.status(200).json({
    available: false,
    phase: "identity-foundation",
    identityProvider: "supabase",
    identityVerificationConfigured: authConfigured,
    accountsOpen: false,
    signInEnabled: false,
    reason: "Student accounts remain closed while sign-up, account recovery, age-appropriate consent and student privacy controls are prepared.",
  });
}
