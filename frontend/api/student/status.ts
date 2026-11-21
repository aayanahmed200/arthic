import type { VercelRequest, VercelResponse } from "@vercel/node";
import { isSupabaseAuthConfigured } from "./_supabase-auth.js";

export default function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ error: "method not allowed" });
  }

  res.setHeader("Cache-Control", "no-store");
  const accountsOpen = process.env.STUDENT_ACCOUNTS_ENABLED === "true" &&
    isSupabaseAuthConfigured() && Boolean(process.env.POSTGRES_URL);
  return res.status(200).json({
    available: accountsOpen,
    phase: "identity-foundation",
    identityProvider: "supabase",
    identityVerificationConfigured: isSupabaseAuthConfigured(),
    accountsOpen,
    signInEnabled: accountsOpen,
    reason: accountsOpen ? null : "Student accounts are disabled by default. Enable them only after database setup, Google provider configuration, age-appropriate consent and legal review are complete.",
  });
}
