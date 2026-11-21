import type { VercelRequest, VercelResponse } from "@vercel/node";
import { checkRateLimit } from "../_rate_limit.js";
import { ensureTables, sql } from "../_db.js";

const PUBLIC_PATHS = new Set([
  "/",
  "/study-preview.html",
  "/pricing.html",
  "/careers.html",
  "/waitlist.html",
  "/apply.html",
  "/method.html",
  "/subjects.html",
  "/privacy.html",
  "/terms.html",
  "/cookies.html",
]);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).end();
  }
  res.setHeader("Cache-Control", "no-store");
  res.setHeader("X-Content-Type-Options", "nosniff");

  // Public metrics are non-essential: fail open if the database-backed
  // limiter is unavailable so it can never break normal page navigation.
  if (!(await checkRateLimit(req, res, "public-page-view", 60, 60))) return;
  if (!process.env.POSTGRES_URL) return res.status(204).end();

  const body = req.body && typeof req.body === "object" && !Array.isArray(req.body)
    ? req.body as Record<string, unknown> : {};
  const path = typeof body.path === "string" ? body.path : "";
  if (!PUBLIC_PATHS.has(path)) return res.status(400).json({ error: "unsupported public page." });

  try {
    await ensureTables();
    await sql`
      INSERT INTO site_page_views (view_date, path, views)
      VALUES (CURRENT_DATE, ${path}, 1)
      ON CONFLICT (view_date, path)
      DO UPDATE SET views = site_page_views.views + 1
    `;
    return res.status(204).end();
  } catch (error) {
    // Page metrics are deliberately best-effort and contain no user data.
    console.error("aggregate public page view could not be recorded", error);
    return res.status(204).end();
  }
}
