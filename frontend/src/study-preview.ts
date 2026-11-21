import "./styles/main.css";
import type { StudyQuestionPrompt } from "./data/sample-questions";
import "./styles/study-preview.css";
import "./styles/arthic-study-final.css";
import "./styles/brand-final.css";
import "./styles/ui-polish.css";
import "./styles/practice-layout-fixes.css";
import { initCommon } from "./lib/common-init";

initCommon();

interface StudyAnswer {
  selected: string;
  correct: string;
  isCorrect: boolean;
  explanation: string;
  takeaway: string;
}

const SUBJECT_LABELS: Record<string, string> = {
  BIO: "Biology", CHEM: "Chemistry", PHY: "Physics", MATH: "Mathematics",
  CS: "Computer science", ENGLISH: "English", VERBAL: "Verbal reasoning",
  LOGIC: "Logical reasoning", GENERAL: "General studies", ANALYTICAL: "Analytical reasoning",
  PAKISTAN: "Pakistan studies", ECONOMICS: "Economics", INTERNATIONAL: "International relations",
  URDU: "Urdu", ISLAMIC: "Islamic studies", CIVICS: "Civics & ethics",
  GENERAL_ABILITIES: "General abilities", GENERAL_KNOWLEDGE: "General knowledge",
};
const EXAM_LABELS: Record<string, string> = { MDCAT: "MDCAT", LCAT: "LCAT", NET: "NUST NET", CSS: "CSS", ALL: "All tracks" };

let QUESTION_FEED: StudyQuestionPrompt[] = [];
let questionFeedLoading = true;
let questionFeedUnavailable = false;

function displaySubjectCode(question: StudyQuestionPrompt): string {
  if (question.examCode === "LCAT" && ["ENGLISH", "LOGIC", "ANALYTICAL"].includes(question.subjectCode)) return "VERBAL";
  return question.subjectCode;
}

function subjectLabel(code: string): string {
  return SUBJECT_LABELS[code] ?? code;
}

async function loadQuestionFeed(): Promise<void> {
  try {
    const response = await fetch("/api/study/questions", {
      headers: { Accept: "application/json" },
      credentials: "same-origin",
    });
    if (!response.ok) throw new Error("Question feed request failed with " + response.status);
    const payload: unknown = await response.json();
    if (!payload || typeof payload !== "object" || !("questions" in payload)) {
      throw new Error("Question feed response was incomplete");
    }
    const incoming = (payload as { questions?: unknown }).questions;
    if (!Array.isArray(incoming) || incoming.length === 0) {
      throw new Error("Question feed was empty");
    }
    const valid = incoming.every((raw): raw is StudyQuestionPrompt => {
      if (!raw || typeof raw !== "object") return false;
      const q = raw as Partial<StudyQuestionPrompt>;
      return typeof q.id === "string" &&
        ["LCAT", "NET", "CSS", "MDCAT"].includes(String(q.examCode)) &&
        typeof q.subjectCode === "string" && typeof q.topic === "string" &&
        typeof q.prompt === "string" &&
        ["EASY", "STANDARD", "CHALLENGING"].includes(String(q.difficulty)) &&
        typeof q.sourceKind === "string" && typeof q.sourceNote === "string" &&
        Array.isArray(q.options) && q.options.length === 4 &&
        q.options.every((o) => o && typeof o.key === "string" && typeof o.text === "string");
    });
    if (!valid) throw new Error("Question feed contained invalid records");
    QUESTION_FEED = incoming;
  } catch {
    questionFeedUnavailable = true;
  } finally {
    questionFeedLoading = false;
  }
}

const QUESTION_FEED_READY = loadQuestionFeed();

