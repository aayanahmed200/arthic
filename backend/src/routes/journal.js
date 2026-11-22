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
  const payload = req.body && typeof req.body === "object" && !Array.isArray(req.body)
    ? req.body
    : {};
  const title = typeof payload.title === "string" ? payload.title.trim() : "";
  const excerpt = typeof payload.excerpt === "string" ? payload.excerpt.trim() : "";
  const body = payload.body === undefined ? "" : payload.body;
  const published_at = typeof payload.published_at === "string" ? payload.published_at.trim() : "";

  if (!title || !excerpt || !published_at) {
    return res.status(400).json({ error: "title, excerpt, and publication date are required" });
  }
  if (typeof body !== "string") {
    return res.status(400).json({ error: "body must be plain text" });
  }
  if (title.length > MAX_TITLE || excerpt.length > MAX_EXCERPT || body.length > MAX_BODY) {
    return res.status(400).json({ error: "title, excerpt, or body is too long" });
  }
  if (Number.isNaN(Date.parse(published_at))) {
    return res.status(400).json({ error: "publication date must be a valid date" });
  }

  const slug = slugify(title);
  if (!slug) {
    return res.status(400).json({ error: "title produced an empty slug" });
  }

  try {
    db.prepare(
      `INSERT INTO journal_entries (slug, title, excerpt, body, published_at)
       VALUES (?, ?, ?, ?, ?)`,
    ).run(slug, title, excerpt, body, published_at);
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

  const payload = req.body && typeof req.body === "object" && !Array.isArray(req.body)
    ? req.body
    : {};
  for (const field of ["title", "excerpt", "body", "published_at"]) {
    if (payload[field] !== undefined && typeof payload[field] !== "string") {
      return res.status(400).json({ error: field + " must be text" });
    }
  }

  const title = payload.title === undefined ? existing.title : payload.title.trim();
  const excerpt = payload.excerpt === undefined ? existing.excerpt : payload.excerpt.trim();
  const body = payload.body === undefined ? existing.body : payload.body;
  const published_at = payload.published_at === undefined ? existing.published_at : payload.published_at.trim();

  if (!title || !excerpt || !published_at) {
    return res.status(400).json({ error: "title, excerpt, and publication date cannot be empty" });
  }
  if (title.length > MAX_TITLE || excerpt.length > MAX_EXCERPT || body.length > MAX_BODY) {
    return res.status(400).json({ error: "title, excerpt, or body is too long" });
  }
  if (Number.isNaN(Date.parse(published_at))) {
    return res.status(400).json({ error: "publication date must be a valid date" });
  }

  db.prepare(
    `UPDATE journal_entries
     SET title = ?, excerpt = ?, body = ?, published_at = ?
     WHERE slug = ?`,
  ).run(
    title,
    excerpt,
    body,
    published_at,
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
