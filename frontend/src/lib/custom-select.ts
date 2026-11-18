/**
 * Progressively enhance native selects into consistent Arthic listboxes.
 * The original select stays in the form so existing .value and form logic
 * continue to work. Option changes are observed for dynamically populated
 * filters such as the practice subject selector.
 */
let selectObserver: MutationObserver | null = null;
let selectId = 0;

export function initCustomSelects(): void {
  document.querySelectorAll<HTMLSelectElement>("select[data-custom-select]").forEach(enhanceSelect);
  if (!selectObserver && document.body) {
    selectObserver = new MutationObserver((records) => {
      records.forEach((record) => record.addedNodes.forEach((node) => {
        if (!(node instanceof HTMLElement)) return;
        if (node.matches("select[data-custom-select]")) enhanceSelect(node as HTMLSelectElement);
        node.querySelectorAll<HTMLSelectElement>("select[data-custom-select]").forEach(enhanceSelect);
      }));
    });
    selectObserver.observe(document.body, { childList: true, subtree: true });
  }
}

function enhanceSelect(select: HTMLSelectElement): void {
  if (select.classList.contains("custom-select__native")) return;

  const wrapper = document.createElement("div");
  wrapper.className = "custom-select";

  const trigger = document.createElement("button");
  trigger.type = "button";
  trigger.className = "custom-select__trigger";
  trigger.id = select.id ? `${select.id}-custom-trigger` : `arthic-select-${++selectId}`;
  trigger.setAttribute("aria-haspopup", "listbox");
  trigger.setAttribute("aria-expanded", "false");

  const valueEl = document.createElement("span");
  valueEl.className = "custom-select__value";
  const arrow = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  arrow.setAttribute("viewBox", "0 0 12 8");
  arrow.setAttribute("aria-hidden", "true");
  arrow.setAttribute("focusable", "false");
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("d", "M1 1.5L6 6.5L11 1.5");
  path.setAttribute("fill", "none");
  path.setAttribute("stroke", "currentColor");
  path.setAttribute("stroke-width", "1.4");
  path.setAttribute("stroke-linecap", "round");
  path.setAttribute("stroke-linejoin", "round");
  arrow.appendChild(path);
  trigger.append(valueEl, arrow);

  const listbox = document.createElement("div");
  listbox.className = "custom-select__listbox";
  listbox.id = `${trigger.id}-listbox`;
  listbox.setAttribute("role", "listbox");
  listbox.setAttribute("aria-label", select.getAttribute("aria-label") || "Choose an option");
  listbox.hidden = true;
  trigger.setAttribute("aria-controls", listbox.id);

  let optionEls: HTMLButtonElement[] = [];
  let activeIndex = Math.max(0, select.selectedIndex);

  const syncValue = (): void => {
    valueEl.textContent = select.selectedOptions[0]?.textContent?.trim() || select.getAttribute("placeholder") || "Choose an option";
    trigger.disabled = select.disabled;
    trigger.setAttribute("aria-disabled", String(select.disabled));
    activeIndex = Math.max(0, select.selectedIndex);
    optionEls.forEach((item, index) => {
      item.setAttribute("aria-selected", String(index === select.selectedIndex));
      item.disabled = Boolean(select.options[index]?.disabled);
    });
  };

  const buildOptions = (): void => {
    const selected = select.selectedIndex;
    optionEls = Array.from(select.options).map((option, index) => {
      const item = document.createElement("button");
      item.type = "button";
      item.className = "custom-select__option";
      item.setAttribute("role", "option");
      item.setAttribute("aria-selected", String(index === selected));
      item.disabled = option.disabled;
      item.textContent = option.textContent?.trim() || "";
      item.addEventListener("click", () => {
        if (item.disabled) return;
        select.selectedIndex = index;
        select.dispatchEvent(new Event("change", { bubbles: true }));
        close();
        trigger.focus();
      });
      return item;
    });
    listbox.replaceChildren(...optionEls);
    syncValue();
  };

  const close = (restoreFocus = false): void => {
    listbox.hidden = true;
    trigger.setAttribute("aria-expanded", "false");
    if (restoreFocus) trigger.focus();
  };

  const open = (direction: 1 | -1 = 1): void => {
    if (select.disabled || !select.options.length) return;
    listbox.hidden = false;
    trigger.setAttribute("aria-expanded", "true");
    const selected = select.selectedIndex >= 0 ? select.selectedIndex : 0;
    activeIndex = Math.min(Math.max(selected, 0), optionEls.length - 1);
    const candidate = optionEls[activeIndex];
    candidate?.focus();
    if (!candidate) trigger.focus();
    if (direction === -1 && !candidate) activeIndex = optionEls.length - 1;
  };

  trigger.addEventListener("click", () => {
    if (listbox.hidden) open();
    else close();
  });

  trigger.addEventListener("keydown", (event) => {
    if (event.key === "ArrowDown") { event.preventDefault(); open(1); }
    if (event.key === "ArrowUp") { event.preventDefault(); open(-1); }
  });

  listbox.addEventListener("keydown", (event) => {
    if (event.key === "Escape") { event.preventDefault(); close(true); return; }
    if (event.key === "Tab") { close(false); return; }
    if (!["ArrowDown", "ArrowUp", "Home", "End"].includes(event.key)) return;
    event.preventDefault();
    if (event.key === "Home") activeIndex = 0;
    else if (event.key === "End") activeIndex = optionEls.length - 1;
    else activeIndex = (activeIndex + (event.key === "ArrowDown" ? 1 : -1) + optionEls.length) % optionEls.length;
    optionEls[activeIndex]?.focus();
  });

  document.addEventListener("pointerdown", (event) => {
    if (!listbox.hidden && event.target instanceof Node && !wrapper.contains(event.target)) close(false);
  });

  select.addEventListener("change", syncValue);
  const optionObserver = new MutationObserver(buildOptions);
  optionObserver.observe(select, { childList: true, subtree: true, characterData: true });

  // Transfer the visible label to the button while keeping the real field ID
  // and name intact for scripts and form submissions.
  const labels = Array.from(select.labels || []);
  labels.forEach((label) => { label.htmlFor = trigger.id; });
  select.setAttribute("aria-hidden", "true");
  select.tabIndex = -1;
  select.classList.add("custom-select__native");

  select.parentElement?.insertBefore(wrapper, select);
  wrapper.append(trigger, listbox, select);
  buildOptions();
}
