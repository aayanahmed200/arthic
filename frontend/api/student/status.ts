import type { VercelRequest, VercelResponse } from "@vercel/node";

export default function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ error: "method not allowed" });
  }

  res.setHeader("Cache-Control", "no-store");
  return res.status(200).json({
    available: false,
    phase: "foundation",
    accountsOpen: false,
    reason: "Student accounts are not open yet. Sign-in, email verification, account recovery and student privacy controls are still being prepared.",
  });
}
