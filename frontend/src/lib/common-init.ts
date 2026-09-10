/**
 * Shared page bootstrap used by every entry point (home, careers, legal
 * pages). Nav, theme toggle, smooth scroll, scroll-reveal, and the
 * footer waitlist form are chrome that lives on every page — anything
 * page-specific (the features-preview cards, apply forms) is
 * initialized by that page's own entry script instead.
 */
import { initNav } from "./nav";
import { initTheme } from "./theme";
import { initLangStub } from "./lang-stub";
import { initSmoothScroll } from "./smooth-scroll";
import { initReveal } from "./reveal";
import { initScrollTilt } from "./scroll-tilt";
import { initSubscribeForm } from "./subscribe";

export function initCommon(): void {
  initNav();
  initTheme();
  initLangStub();
  initSmoothScroll();
  initReveal();
  initScrollTilt();
  initSubscribeForm();
}
