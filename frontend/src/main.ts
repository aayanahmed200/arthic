import "./styles/main.css";
import { initCommon } from "./lib/common-init";

initCommon();

/**
 * Product-preview mock — an illustrative AI-mentor chat transcript in a
 * browser-chrome frame. Everything inside is static, clearly-labeled
 * illustrative content (see the section copy above it) — nothing here
 * fetches real data or calls a real model. Three independent, all
 * fail-safe pieces of polish on top of that:
 *
 * 1. Tab switching (one exam stream per tab), plus an auto-advance every
 *    few seconds so the preview keeps demonstrating itself if a visitor
 *    lingers — a manual click always wins and permanently cancels the
 *    auto-advance, so it never fights a real choice.
 * 2. A one-shot "power on" moment: the chat bubbles start hidden and
 *    stagger in together the first time the mock scrolls into view, via
 *    the same IntersectionObserver pattern as reveal.ts (and the same
 *    reduced-motion / no-IO fallbacks — see that file's comment for the
 *    reasoning).
 * 3. A "started Xs ago" label in the chrome bar that just counts up from
 *    page load — the small detail that makes the mock read as a live
 *    session rather than a screenshot.
 */
const dashTabs = document.querySelector<HTMLElement>("[data-dash-tabs]");
if (dashTabs) {
  const tabs = Array.from(dashTabs.querySelectorAll<HTMLButtonElement>("[data-dash-tab]"));
  const panels = Array.from(document.querySelectorAll<HTMLElement>("[data-dash-panel]"));
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function activateTab(tab: HTMLButtonElement) {
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
  }

  let autoAdvanceId: number | undefined;
  const stopAutoAdvance = () => {
    if (autoAdvanceId !== undefined) {
      window.clearInterval(autoAdvanceId);
      autoAdvanceId = undefined;
    }
  };

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      stopAutoAdvance();
      activateTab(tab);
    });
  });

  if (!prefersReduced && tabs.length > 1) {
    autoAdvanceId = window.setInterval(() => {
      const currentIndex = tabs.findIndex((t) => t.classList.contains("is-active"));
      activateTab(tabs[(currentIndex + 1) % tabs.length]);
    }, 6500);
  }
}

const dashMock = document.querySelector<HTMLElement>(".dash");
if (dashMock) {
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const powerOn = () => dashMock.classList.add("dash--live");

  if (prefersReduced || !("IntersectionObserver" in window)) {
    powerOn();
  } else {
    const dashObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            powerOn();
            dashObserver.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.3 },
    );
    dashObserver.observe(dashMock);
    window.setTimeout(powerOn, 4000);
  }

  // "started Xs ago" ticker in the chrome bar — text only, no motion, so
  // it runs regardless of prefers-reduced-motion (the pulsing dot next
  // to it is pure CSS and already gated by the reduced-motion media
  // query in preview.css).
  const syncText = dashMock.querySelector<HTMLElement>("[data-dash-sync-text]");
  if (syncText) {
    const start = Date.now();
    window.setInterval(() => {
      const secs = Math.floor((Date.now() - start) / 1000);
      syncText.textContent = secs < 5 ? "started just now" : `started ${secs}s ago`;
    }, 1000);
  }
}
