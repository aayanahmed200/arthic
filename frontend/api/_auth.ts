import { createHash, timingSafeEqual } from "node:crypto";
import type { VercelRequest, VercelResponse } from "@vercel/node";

function safeCompare(a: string, b: string): boolean {
  // Hash both values to fixed-size buffers so the timingSafeEqual check
  // does not return early based on the original credential lengths.
  const digest = (value: string) => createHash("sha256").update(value, "utf8").digest();
  return timingSafeEqual(digest(String(a)), digest(String(b)));
}

/**
 * Same Basic-Auth check as backend/src/middleware/auth.js, ported to a
 * plain function since Vercel functions don't chain Express middleware.
 * Call at the top of any admin-only handler: if this returns false, the
 * 401 has already been written to `res` and the caller should just return.
 */
export function requireAdmin(req: VercelRequest, res: VercelResponse): boolean {
  const expectedPass = process.env.ADMIN_PASSWORD;
  if (!expectedPass) {
    res.status(500).json({ error: "ADMIN_PASSWORD is not configured on the server" });
    return false;
  }

  const header = req.headers.authorization || "";
  const [scheme, encoded] = header.split(" ");

  if (scheme !== "Basic" || !encoded) {
    res.setHeader("WWW-Authenticate", 'Basic realm="arthic admin"');
    res.status(401).json({ error: "admin authentication required" });
    return false;
  }

  let decoded = "";
  try {
    decoded = Buffer.from(encoded, "base64").toString("utf8");
  } catch {
    res.status(401).json({ error: "malformed credentials" });
    return false;
  }

  const sep = decoded.indexOf(":");
  const user = sep === -1 ? decoded : decoded.slice(0, sep);
  const pass = sep === -1 ? "" : decoded.slice(sep + 1);

  const expectedUser = process.env.ADMIN_USER || "admin";

  if (!safeCompare(user, expectedUser) || !safeCompare(pass, expectedPass)) {
    res.setHeader("WWW-Authenticate", 'Basic realm="arthic admin"');
    res.status(401).json({ error: "invalid credentials" });
    return false;
  }

  return true;
}
