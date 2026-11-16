const HEADER = `<header class="nav reference-nav" data-nav>
  <div class="nav__inner container">
    <a href="/" class="nav__mark" aria-label="Arthic home"><span class="nav__wordmark">Arthic</span><span class="nav__spark" aria-hidden="true">✳</span></a>
    <nav class="nav__links" aria-label="Primary navigation">
      <a href="/#boards" data-nav-link>Board</a>
      <a href="/#sandboxes" data-nav-link>Sandbox</a>
      <a href="/#subscriptions" data-nav-link>Subscriptions</a>
      <a href="/#templates" data-nav-link>Templates</a>
      <a href="/#education" data-nav-link>Education</a>
      <a href="/#arcade" data-nav-link>Arcade <span aria-hidden="true">↗</span></a>
    </nav>
    <div class="nav__utility">
      <a class="nav__quote" href="mailto:hello@arthic.tech?subject=Arthic%20enquiry">Get a quote</a>
      <a class="nav__preview" href="/study-preview.html">Try preview</a>
      <a class="nav__cta" href="/waitlist.html">Join early access</a>
    </div>
    <button class="nav__toggle" type="button" data-nav-toggle aria-expanded="false" aria-controls="mobileNav" aria-label="Open main menu">
      <span data-nav-toggle-label>Menu</span>
    </button>
  </div>
</header>`;

const MOBILE_MENU = `<div class="mobile-nav" id="mobileNav" data-mobile-nav>
  <nav aria-label="Mobile navigation">
    <a href="/#boards" data-mobile-link>Board</a>
    <a href="/#sandboxes" data-mobile-link>Sandbox</a>
    <a href="/#subscriptions" data-mobile-link>Subscriptions</a>
    <a href="/#templates" data-mobile-link>Templates</a>
    <a href="/#education" data-mobile-link>Education</a>
    <a href="/#arcade" data-mobile-link>Arcade</a>
    <a href="/study-preview.html" data-mobile-link>Try preview</a>
    <a href="/waitlist.html" data-mobile-link>Join early access</a>
  </nav>
  <p class="mobile-nav__foot">A shared space for learning, ideas and useful resources. <a class="mobile-nav__mail" href="mailto:hello@arthic.tech">hello@arthic.tech</a></p>
</div>`;

const FOOTER = `<div class="footer-frame">
  <footer class="footer">
    <div class="container">
      <div class="footer__top">
        <div class="footer__brand">
          <a href="/" class="footer__mark" aria-label="Arthic home"><span class="footer__wordmark">Arthic</span><span class="footer__spark" aria-hidden="true">✳</span></a>
          <p class="footer__tagline">Make space for every idea.</p>
        </div>
        <nav class="footer__col" aria-label="Product">
          <span class="footer__col-label">Product</span>
          <a href="/#boards">Board</a>
          <a href="/#sandboxes">Sandbox</a>
          <a href="/#subscriptions">Features</a>
        </nav>
        <nav class="footer__col" aria-label="Explore">
          <span class="footer__col-label">Explore</span>
          <a href="/#templates">Templates</a>
          <a href="/subjects.html">Exam pathways</a>
          <a href="/method.html">How it works</a>
        </nav>
        <nav class="footer__col" aria-label="Support">
          <span class="footer__col-label">Support</span>
          <a href="/study-preview.html">Study preview</a>
          <a href="/careers.html">Careers</a>
          <a href="mailto:hello@arthic.tech">Contact us</a>
        </nav>
        <nav class="footer__col" aria-label="Legal">
          <span class="footer__col-label">Legal</span>
          <a href="/terms.html">Terms of use</a>
          <a href="/privacy.html">Privacy policy</a>
          <a href="/cookies.html">Cookie policy</a>
        </nav>
      </div>
      <div class="footer__bottom">
        <p>© <span data-year>2026</span> Arthic. All rights reserved.</p>
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
