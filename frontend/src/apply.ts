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
  "student-content-lead": {
    dbRole: "Student Content Lead",
    title: "student content lead",
    tag: "content",
    blurb:
      "write the notes, MCQs, and past-paper breakdowns for one exam track — MDCAT, ECAT, NUST NET, FAST, CSS, PMS, or LUMS LNAT. best suited to someone who took that exact exam recently enough to remember exactly where it got confusing.",
    linkLabel: "portfolio / social link",
    linkPlaceholder: "a doc, blog, or anything you've written (optional)",
    messageLabel: "which exam track, and when you took it",
    messagePlaceholder: "e.g. MDCAT, took it in 2025 — strong on biology, shakier on physics",
  },
  "campus-ambassador": {
    dbRole: "Campus Ambassador",
    title: "campus ambassador",
    tag: "outreach",
    blurb:
      "bring arthic to your own university, college, or academy — a small demo, a mention in your batch's group chats, honest notes on what students actually ask for. flexible, part-time, and it looks good on a resume without pretending to be a full-time job.",
    linkLabel: "Instagram / LinkedIn link",
    linkPlaceholder: "Instagram / LinkedIn link (optional)",
    messageLabel: "your college/university and current year",
    messagePlaceholder: "e.g. second-year at LUMS, active in the pre-med society",
  },
  "student-engineer": {
    dbRole: "Student Engineer",
    title: "student engineer",
    tag: "engineering",
    blurb:
      "build the actual product alongside your own classes — frontend, backend, or the mentor's underlying prompting and evaluation. no legacy codebase, real ownership over what you ship, and hours built around your semester, not a 9-to-5.",
    linkLabel: "GitHub / portfolio link",
    linkPlaceholder: "GitHub / portfolio link (optional)",
    messageLabel: "what you'd want to build first",
    messagePlaceholder: "e.g. the study-plan generator, or the mentor's evaluation loop",
  },
  "mentor-quality-reviewer": {
    dbRole: "Mentor Quality Reviewer",
    title: "mentor quality reviewer",
    tag: "pedagogy",
    blurb:
      "read real, anonymized mentor conversations and flag where an explanation was unclear, an analogy didn't land, or the tone was off. especially useful if you've tutored, taught, or TA'd before — no engineering background required.",
    linkLabel: "portfolio / LinkedIn link",
    linkPlaceholder: "portfolio / LinkedIn link (optional)",
    messageLabel: "relevant tutoring / teaching background",
    messagePlaceholder: "e.g. TA'd intro physics for two semesters, tutored MDCAT students privately",
  },
  general: {
    dbRole: "General",
    title: "general application",
    tag: "open",
    blurb:
      "not quite one of the four listed roles? tell us what you'd rather be doing — we're small enough to figure it out from there.",
    linkLabel: "portfolio / social link",
    linkPlaceholder: "portfolio / social link (optional)",
    messageLabel: "what you'd rather be doing",
    messagePlaceholder: "tell us what role you want, or what you think we're missing",
  },
};

const params = new URLSearchParams(window.location.search);
const roleKey = params.get("role") || "general";
const role = ROLES[roleKey] ?? ROLES.general;

const heading = document.querySelector<HTMLElement>("[data-role-heading]");
if (heading) heading.textContent = `apply — ${role.title}.`;

const blurb = document.querySelector<HTMLElement>("[data-role-blurb]");
if (blurb) blurb.textContent = `you're applying for ${role.title} — fill in a few details and we'll get back to you.`;

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
