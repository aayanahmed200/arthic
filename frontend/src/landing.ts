const menuToggle = document.querySelector<HTMLButtonElement>("[data-menu-toggle]");
const mobileMenu = document.querySelector<HTMLElement>("[data-mobile-menu]");

if (menuToggle && mobileMenu) {
  const menuLinks = Array.from(mobileMenu.querySelectorAll<HTMLAnchorElement>("a[href]"));

  const isOpen = () => !mobileMenu.hidden;

  const closeMenu = (restoreFocus = false) => {
    mobileMenu.hidden = true;
    mobileMenu.setAttribute("aria-hidden", "true");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
    if (restoreFocus) menuToggle.focus();
  };

  const openMenu = () => {
    mobileMenu.hidden = false;
    mobileMenu.setAttribute("aria-hidden", "false");
    menuToggle.setAttribute("aria-expanded", "true");
    menuToggle.setAttribute("aria-label", "Close navigation");
    menuLinks[0]?.focus();
  };

  menuToggle.addEventListener("click", () => {
    if (isOpen()) closeMenu(true);
    else openMenu();
  });

  menuLinks.forEach((link) => link.addEventListener("click", () => closeMenu(false)));

  document.addEventListener("pointerdown", (event) => {
    if (!isOpen() || !(event.target instanceof Node)) return;
    if (!mobileMenu.contains(event.target) && !menuToggle.contains(event.target)) closeMenu(false);
  });

  document.addEventListener("keydown", (event) => {
    if (!isOpen()) return;

    if (event.key === "Escape") {
      event.preventDefault();
      closeMenu(true);
      return;
    }

    if (event.key !== "Tab" || menuLinks.length === 0) return;
    const first = menuLinks[0];
    const last = menuLinks[menuLinks.length - 1];
    const active = document.activeElement;

    if (event.shiftKey && (active === first || !mobileMenu.contains(active))) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && (active === last || !mobileMenu.contains(active))) {
      event.preventDefault();
      first.focus();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 760 && isOpen()) closeMenu(false);
  });

  closeMenu(false);
}

/* Keep route navigation selected on every page, not only in-page anchors. */
const routeLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>(
  ".desktop-nav a[href], [data-mobile-menu] a[href]",
));

function normalizePath(pathname: string): string {
  let clean = pathname;
  if (clean.toLowerCase().endsWith(".html")) clean = clean.slice(0, -5);
  while (clean.length > 1 && clean.endsWith("/")) clean = clean.slice(0, -1);
  return clean || "/";
}

const currentPath = normalizePath(window.location.pathname);
routeLinks.forEach((link) => {
  const target = new URL(link.href, window.location.origin);
  const active = !target.hash && normalizePath(target.pathname) === currentPath;
  link.classList.toggle("is-active", active);
  if (active) link.setAttribute("aria-current", "page");
  else link.removeAttribute("aria-current");
});

const challengeButtons = document.querySelectorAll<HTMLButtonElement>("[data-answer]");
const challengeFeedback = document.querySelector<HTMLElement>("[data-challenge-feedback]");
challengeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    challengeButtons.forEach((choice) => choice.setAttribute("aria-pressed", "false"));
    button.setAttribute("aria-pressed", "true");
    if (!challengeFeedback) return;
    challengeFeedback.textContent = button.dataset.answer === "b"
      ? "Correct. Mitochondria contain the inner-membrane machinery used in aerobic respiration."
      : "Not quite. Review the roles of ribosomes, mitochondria and the Golgi apparatus, then try again.";
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

/* Keep the current homepage section visibly selected while scrolling. */
const desktopSectionLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>(".desktop-nav a[href^='#']"));
const sectionTargets = desktopSectionLinks
  .map((link) => document.querySelector<HTMLElement>(link.getAttribute("href") || ""))
  .filter((target): target is HTMLElement => Boolean(target));

function setActiveSection(targetId: string): void {
  desktopSectionLinks.forEach((link) => {
    const active = link.getAttribute("href") === "#" + targetId;
    link.classList.toggle("is-active", active);
    if (active) link.setAttribute("aria-current", "location");
    else link.removeAttribute("aria-current");
  });
}

desktopSectionLinks.forEach((link) => {
  link.addEventListener("click", () => {
    const id = link.getAttribute("href")?.slice(1);
    if (id) setActiveSection(id);
  });
});

if ("IntersectionObserver" in window && sectionTargets.length) {
  const sectionObserver = new IntersectionObserver((entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (visible?.target instanceof HTMLElement) setActiveSection(visible.target.id);
  }, { rootMargin: "-22% 0px -62% 0px", threshold: [0, 0.15, 0.35, 0.6] });

  sectionTargets.forEach((target) => sectionObserver.observe(target));
}
