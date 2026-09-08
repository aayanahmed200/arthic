import "./styles/main.css";
import { initCommon } from "./lib/common-init";
import { initFormSubmit } from "./lib/form-submit";

initCommon();

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

document.querySelectorAll<HTMLFormElement>("[data-apply-form]").forEach((form) => {
  const role = form.dataset.role || "General";

  initFormSubmit(form, {
    endpoint: "/api/apply",
    invalidMessage: "please fill in your name and a valid email.",
    successMessage: "application sent — thanks for reaching out.",
    buildPayload: (f) => {
      const name = (f.querySelector<HTMLInputElement>("input[name='name']")?.value || "").trim();
      const email = (f.querySelector<HTMLInputElement>("input[name='email']")?.value || "").trim();
      const link = (f.querySelector<HTMLInputElement>("input[name='link']")?.value || "").trim();
      const message = (f.querySelector<HTMLTextAreaElement>("textarea[name='message']")?.value || "").trim();
      const website = (f.querySelector<HTMLInputElement>("input[name='website']")?.value || "").trim();
      if (!name || !EMAIL_RE.test(email)) return null;
      return { role, name, email, link, message, website };
    },
  });
});
