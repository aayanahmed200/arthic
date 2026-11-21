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
        admin: page("admin"),
        apply: page("apply"),
        authCallback: page("auth-callback"),
        careers: page("careers"),
        cookies: page("cookies"),
        dashboard: page("dashboard"),
        method: page("method"),
        privacy: page("privacy"),
        pricing: page("pricing"),
        settings: page("settings"),
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
