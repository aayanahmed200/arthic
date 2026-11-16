import "./styles/main.css";
import "./styles/study-preview.css";
import { initCommon } from "./lib/common-init";
import { SAMPLE_QUESTIONS, type StudyQuestionPrompt } from "./data/sample-questions";

initCommon();

interface StudyAnswer {
  selected: string;
  correct: string;
  isCorrect: boolean;
}

let QUESTIONS: StudyQuestionPrompt[] = [...SAMPLE_QUESTIONS];

async function loadQuestionFeed(): Promise<void> {
  try {
    const response = await fetch("/api/study/questions", {
      headers: { Accept: "application/json" },
      credentials: "same-origin",
    });
    if (!response.ok) return;

    const payload: unknown = await response.json();
    if (!payload || typeof payload !== "object" || !("questions" in payload)) return;
    const questions = (payload as { questions?: unknown }).questions;
    if (!Array.isArray(questions) || questions.length === 0) return;

    const valid = questions.every((question): question is StudyQuestionPrompt => {
      if (!question || typeof question !== "object") return false;
      const item = question as Partial<StudyQuestionPrompt>;
      return (
        typeof item.id === "string" &&
        typeof item.topic === "string" &&
        typeof item.prompt === "string" &&
        Array.isArray(item.options) &&
        item.options.length > 1 &&
        item.options.every((option) =>
          option && typeof option.key === "string" && typeof option.text === "string"
        ) &&
        item.options.every((option) => option.key.length > 0)
      );
    });

    if (valid) QUESTIONS = questions;
  } catch {
    // Keep the bundled sample set available if the API is temporarily offline.
  }
}

