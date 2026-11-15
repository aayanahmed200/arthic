/**
 * Small, accessible finder for the four exam pathway groups.
 * Filters the route links already shown on the page.
 */
export function initExamFinder(): void {
  const input = document.querySelector<HTMLInputElement>("[data-exam-search]");
  const clear = document.querySelector<HTMLButtonElement>("[data-exam-clear]");
  const status = document.querySelector<HTMLElement>("[data-exam-status]");
  const empty = document.querySelector<HTMLElement>("[data-exam-empty]");
  const cards = Array.from(document.querySelectorAll<HTMLElement>("[data-exam-terms]"));

  if (!input || !status || !empty || cards.length === 0) return;

  const normalise = (value: string): string =>
    value.toLocaleLowerCase().normalize("NFKD")
      .replace(/[^a-z0-9\s-]/g, " ").replace(/\s+/g, " ").trim();

  const update = (): void => {
    const query = normalise(input.value);
    const terms = query.split(" ").filter(Boolean);
    let visible = 0;

    cards.forEach((card) => {
      const searchable = normalise((card.dataset.examTerms || "") + " " + (card.textContent || ""));
      const matches = terms.every((term) => searchable.includes(term));
      card.hidden = !matches;
      if (matches) visible += 1;
    });

    const label = visible === 1 ? "pathway" : "pathways";
    status.textContent = query
      ? String(visible) + " " + label + " found for “" + input.value.trim() + "”."
      : "Showing all " + String(cards.length) + " exam pathways.";
    empty.hidden = visible > 0;
    if (clear) clear.hidden = query.length === 0;
  };

  input.addEventListener("input", update);
  clear?.addEventListener("click", () => {
    input.value = "";
    update();
    input.focus();
  });
  update();
}
