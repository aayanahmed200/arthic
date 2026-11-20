import { initReferenceChrome } from "./lib/reference-chrome";
import { initCustomSelects } from "./lib/custom-select";

initReferenceChrome();
initCustomSelects();

const menuToggle = document.querySelector<HTMLButtonElement>("[data-menu-toggle]");
const mobileMenu = document.querySelector<HTMLElement>("[data-mobile-menu]");

if (menuToggle && mobileMenu) {
  const menuLinks = Array.from(mobileMenu.querySelectorAll<HTMLAnchorElement>("a[href]"));

  const isOpen = () => !mobileMenu.hidden;

  const closeMenu = (restoreFocus = false) => {
    mobileMenu.hidden = true;
    mobileMenu.setAttribute("aria-hidden", "true");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
    if (restoreFocus) menuToggle.focus();
  };

  const openMenu = () => {
    mobileMenu.hidden = false;
    mobileMenu.setAttribute("aria-hidden", "false");
    menuToggle.setAttribute("aria-expanded", "true");
    menuToggle.setAttribute("aria-label", "Close navigation");
    menuLinks[0]?.focus();
  };

  menuToggle.addEventListener("click", () => {
    if (isOpen()) closeMenu(true);
    else openMenu();
  });

  menuLinks.forEach((link) => link.addEventListener("click", () => closeMenu(false)));

  document.addEventListener("pointerdown", (event) => {
    if (!isOpen() || !(event.target instanceof Node)) return;
    if (!mobileMenu.contains(event.target) && !menuToggle.contains(event.target)) closeMenu(false);
  });

  document.addEventListener("keydown", (event) => {
    if (!isOpen()) return;

    if (event.key === "Escape") {
      event.preventDefault();
      closeMenu(true);
      return;
    }

    if (event.key !== "Tab" || menuLinks.length === 0) return;
    const first = menuLinks[0];
    const last = menuLinks[menuLinks.length - 1];
    const active = document.activeElement;

    if (event.shiftKey && (active === first || !mobileMenu.contains(active))) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && (active === last || !mobileMenu.contains(active))) {
      event.preventDefault();
      first.focus();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 760 && isOpen()) closeMenu(false);
  });

  closeMenu(false);
}

/* Keep route navigation selected on every page, not only in-page anchors. */
const routeLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>(
  ".desktop-nav a[href], [data-mobile-menu] a[href]",
));

function normalizePath(pathname: string): string {
  let clean = pathname;
  if (clean.toLowerCase().endsWith(".html")) clean = clean.slice(0, -5);
  while (clean.length > 1 && clean.endsWith("/")) clean = clean.slice(0, -1);
  return clean || "/";
}

const currentPath = normalizePath(window.location.pathname);
routeLinks.forEach((link) => {
  const target = new URL(link.href, window.location.origin);
  const active = !target.hash && normalizePath(target.pathname) === currentPath;
  link.classList.toggle("is-active", active);
  if (active) link.setAttribute("aria-current", "page");
  else link.removeAttribute("aria-current");
});

const challengeButtons = document.querySelectorAll<HTMLButtonElement>("[data-answer]");
const challengeFeedback = document.querySelector<HTMLElement>("[data-challenge-feedback]");
challengeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    challengeButtons.forEach((choice) => choice.setAttribute("aria-pressed", "false"));
    button.setAttribute("aria-pressed", "true");
    if (!challengeFeedback) return;
    challengeFeedback.textContent = button.dataset.answer === "b"
      ? "Correct. Mitochondria contain the inner-membrane machinery used in aerobic respiration."
      : "Not quite. Review the roles of ribosomes, mitochondria and the Golgi apparatus, then try again.";
  });
});

const year = document.querySelector<HTMLElement>("[data-year]");
if (year) year.textContent = String(new Date().getFullYear());

document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const id = link.getAttribute("href")?.slice(1);
    if (!id) return;
    const target = document.getElementById(id);
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
    history.replaceState(null, "", "#" + id);
  });
});

