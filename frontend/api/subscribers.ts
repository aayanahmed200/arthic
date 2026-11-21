import type { VercelRequest, VercelResponse } from "@vercel/node";
import { sql, ensureTables } from "./_db.js";
import { requireAdmin } from "./_auth.js";
import { checkRateLimit } from "./_rate_limit.js";

// GET /api/subscribers — admin only
export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ error: "method not allowed" });
  }

  res.setHeader("Cache-Control", "no-store");
  if (!process.env.POSTGRES_URL) {
    return res.status(503).json({ error: "signups aren't connected to storage yet — check back soon." });
  }
  if (!(await checkRateLimit(req, res, "private-subscriber-list", 8, 60, true))) return;
  if (!requireAdmin(req, res)) return;

  await ensureTables();
  const { rows } = await sql`SELECT email, created_at FROM subscribers ORDER BY created_at DESC`;
  return res.status(200).json(rows);
}
