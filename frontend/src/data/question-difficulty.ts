import type { StudyExamCode } from "./sample-questions.js";

export type PracticeDifficulty = "EASY" | "STANDARD" | "CHALLENGING";

export interface DifficultyInput {
  examCode?: StudyExamCode | string;
  subjectCode?: string;
  topic?: string;
  prompt?: string;
  options?: Array<{ text?: string }>;
  difficulty?: PracticeDifficulty;
}

const CHALLENGING_PATTERNS = [
  /conditional probability/,
  /permutation|combination|binomial distribution/,
  /definite integral|integration by parts|implicit differentiation/,
  /maximum (?:value|profit|area)|minimum (?:value|cost)/,
  /best (?:evidence|explanation|conclusion|supported inference)/,
  /most strongly (?:supports|undermines)/,
  /evaluate (?:the|whether|which|the effect)/,
  /compare (?:the|two|both)|distinguish between/,
  /two (?:independent|successive|simultaneous|consecutive) (?:events|stages|changes)/,
  /after (?:the first|a second|two|both)|then (?:find|calculate|determine)/,
  /rate of change|related rates|work energy theorem/,
  /equilibrium constant|buffer capacity|limiting reagent/,
  /genetic cross|dihybrid|linkage|pedigree analysis/,
  /multi.?step|more than one condition|two constraints/,
  /which conclusion (?:is|follows)|which assumption/,
];

const STANDARD_PATTERNS = [
  /calculate|determine|solve|find the value|what is the value|how many|how much/,
  /ratio|percentage|probability|mean|median|standard deviation/,
  /acceleration|resistance|current|voltage|power|momentum|density|molarity/,
  /linear equation|quadratic equation|simultaneous equation|function value/,
  /interpret|infer|predict|identify the relationship|choose the best transition/,
  /subject.?verb|punctuation|sentence revision|parallel structure|logical deduction/,
  /apply|application|which statement best describes|which statement is most accurate/,
];

const EASY_PATTERNS = [
  /define|definition|what does .+ mean|is known as/,
  /which (?:organelle|cell|stage|term|element|compound|structure|gas|law|sea|river|organ) /,
  /where does .+ occur|which part of .+ contains/,
  /name the|identify the (?:term|organ|organelle|process|structure)/,
];

function normalizeText(value: string): string {
  return value.toLocaleLowerCase().normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[’‘]/g, "'")
    .replace(/[^\p{L}\p{N}]+/gu, " ")
    .trim().replace(/\s+/g, " ");
}

/** Stable stem key used by both the import-time deduplicator and its tests. */
export function normalizeQuestionStem(prompt: string): string {
  return normalizeText(prompt);
}

/**
 * Three-point editorial rubric:
 * EASY = direct recall or a single familiar step;
 * STANDARD = routine application, interpretation or a short calculation;
 * CHALLENGING = integrated, multi-step or evaluative reasoning.
 * This deliberately ignores prompt length and option count.
 */
export function classifyPracticeDifficulty(question: DifficultyInput): PracticeDifficulty {
  if (
    question.difficulty === "EASY" ||
    question.difficulty === "STANDARD" ||
    question.difficulty === "CHALLENGING"
  ) return question.difficulty;

  const topic = normalizeText(question.topic ?? "");
  const prompt = normalizeText(question.prompt ?? "");
  const text = topic + " " + prompt;

  if (CHALLENGING_PATTERNS.some((pattern) => pattern.test(text))) return "CHALLENGING";
  if (STANDARD_PATTERNS.some((pattern) => pattern.test(text))) return "STANDARD";
  if (EASY_PATTERNS.some((pattern) => pattern.test(text))) return "EASY";

  // Default to standard for unrecognised stems so uncertain content is
  // not automatically marked easy. New editorial items carry an explicit label.
  return "STANDARD";
}
