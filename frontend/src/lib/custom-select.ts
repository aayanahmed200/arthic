/**
 * Native <select> popups can't be styled reliably across browsers — no
 * rounded corners, no theme colors, nothing. This progressively enhances
 * any <select data-custom-select> into a themed button + listbox, while
 * keeping the real <select> in the DOM (hidden, but still holding the
 * live value) so nothing downstream — apply.ts reads these selects'
 * .value directly — needs to change.
 */
export function initCustomSelects(): void {
  document.querySelectorAll<HTMLSelectElement>("[data-custom-select]").forEach(enhanceSelect);
}

function enhanceSelect(select: HTMLSelectElement): void {
  const options = Array.from(select.options);

  const wrapper = document.createElement("div");
  wrapper.className = "custom-select";

  const trigger = document.createElement("button");
  trigger.type = "button";
  trigger.className = "custom-select__trigger";
  trigger.setAttribute("aria-haspopup", "listbox");
  trigger.setAttribute("aria-expanded", "false");
  trigger.innerHTML = `
    <span class="custom-select__value"></span>
    <svg viewBox="0 0 12 8" fill="none" aria-hidden="true"><path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" /></svg>
  `;
  const valueEl = trigger.querySelector<HTMLElement>(".custom-select__value")!;

  const listbox = document.createElement("div");
  listbox.className = "custom-select__listbox";
  listbox.setAttribute("role", "listbox");
  listbox.hidden = true;

  const optionEls = options.map((opt, i) => {
    const item = document.createElement("button");
    item.type = "button";
    item.className = "custom-select__option";
    item.setAttribute("role", "option");
    item.setAttribute("aria-selected", String(i === select.selectedIndex));
    item.textContent = opt.textContent ?? "";
    listbox.appendChild(item);
    return item;
  });

  function select_(index: number) {
    select.selectedIndex = index;
    valueEl.textContent = options[index]?.textContent ?? "";
    optionEls.forEach((el, i) => el.setAttribute("aria-selected", String(i === index)));
    select.dispatchEvent(new Event("change", { bubbles: true }));
  }

  function open() {
    listbox.hidden = false;
    trigger.setAttribute("aria-expanded", "true");
  }

  function close() {
    listbox.hidden = true;
    trigger.setAttribute("aria-expanded", "false");
  }

  trigger.addEventListener("click", () => (listbox.hidden ? open() : close()));

  optionEls.forEach((item, i) => {
    item.addEventListener("click", () => {
      select_(i);
      close();
      trigger.focus();
    });
  });

  document.addEventListener("click", (event) => {
    if (!listbox.hidden && !wrapper.contains(event.target as Node)) close();
  });

  wrapper.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !listbox.hidden) {
      close();
      trigger.focus();
    }
  });

  // the native select stays in the DOM (apply.ts reads its .value), just
  // out of the visual/keyboard flow now that the button above handles both
  select.setAttribute("aria-hidden", "true");
  select.tabIndex = -1;
  select.classList.add("custom-select__native");

  select.parentElement?.insertBefore(wrapper, select);
  wrapper.appendChild(trigger);
  wrapper.appendChild(listbox);
  wrapper.appendChild(select);

  select_(select.selectedIndex);
}
