import "./styles/main.css";
import "./styles/brand-final.css";
import "./styles/ui-polish.css";
import "./styles/legal-overhaul.css";
import { initCommon } from "./lib/common-init";

initCommon();

// Long legal documents always open at the beginning, not at a browser-restored
// scroll position left over from a previous route.
if ("scrollRestoration" in history) history.scrollRestoration = "manual";
if (!window.location.hash) {
  window.addEventListener("pageshow", () => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, { once: true });
}
