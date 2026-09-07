import type { VercelRequest, VercelResponse } from "@vercel/node";
import { sql, ensureTables } from "../_db";
import { requireAdmin } from "../_auth";

const MAX_TITLE = 200;
const MAX_EXCERPT = 400;
const MAX_BODY = 20000;

// GET    /api/journal/:slug — public, single entry with full body
// PUT    /api/journal/:slug — admin only, update
// DELETE /api/journal/:slug — admin only
export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (!process.env.POSTGRES_URL) {
    return res.status(503).json({ error: "journal isn't connected to storage yet — check back soon." });
  }

  const slug = String(req.query.slug ?? "");
  await ensureTables();

  if (req.method === "GET") {
    const { rows } = await sql`SELECT * FROM journal_entries WHERE slug = ${slug}`;
    if (rows.length === 0) return res.status(404).json({ error: "not found" });
    return res.status(200).json(rows[0]);
  }

  if (req.method === "PUT") {
    if (!requireAdmin(req, res)) return;

    const { rows: existingRows } = await sql`SELECT * FROM journal_entries WHERE slug = ${slug}`;
    const existing = existingRows[0];
    if (!existing) return res.status(404).json({ error: "not found" });

    const body = (req.body ?? {}) as Record<string, unknown>;
    const title = body.title != null ? String(body.title) : undefined;
    const excerpt = body.excerpt != null ? String(body.excerpt) : undefined;
    const entryBody = body.body != null ? String(body.body) : undefined;
    const publishedAt = body.published_at != null ? String(body.published_at) : undefined;

    if (
      (title && title.length > MAX_TITLE) ||
      (excerpt && excerpt.length > MAX_EXCERPT) ||
      (entryBody && entryBody.length > MAX_BODY)
    ) {
      return res.status(400).json({ error: "title, excerpt, or body is too long" });
    }

    const { rows } = await sql`
      UPDATE journal_entries
      SET title = ${title ?? existing.title},
          excerpt = ${excerpt ?? existing.excerpt},
          body = ${entryBody ?? existing.body},
          published_at = ${publishedAt ?? existing.published_at}
      WHERE slug = ${slug}
      RETURNING *
    `;
    return res.status(200).json(rows[0]);
  }

  if (req.method === "DELETE") {
    if (!requireAdmin(req, res)) return;

    const { rowCount } = await sql`DELETE FROM journal_entries WHERE slug = ${slug}`;
    if (!rowCount) return res.status(404).json({ error: "not found" });
    return res.status(204).end();
  }

  res.setHeader("Allow", "GET, PUT, DELETE");
  return res.status(405).json({ error: "method not allowed" });
}