const root = document.querySelector<HTMLElement>("[data-study-preview]");
if (root) {
  const questionScreen = root.querySelector<HTMLElement>("[data-study-question-screen]");
  const completeScreen = root.querySelector<HTMLElement>("[data-study-complete]");
  const number = root.querySelector<HTMLElement>("[data-question-number]");
  const topic = root.querySelector<HTMLElement>("[data-question-topic]");
  const prompt = root.querySelector<HTMLElement>("[data-question-prompt]");
  const instruction = root.querySelector<HTMLElement>("[data-question-instruction]");
  const studySession = root.querySelector<HTMLElement>(".study-session");
  const boardLoading = root.querySelector<HTMLElement>("[data-board-loading]");
  const boardLoadingLabel = root.querySelector<HTMLElement>("[data-board-loading-label]");
  const optionList = root.querySelector<HTMLElement>("[data-question-options]");
  const feedback = root.querySelector<HTMLElement>("[data-question-feedback]");
  const feedbackTitle = root.querySelector<HTMLElement>("[data-feedback-title]");
  const feedbackAnswer = root.querySelector<HTMLElement>("[data-feedback-answer]");
  const feedbackIcon = root.querySelector<HTMLElement>("[data-feedback-icon]");
  const feedbackPoints = root.querySelector<HTMLUListElement>("[data-feedback-points]");
  const takeaway = root.querySelector<HTMLElement>("[data-feedback-takeaway]");
  const quizForm = root.querySelector<HTMLFormElement>("[data-quiz-setup]");
  const setupPanel = root.querySelector<HTMLElement>("[data-quiz-setup-panel]");
  const workspace = root.querySelector<HTMLElement>("[data-quiz-workspace]");
  const statsPanel = root.querySelector<HTMLElement>("[data-quiz-stats]");
  const changeQuizButton = root.querySelector<HTMLButtonElement>("[data-change-quiz]");
  const examSelect = root.querySelector<HTMLSelectElement>("[data-quiz-exam]");
  const difficultySelect = root.querySelector<HTMLSelectElement>("[data-quiz-difficulty]");
  const quizStatus = root.querySelector<HTMLElement>("[data-quiz-status]");
  const startButton = root.querySelector<HTMLButtonElement>("[data-start-quiz]");
  const trackLabels = Array.from(root.querySelectorAll<HTMLElement>("[data-practice-track-label]"));
  const questionBankCount = root.querySelector<HTMLElement>("[data-question-bank-count]");
  const questionTotal = root.querySelector<HTMLElement>("[data-question-total]");
  const bankTotal = root.querySelector<HTMLElement>("[data-bank-total]");
  const subjectFilter = root.querySelector<HTMLSelectElement>("[data-subject-filter]");
  const progressTrack = root.querySelector<HTMLElement>("[data-session-progress-track]");
  const progressFill = root.querySelector<HTMLElement>("[data-session-progress-fill]");
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

  const requiredElements = [
    questionScreen, completeScreen, number, topic, prompt, instruction, studySession,
    boardLoading, boardLoadingLabel, optionList, feedback, feedbackTitle, feedbackAnswer,
    feedbackPoints, takeaway, quizForm, setupPanel, workspace, statsPanel, changeQuizButton, examSelect, difficultySelect, quizStatus, startButton,
    subjectFilter, progressTrack, progressFill, progressLabel, completedValue,
    correctValue, accuracyValue, previousButton, nextButton, finishButton,
    completeHeading, completeLede, completeStats, reviewList,
  ];

  if (requiredElements.every(Boolean)) {
    type DifficultyBand = "EASY" | "STANDARD" | "CHALLENGING";
    const EXAM_CODES = ["LCAT", "NET", "CSS", "MDCAT"] as const;
    const QUIZ_LENGTH = 10;
    const params = new URLSearchParams(window.location.search);
    let activeExam = EXAM_CODES.includes(params.get("exam") as typeof EXAM_CODES[number])
      ? (params.get("exam") as string)
      : "";
    let activeSubject = "ALL";
    let isSubmitting = false;
    let isPreparingQuiz = false;
    let questionIndex = 0;
    let quizStarted = false;
    let pendingOptionKey: string | null = null;
    let questions: StudyQuestionPrompt[] = [];
    const answers = new Map<string, StudyAnswer>();

    if (activeExam) examSelect!.value = activeExam;

    function setQuizStatus(message: string, state: "info" | "error" | "loading" = "info"): void {
      quizStatus!.replaceChildren();
      quizStatus!.dataset.state = state;
      if (state === "loading") {
        const indicator = document.createElement("span");
        indicator.className = "study-inline-spinner";
        indicator.setAttribute("aria-hidden", "true");
        const label = document.createElement("span");
        label.textContent = message;
        quizStatus!.append(indicator, label);
        return;
      }
      quizStatus!.textContent = message;
    }

    function fillSubjectFilter(): void {
      const available = [...new Set(QUESTION_FEED
        .filter((question) => !activeExam || question.examCode === activeExam)
        .map(displaySubjectCode))].sort();
      subjectFilter!.replaceChildren();
      const all = document.createElement("option");
      all.value = "ALL";
      all.textContent = "Any subject";
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

    function difficultyLabel(level: StudyQuestionPrompt["difficulty"]): string {
  switch (level) {
    case "EASY": return "Easy";
    case "CHALLENGING": return "Challenging";
    default: return "Standard";
  }
}

function questionsForSetup(): StudyQuestionPrompt[] {
  const candidates = QUESTION_FEED.filter((question) => {
    const examMatches = question.examCode === activeExam;
    const subjectMatches = activeSubject === "ALL" || displaySubjectCode(question) === activeSubject;
    return examMatches && subjectMatches;
  });

  const selectedDifficulty = difficultySelect!.value as "ALL" | DifficultyBand;
  if (selectedDifficulty === "ALL") return candidates;
  return candidates.filter((question) => (question.difficulty ?? "STANDARD") === selectedDifficulty);
}

function updateAvailableCount(): void {
      const count = questionsForSetup().length;
      if (questionFeedLoading) questionBankCount!.dataset.state = "loading";
      else questionBankCount!.removeAttribute("data-state");
      questionBankCount!.textContent = questionFeedLoading
        ? "Preparing questions"
        : questionFeedUnavailable
          ? "Question bank unavailable"
          : activeExam ? count + " matching questions available" : "Choose a board to begin";
      questionTotal!.textContent = QUIZ_LENGTH + " questions";
      if (!quizStarted) {
        if (questionFeedLoading) {
          setQuizStatus("Preparing practice questions", "loading");
        } else if (questionFeedUnavailable) {
          setQuizStatus("The practice bank could not load. Refresh the page to try again.", "error");
        } else {
          setQuizStatus(activeExam
            ? count + " questions match these settings. A practice session contains up to 10 questions."
            : "Choose an exam board to see matching questions.");
        }
      }
      if (bankTotal) bankTotal.textContent = questionFeedLoading ? "…" : String(QUESTION_FEED.length);
      startButton!.disabled = questionFeedLoading || questionFeedUnavailable ||
        !activeExam || count === 0 || isPreparingQuiz || isSubmitting;
    }

    function getCounts() {
      const completed = questions.map((question) => answers.get(question.id))
        .filter((answer): answer is StudyAnswer => Boolean(answer));
      const correct = completed.filter((answer) => answer.isCorrect).length;
      return { answered: completed.length, correct, incorrect: completed.length - correct, total: questions.length };
    }

    function updateProgress(): void {
      const counts = getCounts();
      const displayTotal = counts.total || QUIZ_LENGTH;
      const percent = counts.total ? Math.round((counts.answered / counts.total) * 100) : 0;
      progressFill!.style.width = percent + "%";
      progressTrack!.setAttribute("aria-valuenow", String(counts.answered));
      progressTrack!.setAttribute("aria-valuemax", String(displayTotal));
      progressLabel!.textContent = counts.total
        ? counts.answered + " of " + counts.total + " answered"
        : "Progress appears when your quiz starts";
      completedValue!.textContent = counts.answered + " / " + displayTotal;
      correctValue!.textContent = String(counts.correct);
      accuracyValue!.textContent = counts.answered
        ? Math.round((counts.correct / counts.answered) * 100) + "%"
        : "—";
      questionTotal!.textContent = displayTotal + " questions";
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
      if (subject) subject.textContent = subjectLabel(displaySubjectCode(question));
      const exam = root!.querySelector<HTMLElement>("[data-current-exam]");
      if (exam) exam.textContent = EXAM_LABELS[question.examCode] ?? question.examCode;
      const meta = root!.querySelector<HTMLElement>("[data-question-meta]");
      if (meta) {
        meta.textContent = [
          EXAM_LABELS[question.examCode] ?? question.examCode,
          subjectLabel(displaySubjectCode(question)),
          difficultyLabel(question.difficulty),
        ].join(" · ");
      }
      const source = root!.querySelector<HTMLElement>("[data-question-source]");
      if (source) {
        const paperDate = question.sourceKind === "past-paper" &&
          Number.isInteger(question.examYear) &&
          Number.isInteger(question.examMonth) &&
          (question.examMonth ?? 0) >= 1 &&
          (question.examMonth ?? 0) <= 12;
        const monthName = paperDate
          ? ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][(question.examMonth ?? 1) - 1]
          : "";
        source.textContent = paperDate
          ? [monthName, question.examYear, question.examSession, question.sourceNote].filter(Boolean).join(" · ")
          : question.sourceNote ?? "Original Arthic practice · not an official past-paper question";
      }
      feedback!.hidden = !savedAnswer;
      feedbackPoints!.replaceChildren();
      if (savedAnswer) renderExplanation(savedAnswer);
      renderOptions(question, savedAnswer);
      previousButton!.disabled = questionIndex === 0 || isSubmitting;
      nextButton!.disabled = questionIndex >= questions.length - 1 || isSubmitting;
      finishButton!.disabled = isSubmitting || questions.length === 0;
      updateProgress();
      if (moveFocus) prompt!.focus();
    }

    async function submitAnswer(question: StudyQuestionPrompt, optionKey: string): Promise<void> {
      if (isSubmitting || answers.has(question.id)) return;
      isSubmitting = true;
      pendingOptionKey = optionKey;
      feedback!.dataset.result = "pending";
      feedbackTitle!.textContent = "Checking answer";
      feedback!.setAttribute("aria-busy", "true");
      feedbackAnswer!.textContent = "Your selected option will be marked as soon as the check returns.";
      if (feedbackIcon) feedbackIcon.textContent = "";
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
        feedback!.removeAttribute("aria-busy");
        renderQuestion();
      } catch {
        isSubmitting = false;
        pendingOptionKey = null;
        feedback!.removeAttribute("aria-busy");
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
      completeHeading!.textContent = counts.answered === counts.total ? "Quiz complete." : "Your quiz review.";
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

    function clearIdleQuestion(): void {
      quizStarted = false;
      questions = [];
      questionIndex = 0;
      number!.textContent = "READY WHEN YOU ARE";
      topic!.textContent = "10 questions · one at a time";
      prompt!.textContent = "Choose an exam board to begin a practice session.";
      instruction!.textContent = "Select an exam, optionally narrow by subject and difficulty, then start your 10-question quiz.";
      root!.querySelector<HTMLElement>("[data-current-exam]")!.textContent = "EXAM BOARD";
      root!.querySelector<HTMLElement>("[data-current-subject]")!.textContent = "SUBJECT";
      root!.querySelector<HTMLElement>("[data-question-source]")!.textContent =
        questionFeedLoading ? "Loading the practice bank…" :
          questionFeedUnavailable ? "Practice bank temporarily unavailable" :
            QUESTION_FEED.length + " original practice questions available";
      optionList!.replaceChildren();
      feedback!.hidden = true;
      previousButton!.disabled = true;
      nextButton!.disabled = true;
      finishButton!.disabled = true;
      updateProgress();
    }

    function shuffle<T>(items: T[]): T[] {
      const result = [...items];
      for (let index = result.length - 1; index > 0; index -= 1) {
        const swap = Math.floor(Math.random() * (index + 1));
        [result[index], result[swap]] = [result[swap], result[index]];
      }
      return result;
    }

    async function startQuiz(): Promise<void> {
      if (isPreparingQuiz || isSubmitting || !quizForm!.reportValidity()) return;
      activeExam = examSelect!.value;
      if (!EXAM_CODES.includes(activeExam as typeof EXAM_CODES[number])) {
        examSelect!.focus();
        return;
      }
      activeSubject = subjectFilter!.value || "ALL";
      const candidates = questionsForSetup();
      if (!candidates.length) {
        setQuizStatus("No questions match those settings. Try a different subject or difficulty.", "error");
        return;
      }

      isPreparingQuiz = true;
      startButton!.disabled = true;
      boardLoadingLabel!.textContent = "Preparing " + (EXAM_LABELS[activeExam] ?? activeExam) + " quiz";
      boardLoading!.hidden = false;
      studySession!.setAttribute("aria-busy", "true");
      setQuizStatus("Picking your questions…");
      try {
        await QUESTION_FEED_READY;
        // Refresh the candidate pool after the live feed has completed.
        const readyCandidates = questionsForSetup();
        const selected = shuffle(readyCandidates.length ? readyCandidates : candidates)
          .slice(0, QUIZ_LENGTH);
        questions = selected;
        answers.clear();
        questionIndex = 0;
        quizStarted = true;
        setupPanel!.hidden = true;
        studySession!.hidden = false;
        statsPanel!.hidden = false;
        workspace!.dataset.stage = "practice";
        completeScreen!.hidden = true;
        questionScreen!.hidden = false;
        trackLabels.forEach((label) => { label.textContent = EXAM_LABELS[activeExam] ?? activeExam; });
        renderQuestion();
        const chosenDifficulty = difficultySelect!.selectedOptions[0]?.textContent ?? "Mixed difficulty";
        setQuizStatus("Quiz ready · " + questions.length + " questions · " + chosenDifficulty + ".");
      } finally {
        boardLoading!.hidden = true;
        studySession!.removeAttribute("aria-busy");
        isPreparingQuiz = false;
        updateAvailableCount();
      }
    }

    function refreshBankCounts(): void {
      if (bankTotal) bankTotal.textContent = String(QUESTION_FEED.length);
      updateAvailableCount();
      if (!quizStarted) {
        root!.querySelector<HTMLElement>("[data-question-source]")!.textContent =
          questionFeedLoading ? "Loading the practice bank…" :
            questionFeedUnavailable ? "Practice bank temporarily unavailable" :
              QUESTION_FEED.length + " original practice questions available";
      }
    }

    examSelect!.addEventListener("change", () => {
      activeExam = examSelect!.value;
      activeSubject = "ALL";
      subjectFilter!.value = "ALL";
      fillSubjectFilter();
      if (quizStarted) clearIdleQuestion();
      updateAvailableCount();
    });
    subjectFilter!.addEventListener("change", () => {
      activeSubject = subjectFilter!.value || "ALL";
      if (quizStarted) clearIdleQuestion();
      updateAvailableCount();
    });
    difficultySelect!.addEventListener("change", () => {
      if (quizStarted) clearIdleQuestion();
      updateAvailableCount();
    });
    quizForm!.addEventListener("submit", (event) => {
      event.preventDefault();
      void startQuiz();
    });

    changeQuizButton!.addEventListener("click", () => {
      if (isSubmitting || isPreparingQuiz) return;
      quizStarted = false;
      setupPanel!.hidden = false;
      studySession!.hidden = true;
      statsPanel!.hidden = true;
      workspace!.dataset.stage = "setup";
      completeScreen!.hidden = true;
      questionScreen!.hidden = false;
      setQuizStatus("Update your choices, then start a fresh 10-question quiz.");
      updateAvailableCount();
      setupPanel!.scrollIntoView({ behavior: "smooth", block: "center" });
    });
    previousButton!.addEventListener("click", () => goToQuestion(questionIndex - 1));
    nextButton!.addEventListener("click", () => goToQuestion(questionIndex + 1));
    finishButton!.addEventListener("click", showComplete);
    resetButtons.forEach((button) => button.addEventListener("click", () => {
      if (isSubmitting) return;
      questions.forEach((question) => answers.delete(question.id));
      questionIndex = 0;
      completeScreen!.hidden = true;
      questionScreen!.hidden = false;
      renderQuestion(true);
    }));

    setupPanel!.hidden = false;
    studySession!.hidden = true;
    statsPanel!.hidden = true;
    workspace!.dataset.stage = "setup";
    fillSubjectFilter();
    clearIdleQuestion();
    if (activeExam) updateAvailableCount();
    else setQuizStatus("Choose an exam board to see matching questions.");
    updateProgress();
    refreshBankCounts();
    void QUESTION_FEED_READY.then(() => {
      refreshBankCounts();
      fillSubjectFilter();
    });
  }
}
