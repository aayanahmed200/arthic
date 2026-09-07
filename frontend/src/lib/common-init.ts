/**
 * Shared page bootstrap used by every entry point (home, about, games,
 * careers). Nav, smooth scroll, scroll-reveal, and the footer subscribe
 * form are chrome that lives on every page — anything page-specific (the
 * Orbital canvas, journal data) is initialized by that page's own entry
 * script instead.
 */
import { initNav } from "./nav";
import { initSmoothScroll } from "./smooth-scroll";
import { initReveal } from "./reveal";
import { initSubscribeForm } from "./subscribe";

export function initCommon(): void {
  initNav();
  initSmoothScroll();
  initReveal();
  initSubscribeForm();
}
