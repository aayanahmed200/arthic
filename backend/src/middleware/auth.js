import { createHash, timingSafeEqual } from "node:crypto";

function safeCompare(a, b) {
  // Hash both values so timingSafeEqual always compares fixed-length buffers.
  const bufA = createHash("sha256").update(String(a)).digest();
  const bufB = createHash("sha256").update(String(b)).digest();
  return timingSafeEqual(bufA, bufB);
}

export function requireAdmin(req, res, next) {
  const expectedPass = process.env.ADMIN_PASSWORD;
  if (!expectedPass) {
    return res
      .status(500)
      .json({ error: "ADMIN_PASSWORD is not configured on the server" });
  }

  const header = typeof req.headers.authorization === "string" && req.headers.authorization.length <= 8192
    ? req.headers.authorization
    : "";
  const match = /^Basic\s+([A-Za-z0-9+/]+={0,2})$/i.exec(header.trim());
  if (!match || match[1].length % 4 !== 0) {
    res.set("WWW-Authenticate", 'Basic realm="arthic admin"');
    return res.status(401).json({ error: "admin authentication required" });
  }

  const decoded = Buffer.from(match[1], "base64").toString("utf8");

  const sep = decoded.indexOf(":");
  const user = sep === -1 ? decoded : decoded.slice(0, sep);
  const pass = sep === -1 ? "" : decoded.slice(sep + 1);

  const expectedUser = process.env.ADMIN_USER || "admin";

  if (!safeCompare(user, expectedUser) || !safeCompare(pass, expectedPass)) {
    res.set("WWW-Authenticate", 'Basic realm="arthic admin"');
    return res.status(401).json({ error: "invalid credentials" });
  }

  next();
}
