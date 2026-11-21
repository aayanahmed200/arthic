import { timingSafeEqual } from "node:crypto";

function safeCompare(a, b) {
  const bufA = Buffer.from(String(a));
  const bufB = Buffer.from(String(b));
  if (bufA.length !== bufB.length) return false;
  return timingSafeEqual(bufA, bufB);
}

export function requireAdmin(req, res, next) {
  const expectedPass = process.env.ADMIN_PASSWORD;
  if (!expectedPass) {
    return res
      .status(500)
      .json({ error: "ADMIN_PASSWORD is not configured on the server" });
  }

  const header = req.headers.authorization || "";
  const [scheme, encoded] = header.split(" ");

  if (scheme !== "Basic" || !encoded) {
    res.set("WWW-Authenticate", 'Basic realm="arthic admin"');
    return res.status(401).json({ error: "admin authentication required" });
  }

  let decoded = "";
  try {
    decoded = Buffer.from(encoded, "base64").toString("utf8");
  } catch {
    return res.status(401).json({ error: "malformed credentials" });
  }

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
