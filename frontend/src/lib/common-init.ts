/**
 * Shared page bootstrap used by every entry point (home, careers, legal
 * pages). Nav, theme toggle, smooth scroll, scroll-reveal, and the
 * footer waitlist form are chrome that lives on every page — anything
 * page-specific (the features-preview cards, apply forms) is
 * initialized by that page's own entry script instead.
 */
import { initNav } from "./nav";
import { initTheme } from "./theme";
import { initRegionPopover } from "./regions";
import { initSmoothScroll } from "./smooth-scroll";
import { initSubscribeForm } from "./subscribe";
import { initButtons } from "./buttons";
import { initFaq } from "./faq";
import { initArlo } from "./arlo";
import { initExamFinder } from "./exam-finder";

export function initCommon(): void {
  initNav();
  initTheme();
  initRegionPopover();
  initSmoothScroll();
  initSubscribeForm();
  initButtons();
  initFaq();
  initExamFinder();
  // Keep the marketing homepage focused; support chat remains available on inner pages.
  if (!document.body.classList.contains("home-page") && !document.body.classList.contains("study-preview-page")) initArlo();
}
