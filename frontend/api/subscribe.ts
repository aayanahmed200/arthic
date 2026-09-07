import type { VercelRequest, VercelResponse } from "@vercel/node";
import { sql, ensureTables } from "./_db";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// POST /api/subscribe — public
export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "method not allowed" });
  }

  if (!process.env.POSTGRES_URL) {
    return res.status(503).json({ error: "signups aren't connected to storage yet — check back soon." });
  }

  const body = (req.body ?? {}) as Record<string, unknown>;
  const email = String(body.email ?? "").trim().toLowerCase();

  if (!email || email.length > 254 || !EMAIL_RE.test(email)) {
    return res.status(400).json({ error: "please provide a valid email address" });
  }

  try {
    await ensureTables();
    await sql`INSERT INTO subscribers (email) VALUES (${email})`;
  } catch (err) {
    // already on the list — respond as success either way, don't leak state
    if (!String((err as Error)?.message).toLowerCase().includes("duplicate")) {
      console.error("subscribe insert failed", err);
      return res.status(500).json({ error: "something went wrong" });
    }
  }

  return res.status(201).json({ ok: true });
}
