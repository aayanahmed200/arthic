import { defineConfig } from "vite";
import { fileURLToPath } from "node:url";

export default defineConfig({
  appType: "mpa",
  build: {
    target: "es2020",
    cssCodeSplit: false,
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL("./index.html", import.meta.url)),
        notFound: fileURLToPath(new URL("./404.html", import.meta.url)),
      },
    },
  },
  server: { port: 5173 },
});
