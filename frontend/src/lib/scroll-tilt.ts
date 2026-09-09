/**
 * Subtle 3D scroll tilt, built to fail safe — same philosophy as reveal.ts.
 *
 * [data-tilt] elements sit perfectly flat in markup; this module is the
 * ONLY thing that ever applies a transform, and only via inline style on
 * a dedicated wrapper element (never on something that also carries a
 * data-reveal transform, so the two never fight over the same property).
 * If JS never runs, nothing ever moves — pure enhancement.
 *
 * One rAF-batched scroll listener drives every element: each tilts in
 * from a few degrees as it enters the viewport, settles flat as it
 * crosses the vertical center, and tilts the other way as it leaves —
 * a sense of depth as you scroll past, not a gimmick that fights reading.
 * Skipped entirely for prefers-reduced-motion.
 */
export function initScrollTilt(): void {
  const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-tilt]"));
  if (elements.length === 0) return;

  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReduced) return;

  let ticking = false;

  const apply = () => {
    ticking = false;
    const vh = window.innerHeight || document.documentElement.clientHeight;
    const center = vh / 2;

    for (const el of elements) {
      const rect = el.getBoundingClientRect();
      // Well off-screen in either direction — skip the work, leave transform as-is.
      if (rect.bottom < -300 || rect.top > vh + 300) continue;

      const elCenter = rect.top + rect.height / 2;
      // -1 (still below, approaching) .. 0 (crossing center) .. 1 (past, leaving above)
      const ratio = Math.max(-1, Math.min(1, (elCenter - center) / center));
      const strength = Number(el.dataset.tilt) || 6;
      const rotate = ratio * strength;
      const lift = Math.abs(ratio) * strength * 0.5;

      el.style.transform = `perspective(1400px) rotateX(${(-rotate).toFixed(2)}deg) translateY(${lift.toFixed(2)}px)`;
    }
  };

  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(apply);
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll, { passive: true });
  apply();
}
