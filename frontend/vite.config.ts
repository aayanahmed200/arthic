import { defineConfig } from "vite";
import { fileURLToPath } from "node:url";

const page = (name: string) => fileURLToPath(new URL(`./${name}.html`, import.meta.url));

export default defineConfig({
  appType: "mpa",
  build: {
    target: "es2020",
    cssCodeSplit: false,
    rollupOptions: {
      input: {
        main: page("index"),
        apply: page("apply"),
        careers: page("careers"),
        cookies: page("cookies"),
        method: page("method"),
        privacy: page("privacy"),
        pricing: page("pricing"),
        studyPreview: page("study-preview"),
        subjects: page("subjects"),
        terms: page("terms"),
        waitlist: page("waitlist"),
        notFound: page("404"),
      },
    },
  },
  server: { port: 5173 },
});
