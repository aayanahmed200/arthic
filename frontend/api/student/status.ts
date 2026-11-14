import type { VercelRequest, VercelResponse } from "@vercel/node";
import { isSupabaseAuthConfigured } from "./_supabase-auth.js";

export default function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ error: "method not allowed" });
  }

  res.setHeader("Cache-Control", "no-store");
  return res.status(200).json({
    available: false,
    phase: "identity-foundation",
    identityProvider: "supabase",
    identityVerificationConfigured: isSupabaseAuthConfigured(),
    accountsOpen: false,
    signInEnabled: false,
    reason: "Student accounts remain closed while sign-up, account recovery, age-appropriate consent and student privacy controls are prepared.",
  });
}