/* Keep the current homepage section visibly selected while scrolling. */
const desktopSectionLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>(".desktop-nav a[href^='#']"));
const sectionTargets = desktopSectionLinks
  .map((link) => document.querySelector<HTMLElement>(link.getAttribute("href") || ""))
  .filter((target): target is HTMLElement => Boolean(target));

function setActiveSection(targetId: string): void {
  desktopSectionLinks.forEach((link) => {
    const active = link.getAttribute("href") === "#" + targetId;
    link.classList.toggle("is-active", active);
    if (active) link.setAttribute("aria-current", "location");
    else link.removeAttribute("aria-current");
  });
}

desktopSectionLinks.forEach((link) => {
  link.addEventListener("click", () => {
    const id = link.getAttribute("href")?.slice(1);
    if (id) setActiveSection(id);
  });
});

if ("IntersectionObserver" in window && sectionTargets.length) {
  const sectionObserver = new IntersectionObserver((entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (visible?.target instanceof HTMLElement) setActiveSection(visible.target.id);
  }, { rootMargin: "-22% 0px -62% 0px", threshold: [0, 0.15, 0.35, 0.6] });

  sectionTargets.forEach((target) => sectionObserver.observe(target));
}

/* Homepage practice preview: automatically check each selected answer. */
type HomeQuestion = {
  id: string;
  examCode: "LCAT" | "NET" | "CSS" | "MDCAT";
  topic: string;
  prompt: string;
  instruction: string;
  options: Array<{ key: string; text: string }>;
};

const homeCard = document.querySelector<HTMLElement>("[data-home-preview]");

