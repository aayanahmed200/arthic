import "./styles/main.css";
import { initCommon } from "./lib/common-init";
import { initFormSubmit } from "./lib/form-submit";

initCommon();

/**
 * One shared application form, relabeled by ?role= in the URL instead of
 * four separate inline forms folded under each role on /careers. Keeps
 * the same backend contract (POST /api/apply) and the same honeypot —
 * only the presentation and the two extra "detailed" fields
 * (availability, start) are new.
 */
interface RoleConfig {
  dbRole: string;
  title: string;
  tag: string;
  blurb: string;
  linkLabel: string;
  linkPlaceholder: string;
  messageLabel: string;
  messagePlaceholder: string;
}

const ROLES: Record<string, RoleConfig> = {
  "student-mentor": {
    dbRole: "Student Mentor",
    title: "Student Mentor",
    tag: "Subject guidance",
    blurb: "Help learners understand a difficult topic or practice question in LCAT, NET, CSS or MDCAT. Share your strongest subject areas, relevant exam experience and how you would explain a concept clearly. Mentor matching is planned and is not live yet.",
    linkLabel: "Sample explanation or portfolio link",
    linkPlaceholder: "An optional sample you created yourself",
    messageLabel: "Which track and subjects could you support?",
    messagePlaceholder: "Tell us about your subject strengths, relevant exam experience and how you approach explaining a difficult concept.",
  },
  "student-contributor": {
    dbRole: "Student Contributor",
    title: "Student Contributor",
    tag: "Learning content",
    blurb: "Create original study notes, practice questions and worked explanations for LCAT, NET, CSS or MDCAT. Your sample should show accurate knowledge and clear reasoning. Do not submit copied paid questions, book extracts or past-paper material without permission.",
    linkLabel: "Writing sample or portfolio link",
    linkPlaceholder: "An optional document or sample you created yourself",
    messageLabel: "Which exam track and subject would you contribute to?",
    messagePlaceholder: "Share your strongest topics and the original material you could help create.",
  },
  "student-ambassador": {
    dbRole: "Student Ambassador",
    title: "Student Ambassador",
    tag: "Campus community",
    blurb: "Help introduce Arthic to students in your school, college, university or study community. The planned programme may include sharing approved updates, supporting a small introduction session and passing back honest feedback from learners.",
    linkLabel: "Campus society or public profile link",
    linkPlaceholder: "An optional public society page or profile",
    messageLabel: "Your student community and how you could contribute",
    messagePlaceholder: "Tell us about your campus or student community and how you would introduce Arthic responsibly.",
  },
  general: {
    dbRole: "General Student Interest",
    title: "General Student Interest",
    tag: "Open",
    blurb: "Tell us which Arthic exam track you know best and how you would like to contribute. This is an expression of interest while the student programmes are being organised.",
    linkLabel: "Portfolio or public profile link",
    linkPlaceholder: "An optional link to work you have created",
    messageLabel: "What would you like to contribute?",
    messagePlaceholder: "Tell us about your interests and the exam track you know.",
  },
};

const params = new URLSearchParams(window.location.search);
const roleKey = params.get("role") || "general";
const role = ROLES[roleKey] ?? ROLES.general;

const heading = document.querySelector<HTMLElement>("[data-role-heading]");
if (heading) heading.textContent = `Apply — ${role.title}.`;

const blurb = document.querySelector<HTMLElement>("[data-role-blurb]");
if (blurb) blurb.textContent = `You are registering interest in the ${role.title} programme. Fill in a few details and the team will review your application.`;

const tag = document.querySelector<HTMLElement>("[data-role-tag]");
if (tag) tag.textContent = role.tag;

const body = document.querySelector<HTMLElement>("[data-role-body]");
if (body) body.textContent = role.blurb;

const roleField = document.querySelector<HTMLInputElement>("[data-role-field]");
if (roleField) roleField.value = role.dbRole;

const linkLabel = document.querySelector<HTMLLabelElement>("[data-link-label]");
if (linkLabel) linkLabel.textContent = role.linkLabel;

const linkInput = document.querySelector<HTMLInputElement>("[data-link-input]");
if (linkInput) linkInput.placeholder = role.linkPlaceholder;

const messageLabel = document.querySelector<HTMLLabelElement>("[data-message-label]");
if (messageLabel) messageLabel.textContent = role.messageLabel;

const messageInput = document.querySelector<HTMLTextAreaElement>("[data-message-input]");
if (messageInput) messageInput.placeholder = role.messagePlaceholder;

document.title = `apply — ${role.title} — arthic`;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const form = document.querySelector<HTMLFormElement>("[data-apply-form]");

if (form) {
  initFormSubmit(form, {
    endpoint: "/api/apply",
    invalidMessage: "please fill in your name and a valid email.",
    successMessage: "application sent — thanks for reaching out.",
    buildPayload: (f) => {
      const name = (f.querySelector<HTMLInputElement>("input[name='name']")?.value || "").trim();
      const email = (f.querySelector<HTMLInputElement>("input[name='email']")?.value || "").trim();
      const link = (f.querySelector<HTMLInputElement>("input[name='link']")?.value || "").trim();
      const message = (f.querySelector<HTMLTextAreaElement>("textarea[name='message']")?.value || "").trim();
      const availability = (f.querySelector<HTMLSelectElement>("select[name='availability']")?.value || "").trim();
      const start = (f.querySelector<HTMLSelectElement>("select[name='start']")?.value || "").trim();
      const website = (f.querySelector<HTMLInputElement>("input[name='website']")?.value || "").trim();
      const roleValue = (f.querySelector<HTMLInputElement>("input[name='role']")?.value || "General").trim();
      if (!name || !EMAIL_RE.test(email)) return null;
      return { role: roleValue, name, email, link, message, availability, start, website };
    },
  });
}
