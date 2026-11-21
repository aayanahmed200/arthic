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
  /without replacement/,
  /permutation|combination\s+(?:of|from|ways to choose|ways of selecting)/,
  /binomial distribution/,
  /integration by parts|partial fractions|implicit differentiation|differential equation|improper integral/,
  /optimis(?:e|ation)|optimis(?:e|ation)|maximum (?:value|profit|area)|minimum (?:value|cost)/,
  /most strongly (?:supports|undermines)/,
  /which assumption (?:is|does|must|underlies)|necessary assumption|assumption underlying/,
  /best evidence|most directly test|which additional evidence|would most strengthen|would best test/,
  /causal claim|caused the (?:increase|improvement|change)|confounding (?:factor|variable)|alternative explanation/,
  /compare (?:the|two|both) (?:passages|arguments|viewpoints|positions|approaches)|both authors|shared viewpoint/,
  /two (?:independent|successive|simultaneous|consecutive) (?:events|stages|changes|conditions)/,
  /multiple constraints|more than one condition|two constraints|three conditions/,
  /after (?:the first|a second|two|both|the increase).{0,100}(?:then|followed by|and then)/,
  /related rates|work energy theorem/,
  /limiting reagent.{0,100}(?:moles?|grams?|mass|volume|amount|how many|calculate|formed)/,
  /dihybrid|pedigree analysis|genetic linkage|two loci/,
  /sample is too small|representative sampling.{0,80}(?:bias|population|groups)/,
  /which conclusion (?:is|follows) (?:most defensible|best supported) when/,
];

const EASY_PATTERNS = [
  /what does .+ mean/,
  /what is (?:the )?(?:meaning|definition|name|function|role) of/,
  /define\b|definition of/,
  /which (?:organelle|cell|phase|stage|term|element|compound|structure|gas|law|river|organ|part|process|substance|office|institution|line of longitude)/,
  /where does .+ occur/,
  /name the|identify the (?:term|organ|organelle|process|structure)/,
  /which part of .+ (?:receives|contains|produces|secretes|binds)/,
  /during which (?:phase|stage) .+ (?:replicated|align|separate|occur)/,
  /choose the correct (?:verb|passive form|completion|transition)/,
  /what is (?:15% of|\d+% of|the decimal value of|the next term|the median|the gradient|the period|the momentum|the power|the net force|the equivalent resistance)/,
  /what is log(?:arithm)?[_₀-₉0-9]*(?:\([^)]*\))?\s*(?:\d+|[0-9/]+)/,
  /solve\s+\d*x\s*[+−-]\s*\d+\s*=\s*\d+/,
  /if\s+\d*x\s*[+−-]\s*\d+\s*=\s*\d+.{0,35}(?:what is x|value of x)/,
  /how many (?:protons|permanent members|members|minutes|seconds|moles) (?:are|is|does|of)/,
];

const STANDARD_PATTERNS = [
  /calculate|determine|solve|find the value|what is the value|how many|how much/,
  /ratio|percentage|probability|mean|median|standard deviation/,
  /acceleration|resistance|current|voltage|power|momentum|density|molarity|electric field|torque/,
  /linear equation|quadratic equation|simultaneous equation|function value|differentiation|integration/,
  /interpret|infer|predict|identify the relationship|choose the best transition/,
  /subject.?verb|punctuation|sentence revision|parallel structure|logical deduction/,
  /apply|application|which statement best describes|which statement is most accurate/,
  /which conclusion follows|what follows from the rule|best supported conclusion/,
  /evaluate|compare|assess|analyse|analyze/,
];

function normalizeText(value: string): string {
  return value.toLocaleLowerCase().normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[’‘]/g, "'")
    .replace(/[^\p{L}\p{N}%]+/gu, " ")
    .trim().replace(/\s+/g, " ");
}

/** Stable stem key shared by the import-time de-duplicator and tests. */
export function normalizeQuestionStem(prompt: string): string {
  return normalizeText(prompt);
}

/**
 * Editorial three-level rubric:
 * EASY: one fact, definition, vocabulary/grammar item or one routine step.
 * STANDARD: apply a familiar principle, interpret information or complete
 * a normal short calculation.
 * CHALLENGING: combine conditions, compare evidence, test causation,
 * optimise, or carry out a genuinely multi-stage/advanced operation.
 *
 * The wording length and number of answer choices do not affect difficulty.
 * Explicit editor-assigned levels always override these fallback heuristics.
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
  if (EASY_PATTERNS.some((pattern) => pattern.test(text))) return "EASY";
  if (STANDARD_PATTERNS.some((pattern) => pattern.test(text))) return "STANDARD";

  // Unrecognised items default to standard rather than being incorrectly
  // advertised as easy. New authored content carries an explicit level.
  return "STANDARD";
}
