const HEADER = `<header class="site-header" data-header data-nav>
  <a class="brand" href="/" aria-label="Arthic home">
    <img class="brand-mark" src="/arthic-mark.svg" width="44" height="44" alt="" />
    <span class="brand-name">Arthic</span>
  </a>
  <nav class="desktop-nav" aria-label="Primary navigation">
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
    <a href="/study-preview.html" data-mobile-link>Practice</a>
    <a href="/pricing.html" data-mobile-link>Pricing</a>
    <a href="/careers.html" data-mobile-link>Careers</a>
    <a href="/waitlist.html" data-mobile-link>Join waitlist</a>
  </nav>
</div>`;

const FOOTER = `<footer class="site-footer" id="site-footer">
  <div class="footer-garden" aria-hidden="true">
    <img class="footer-foliage" src="/footer-foliage.svg" width="2048" height="166" alt="" />
  </div>
  <div class="footer-inner">
    <div class="footer-grid">
      <div class="footer-brand">
        <a class="brand brand--footer" href="/" aria-label="Arthic home">
          <img class="brand-mark" src="/arthic-mark.svg" width="44" height="44" alt="" />
          <span class="brand-name">Arthic</span>
        </a>
        <a class="footer-email" href="mailto:hello@arthic.tech">hello@arthic.tech</a>
      </div>
      <nav class="footer-column" aria-label="Practice">
        <span>Practice</span>
        <a href="/study-preview.html">Practice questions</a>
        <a href="/subjects.html">Exam pathways</a>
      </nav>
      <nav class="footer-column" aria-label="Exam routes">
        <span>Exam routes</span>
        <a href="/subjects.html#lcat">LCAT</a>
        <a href="/subjects.html#net">NET</a>
        <a href="/subjects.html#css">CSS</a>
        <a href="/subjects.html#mdcat">MDCAT</a>
      </nav>
      <nav class="footer-column" aria-label="Company">
        <span>Company</span>
        <a href="/careers.html">Careers</a>
        <a href="/waitlist.html">Early access</a>
        <a href="mailto:hello@arthic.tech">Contact</a>
      </nav>
      <nav class="footer-column" aria-label="Legal">
        <span>Legal</span>
        <a href="/terms.html">Terms of use</a>
        <a href="/privacy.html">Privacy policy</a>
        <a href="/cookies.html">Cookie policy</a>
      </nav>
    </div>
  </div>
</footer>`;

function setReferenceBackground(selector: string, color: string): void {
  document.querySelectorAll<HTMLElement>(selector).forEach((element) => {
    element.style.setProperty("background", color, "important");
    element.style.setProperty("background-image", "none", "important");
  });
}

function applyReferenceSurfaces(): void {
  if (!document.body.classList.contains("content-page")) return;
  document.documentElement.style.setProperty("background", "#CCEB80", "important");
  document.body.style.setProperty("background", "#CCEB80", "important");
  document.querySelector<HTMLElement>("main")?.style.setProperty("background", "#CCEB80", "important");
  setReferenceBackground("body.content-page main > section", "#CCEB80");
  setReferenceBackground("body.content-page .content-hero, body.content-page .oneprep-subhero, body.content-page .study-intro, body.content-page.legal-page .entry__head", "#D0ECFD");
  setReferenceBackground("body.content-page .oneprep-final-cta, body.content-page .content-cta", "#9FD987");
  setReferenceBackground("body.content-page .oneprep-pathway-section--tint", "#E4F0BE");
  setReferenceBackground("body.content-page.legal-page .entry__body, body.content-page.legal-page .entry", "#CCEB80");
}

export function initReferenceChrome(): void {
  const existingHeader = document.querySelector<HTMLElement>("[data-nav], .site-header");
  if (existingHeader) existingHeader.outerHTML = HEADER;

  const existingMenu = document.querySelector<HTMLElement>("[data-mobile-nav], [data-mobile-menu]");
  if (existingMenu) existingMenu.outerHTML = MOBILE_MENU;

  const existingFooter = document.querySelector<HTMLElement>(".footer-frame, [data-footer-root], .site-footer");
  if (existingFooter) existingFooter.outerHTML = FOOTER;

  document.querySelector<HTMLMetaElement>('meta[name="theme-color"]')?.setAttribute("content", "#D0ECFD");
  document.querySelector<HTMLLinkElement>('link[rel="icon"]')?.setAttribute("href", "/favicon.svg?v=5");
  applyReferenceSurfaces();
}
