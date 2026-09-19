/**
 * The hero's product preview has four tabs (mentor / papers / plan /
 * calendar) with real content behind each — this just switches which
 * panel shows. Still clearly labeled a preview, not a live product;
 * this is about it feeling like real UI rather than a static image,
 * not about pretending the data behind it is real.
 */
export function initDashPreview(): void {
  const root = document.querySelector<HTMLElement>("[data-dash]");
  if (!root) return;

  const tabs = root.querySelectorAll<HTMLButtonElement>("[data-dash-tab]");
  const panels = root.querySelectorAll<HTMLElement>("[data-dash-panel]");
  if (tabs.length === 0) return;

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const target = tab.dataset.dashTab;

      tabs.forEach((t) => {
        const active = t === tab;
        t.classList.toggle("is-active", active);
        t.setAttribute("aria-selected", String(active));
      });

      panels.forEach((panel) => {
        panel.hidden = panel.dataset.dashPanel !== target;
      });
    });
  });
}
