import "./styles/main.css";
import { initCommon } from "./lib/common-init";

initCommon();

/**
 * Product-preview dashboard mock. Everything inside is static,
 * clearly-labeled illustrative content (see the section copy above it) —
 * nothing here fetches real data. Three independent, all fail-safe
 * pieces of polish on top of that:
 *
 * 1. Tab switching (compliance/advisor), same as before, plus an
 *    auto-advance every few seconds so the preview keeps demonstrating
 *    itself if a visitor lingers — a manual click always wins and
 *    permanently cancels the auto-advance, so it never fights a real
 *    choice.
 * 2. A one-shot "power on" moment: the stat ring, trend bars, and
 *    framework bars all start at zero and sweep in together the first
 *    time the mock scrolls into view, via the same IntersectionObserver
 *    pattern as reveal.ts (and the same reduced-motion / no-IO
 *    fallbacks — see that file's comment for the reasoning).
 * 3. A slow-rotating "recent activity" ticker so the feed reads as live
 *    rather than a frozen screenshot. Decorative only: its container is
 *    aria-hidden already, so screen readers never hear the churn.
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
    }, 6000);
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

  const activityList = dashMock.querySelector<HTMLUListElement>(".dash__activity ul");
  if (activityList && !prefersReduced) {
    const feed = [
      { time: "just now", text: "fleet fuel logs synced — 12 vehicles" },
      { time: "just now", text: "facility #3 energy meter reconnected" },
      { time: "just now", text: "new CDP questionnaire draft started" },
      { time: "just now", text: "supplier scorecard updated — 3 vendors" },
      { time: "just now", text: "Q3 travel expense export reclassified" },
    ];
    let feedIndex = 0;

    window.setInterval(() => {
      const item = feed[feedIndex % feed.length];
      feedIndex++;

      const li = document.createElement("li");
      const time = document.createElement("span");
      time.className = "dash__activity-time";
      time.textContent = item.time;
      const label = document.createElement("span");
      label.textContent = item.text;
      li.append(time, label);
      li.style.opacity = "0";
      activityList.prepend(li);

      requestAnimationFrame(() => {
        li.style.opacity = "1";
      });

      while (activityList.children.length > 3) {
        activityList.lastElementChild?.remove();
      }
    }, 7000);
  }
}
