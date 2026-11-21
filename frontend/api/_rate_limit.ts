import type { VercelRequest, VercelResponse } from "@vercel/node";
import { sql } from "./_db.js";

/**
 * Fixed-window rate limiting backed by the same Postgres database every
 * other endpoint already uses — not a new piece of infrastructure.
 * Vercel functions don't reliably share in-memory state between
 * invocations (different warm lambda instances, cold starts), so a
 * plain in-process Map can't actually rate-limit anything correctly;
 * this needs a shared store, and there's already one connected.
 *
 * Call at the top of a handler, after method/body checks but before
 * anything that costs money or writes data. If it returns false, a 429
 * has already been written to `res` and the caller should just return.
 */

let ensured: Promise<void> | null = null;

function ensureRateLimitTable(): Promise<void> {
  if (!ensured) {
    ensured = sql`
      CREATE TABLE IF NOT EXISTS rate_limits (
        key TEXT PRIMARY KEY,
        window_start TIMESTAMPTZ NOT NULL DEFAULT now(),
        count INTEGER NOT NULL DEFAULT 1
      );
    `
      .then(() => undefined)
      .catch((err) => {
        ensured = null; // let the next request retry table creation
        throw err;
      });
  }
  return ensured;
}

function getClientIp(req: VercelRequest): string {
  // x-forwarded-for can be a comma-separated chain (client, proxy, proxy…)
  // when it passes through more than one hop — the first entry is the
  // original client. Vercel's own edge network sets this reliably.
  const platformHeader = req.headers["x-vercel-forwarded-for"];
  const forwardedHeader = req.headers["x-forwarded-for"];
  const platformValue = Array.isArray(platformHeader) ? platformHeader[0] : platformHeader;
  const forwardedValue = Array.isArray(forwardedHeader) ? forwardedHeader[0] : forwardedHeader;
  const raw = platformValue || forwardedValue;
  const ip = raw?.split(",")[0]?.trim().slice(0, 64);
  return ip || "unknown";
}

export async function checkRateLimit(
  req: VercelRequest,
  res: VercelResponse,
  bucket: string,
  limit: number,
  windowSeconds: number,
  failClosed = false,
): Promise<boolean> {
  const key = `${bucket}:${getClientIp(req)}`;
  const interval = `${windowSeconds} seconds`;

  try {
    await ensureRateLimitTable();
    const { rows } = await sql`
      INSERT INTO rate_limits (key, window_start, count)
      VALUES (${key}, now(), 1)
      ON CONFLICT (key) DO UPDATE SET
        count = CASE
          WHEN rate_limits.window_start < now() - ${interval}::interval THEN 1
          ELSE rate_limits.count + 1
        END,
        window_start = CASE
          WHEN rate_limits.window_start < now() - ${interval}::interval THEN now()
          ELSE rate_limits.window_start
        END
      RETURNING count
    `;
    const count = (rows[0]?.count as number | undefined) ?? 1;
    if (count > limit) {
      res.setHeader("Retry-After", String(windowSeconds));
      res.status(429).json({ error: "too many requests — slow down a little and try again shortly." });
      return false;
    }
    return true;
  } catch (err) {
    console.error("rate limit check failed", err);
    if (failClosed) {
      res.setHeader("Retry-After", String(windowSeconds));
      res.status(503).json({ error: "request protection is temporarily unavailable. Please try again shortly." });
      return false;
    }
    // Public, non-billable demo paths may opt into fail-open behaviour.
    // Paid-provider and private-data endpoints must use failClosed=true.
    return true;
  }
}