const root = document.querySelector<HTMLElement>("[data-study-preview]");
if (root) {
  const questionScreen = root.querySelector<HTMLElement>("[data-study-question-screen]");
  const completeScreen = root.querySelector<HTMLElement>("[data-study-complete]");
  const number = root.querySelector<HTMLElement>("[data-question-number]");
  const topic = root.querySelector<HTMLElement>("[data-question-topic]");
  const prompt = root.querySelector<HTMLElement>("[data-question-prompt]");
  const instruction = root.querySelector<HTMLElement>("[data-question-instruction]");
  const optionList = root.querySelector<HTMLElement>("[data-question-options]");
  const feedback = root.querySelector<HTMLElement>("[data-question-feedback]");
  const feedbackTitle = root.querySelector<HTMLElement>("[data-feedback-title]");
  const feedbackBody = root.querySelector<HTMLElement>("[data-feedback-body]");
  const takeaway = root.querySelector<HTMLElement>("[data-feedback-takeaway]");
  const checkButton = root.querySelector<HTMLButtonElement>("[data-check-answer]");
  const nextButton = root.querySelector<HTMLButtonElement>("[data-next-question]");
  const progressTrack = root.querySelector<HTMLElement>("[data-session-progress-track]");
  const progressFill = root.querySelector<HTMLElement>("[data-session-progress-fill]");
  const sidebarProgressFill = root.querySelector<HTMLElement>("[data-sidebar-progress-fill]");
  const progressLabel = root.querySelector<HTMLElement>("[data-session-progress-label]");
  const completedValue = root.querySelector<HTMLElement>("[data-completed-count]");
  const correctValue = root.querySelector<HTMLElement>("[data-correct-count]");
  const accuracyValue = root.querySelector<HTMLElement>("[data-accuracy-value]");
  const completeHeading = root.querySelector<HTMLElement>("[data-complete-heading]");
  const completeLede = root.querySelector<HTMLElement>("[data-complete-lede]");
  const completeStats = root.querySelector<HTMLElement>("[data-complete-stats]");
  const reviewList = root.querySelector<HTMLElement>("[data-review-list]");
  const resetButtons = root.querySelectorAll<HTMLButtonElement>("[data-reset-session]");

  if (
    questionScreen && completeScreen && number && topic && prompt && instruction &&
    optionList && feedback && feedbackTitle && feedbackBody && takeaway &&
    checkButton && nextButton && progressFill && progressLabel &&
    completedValue && correctValue && accuracyValue && completeHeading &&
    completeLede && completeStats && reviewList
  ) {
    let questionIndex = 0;
    let selectedKey: string | null = null;
    const answers: StudyAnswer[] = [];
    let hasInteracted = false;

    const correctCount = () => answers.filter((answer) => answer.isCorrect).length;
    const accuracy = () => answers.length ? Math.round((correctCount() / answers.length) * 100) : null;

    function updateProgress(): void {
      const completed = answers.length;
      const correct = correctCount();
      const percent = Math.round((completed / QUESTIONS.length) * 100);

      progressFill!.style.width = percent + "%";
      sidebarProgressFill!.style.width = percent + "%";
      progressTrack!.setAttribute("aria-valuenow", String(percent));
      progressLabel!.textContent = completed + " of " + QUESTIONS.length + " answered";
      completedValue!.textContent = completed + " / " + QUESTIONS.length;
      correctValue!.textContent = String(correct);
      accuracyValue!.textContent = accuracy() === null ? "—" : accuracy() + "%";
    }

    function renderOptions(question: StudyQuestionPrompt): void {
      optionList!.replaceChildren();

      question.options.forEach((option) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "study-option";
        button.setAttribute("aria-pressed", "false");
        button.innerHTML =
          '<span class="study-option__key" aria-hidden="true"></span>' +
          '<span class="study-option__text"></span>';
        button.querySelector<HTMLElement>(".study-option__key")!.textContent = option.key;
        button.querySelector<HTMLElement>(".study-option__text")!.textContent = option.text;

        button.addEventListener("click", () => {
          if (selectedKey !== null || answers[questionIndex]) return;
          hasInteracted = true;
          selectedKey = option.key;
          optionList!.querySelectorAll<HTMLButtonElement>(".study-option").forEach((choice) => {
            choice.setAttribute("aria-pressed", String(choice === button));
          });
          checkButton!.disabled = false;
        });

        optionList!.append(button);
      });
    }

    function renderQuestion(moveFocus = false): void {
      const question = QUESTIONS[questionIndex];
      selectedKey = null;
      number!.textContent = "Question " + (questionIndex + 1) + " / " + QUESTIONS.length;
      topic!.textContent = question.topic;
      prompt!.textContent = question.prompt;
      instruction!.textContent = question.instruction;
      feedback!.hidden = true;
      feedback!.removeAttribute("data-result");
      checkButton!.hidden = false;
      checkButton!.disabled = true;
      checkButton!.classList.remove("is-loading");
      checkButton!.removeAttribute("aria-busy");
      checkButton!.textContent = "Check answer";
      nextButton!.hidden = true;
      nextButton!.textContent = questionIndex === QUESTIONS.length - 1 ? "View session results" : "Next question";
      renderOptions(question);
      updateProgress();
      if (moveFocus) prompt!.focus();
    }

    async function checkAnswer(): Promise<void> {
      if (selectedKey === null || answers[questionIndex]) return;
      const question = QUESTIONS[questionIndex];
      checkButton!.disabled = true;
      checkButton!.classList.add("is-loading");
      checkButton!.setAttribute("aria-busy", "true");
      checkButton!.textContent = "Checking…";

      try {
        const response = await fetch("/api/study/check", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          credentials: "same-origin",
          body: JSON.stringify({
            questionId: question.id,
            selectedOption: selectedKey,
          }),
        });

        if (!response.ok) {
          throw new Error("The answer checker returned " + response.status);
        }

        const result = await response.json() as {
          questionId?: unknown;
          selectedOption?: unknown;
          correctOption?: unknown;
          isCorrect?: unknown;
          explanation?: unknown;
          takeaway?: unknown;
        };

        if (
          result.questionId !== question.id ||
          result.selectedOption !== selectedKey ||
          typeof result.correctOption !== "string" ||
          typeof result.isCorrect !== "boolean" ||
          typeof result.explanation !== "string" ||
          typeof result.takeaway !== "string" ||
          !question.options.some((option) => option.key === result.correctOption)
        ) {
          throw new Error("The answer checker returned an invalid response");
        }

        const correctOption = result.correctOption;
        const isCorrect = result.isCorrect;
        answers.push({ selected: selectedKey, correct: correctOption, isCorrect });
        feedback!.dataset.result = isCorrect ? "correct" : "incorrect";
        feedbackTitle!.textContent = isCorrect ? "That's correct." : "Not quite — let's unpack it.";
        feedbackBody!.textContent = result.explanation;
        takeaway!.textContent = result.takeaway;
        feedback!.hidden = false;

        optionList!.querySelectorAll<HTMLButtonElement>(".study-option").forEach((button) => {
          const key = button.querySelector<HTMLElement>(".study-option__key")?.textContent ?? "";
          button.disabled = true;
          if (key === correctOption) button.classList.add("is-correct");
          else if (key === selectedKey && !isCorrect) button.classList.add("is-incorrect");
        });

        checkButton!.classList.remove("is-loading");
        checkButton!.removeAttribute("aria-busy");
        checkButton!.textContent = "Check answer";
        checkButton!.hidden = true;
        nextButton!.hidden = false;
        updateProgress();
      } catch {
        feedback!.removeAttribute("data-result");
        feedbackTitle!.textContent = "Answer checking is unavailable.";
        feedbackBody!.textContent =
          "The question is still here, but the answer service could not be reached. Please try again shortly.";
        takeaway!.textContent = "";
        feedback!.hidden = false;
        checkButton!.classList.remove("is-loading");
        checkButton!.removeAttribute("aria-busy");
        checkButton!.textContent = "Check answer";
        checkButton!.disabled = false;
      }
    }

    function showComplete(): void {
      questionScreen!.hidden = true;
      completeScreen!.hidden = false;

      const score = correctCount();
      const total = QUESTIONS.length;
      const percent = accuracy() ?? 0;

      completeHeading!.textContent = score === total ? "A clean sweep." : "Session complete.";
      completeLede!.textContent =
        "You answered " + total + " sample questions. Review each response below, then reset the preview to try the set again.";

      completeStats!.innerHTML =
        '<div class="study-complete__stat"><span>Correct</span><strong>' + score + ' / ' + total + '</strong></div>' +
        '<div class="study-complete__stat"><span>Accuracy</span><strong>' + percent + '%</strong></div>' +
        '<div class="study-complete__stat"><span>Questions</span><strong>' + total + '</strong></div>';

      reviewList!.replaceChildren();
      QUESTIONS.forEach((question, index) => {
        const answer = answers[index];
        const row = document.createElement("div");
        row.className = "study-review-row";
        const result = document.createElement("span");
        result.className = "study-review-row__result" + (answer.isCorrect ? "" : " is-incorrect");
        result.textContent = answer.isCorrect ? "Correct" : "Review";
        const qIndex = document.createElement("span");
        qIndex.className = "study-review-row__index";
        qIndex.textContent = String(index + 1).padStart(2, "0");
        const text = document.createElement("p");
        text.className = "study-review-row__text";
        const selected = question.options.find((option) => option.key === answer.selected)?.text ?? answer.selected;
        const correct = question.options.find((option) => option.key === answer.correct)?.text ?? answer.correct;
        text.textContent = question.topic + ": your answer — " + selected + "; correct answer — " + correct + ".";
        row.append(qIndex, text, result);
        reviewList!.append(row);
      });
      updateProgress();
      completeHeading!.focus();
    }

    checkButton.addEventListener("click", () => { void checkAnswer(); });
    nextButton.addEventListener("click", () => {
      if (answers.length !== questionIndex + 1) return;
      if (questionIndex < QUESTIONS.length - 1) {
        questionIndex += 1;
        renderQuestion(true);
      } else {
        showComplete();
      }
    });

    resetButtons.forEach((button) => {
      button.addEventListener("click", () => {
        questionIndex = 0;
        selectedKey = null;
        answers.length = 0;
        completeScreen!.hidden = true;
        questionScreen!.hidden = false;
        renderQuestion(true);
      });
    });

    // The bundled sample appears immediately; a slower feed may replace it
    // only before the student has started answering.
    renderQuestion();
    void loadQuestionFeed().then(() => {
      if (!hasInteracted && answers.length === 0 && questionIndex === 0) renderQuestion();
    });
  }
}
