const HEADER = `<header class="nav reference-nav" data-nav>
  <div class="nav__inner container">
    <a href="/" class="nav__mark" aria-label="Arthic home"><img class="nav__logo-mark" src="/arthic-mark.svg" width="34" height="34" alt="" /><span class="nav__wordmark">Arthic</span></a>
    <nav class="nav__links" aria-label="Primary navigation">
      <a href="/study-preview.html" data-nav-link>Practice</a>
      <a href="/pricing.html" data-nav-link>Pricing</a>
      <a href="/careers.html" data-nav-link>Careers</a>
    </nav>
    <div class="nav__utility"><a class="nav__cta" href="/waitlist.html">Join waitlist</a></div>
    <button class="nav__toggle" type="button" data-nav-toggle aria-expanded="false" aria-controls="mobileNav" aria-label="Open main menu"><span data-nav-toggle-label>Menu</span></button>
  </div>
</header>`;

const MOBILE_MENU = `<div class="mobile-nav" id="mobileNav" data-mobile-nav>
  <nav aria-label="Main navigation">
    <a href="/study-preview.html" data-mobile-link>Practice</a>
    <a href="/pricing.html" data-mobile-link>Pricing</a>
    <a href="/careers.html" data-mobile-link>Careers</a>
    <a href="/waitlist.html" data-mobile-link>Join waitlist</a>
  </nav>
  <p class="mobile-nav__foot">Focused preparation for LCAT, NET, CSS and MDCAT.</p>
</div>`;

const FOOTER = `<div class="footer-frame">
  <div class="footer-garden" aria-hidden="true"><img class="footer-foliage" src="/footer-foliage.svg" width="2048" height="166" alt="" /></div>
  <footer class="footer">
    <div class="container">
      <div class="footer__top">
        <div class="footer__brand">
          <a href="/" class="footer__mark" aria-label="Arthic home"><img class="footer__logo-mark" src="/arthic-mark.svg" width="34" height="34" alt="" /><span class="footer__wordmark">Arthic</span></a>
          <p class="footer__tagline">Focused practice and clear explanations for LCAT, NET, CSS and MDCAT.</p>
          <a class="footer__email" href="mailto:hello@arthic.tech">hello@arthic.tech</a>
        </div>
        <nav class="footer__col" aria-label="Practice">
          <span class="footer__col-label">Practice</span>
          <a href="/study-preview.html">Practice questions</a>
          <a href="/subjects.html">Exam pathways</a>
        </nav>
        <nav class="footer__col" aria-label="Exam tracks">
          <span class="footer__col-label">Exam tracks</span>
          <a href="/subjects.html#lcat">LCAT</a>
          <a href="/subjects.html#net">NET</a>
          <a href="/subjects.html#css">CSS</a>
          <a href="/subjects.html#mdcat">MDCAT</a>
        </nav>
        <nav class="footer__col" aria-label="Company">
          <span class="footer__col-label">Company</span>
          <a href="/careers.html">Careers</a>
          <a href="/waitlist.html">Early access</a>
          <a href="mailto:hello@arthic.tech">Contact</a>
        </nav>
        <nav class="footer__col" aria-label="Legal">
          <span class="footer__col-label">Legal</span>
          <a href="/terms.html">Terms of use</a>
          <a href="/privacy.html">Privacy policy</a>
          <a href="/cookies.html">Cookie policy</a>
        </nav>
      </div>
      <div class="footer__bottom">
        <p>© <span data-year>2026</span> Arthic</p>
        <span>Practice with purpose.</span>
        <a href="#top">Back to top ↑</a>
      </div>
    </div>
  </footer>
</div>`;

function setReferenceBackground(selector: string, color: string): void {
  document.querySelectorAll<HTMLElement>(selector).forEach((element) => {
    element.style.setProperty("background", color, "important");
    element.style.setProperty("background-image", "none", "important");
  });
}

function applyReferenceSurfaces(): void {
  document.documentElement.style.setProperty("background", "#cceb80", "important");
  document.body.style.setProperty("background", "#cceb80", "important");
  document.querySelector<HTMLElement>("main")?.style.setProperty("background", "#cceb80", "important");
  setReferenceBackground("body.content-page main > section", "#cceb80");
  setReferenceBackground("body.content-page .content-hero, body.content-page .oneprep-subhero, body.content-page .study-intro, body.content-page.legal-page .entry__head", "#d0ecfd");
  setReferenceBackground("body.content-page .oneprep-final-cta, body.content-page .content-cta", "#9fd986");
  setReferenceBackground("body.content-page .oneprep-pathway-section--tint", "#d9ef9f");
  setReferenceBackground("body.content-page.legal-page .entry__body, body.content-page.legal-page .entry", "#cceb80");
}

export function initReferenceChrome(): void {
  const existingHeader = document.querySelector<HTMLElement>("[data-nav]");
  if (!existingHeader) return;

  existingHeader.outerHTML = HEADER;
  const existingMenu = document.querySelector<HTMLElement>("[data-mobile-nav]");
  if (existingMenu) existingMenu.outerHTML = MOBILE_MENU;

  const existingFooter = document.querySelector<HTMLElement>(".footer-frame");
  if (existingFooter) existingFooter.outerHTML = FOOTER;

  document.querySelector<HTMLMetaElement>('meta[name="theme-color"]')?.setAttribute("content", "#d0ecfd");
  applyReferenceSurfaces();
}
