/**
 * FAQ accordion. Progressive enhancement: with no JS the answers are
 * just visible text (the .faq-js class that collapses them is only
 * added here). Question rows become real buttons so keyboard and screen
 * reader users get expanded/collapsed state for free.
 */
export function initFaq(): void {
  document.querySelectorAll<HTMLElement>(".pricing-faq__list").forEach((list) => {
    list.classList.add("faq-js");
    list.querySelectorAll<HTMLElement>(".pricing-faq__item").forEach((item, i) => {
      const dt = item.querySelector("dt");
      const dd = item.querySelector("dd");
      if (!dt || !dd) return;

      const id = `faq-a-${Math.random().toString(36).slice(2, 8)}-${i}`;
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "faq__q";
      btn.setAttribute("aria-expanded", "false");
      btn.setAttribute("aria-controls", id);
      btn.innerHTML = `<span>${dt.innerHTML}</span><span class="faq__icon" aria-hidden="true"></span>`;
      dt.textContent = "";
      dt.appendChild(btn);

      const inner = document.createElement("div");
      inner.className = "faq__a-in";
      while (dd.firstChild) inner.appendChild(dd.firstChild);
      dd.appendChild(inner);
      dd.id = id;
      dd.setAttribute("role", "region");

      btn.addEventListener("click", () => {
        const open = item.classList.toggle("is-open");
        btn.setAttribute("aria-expanded", String(open));
      });
    });
  });
}
