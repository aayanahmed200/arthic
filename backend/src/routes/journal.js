import { Router } from "express";
import { db } from "../db.js";
import { requireAdmin } from "../middleware/auth.js";
import { slugify } from "../lib/slugify.js";

export const journalRouter = Router();

const MAX_TITLE = 200;
const MAX_EXCERPT = 400;
const MAX_BODY = 20000;

// GET /api/journal — public, list view (no body, newest first)
journalRouter.get("/", (req, res) => {
  const rows = db
    .prepare(
      `SELECT slug, title, excerpt, published_at
       FROM journal_entries
       ORDER BY published_at DESC`,
    )
    .all();
  res.json(rows);
});

// GET /api/journal/:slug — public, single entry with full body
journalRouter.get("/:slug", (req, res) => {
  const row = db.prepare(`SELECT * FROM journal_entries WHERE slug = ?`).get(req.params.slug);
  if (!row) return res.status(404).json({ error: "not found" });
  res.json(row);
});

// POST /api/journal — admin only, create
journalRouter.post("/", requireAdmin, (req, res) => {
  const { title, excerpt, body, published_at } = req.body || {};

  if (!title || !excerpt || !published_at) {
    return res.status(400).json({ error: "title, excerpt, and published_at are required" });
  }
  if (title.length > MAX_TITLE || excerpt.length > MAX_EXCERPT || (body || "").length > MAX_BODY) {
    return res.status(400).json({ error: "title, excerpt, or body is too long" });
  }

  const slug = slugify(title);
  if (!slug) {
    return res.status(400).json({ error: "title produced an empty slug" });
  }

  try {
    db.prepare(
      `INSERT INTO journal_entries (slug, title, excerpt, body, published_at)
       VALUES (?, ?, ?, ?, ?)`,
    ).run(slug, title.trim(), excerpt.trim(), body || "", published_at);
  } catch (err) {
    if (String(err.message).includes("UNIQUE")) {
      return res.status(409).json({ error: "an entry with that title already exists" });
    }
    throw err;
  }

  const created = db.prepare(`SELECT * FROM journal_entries WHERE slug = ?`).get(slug);
  res.status(201).json(created);
});

// PUT /api/journal/:slug — admin only, update
journalRouter.put("/:slug", requireAdmin, (req, res) => {
  const existing = db.prepare(`SELECT * FROM journal_entries WHERE slug = ?`).get(req.params.slug);
  if (!existing) return res.status(404).json({ error: "not found" });

  const { title, excerpt, body, published_at } = req.body || {};

  if (
    (title && title.length > MAX_TITLE) ||
    (excerpt && excerpt.length > MAX_EXCERPT) ||
    (body && body.length > MAX_BODY)
  ) {
    return res.status(400).json({ error: "title, excerpt, or body is too long" });
  }

  db.prepare(
    `UPDATE journal_entries
     SET title = ?, excerpt = ?, body = ?, published_at = ?
     WHERE slug = ?`,
  ).run(
    title ?? existing.title,
    excerpt ?? existing.excerpt,
    body ?? existing.body,
    published_at ?? existing.published_at,
    req.params.slug,
  );

  res.json(db.prepare(`SELECT * FROM journal_entries WHERE slug = ?`).get(req.params.slug));
});

// DELETE /api/journal/:slug — admin only
journalRouter.delete("/:slug", requireAdmin, (req, res) => {
  const result = db.prepare(`DELETE FROM journal_entries WHERE slug = ?`).run(req.params.slug);
  if (result.changes === 0) return res.status(404).json({ error: "not found" });
  res.status(204).end();
});
