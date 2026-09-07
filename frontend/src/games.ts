import "./styles/main.css";
import { initCommon } from "./lib/common-init";
import { initOrbitalArt } from "./art/orbital";
import { initFormSubmit } from "./lib/form-submit";

initCommon();
initOrbitalArt();

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
      if (!EMAIL_RE.test(email) || !PHONE_RE.test(phone)) return null;
      return { email, phone };
    },
  });
}
