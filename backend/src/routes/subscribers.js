import { Router } from "express";
import { db } from "../db.js";
import { requireAdmin } from "../middleware/auth.js";

export const subscribersRouter = Router();

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// POST /api/subscribe — public
subscribersRouter.post("/subscribe", (req, res) => {
  const email = String(req.body?.email || "")
    .trim()
    .toLowerCase();

  if (!email || email.length > 254 || !EMAIL_RE.test(email)) {
    return res.status(400).json({ error: "please provide a valid email address" });
  }

  try {
    db.prepare(`INSERT INTO subscribers (email) VALUES (?)`).run(email);
  } catch (err) {
    if (!String(err.message).includes("UNIQUE")) throw err;
    // already on the list — respond as success either way, don't leak state
  }

  res.status(201).json({ ok: true });
});

// GET /api/subscribers — admin only
subscribersRouter.get("/subscribers", requireAdmin, (req, res) => {
  const rows = db.prepare(`SELECT email, created_at FROM subscribers ORDER BY created_at DESC`).all();
  res.json(rows);
});
