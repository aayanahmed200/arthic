const HEADER = `<header class="site-header" data-header data-nav>
  <nav class="desktop-nav" aria-label="Primary navigation">
    <a href="/" data-nav-link>Home</a>
    <a href="/study-preview.html" data-nav-link>Practice</a>
    <a href="/pricing.html" data-nav-link>Pricing</a>
    <a href="/careers.html" data-nav-link>Careers</a>
  </nav>
  <div class="header-actions"><a class="button button--small" href="/waitlist.html">Join waitlist</a></div>
  <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="mobile-menu"
    aria-label="Open navigation" data-menu-toggle data-nav-toggle>
    <span></span><span></span><span class="sr-only" data-nav-toggle-label>Open navigation</span>
  </button>
</header>`;

const MOBILE_MENU = `<div class="mobile-menu" id="mobile-menu" data-mobile-menu data-mobile-nav hidden aria-hidden="true">
  <nav aria-label="Mobile navigation">
    <a href="/" data-mobile-link>Home</a>
    <a href="/study-preview.html" data-mobile-link>Practice</a>
    <a href="/pricing.html" data-mobile-link>Pricing</a>
    <a href="/careers.html" data-mobile-link>Careers</a>
    <a href="/waitlist.html" data-mobile-link>Join waitlist</a>
  </nav>
</div>`;

const FOOTER = `<footer class="site-footer" id="site-footer">
  <div class="footer-inner">
    <div class="footer-grid">
      <div class="footer-brand">
        <a class="brand brand--footer" href="/" aria-label="Arthic home"><img class="footer-wordmark" src="/arthic-footer-wordmark.png" alt="Arthic" width="360" height="102" /></a>
        <p class="footer-brand__description">A clearer place to prepare, practise and build confidence across Pakistan's entrance and competitive exams.</p>
        <a class="footer-email" href="mailto:hello@arthic.tech">hello@arthic.tech</a>
      </div>
      <nav class="footer-column" aria-label="Learn">
        <span>Learn</span>
        <a href="/study-preview.html">Practice preview</a>
        <a href="/subjects.html">Exam pathways</a>
        <a href="/method.html">How Arthic works</a>
        <a href="/pricing.html">Plans and pricing</a>
      </nav>
      <nav class="footer-column" aria-label="Exam boards">
        <span>Exam boards</span>
        <a href="/subjects.html#lcat">LCAT</a>
        <a href="/subjects.html#net">NUST NET</a>
        <a href="/subjects.html#css">CSS</a>
        <a href="/subjects.html#mdcat">MDCAT</a>
      </nav>
      <nav class="footer-column" aria-label="Arthic">
        <span>Arthic</span>
        <a href="/careers.html">Careers</a>
        <a href="/waitlist.html">Join early access</a>
        <a href="mailto:hello@arthic.tech">Contact</a>
      </nav>
      <nav class="footer-column" aria-label="Policies">
        <span>Policies</span>
        <a href="/terms.html">Terms of use</a>
        <a href="/privacy.html">Privacy policy</a>
        <a href="/cookies.html">Cookie policy</a>
      </nav>
    </div>
    <div class="footer-bottom">
      <p>© <span data-year>2026</span> Arthic. All rights reserved.</p>
      <span>Thoughtful practice. Clearer progress.</span>
      <a href="#top">Back to top ↑</a>
    </div>
  </div>
</footer>`;

let surfaceObserver: MutationObserver | null = null;

function applyReferenceSurfaces(): void {
  const cream = "#F7F2E8";
  const forest = "#1D4033";
  const surfaceSelector = [
    "main", ".content-main", ".home-page",
    "main > section:not(.not-found-card)",
    ".content-main > section:not(.not-found-card)",
    "[data-page-surface]"
  ].join(",");

  const applySurface = (surface: HTMLElement): void => {
    surface.style.setProperty("background-color", cream, "important");
    surface.style.setProperty("background-image", "none", "important");
    surface.style.setProperty("color", forest, "important");
  };

  document.documentElement.style.setProperty("background-color", cream, "important");
  document.documentElement.style.setProperty("background-image", "none", "important");
  document.body.style.setProperty("background-color", cream, "important");
  document.body.style.setProperty("background-image", "none", "important");
  document.body.style.setProperty("color", forest, "important");
  document.querySelectorAll<HTMLElement>(surfaceSelector).forEach(applySurface);

  // Keep delayed content on the same canvas too.
  if (!surfaceObserver) {
    surfaceObserver = new MutationObserver((records) => {
      records.forEach((record) => record.addedNodes.forEach((node) => {
        if (!(node instanceof HTMLElement)) return;
        if (node.matches(surfaceSelector)) applySurface(node);
        node.querySelectorAll<HTMLElement>(surfaceSelector).forEach(applySurface);
      }));
    });
    surfaceObserver.observe(document.body, { childList: true, subtree: true });
  }
}


function applyBrandFooter(): void {
  const cream = "#F7F2E8";
  const forest = "#1D4033";
  const footerSelector = ".site-footer,.footer-frame,.footer,.footer-inner,.footer-grid,.footer-column";
  document.querySelectorAll<HTMLElement>(footerSelector).forEach((surface) => {
    surface.style.setProperty("background-color", cream, "important");
    surface.style.setProperty("background-image", "none", "important");
    surface.style.setProperty("border", "0", "important");
    surface.style.setProperty("box-shadow", "none", "important");
    surface.style.setProperty("color", forest, "important");
  });
}

export function initReferenceChrome(): void {
  const existingHeader = document.querySelector<HTMLElement>("[data-nav], .site-header");
  if (existingHeader) existingHeader.outerHTML = HEADER;

  const existingMenu = document.querySelector<HTMLElement>("[data-mobile-nav], [data-mobile-menu]");
  if (existingMenu) existingMenu.outerHTML = MOBILE_MENU;

  const existingFooter = document.querySelector<HTMLElement>(".footer-frame, [data-footer-root], .site-footer");
  if (existingFooter) existingFooter.outerHTML = FOOTER;

  document.querySelector<HTMLMetaElement>('meta[name="theme-color"]')?.setAttribute("content", "#F7F2E8");
  document.querySelector<HTMLLinkElement>('link[rel="icon"]')?.setAttribute("href", "/favicon.svg");
  document.querySelector<HTMLLinkElement>('link[rel="apple-touch-icon"]')?.setAttribute("href", "/icon-512.png");
  applyReferenceSurfaces();
  applyBrandFooter();
}
