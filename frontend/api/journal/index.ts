import type { VercelRequest, VercelResponse } from "@vercel/node";
import { sql, ensureTables } from "../_db";
import { requireAdmin } from "../_auth";
import { slugify } from "../_slugify";

const MAX_TITLE = 200;
const MAX_EXCERPT = 400;
const MAX_BODY = 20000;

// GET  /api/journal — public, list view (no body, newest first)
// POST /api/journal — admin only, create
export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (!process.env.POSTGRES_URL) {
    // Matches the rest of the site's "degrade honestly" behavior — the
    // frontend already falls back to static journal entries when this
    // isn't configured, so a 503 here is expected, not an outage.
    return res.status(503).json({ error: "journal isn't connected to storage yet — check back soon." });
  }

  await ensureTables();

  if (req.method === "GET") {
    const { rows } = await sql`
      SELECT slug, title, excerpt, published_at
      FROM journal_entries
      ORDER BY published_at DESC
    `;
    return res.status(200).json(rows);
  }

  if (req.method === "POST") {
    if (!requireAdmin(req, res)) return;

    const body = (req.body ?? {}) as Record<string, unknown>;
    const title = String(body.title ?? "").trim();
    const excerpt = String(body.excerpt ?? "").trim();
    const entryBody = String(body.body ?? "");
    const publishedAt = String(body.published_at ?? "");

    if (!title || !excerpt || !publishedAt) {
      return res.status(400).json({ error: "title, excerpt, and published_at are required" });
    }
    if (title.length > MAX_TITLE || excerpt.length > MAX_EXCERPT || entryBody.length > MAX_BODY) {
      return res.status(400).json({ error: "title, excerpt, or body is too long" });
    }

    const slug = slugify(title);
    if (!slug) {
      return res.status(400).json({ error: "title produced an empty slug" });
    }

    try {
      const { rows } = await sql`
        INSERT INTO journal_entries (slug, title, excerpt, body, published_at)
        VALUES (${slug}, ${title}, ${excerpt}, ${entryBody}, ${publishedAt})
        RETURNING *
      `;
      return res.status(201).json(rows[0]);
    } catch (err) {
      if (String((err as Error)?.message).toLowerCase().includes("duplicate")) {
        return res.status(409).json({ error: "an entry with that title already exists" });
      }
      console.error("journal insert failed", err);
      return res.status(500).json({ error: "something went wrong" });
    }
  }

  res.setHeader("Allow", "GET, POST");
  return res.status(405).json({ error: "method not allowed" });
}
