import type { VercelRequest, VercelResponse } from "@vercel/node";
import { sql, ensureTables } from "./_db";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_ROLE = 80;
const MAX_NAME = 120;
const MAX_LINK = 300;
const MAX_MESSAGE = 4000;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "method not allowed" });
  }

  if (!process.env.POSTGRES_URL) {
    return res
      .status(503)
      .json({ error: "applications aren't connected to storage yet — check back soon." });
  }

  const body = (req.body ?? {}) as Record<string, unknown>;
  const role = String(body.role ?? "General").trim().slice(0, MAX_ROLE);
  const name = String(body.name ?? "").trim().slice(0, MAX_NAME);
  const email = String(body.email ?? "").trim().toLowerCase();
  const link = String(body.link ?? "").trim().slice(0, MAX_LINK);
  const message = String(body.message ?? "").trim().slice(0, MAX_MESSAGE);

  if (!name) {
    return res.status(400).json({ error: "please enter your name." });
  }
  if (!email || email.length > 254 || !EMAIL_RE.test(email)) {
    return res.status(400).json({ error: "please provide a valid email address." });
  }

  try {
    await ensureTables();
    await sql`
      INSERT INTO applications (role, name, email, link, message)
      VALUES (${role}, ${name}, ${email}, ${link || null}, ${message || null})
    `;
    return res.status(201).json({ ok: true });
  } catch (err) {
    console.error("application insert failed", err);
    return res.status(500).json({ error: "something went wrong — try again shortly." });
  }
}
