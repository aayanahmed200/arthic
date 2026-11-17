const HEADER = `<header class="nav reference-nav" data-nav>
  <div class="nav__inner container">
    <a href="/" class="nav__mark" aria-label="Arthic home"><span class="nav__wordmark">Arthic</span></a>
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
  <div class="footer-garden" aria-hidden="true">
<svg viewBox="0 0 1600 160" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M0 160V118C72 99 130 104 194 117C264 83 326 88 386 117C458 87 520 91 590 119C658 87 719 94 781 119C850 86 915 91 978 119C1048 85 1115 91 1176 116C1248 85 1310 92 1378 117C1450 89 1526 95 1600 114V160Z" fill="#9fd986"/>
  <g fill="#87c77b">
    <path d="M0 160V119C55 96 113 102 157 123C116 118 86 130 62 160Z"/>
    <path d="M246 160C263 124 267 90 249 53C286 74 305 108 288 143C316 115 348 112 374 128C344 139 318 151 306 160Z"/>
    <path d="M482 160C464 126 457 91 477 49C511 85 527 120 511 151C539 117 571 108 600 123C570 141 546 153 530 160Z"/>
    <path d="M738 160C722 123 721 86 744 46C770 80 786 118 771 150C799 119 834 110 858 128C831 145 805 155 786 160Z"/>
    <path d="M996 160C978 124 979 88 1001 48C1028 83 1043 119 1028 151C1058 119 1090 113 1116 130C1087 147 1062 156 1042 160Z"/>
    <path d="M1250 160C1233 123 1233 87 1255 50C1283 82 1299 119 1283 151C1310 120 1345 111 1370 130C1342 147 1317 156 1297 160Z"/>
    <path d="M1480 160C1494 128 1516 101 1553 86C1534 115 1531 141 1548 160Z"/>
  </g>
  <g fill="#a9dc8e" stroke="#5eaa6f" stroke-width="2" stroke-linejoin="round">
    <path d="M88 160C71 128 52 105 23 98C54 87 83 102 98 132C98 99 114 75 143 68C135 104 119 132 98 147V160Z"/>
    <path d="M187 160C179 129 181 99 200 69C224 100 232 132 216 157C240 130 265 125 286 138C264 152 242 158 222 160Z"/>
    <path d="M403 160C390 129 392 97 414 64C439 99 445 131 428 157C452 129 480 123 501 138C480 151 455 158 436 160Z"/>
    <path d="M647 160C635 129 638 97 659 64C681 100 689 130 674 157C697 129 725 123 747 138C724 152 702 158 682 160Z"/>
    <path d="M896 160C885 129 888 98 910 65C933 98 940 130 925 157C948 130 976 124 998 138C975 152 952 158 932 160Z"/>
    <path d="M1143 160C1131 129 1135 98 1156 64C1178 99 1186 130 1171 157C1195 130 1222 124 1244 138C1222 152 1198 158 1178 160Z"/>
    <path d="M1389 160C1378 128 1381 98 1402 65C1425 99 1433 130 1417 157C1440 130 1468 123 1490 138C1468 152 1445 158 1425 160Z"/>
  </g>
  <g fill="none" stroke="#5eaa6f" stroke-width="2" stroke-linecap="round">
    <path d="M98 160V132M216 160V140M428 160V140M674 160V140M925 160V140M1171 160V140M1417 160V140"/>
    <path d="M98 140L65 111M98 145L133 108M216 143L193 112M216 145L250 115M428 143L404 111M428 146L465 115M674 143L651 110M674 146L711 115M925 143L902 111M925 146L961 116M1171 143L1149 111M1171 146L1208 116M1417 143L1394 111M1417 146L1454 116"/>
  </g>
  <g stroke="#24392b" stroke-width="2" stroke-linecap="round">
    <path d="M325 50V83" stroke="#578f61"/><circle cx="325" cy="43" r="7" fill="#f1d36d"/><path d="M319 47L312 41M331 47L338 41" stroke="#f4e9a0"/>
    <path d="M795 60V91" stroke="#578f61"/><circle cx="795" cy="53" r="7" fill="#e8a4c2"/><path d="M789 57L782 51M801 57L808 51" stroke="#f5cadd"/>
    <path d="M1070 45V76" stroke="#578f61"/><circle cx="1070" cy="38" r="7" fill="#c3b3e8"/><path d="M1064 42L1057 36M1076 42L1083 36" stroke="#ded3f6"/>
  </g>
  <path d="M0 159H1600" stroke="#9fd986" stroke-width="3"/>
</svg>
</div>
  <footer class="footer">
    <div class="container">
      <div class="footer__top">
        <div class="footer__brand">
          <a href="/" class="footer__mark" aria-label="Arthic home"><span class="footer__wordmark">Arthic</span></a>
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
