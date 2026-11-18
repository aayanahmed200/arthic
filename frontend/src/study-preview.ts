import "./styles/main.css";
import "./styles/study-preview.css";
import "./styles/arthic-study-final.css";
import "./styles/global-final.css";
import { initCommon } from "./lib/common-init";
import { SAMPLE_QUESTIONS, type StudyQuestionPrompt } from "./data/sample-questions";
import { EXPANDED_SAMPLE_QUESTIONS } from "./data/expanded-sample-questions";
import { MORE_SAMPLE_QUESTIONS } from "./data/more-sample-questions";

initCommon();

interface StudyAnswer {
  selected: string;
  correct: string;
  isCorrect: boolean;
  explanation: string;
  takeaway: string;
}

const EXAMS = ["MDCAT", "LCAT", "NET", "CSS", "ALL"];
const SUBJECT_LABELS: Record<string, string> = {
  BIO: "Biology", CHEM: "Chemistry", PHY: "Physics", MATH: "Mathematics",
  CS: "Computer science", ENGLISH: "English", VERBAL: "Verbal reasoning",
  LOGIC: "Logical reasoning", GENERAL: "General studies", ANALYTICAL: "Analytical reasoning",
  PAKISTAN: "Pakistan studies", ECONOMICS: "Economics", INTERNATIONAL: "International relations",
};
const EXAM_LABELS: Record<string, string> = { MDCAT: "MDCAT", LCAT: "LCAT", NET: "NUST NET", CSS: "CSS", ALL: "All tracks" };

let QUESTION_FEED: StudyQuestionPrompt[] = [...SAMPLE_QUESTIONS, ...EXPANDED_SAMPLE_QUESTIONS, ...MORE_SAMPLE_QUESTIONS];

function subjectLabel(code: string): string {
  return SUBJECT_LABELS[code] ?? code;
}