if (homeCard) {
  const track = homeCard.querySelector<HTMLSelectElement>("[data-home-track]");
  const prompt = homeCard.querySelector<HTMLElement>("[data-home-prompt]");
  const topic = homeCard.querySelector<HTMLElement>("[data-home-topic]");
  const counter = homeCard.querySelector<HTMLElement>("[data-home-counter]");
  const instruction = homeCard.querySelector<HTMLElement>("[data-home-instruction]");
  const choices = homeCard.querySelector<HTMLElement>("[data-home-options]");
  const next = homeCard.querySelector<HTMLButtonElement>("[data-home-next]");
  const feedback = homeCard.querySelector<HTMLElement>("[data-home-feedback]");
  const feedbackTitle = homeCard.querySelector<HTMLElement>("[data-home-feedback-title]");
  const feedbackList = homeCard.querySelector<HTMLUListElement>("[data-home-feedback-points]");
  const takeaway = homeCard.querySelector<HTMLElement>("[data-home-takeaway]");
  const status = homeCard.querySelector<HTMLElement>("[data-home-status]");

  let bank: HomeQuestion[] = [];
  let active: HomeQuestion[] = [];
  let index = 0;
  let selected: string | null = null;
  let answered = false;
  let pending = false;

  const say = (message: string): void => {
    if (status) status.textContent = message;
  };

  const resetFeedback = (): void => {
    if (!feedback || !feedbackTitle || !feedbackList || !takeaway) return;
    feedback.hidden = true;
    feedback.removeAttribute("data-result");
    feedbackTitle.textContent = "";
    feedbackList.replaceChildren();
    takeaway.textContent = "";
  };

  const reveal = (result: {
    isCorrect: boolean;
    correctOption: string;
    explanation: string;
    takeaway: string;
  }): void => {
    if (!feedback || !feedbackTitle || !feedbackList || !takeaway || !choices) return;

    feedbackTitle.textContent = result.isCorrect
      ? "That’s correct."
      : "Not quite. Here’s why.";

    result.explanation
      .split(/\n+/)
      .map((line) => line.trim())
      .filter(Boolean)
      .forEach((line) => {
        const item = document.createElement("li");
        item.textContent = line;
        feedbackList.append(item);
      });

    takeaway.textContent = result.takeaway;
    feedback.dataset.result = result.isCorrect ? "correct" : "incorrect";
    feedback.hidden = false;

    choices.querySelectorAll<HTMLButtonElement>(".home-sample-option").forEach((button) => {
      button.disabled = true;
      const key = button.dataset.homeOption;
      if (key === result.correctOption) button.classList.add("is-correct");
      else if (key === selected && !result.isCorrect) button.classList.add("is-incorrect");
    });

    answered = true;
    pending = false;
    say(result.isCorrect ? "Correct answer." : "Review the explanation, then try another question.");
  };

  const checkAnswer = async (question: HomeQuestion, optionKey: string): Promise<void> => {
    if (answered || pending) return;
    selected = optionKey;
    pending = true;

    if (choices) {
      choices.querySelectorAll<HTMLButtonElement>(".home-sample-option").forEach((button) => {
        button.disabled = true;
        button.classList.toggle("is-pending", button.dataset.homeOption === optionKey);
      });
    }

    say("Checking your answer…");

    try {
      const response = await fetch("/api/study/check", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        credentials: "same-origin",
        body: JSON.stringify({ questionId: question.id, selectedOption: optionKey }),
      });
      const result = await response.json() as {
        isCorrect: boolean;
        correctOption: string;
        explanation: string;
        takeaway: string;
        error?: string;
      };
      if (!response.ok) throw new Error(result.error || "Answer checking is unavailable.");
      reveal(result);
    } catch (error) {
      pending = false;
      selected = null;
      choices?.querySelectorAll<HTMLButtonElement>(".home-sample-option").forEach((button) => {
        button.disabled = false;
        button.classList.remove("is-pending");
        button.setAttribute("aria-pressed", "false");
      });
      say(error instanceof Error ? error.message : "Could not check that answer. Try again.");
    }
  };

  const render = (): void => {
    const question = active[index];
    if (!question || !prompt || !topic || !counter || !instruction || !choices || !next) return;

    selected = null;
    answered = false;
    pending = false;
    prompt.textContent = question.prompt;
    topic.textContent = question.examCode + " / " + question.topic.toUpperCase();
    counter.textContent = String(index + 1).padStart(2, "0") + " / " +
      String(active.length).padStart(2, "0");
    instruction.textContent = question.instruction || "Choose one answer.";
    choices.replaceChildren();

    question.options.forEach((option) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "home-sample-option";
      button.dataset.homeOption = option.key;
      button.setAttribute("aria-pressed", "false");

      const key = document.createElement("span");
      key.textContent = option.key;
      const text = document.createElement("span");
      text.textContent = option.text;
      button.append(key, text);

      button.addEventListener("click", () => {
        if (answered || pending) return;
        selected = option.key;
        choices.querySelectorAll<HTMLButtonElement>(".home-sample-option").forEach((choice) => {
          choice.setAttribute("aria-pressed", String(choice === button));
        });
        void checkAnswer(question, option.key);
      });

      choices.append(button);
    });

    next.disabled = false;
    resetFeedback();
    say("Choose an option to see instant feedback.");
  };

  const setTrack = (code: string): void => {
    active = bank.filter((question) => question.examCode === code);
    index = 0;
    if (active.length) render();
    else say("No sample questions are available for this track yet.");
  };

  next?.addEventListener("click", () => {
    if (active.length) {
      index = (index + 1) % active.length;
      render();
    }
  });
  track?.addEventListener("change", () => setTrack(track.value));

  fetch("/api/study/questions", {
    headers: { Accept: "application/json" },
    credentials: "same-origin",
  })
    .then((response) => {
      if (!response.ok) throw new Error("Question feed unavailable.");
      return response.json() as Promise<{ questions: HomeQuestion[] }>;
    })
    .then((data) => {
      bank = Array.isArray(data.questions) ? data.questions : [];
      if (!bank.length) throw new Error("No questions available.");
      setTrack(track?.value || "LCAT");
    })
    .catch((error: unknown) => {
      say(error instanceof Error ? error.message : "Could not load questions.");
    });
}
