/**
 * Scroll-reveal, built to fail safe.
 *
 * Every [data-reveal] element is fully visible in markup. This module is
 * the ONLY thing that ever makes one invisible — it adds `.reveal` (the
 * opacity:0 / translateY starting state, defined in utilities.css) and
 * then an IntersectionObserver adds `.is-in` to fade it in. If JS never
 * runs, nothing was ever hidden. If the observer misbehaves for any
 * element, a timeout forces every element visible regardless. Content
 * should never depend on a scroll animation succeeding to be readable.
 */
export function initReveal(): void {
  const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
  if (elements.length === 0) return;

  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  for (const el of elements) {
    el.classList.add("reveal");
    const delay = el.getAttribute("data-reveal-delay");
    if (delay) el.style.transitionDelay = `${delay}ms`;
  }

  const revealAll = () => {
    for (const el of elements) el.classList.add("is-in");
  };

  if (prefersReduced || !("IntersectionObserver" in window)) {
    revealAll();
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-in");
          observer.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
  );

  for (const el of elements) observer.observe(el);

  // Safety net — see module comment. Never let a scroll animation be a
  // prerequisite for reading the page.
  window.setTimeout(revealAll, 4000);
}
