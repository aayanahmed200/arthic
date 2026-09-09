/**
 * Light/dark theme toggle. The initial theme is decided before this
 * module even loads — see the inline script in every page's <head>,
 * which reads localStorage (falling back to prefers-color-scheme) and
 * sets data-theme on <html> before first paint so there's no flash.
 * This module only has to wire up the button and keep things in sync
 * after that.
 */
const STORAGE_KEY = "arthic-theme";
const LIGHT_META = "#fcfbf8";
const DARK_META = "#15140f";

type Theme = "light" | "dark";

export function initTheme(): void {
  syncMetaThemeColor(currentTheme());

  const toggles = document.querySelectorAll<HTMLButtonElement>("[data-theme-toggle]");
  if (toggles.length === 0) return;

  toggles.forEach((toggle) => {
    toggle.setAttribute("aria-pressed", String(currentTheme() === "dark"));
    toggle.addEventListener("click", () => {
      const next: Theme = currentTheme() === "dark" ? "light" : "dark";
      applyTheme(next);
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch {
        /* localStorage unavailable (private mode, disabled storage) — the
           toggle still works for this page view, it just won't persist. */
      }
    });
  });
}

function currentTheme(): Theme {
  return document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
}

function applyTheme(theme: Theme): void {
  document.documentElement.setAttribute("data-theme", theme);
  syncMetaThemeColor(theme);
  document.querySelectorAll<HTMLButtonElement>("[data-theme-toggle]").forEach((toggle) => {
    toggle.setAttribute("aria-pressed", String(theme === "dark"));
  });
}

function syncMetaThemeColor(theme: Theme): void {
  const meta = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]');
  if (meta) meta.content = theme === "dark" ? DARK_META : LIGHT_META;
}
