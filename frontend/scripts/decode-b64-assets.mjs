// Materializes binary assets (favicons, generated art, etc.) from plain
// base64 text files checked into `public-src-b64/`, writing the decoded
// binary into `public/` before the rest of the build runs.
//
// Why this exists: this repo's binary files get delivered by typing plain
// text into GitHub's web editor rather than a native file upload, so the
// files that actually need to be binary (PNG icons, JPGs) are committed as
// base64 *text* instead and turned back into real files here, at build
// time — on every `npm run dev` / `npm run build`, including on Vercel.
import { readdirSync, readFileSync, writeFileSync, existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SRC_DIR = path.join(__dirname, "..", "public-src-b64");
const OUT_DIR = path.join(__dirname, "..", "public");

if (!existsSync(SRC_DIR)) {
  process.exit(0);
}

const files = readdirSync(SRC_DIR).filter((f) => f.endsWith(".b64"));

for (const file of files) {
  const targetName = file.replace(/\.b64$/, "");
  const b64 = readFileSync(path.join(SRC_DIR, file), "utf8").replace(/\s+/g, "");
  const buf = Buffer.from(b64, "base64");
  writeFileSync(path.join(OUT_DIR, targetName), buf);
  console.log(`[decode-b64-assets] ${file} -> public/${targetName} (${buf.length} bytes)`);
}
