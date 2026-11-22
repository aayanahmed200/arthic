import "dotenv/config";
import express from "express";
import cors from "cors";
import rateLimit from "express-rate-limit";
import path from "node:path";
import { fileURLToPath } from "node:url";

import "./db.js"; // ensures tables exist before anything else runs
import { journalRouter } from "./routes/journal.js";
import { subscribersRouter } from "./routes/subscribers.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();

const PORT = process.env.PORT || 3001;
const ALLOWED_ORIGIN = process.env.ALLOWED_ORIGIN?.trim() || "";
if (process.env.NODE_ENV === "production" && (!ALLOWED_ORIGIN || ALLOWED_ORIGIN === "*")) {
  throw new Error("Set ALLOWED_ORIGIN to the exact frontend origin before starting in production.");
}

app.disable("x-powered-by");
app.use(express.json({ limit: "100kb" }));
app.use(cors({ origin: ALLOWED_ORIGIN || "http://localhost:5173" }));

// hand-rolled security headers — small enough not to need a dependency
app.use((req, res, next) => {
  res.set("X-Content-Type-Options", "nosniff");
  res.set("X-Frame-Options", "DENY");
  res.set("Referrer-Policy", "strict-origin-when-cross-origin");
  res.set("Permissions-Policy", "camera=(), microphone=(), geolocation=()");
  res.set("X-Permitted-Cross-Domain-Policies", "none");
  next();
});

app.get("/api/health", (req, res) => res.json({ ok: true }));

const subscribeLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: "too many attempts — try again later" },
});
app.use("/api/subscribe", subscribeLimiter);

const adminLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 20,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: "too many admin attempts — try again later" },
});

// Apply the tighter limit before Basic authentication on write endpoints.
app.use("/api/journal", (req, res, next) => {
  if (["POST", "PUT", "DELETE"].includes(req.method ?? "")) return adminLimiter(req, res, next);
  next();
}, journalRouter);
app.use("/api/subscribers", adminLimiter);
app.use("/api", subscribersRouter);

// minimal static admin panel, itself protected route-by-route via the API
app.use("/admin", express.static(path.join(__dirname, "public/admin")));

app.use((req, res) => res.status(404).json({ error: "not found" }));

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: "something went wrong" });
});

app.listen(PORT, () => {
  console.log(`arthic backend listening on http://localhost:${PORT}`);
});
