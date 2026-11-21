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
  const lenis = prefersReduced
    ? null
    : new Lenis({
        duration: 1.05,
        easing: (t: number) => 1 - Math.pow(1 - t, 3),
        smoothWheel: true,
      });

  const activeLenis = lenis;
  if (activeLenis) {
    function raf(time: number) {
      activeLenis!.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }

  document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const hash = link.getAttribute("href");
      if (!hash || hash === "#") return;
      const target = document.querySelector<HTMLElement>(hash);
      if (!target) return;

      // Skip links must move keyboard and assistive-technology focus, not just the URL.
      // Do this even when smooth motion is disabled and native scrolling takes over.
      if (link.classList.contains("skip-link")) {
        event.preventDefault();
        if (lenis) lenis.scrollTo(target, { offset: -96, duration: 0.65 });
        else target.scrollIntoView({ behavior: "auto", block: "start" });
        if (!target.hasAttribute("tabindex")) target.setAttribute("tabindex", "-1");
        target.focus({ preventScroll: true });
        history.pushState(null, "", hash);
        return;
      }

      if (!lenis) {
        if (target.hasAttribute("tabindex")) target.focus({ preventScroll: true });
        return;
      }
      event.preventDefault();
      lenis.scrollTo(target, { offset: -8, duration: 1.1 });
      if (target.hasAttribute("tabindex")) target.focus({ preventScroll: true });
      history.pushState(null, "", hash);
    });
  });

  return lenis;
}
