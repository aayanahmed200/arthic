import type { VercelRequest, VercelResponse } from "@vercel/node";
import { sql, ensureTables } from "./_db.js";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[0-9+()\-.\s]{7,20}$/;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "method not allowed" });
  }

  if (!process.env.POSTGRES_URL) {
    return res
      .status(503)
      .json({ error: "pre-orders aren't connected to storage yet — check back soon." });
  }

  const body = (req.body ?? {}) as Record<string, unknown>;

  // honeypot — real visitors never fill this hidden field; bots posting
  // straight to the API often do. Pretend success, skip the insert.
  if (String(body.website ?? "").trim()) {
    return res.status(201).json({ ok: true });
  }

  const email = String(body.email ?? "").trim().toLowerCase();
  const phone = String(body.phone ?? "").trim();

  if (!email || email.length > 254 || !EMAIL_RE.test(email)) {
    return res.status(400).json({ error: "please provide a valid email address." });
  }
  if (!phone || phone.length > 32 || !PHONE_RE.test(phone)) {
    return res.status(400).json({ error: "please provide a valid phone number." });
  }

  try {
    await ensureTables();
    try {
      await sql`INSERT INTO preorders (email, phone) VALUES (${email}, ${phone})`;
    } catch (err) {
      // duplicate email — respond as success either way, don't leak state
      if (!String((err as Error)?.message).toLowerCase().includes("duplicate")) throw err;
    }
    return res.status(201).json({ ok: true });
  } catch (err) {
    console.error("preorder insert failed", err);
    return res.status(500).json({ error: "something went wrong — try again shortly." });
  }
}
