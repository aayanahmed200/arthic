/**
 * Nav chrome: background-on-scroll, mobile menu, active-section tracking.
 */
export function initNav(): void {
  const header = document.querySelector<HTMLElement>("[data-nav]");
  const toggle = document.querySelector<HTMLButtonElement>("[data-nav-toggle]");
  const toggleLabel = document.querySelector<HTMLElement>("[data-nav-toggle-label]");
  const mobileNav = document.querySelector<HTMLElement>("[data-mobile-nav]");

  initScrollState(header);
  initPageTransitions();
  initImagePlaceholders();
  initMobileMenu(toggle, toggleLabel, mobileNav);
  initActiveNavByPath();
  initYear();
}

/**
 * Most nav links are real routes (/, /pricing.html, /careers.html), so
 * "which nav link is active" is a one-time pathname match on load. A few
 * links (Subjects, Method) are in-page anchors into the homepage instead
 * (/#subjects) — those must never be marked active by a pathname-only
 * comparison, since "/#subjects" and "/" share the same pathname and
 * every anchor link would light up together the instant you're on the
 * homepage, regardless of scroll position. Skipping any link with a
 * hash is what keeps that from happening.
 */
function initActiveNavByPath(): void {
  const current = normalizePath(window.location.pathname);
  const links = document.querySelectorAll<HTMLAnchorElement>("[data-nav-link], [data-mobile-link]");

  links.forEach((link) => {
    const url = new URL(link.href, window.location.origin);
    const isCurrentPage = url.hash === "" && normalizePath(url.pathname) === current;
    link.classList.toggle("is-active", isCurrentPage);

    if (isCurrentPage) link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");
  });

  const homeMark = document.querySelector<HTMLAnchorElement>(".nav__mark");
  if (homeMark) {
    const isHome = current === "/";
    homeMark.classList.toggle("is-active", isHome);
    if (isHome) homeMark.setAttribute("aria-current", "page");
    else homeMark.removeAttribute("aria-current");
  }
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

  panel.setAttribute("role", "dialog");
  panel.setAttribute("aria-modal", "true");
  panel.setAttribute("aria-label", "Main menu");
  panel.setAttribute("aria-hidden", "true");
  panel.inert = true;

  const getFocusableItems = (): HTMLElement[] =>
    Array.from(
      panel.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      ),
    ).filter((item) => !item.hasAttribute("hidden"));

  const close = (restoreFocus = false) => {
    panel.classList.remove("is-open");
    panel.inert = true;
    panel.setAttribute("aria-hidden", "true");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open main menu");
    if (label) label.textContent = "menu";
    document.body.style.removeProperty("overflow");
    if (restoreFocus) toggle.focus();
  };

  const open = () => {
    panel.inert = false;
    panel.setAttribute("aria-hidden", "false");
    panel.classList.add("is-open");
    toggle.setAttribute("aria-expanded", "true");
    toggle.setAttribute("aria-label", "Close main menu");
    if (label) label.textContent = "close";
    document.body.style.overflow = "hidden";

    window.requestAnimationFrame(() => {
      if (!panel.classList.contains("is-open")) return;
      getFocusableItems()[0]?.focus();
    });
  };

  toggle.addEventListener("click", () => {
    if (panel.classList.contains("is-open")) close(true);
    else open();
  });

  panel.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => close(false));
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && panel.classList.contains("is-open")) {
      event.preventDefault();
      close(true);
    }
  });

  panel.addEventListener("keydown", (event) => {
    if (event.key !== "Tab" || !panel.classList.contains("is-open")) return;

    const items = getFocusableItems();
    if (items.length === 0) {
      event.preventDefault();
      toggle.focus();
      return;
    }

    const first = items[0];
    const last = items[items.length - 1];
    const active = document.activeElement;
    const focusIsInside = active instanceof HTMLElement && panel.contains(active);

    if (event.shiftKey && (!focusIsInside || active === first)) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && (!focusIsInside || active === last)) {
      event.preventDefault();
      first.focus();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 760 && panel.classList.contains("is-open")) close(false);
  });
}

function initYear(): void {
  const el = document.querySelector("[data-year]");
  if (el) el.textContent = String(new Date().getFullYear());
}


/**
 * Short, same-origin route transition. Real navigation still happens;
 * modified clicks, downloads, external links and same-page anchors stay native.
 */
function initPageTransitions(): void {
  const overlay = document.createElement("div");
  overlay.className = "route-transition";
  overlay.setAttribute("aria-hidden", "true");
  document.body.appendChild(overlay);

  document.addEventListener("click", (event) => {
    if (!(event.target instanceof Element)) return;
    const link = event.target.closest<HTMLAnchorElement>("a[href]");
    if (!link || event.defaultPrevented || event.button !== 0) return;
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    if (link.target && link.target !== "_self") return;
    if (link.hasAttribute("download") || link.hasAttribute("data-no-transition")) return;

    const destination = new URL(link.href, window.location.href);
    if (destination.origin !== window.location.origin) return;
    if (
      destination.pathname === window.location.pathname &&
      destination.search === window.location.search &&
      (destination.hash || !window.location.hash)
    ) return;

    event.preventDefault();
    document.body.classList.add("route-is-leaving");
    overlay.classList.add("is-active");
    window.setTimeout(() => window.location.assign(destination.href), 170);
  });
}


/** Add a shimmer only while a framed remote image is still loading. */
function initImagePlaceholders(): void {
  document.querySelectorAll<HTMLElement>("[data-image-frame]").forEach((frame) => {
    const img = frame.querySelector<HTMLImageElement>("img");
    if (!img) return;

    if (img.complete) {
      frame.classList.add(img.naturalWidth > 0 ? "is-loaded" : "is-failed");
      return;
    }

    frame.classList.add("is-loading");
    img.addEventListener("load", () => {
      frame.classList.remove("is-loading");
      frame.classList.add("is-loaded");
    }, { once: true });
    img.addEventListener("error", () => {
      frame.classList.remove("is-loading");
      frame.classList.add("is-failed");
    }, { once: true });
  });
}
