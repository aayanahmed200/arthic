/**
 * Shared page bootstrap for the standalone Arthic pages.
 * Reference chrome is installed before nav handlers are attached, so the
 * masthead and footer stay identical across routes.
 */
import { initReferenceChrome } from "./reference-chrome";
import { initNav } from "./nav";
import { initRegionPopover } from "./regions";
import { initSmoothScroll } from "./smooth-scroll";
import { initSubscribeForm } from "./subscribe";
import { initButtons } from "./buttons";
import { initFaq } from "./faq";
import { initExamFinder } from "./exam-finder";
import { initCustomSelects } from "./custom-select";

export function initCommon(): void {
  initReferenceChrome();
  initNav();
  initRegionPopover();
  initSmoothScroll();
  initSubscribeForm();
  initButtons();
  initFaq();
  initExamFinder();
  initCustomSelects();
}