async function loadQuestionFeed(): Promise<void> {
  try {
    const response = await fetch("/api/study/questions", {
      headers: { Accept: "application/json" },
      credentials: "same-origin",
    });
    if (!response.ok) return;
    const payload: unknown = await response.json();
    if (!payload || typeof payload !== "object" || !("questions" in payload)) return;
    const incoming = (payload as { questions?: unknown }).questions;
    if (!Array.isArray(incoming) || incoming.length === 0) return;
    const valid = incoming.every((raw): raw is StudyQuestionPrompt => {
      if (!raw || typeof raw !== "object") return false;
      const q = raw as Partial<StudyQuestionPrompt>;
      return typeof q.id === "string" &&
        ["LCAT", "NET", "CSS", "MDCAT"].includes(String(q.examCode)) &&
        typeof q.subjectCode === "string" && typeof q.topic === "string" &&
        typeof q.prompt === "string" && Array.isArray(q.options) &&
        q.options.length >= 2 &&
        q.options.every((o) => o && typeof o.key === "string" && typeof o.text === "string");
    });
    if (valid) QUESTION_FEED = incoming;
  } catch {
    // The bundled original set remains available if the question feed is offline.
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
  const feedbackAnswer = root.querySelector<HTMLElement>("[data-feedback-answer]");
  const feedbackIcon = root.querySelector<HTMLElement>("[data-feedback-icon]");
  const feedbackPoints = root.querySelector<HTMLUListElement>("[data-feedback-points]");
  const takeaway = root.querySelector<HTMLElement>("[data-feedback-takeaway]");
  const trackFilters = Array.from(root.querySelectorAll<HTMLButtonElement>("[data-exam-filter]"));
  const trackLabels = Array.from(root.querySelectorAll<HTMLElement>("[data-practice-track-label]"));
  const trackCounts = Array.from(root.querySelectorAll<HTMLElement>("[data-track-count]"));
  const questionBankCount = root.querySelector<HTMLElement>("[data-question-bank-count]");
  const questionTotal = root.querySelector<HTMLElement>("[data-question-total]");
  const bankTotal = root.querySelector<HTMLElement>("[data-bank-total]");
  const subjectFilter = root.querySelector<HTMLSelectElement>("[data-subject-filter]");
  const questionSearch = root.querySelector<HTMLInputElement>("[data-question-search]");
  const questionMap = root.querySelector<HTMLElement>("[data-question-map]");
  const mapCount = root.querySelector<HTMLElement>("[data-map-count]");
  const progressTrack = root.querySelector<HTMLElement>("[data-session-progress-track]");
  const progressFill = root.querySelector<HTMLElement>("[data-session-progress-fill]");
  const sidebarProgressFill = root.querySelector<HTMLElement>("[data-sidebar-progress-fill]");
  const progressLabel = root.querySelector<HTMLElement>("[data-session-progress-label]");
  const completedValue = root.querySelector<HTMLElement>("[data-completed-count]");
  const correctValue = root.querySelector<HTMLElement>("[data-correct-count]");
  const accuracyValue = root.querySelector<HTMLElement>("[data-accuracy-value]");
  const previousButton = root.querySelector<HTMLButtonElement>("[data-previous-question]");
  const nextButton = root.querySelector<HTMLButtonElement>("[data-next-question]");
  const finishButton = root.querySelector<HTMLButtonElement>("[data-finish-session]");
  const completeHeading = root.querySelector<HTMLElement>("[data-complete-heading]");
  const completeLede = root.querySelector<HTMLElement>("[data-complete-lede]");
  const completeStats = root.querySelector<HTMLElement>("[data-complete-stats]");
  const reviewList = root.querySelector<HTMLElement>("[data-review-list]");
  const resetButtons = root.querySelectorAll<HTMLButtonElement>("[data-reset-session]");

  if (
    questionScreen && completeScreen && number && topic && prompt && instruction &&
    optionList && feedback && feedbackTitle && feedbackAnswer && feedbackPoints && takeaway &&
    questionMap && subjectFilter && questionSearch && previousButton && nextButton &&
    finishButton && progressTrack && progressFill && sidebarProgressFill && progressLabel &&
    completedValue && correctValue && accuracyValue && completeHeading && completeLede &&
    completeStats && reviewList
  ) {
    let questionIndex = 0;
    let activeExam = new URLSearchParams(window.location.search).get("exam") || "MDCAT";
    let activeSubject = "ALL";
    let searchTerm = "";
    let isSubmitting = false;
    let pendingOptionKey: string | null = null;
    let hasInteracted = false;
    let questions: StudyQuestionPrompt[] = [...QUESTION_FEED];
    const answers = new Map<string, StudyAnswer>();
    if (!EXAMS.includes(activeExam)) activeExam = "MDCAT";

    function filteredQuestions(): StudyQuestionPrompt[] {
      const term = searchTerm.trim().toLocaleLowerCase();
      return QUESTION_FEED.filter((question) => {
        const examMatches = activeExam === "ALL" || question.examCode === activeExam;
        const subjectMatches = activeSubject === "ALL" || question.subjectCode === activeSubject;
        const textMatches = !term || [question.topic, question.prompt, question.subjectCode]
          .some((value) => value.toLocaleLowerCase().includes(term));
        return examMatches && subjectMatches && textMatches;
      });
    }

    function fillSubjectFilter(): void {
      const available = [...new Set(QUESTION_FEED
        .filter((question) => activeExam === "ALL" || question.examCode === activeExam)
        .map((question) => question.subjectCode))].sort();
      subjectFilter!.replaceChildren();
      const all = document.createElement("option");
      all.value = "ALL";
      all.textContent = "All subjects";
      subjectFilter!.append(all);
      available.forEach((code) => {
        const option = document.createElement("option");
        option.value = code;
        option.textContent = subjectLabel(code);
        subjectFilter!.append(option);
      });
      if (activeSubject !== "ALL" && !available.includes(activeSubject)) activeSubject = "ALL";
      subjectFilter!.value = activeSubject;
    }

    function getCounts() {
      const answered = questions.map((question) => answers.get(question.id))
        .filter((answer): answer is StudyAnswer => Boolean(answer));
      const correct = answered.filter((answer) => answer.isCorrect).length;
      return { answered: answered.length, correct, incorrect: answered.length - correct, total: questions.length };
    }

    function updateProgress(): void {
      const counts = getCounts();
      const percent = counts.total ? Math.round((counts.answered / counts.total) * 100) : 0;
      progressFill!.style.width = percent + "%";
      sidebarProgressFill!.style.width = percent + "%";
      progressTrack!.setAttribute("aria-valuenow", String(counts.answered));
      progressTrack!.setAttribute("aria-valuemax", String(counts.total));
      progressLabel!.textContent = counts.answered + " of " + counts.total + " answered";
      completedValue!.textContent = counts.answered + " / " + counts.total;
      correctValue!.textContent = String(counts.correct);
      accuracyValue!.textContent = counts.answered
        ? Math.round((counts.correct / counts.answered) * 100) + "%"
        : "—";
      const questionWord = counts.total === 1 ? "question" : "questions";
      if (questionBankCount) questionBankCount.textContent = counts.total + " " + questionWord + " in this set";
      if (questionTotal) questionTotal.textContent = counts.total + " " + questionWord;
      if (mapCount) mapCount.textContent = String(counts.total);
    }

    function renderQuestionMap(): void {
      questionMap!.replaceChildren();
      questions.forEach((question, index) => {
        const answer = answers.get(question.id);
        const button = document.createElement("button");
        button.type = "button";
        button.textContent = String(index + 1);
        button.className = index === questionIndex ? "is-current" : "";
        if (answer) button.classList.add(answer.isCorrect ? "is-correct" : "is-incorrect");
        if (isSubmitting) button.disabled = true;
        button.setAttribute("aria-label", "Open question " + (index + 1) +
          (answer ? (answer.isCorrect ? ", correct" : ", needs review") : ", not answered"));
        button.setAttribute("aria-current", index === questionIndex ? "step" : "false");
        button.addEventListener("click", () => goToQuestion(index));
        questionMap!.append(button);
      });
      updateProgress();
    }

    function renderExplanation(answer: StudyAnswer): void {
      feedback!.dataset.result = answer.isCorrect ? "correct" : "incorrect";
      feedbackTitle!.textContent = answer.isCorrect ? "Correct answer" : "Not quite";
      feedbackAnswer!.textContent = answer.isCorrect
        ? "You chose " + answer.selected + " — that is correct."
        : "You chose " + answer.selected + ". The correct answer is " + answer.correct + ".";
      if (feedbackIcon) feedbackIcon.textContent = answer.isCorrect ? "✓" : "×";
      feedbackPoints!.replaceChildren();
      answer.explanation.split(/\n+/).map((part) => part.trim()).filter(Boolean).forEach((part) => {
        const item = document.createElement("li");
        item.textContent = part;
        feedbackPoints!.append(item);
      });
      takeaway!.textContent = answer.takeaway;
      feedback!.hidden = false;
    }

    function renderOptions(question: StudyQuestionPrompt, savedAnswer?: StudyAnswer): void {
      optionList!.replaceChildren();
      question.options.forEach((option) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "study-option";
        const key = document.createElement("span");
        key.className = "study-option__key";
        key.setAttribute("aria-hidden", "true");
        key.textContent = option.key;
        const text = document.createElement("span");
        text.className = "study-option__text";
        text.textContent = option.text;
        button.append(key, text);
        button.setAttribute("aria-pressed", String(Boolean(savedAnswer && option.key === savedAnswer.selected)));
        if (savedAnswer) {
          button.disabled = true;
          const mark = document.createElement("span");
          mark.className = "study-option__mark";
          if (option.key === savedAnswer.correct) {
            button.classList.add("is-correct");
            mark.textContent = "✓ Correct";
            mark.setAttribute("aria-label", "Correct answer");
            button.append(mark);
          } else if (option.key === savedAnswer.selected && !savedAnswer.isCorrect) {
            button.classList.add("is-incorrect");
            mark.textContent = "× Your answer";
            mark.setAttribute("aria-label", "Your incorrect answer");
            button.append(mark);
          }
        } else {
          button.disabled = isSubmitting;
          if (isSubmitting && option.key === pendingOptionKey) button.classList.add("is-pending");
          button.addEventListener("click", () => { void submitAnswer(question, option.key); });
        }
        optionList!.append(button);
      });
    }

    function renderQuestion(moveFocus = false): void {
      const question = questions[questionIndex];
      if (!question) return;
      const savedAnswer = answers.get(question.id);
      number!.textContent = "QUESTION " + (questionIndex + 1) + " / " + questions.length;
      topic!.textContent = question.topic;
      prompt!.textContent = question.prompt;
      instruction!.textContent = savedAnswer
        ? "Answer checked. The correct choice is highlighted in green; an incorrect selection is marked red."
        : question.instruction;
      const subject = root!.querySelector<HTMLElement>("[data-current-subject]");
      if (subject) subject.textContent = subjectLabel(question.subjectCode);
      const exam = root!.querySelector<HTMLElement>("[data-current-exam]");
      if (exam) exam.textContent = EXAM_LABELS[question.examCode] ?? question.examCode;
      feedback!.hidden = !savedAnswer;
      feedbackPoints!.replaceChildren();
      if (savedAnswer) renderExplanation(savedAnswer);
      renderOptions(question, savedAnswer);
      previousButton!.disabled = questionIndex === 0 || isSubmitting;
      nextButton!.disabled = questionIndex >= questions.length - 1 || isSubmitting;
      finishButton!.disabled = isSubmitting || questions.length === 0;
      updateProgress();
      renderQuestionMap();
      if (moveFocus) prompt!.focus();
    }

    async function submitAnswer(question: StudyQuestionPrompt, optionKey: string): Promise<void> {
      if (isSubmitting || answers.has(question.id)) return;
      hasInteracted = true;
      isSubmitting = true;
      pendingOptionKey = optionKey;
      feedback!.dataset.result = "pending";
      feedbackTitle!.textContent = "Checking your answer…";
      feedbackAnswer!.textContent = "Your selected option will be marked as soon as the check returns.";
      if (feedbackIcon) feedbackIcon.textContent = "…";
      feedbackPoints!.replaceChildren();
      takeaway!.textContent = "";
      feedback!.hidden = false;
      renderOptions(question);
      previousButton!.disabled = true;
      nextButton!.disabled = true;
      finishButton!.disabled = true;
      try {
        const response = await fetch("/api/study/check", {
          method: "POST",
          headers: { Accept: "application/json", "Content-Type": "application/json" },
          credentials: "same-origin",
          body: JSON.stringify({ questionId: question.id, selectedOption: optionKey }),
        });
        if (!response.ok) throw new Error("Answer check failed with " + response.status);
        const result = await response.json() as {
          questionId?: unknown; selectedOption?: unknown; correctOption?: unknown;
          isCorrect?: unknown; explanation?: unknown; takeaway?: unknown;
        };
        if (
          result.questionId !== question.id || result.selectedOption !== optionKey ||
          typeof result.correctOption !== "string" || typeof result.isCorrect !== "boolean" ||
          typeof result.explanation !== "string" || typeof result.takeaway !== "string" ||
          !question.options.some((option) => option.key === result.correctOption)
        ) throw new Error("The answer checker returned an invalid response");

        answers.set(question.id, {
          selected: optionKey, correct: result.correctOption, isCorrect: result.isCorrect,
          explanation: result.explanation, takeaway: result.takeaway,
        });
        isSubmitting = false;
        pendingOptionKey = null;
        renderQuestion();
      } catch {
        isSubmitting = false;
        pendingOptionKey = null;
        feedback!.dataset.result = "error";
        feedbackTitle!.textContent = "We couldn't check that answer.";
        feedbackAnswer!.textContent = "No result was recorded. Try selecting an option again.";
        if (feedbackIcon) feedbackIcon.textContent = "!";
        feedbackPoints!.replaceChildren();
        const item = document.createElement("li");
        item.textContent = "Your answer has not been recorded. Choose an option again to retry.";
        feedbackPoints!.append(item);
        takeaway!.textContent = "";
        feedback!.hidden = false;
        renderOptions(questions[questionIndex]);
        previousButton!.disabled = questionIndex === 0;
        nextButton!.disabled = questionIndex >= questions.length - 1;
        finishButton!.disabled = questions.length === 0;
        renderQuestionMap();
      }
    }

    function goToQuestion(index: number): void {
      if (isSubmitting || index < 0 || index >= questions.length) return;
      questionIndex = index;
      questionScreen!.hidden = false;
      completeScreen!.hidden = true;
      renderQuestion(true);
    }

    function showComplete(): void {
      if (isSubmitting || !questions.length) return;
      questionScreen!.hidden = true;
      completeScreen!.hidden = false;
      const counts = getCounts();
      const percent = counts.answered ? Math.round((counts.correct / counts.answered) * 100) : 0;
      completeHeading!.textContent = counts.answered === counts.total ? "Session complete." : "Your session review.";
      completeLede!.textContent = counts.answered + " of " + counts.total +
        " questions answered. Select any question to review its explanation or continue an unfinished question.";
      completeStats!.replaceChildren();
      [
        ["Answered", counts.answered + " / " + counts.total],
        ["Correct", String(counts.correct)],
        ["Needs review", String(counts.incorrect)],
        ["Accuracy", counts.answered ? percent + "%" : "—"],
      ].forEach(([label, value]) => {
        const card = document.createElement("div");
        card.className = "study-complete__stat";
        const name = document.createElement("span");
        name.textContent = label;
        const amount = document.createElement("strong");
        amount.textContent = value;
        card.append(name, amount);
        completeStats!.append(card);
      });
      reviewList!.replaceChildren();
      questions.forEach((question, index) => {
        const answer = answers.get(question.id);
        const row = document.createElement("button");
        row.type = "button";
        row.className = "study-review-row";
        const status = document.createElement("span");
        status.className = "study-review-row__result" +
          (answer ? (answer.isCorrect ? "" : " is-incorrect") : " is-unanswered");
        status.textContent = answer ? (answer.isCorrect ? "Correct" : "Review") : "Not answered";
        const qIndex = document.createElement("span");
        qIndex.className = "study-review-row__index";
        qIndex.textContent = String(index + 1).padStart(2, "0");
        const body = document.createElement("p");
        body.className = "study-review-row__text";
        body.textContent = answer
          ? question.topic + ": " + (answer.isCorrect ? "correct answer recorded" : "review the explanation")
          : question.topic + ": not answered yet";
        row.setAttribute("aria-label", "Open question " + (index + 1) + ", " + status.textContent);
        row.append(qIndex, body, status);
        row.addEventListener("click", () => goToQuestion(index));
        reviewList!.append(row);
      });
      updateProgress();
      completeHeading!.focus();
    }

    function applyFilters(): void {
      if (isSubmitting) return;
      questions = filteredQuestions();
      questionIndex = 0;
      questionScreen!.hidden = false;
      completeScreen!.hidden = true;
      trackFilters.forEach((button) => button.setAttribute("aria-pressed", String(button.dataset.examFilter === activeExam)));
      trackLabels.forEach((element) => { element.textContent = EXAM_LABELS[activeExam] ?? activeExam; });
      if (questions.length) renderQuestion();
      else {
        questionMap!.replaceChildren();
        number!.textContent = "NO QUESTIONS";
        topic!.textContent = "Try another filter";
        prompt!.textContent = "No questions match these filters.";
        instruction!.textContent = "Choose a different subject or clear your search.";
        optionList!.replaceChildren();
        feedback!.hidden = true;
        previousButton!.disabled = true;
        nextButton!.disabled = true;
        finishButton!.disabled = true;
        updateProgress();
        renderQuestionMap();
      }
    }

    trackFilters.forEach((button) => button.addEventListener("click", () => {
      if (isSubmitting) return;
      hasInteracted = true;
      activeExam = button.dataset.examFilter || "ALL";
      activeSubject = "ALL";
      fillSubjectFilter();
      applyFilters();
    }));
    subjectFilter.addEventListener("change", () => {
      if (isSubmitting) return;
      hasInteracted = true;
      activeSubject = subjectFilter!.value || "ALL";
      applyFilters();
    });
    questionSearch.addEventListener("input", () => {
      if (isSubmitting) return;
      hasInteracted = true;
      searchTerm = questionSearch!.value;
      applyFilters();
    });
    previousButton.addEventListener("click", () => goToQuestion(questionIndex - 1));
    nextButton.addEventListener("click", () => goToQuestion(questionIndex + 1));
    finishButton.addEventListener("click", showComplete);
    resetButtons.forEach((button) => button.addEventListener("click", () => {
      if (isSubmitting) return;
      questions.forEach((question) => answers.delete(question.id));
      questionIndex = 0;
      completeScreen!.hidden = true;
      questionScreen!.hidden = false;
      renderQuestion(true);
    }));

    function refreshBankCounts(): void {
      if (bankTotal) bankTotal.textContent = String(QUESTION_FEED.length);
      trackCounts.forEach((element) => {
        const code = element.dataset.trackCount || "ALL";
        element.textContent = String(code === "ALL"
          ? QUESTION_FEED.length
          : QUESTION_FEED.filter((question) => question.examCode === code).length);
      });
    }

    function hydrateFromServer(): void {
      void loadQuestionFeed().then(() => {
        if (hasInteracted || answers.size || isSubmitting) return;
        refreshBankCounts();
        fillSubjectFilter();
        applyFilters();
      });
    }

    refreshBankCounts();
    fillSubjectFilter();
    applyFilters();
    hydrateFromServer();
  }
}
