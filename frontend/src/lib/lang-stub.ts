/**
 * arthic is English-only for now — the full Urdu translation toggle
 * (native script, RTL layout) has been pulled back to a "coming soon"
 * state rather than shipped half-working. This wires the nav's globe
 * button to a small, honest tooltip instead of pretending to switch
 * languages. No localStorage, no dictionary, no dir="rtl" — if/when
 * more languages actually ship, this is the file that gets replaced.
 */
const MESSAGE = "more languages — coming soon";
let openPopover: HTMLElement | null = null;

export function initLangStub(): void {
  const toggles = document.querySelectorAll<HTMLButtonElement>("[data-lang-toggle]");
  if (toggles.length === 0) return;

  toggles.forEach((toggle) => {
    toggle.addEventListener("click", (event) => {
      event.stopPropagation();
      if (openPopover && toggle.contains(document.activeElement)) {
        closePopover();
        return;
      }
      showPopover(toggle);
    });
  });

  document.addEventListener("click", closePopover);
  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closePopover();
  });
}

function showPopover(anchor: HTMLButtonElement): void {
  closePopover();
  const el = document.createElement("span");
  el.className = "lang-stub__popover";
  el.setAttribute("role", "status");
  el.textContent = MESSAGE;
  anchor.appendChild(el);
  openPopover = el;
  window.setTimeout(closePopover, 2600);
}

function closePopover(): void {
  if (!openPopover) return;
  openPopover.remove();
  openPopover = null;
}
