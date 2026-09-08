import "./styles/main.css";
import { initCommon } from "./lib/common-init";
import { initOrbitalArt } from "./art/orbital";
import { initFormSubmit } from "./lib/form-submit";

initCommon();
initOrbitalArt();

/**
 * Small in-fiction easter egg on the "day 51" system log entry — not a real
 * gameplay demo (Orbital doesn't have captured footage yet, it's still in
 * development), just a one-off interactive branch matching the station-log
 * tone. Picking either choice reveals a one-line consequence and locks in.
 */
const logPrompt = document.querySelector<HTMLElement>("[data-log-prompt]");
if (logPrompt) {
  const choices = logPrompt.querySelectorAll<HTMLButtonElement>("[data-log-choice]");
  const result = logPrompt.querySelector<HTMLElement>("[data-log-result]");
  const RESPONSES: Record<string, string> = {
    y: "backup started. 41% ... 68% ... connection lost.",
    n: "backup cancelled. no further entries recorded.",
  };

  choices.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (!result) return;
      result.textContent = RESPONSES[btn.dataset.logChoice ?? ""] ?? "";
      result.hidden = false;
      choices.forEach((b) => b.setAttribute("disabled", "true"));
    });
  });
}

const PHONE_RE = /^[0-9+()\-.\s]{7,20}$/;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const preorderForm = document.querySelector<HTMLFormElement>("[data-preorder-form]");
if (preorderForm) {
  initFormSubmit(preorderForm, {
    endpoint: "/api/preorder",
    invalidMessage: "please enter a valid email and phone number.",
    successMessage: "you're on the list — we'll email you when it's time to pay.",
    buildPayload: (form) => {
      const email = (form.querySelector<HTMLInputElement>("input[name='email']")?.value || "").trim();
      const phone = (form.querySelector<HTMLInputElement>("input[name='phone']")?.value || "").trim();
      const website = (form.querySelector<HTMLInputElement>("input[name='website']")?.value || "").trim();
      if (!EMAIL_RE.test(email) || !PHONE_RE.test(phone)) return null;
      return { email, phone, website };
    },
  });
}
