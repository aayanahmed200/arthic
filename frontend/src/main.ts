import "./styles/main.css";
import { initCommon } from "./lib/common-init";

initCommon();

/**
 * Product-preview dashboard mock — switches between the "compliance" and
 * "advisor" panels. Everything in both panels is static, clearly-labeled
 * illustrative content (see the section copy above it); this only toggles
 * which illustration is visible, no data is fetched.
 */
const dashTabs = document.querySelector<HTMLElement>("[data-dash-tabs]");
if (dashTabs) {
  const tabs = Array.from(dashTabs.querySelectorAll<HTMLButtonElement>("[data-dash-tab]"));
  const panels = Array.from(document.querySelectorAll<HTMLElement>("[data-dash-panel]"));

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const target = tab.dataset.dashTab;

      tabs.forEach((t) => {
        const isActive = t === tab;
        t.classList.toggle("is-active", isActive);
        t.setAttribute("aria-selected", String(isActive));
      });

      panels.forEach((panel) => {
        const isActive = panel.dataset.dashPanel === target;
        panel.classList.toggle("is-active", isActive);
        panel.hidden = !isActive;
      });
    });
  });
}
