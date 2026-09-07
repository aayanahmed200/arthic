import Lenis from "lenis";

/**
 * Lenis smooth scroll. Skipped entirely under prefers-reduced-motion —
 * native instant/auto scrolling takes over via the CSS in base.css.
 *
 * Also upgrades in-page anchor links (nav, footer, "follow the build",
 * "back to top"...) to scroll smoothly, since Lenis intercepts the
 * native scroll but not link clicks on its own.
 */
export function initSmoothScroll(): Lenis | null {
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReduced) return null;

  const lenis = new Lenis({
    duration: 1.05,
    easing: (t: number) => 1 - Math.pow(1 - t, 3),
    smoothWheel: true,
  });

  function raf(time: number) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const hash = link.getAttribute("href");
      if (!hash || hash === "#") return;
      const target = document.querySelector(hash);
      if (!target) return;
      event.preventDefault();
      lenis.scrollTo(target as HTMLElement, { offset: -8, duration: 1.1 });
      history.pushState(null, "", hash);
    });
  });

  return lenis;
}
