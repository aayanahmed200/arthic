/**
 * Button hover: the label rolls up and an identical copy rolls in from
 * below (the fill wipe is pure CSS in utilities.css). Wraps the label
 * text once at startup. Submit buttons are skipped: form-submit.ts owns
 * their text during sending/error states, and a duplicated label would
 * go stale the moment it changes.
 */
export function initButtons(): void {
  document.querySelectorAll<HTMLElement>(".btn").forEach((btn) => {
    if (btn.getAttribute("type") === "submit" || btn.hasAttribute("data-no-roll")) return;
    const label = Array.from(btn.children).find(
      (child): child is HTMLElement =>
        child instanceof HTMLElement && child.tagName === "SPAN" && child.children.length === 0 && !!child.textContent?.trim(),
    );
    if (!label || label.classList.contains("btn__label")) return;
    const text = label.textContent!.trim();
    label.classList.add("btn__label");
    label.textContent = "";
    const inner = document.createElement("span");
    inner.className = "btn__label-in";
    inner.dataset.label = text;
    inner.textContent = text;
    label.appendChild(inner);
  });
}
