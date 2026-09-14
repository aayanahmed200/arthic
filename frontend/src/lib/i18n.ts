/**
 * Real English / Urdu toggle. Elements that have a translation carry a
 * `data-i18n-ur` attribute holding the Urdu string; everything else is
 * left alone, so pages that haven't been translated yet just stay in
 * English instead of breaking. Layout direction stays LTR site-wide
 * (nav, grids, cards keep their structure) — only prose-level elements
 * (headings, paragraphs, list items) switch to right-to-left reading
 * order via CSS when Urdu is active, since that's what real Urdu
 * sentences need to read correctly. Short labels (buttons, nav links)
 * don't need the direction flip.
 *
 * The initial language is decided before this module loads — see the
 * inline script in every page's <head>, same pattern as the theme
 * toggle — so there's no flash of the wrong language on load.
 */
const STORAGE_KEY = "arthic-lang";

type Lang = "en" | "ur";

export function initI18n(): void {
  applyLang(currentLang(), { skipStore: true });

  const toggles = document.querySelectorAll<HTMLButtonElement>("[data-lang-toggle]");
  if (toggles.length === 0) return;

  toggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
      const next: Lang = currentLang() === "ur" ? "en" : "ur";
      applyLang(next);
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch {
        /* localStorage unavailable — the toggle still works for this page view */
      }
    });
  });
}

function currentLang(): Lang {
  return document.documentElement.getAttribute("data-lang") === "ur" ? "ur" : "en";
}

function applyLang(lang: Lang, opts: { skipStore?: boolean } = {}): void {
  document.documentElement.setAttribute("data-lang", lang);
  document.documentElement.lang = lang === "ur" ? "ur" : "en";
  document.documentElement.classList.toggle("lang-ur", lang === "ur");

  // plain-text elements (the common case — no nested markup to preserve)
  document.querySelectorAll<HTMLElement>("[data-i18n-ur]").forEach((el) => {
    if (el.dataset.i18nEn === undefined) {
      // first run on this element — remember the original English so we can revert to it
      el.dataset.i18nEn = el.textContent ?? "";
    }
    el.textContent = lang === "ur" ? el.dataset.i18nUr ?? "" : el.dataset.i18nEn;
  });

  // elements with nested markup worth preserving (line breaks, <strong>, etc.) — full
  // HTML swap so a translated headline's <br> doesn't get flattened by a textContent write
  document.querySelectorAll<HTMLElement>("[data-i18n-ur-html]").forEach((el) => {
    if (el.dataset.i18nEnHtml === undefined) {
      el.dataset.i18nEnHtml = el.innerHTML;
    }
    el.innerHTML = lang === "ur" ? el.dataset.i18nUrHtml ?? "" : el.dataset.i18nEnHtml;
  });

  document.querySelectorAll<HTMLButtonElement>("[data-lang-toggle]").forEach((toggle) => {
    toggle.setAttribute("aria-pressed", String(lang === "ur"));
    toggle.setAttribute("aria-label", lang === "ur" ? "انگریزی میں دیکھیں" : "دیکھیں اردو میں — switch to Urdu");
    const label = toggle.querySelector<HTMLElement>("[data-lang-label]");
    if (label) label.textContent = lang === "ur" ? "EN" : "اردو";
  });

  if (!opts.skipStore) {
    // let other on-page scripts (e.g. reveal animations re-measuring text) know content changed
    window.dispatchEvent(new CustomEvent("arthic:langchange", { detail: { lang } }));
  }
}
