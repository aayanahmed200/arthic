/**
 * The globe icon in the nav opens a small popover listing exam-board
 * coverage by region (Pakistan live, others coming soon) — the same
 * information already on the homepage's board-coverage strip, just
 * reachable from anywhere on the site.
 */
export function initRegionPopover(): void {
  const toggle = document.querySelector<HTMLButtonElement>("[data-region-toggle]");
  const popover = document.querySelector<HTMLElement>("[data-region-popover]");
  if (!toggle || !popover) return;

  const close = () => {
    popover.hidden = true;
    toggle.setAttribute("aria-expanded", "false");
  };
  const open = () => {
    popover.hidden = false;
    toggle.setAttribute("aria-expanded", "true");
  };

  toggle.addEventListener("click", (event) => {
    event.stopPropagation();
    if (popover.hidden) open();
    else close();
  });

  document.addEventListener("click", (event) => {
    if (popover.hidden) return;
    const target = event.target as Node;
    if (!popover.contains(target) && target !== toggle) close();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !popover.hidden) {
      close();
      toggle.focus();
    }
  });
}
