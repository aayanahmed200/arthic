/**
 * Nav chrome: background-on-scroll, mobile menu, active-section tracking,
 * and the fixed "current section" folio label at the bottom of the screen.
 */
export function initNav(): void {
  const header = document.querySelector<HTMLElement>("[data-nav]");
  const toggle = document.querySelector<HTMLButtonElement>("[data-nav-toggle]");
  const toggleLabel = document.querySelector<HTMLElement>("[data-nav-toggle-label]");
  const mobileNav = document.querySelector<HTMLElement>("[data-mobile-nav]");
  const sections = Array.from(document.querySelectorAll<HTMLElement>("[data-section]"));
  const indexLabel = document.querySelector<HTMLElement>("[data-section-index-label]");

  initScrollState(header);
  initMobileMenu(toggle, toggleLabel, mobileNav);
  initActiveNavByPath();
  initSectionTracking(sections, indexLabel);
  initYear();
}

/**
 * Every page is now a real route (/, /about, /games, /careers) rather than
 * an anchor into one long page, so "which nav link is active" is a
 * one-time pathname match on load, not something scroll position decides.
 */
function initActiveNavByPath(): void {
  const current = normalizePath(window.location.pathname);
  const links = document.querySelectorAll<HTMLAnchorElement>("[data-nav-link], [data-mobile-link]");
  links.forEach((link) => {
    const target = normalizePath(new URL(link.href, window.location.origin).pathname);
    link.classList.toggle("is-active", target === current);
  });
}

function normalizePath(pathname: string): string {
  const stripped = pathname.replace(/\.html$/, "").replace(/\/index$/, "/");
  return stripped.length > 1 ? stripped.replace(/\/$/, "") : stripped;
}

function initScrollState(header: HTMLElement | null): void {
  if (!header) return;
  let ticking = false;

  const update = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 8);
    ticking = false;
  };

  update();
  window.addEventListener(
    "scroll",
    () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    },
    { passive: true },
  );
}

function initMobileMenu(
  toggle: HTMLButtonElement | null,
  label: HTMLElement | null,
  panel: HTMLElement | null,
): void {
  if (!toggle || !panel) return;

  const close = () => {
    panel.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    if (label) label.textContent = "menu";
    document.body.style.removeProperty("overflow");
  };

  const open = () => {
    panel.classList.add("is-open");
    toggle.setAttribute("aria-expanded", "true");
    if (label) label.textContent = "close";
    document.body.style.overflow = "hidden";
  };

  toggle.addEventListener("click", () => {
    if (panel.classList.contains("is-open")) close();
    else open();
  });

  panel.querySelectorAll("a").forEach((link) => link.addEventListener("click", close));

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && panel.classList.contains("is-open")) close();
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 760) close();
  });
}

function initSectionTracking(sections: HTMLElement[], indexLabel: HTMLElement | null): void {
  if (sections.length === 0 || !indexLabel) return;

  const setActive = (label: string) => {
    indexLabel.textContent = label;
  };

  if (!("IntersectionObserver" in window)) return;

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;
      const el = visible.target as HTMLElement;
      setActive(el.dataset.sectionLabel || el.id);
    },
    { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
  );

  sections.forEach((section) => observer.observe(section));
}

function initYear(): void {
  const el = document.querySelector("[data-year]");
  if (el) el.textContent = String(new Date().getFullYear());
}
