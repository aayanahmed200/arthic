const LIGHT_META = "#fbfcf8";

/** Arthic uses one light palette across every route. */
export function initTheme(): void {
  document.documentElement.setAttribute("data-theme", "light");
  const meta = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]');
  if (meta) meta.content = LIGHT_META;
}
