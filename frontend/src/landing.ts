const menuToggle = document.querySelector<HTMLButtonElement>("[data-menu-toggle]");
const mobileMenu = document.querySelector<HTMLElement>("[data-mobile-menu]");

if (menuToggle && mobileMenu) {
  const closeMenu = (restoreFocus = false) => {
    mobileMenu.hidden = true;
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
    if (restoreFocus) menuToggle.focus();
  };
  menuToggle.addEventListener("click", () => {
    const willOpen = mobileMenu.hidden;
    mobileMenu.hidden = !willOpen;
    menuToggle.setAttribute("aria-expanded", String(willOpen));
    menuToggle.setAttribute("aria-label", willOpen ? "Close navigation" : "Open navigation");
  });
  mobileMenu.querySelectorAll<HTMLAnchorElement>("a").forEach((link) => link.addEventListener("click", () => closeMenu(true)));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !mobileMenu.hidden) closeMenu(true);
  });
}

const challengeButtons = document.querySelectorAll<HTMLButtonElement>("[data-answer]");
const challengeFeedback = document.querySelector<HTMLElement>("[data-challenge-feedback]");
challengeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    challengeButtons.forEach((choice) => choice.setAttribute("aria-pressed", "false"));
    button.setAttribute("aria-pressed", "true");
    if (!challengeFeedback) return;
    challengeFeedback.textContent = button.dataset.answer === "b"
      ? "Exactly. Putting ideas somewhere visible makes them easier to organise and connect."
      : "Not quite. Try writing the idea down and connecting its parts.";
  });
});

const year = document.querySelector<HTMLElement>("[data-year]");
if (year) year.textContent = String(new Date().getFullYear());

document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const id = link.getAttribute("href")?.slice(1);
    if (!id) return;
    const target = document.getElementById(id);
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
    history.replaceState(null, "", "#" + id);
  });
});
