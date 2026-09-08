import { defineConfig } from "vite";
import { fileURLToPath } from "node:url";

export default defineConfig({
  // Real multi-page app — each page is its own HTML entry with its own
  // 404 (404.html). "spa" (Vite's default) would silently fall back to
  // index.html for any unmatched route in dev/preview, masking bad links
  // and hiding the custom 404 exactly where it matters to see it.
  appType: "mpa",
  build: {
    target: "es2020",
    cssCodeSplit: false,
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL("./index.html", import.meta.url)),
        about: fileURLToPath(new URL("./about.html", import.meta.url)),
        games: fileURLToPath(new URL("./games.html", import.meta.url)),
        careers: fileURLToPath(new URL("./careers.html", import.meta.url)),
        journal: fileURLToPath(new URL("./journal.html", import.meta.url)),
        privacy: fileURLToPath(new URL("./privacy.html", import.meta.url)),
        terms: fileURLToPath(new URL("./terms.html", import.meta.url)),
        notFound: fileURLToPath(new URL("./404.html", import.meta.url)),
      },
    },
  },
  server: {
    port: 5173,
  },
});
