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
  /which assumption (?:is|does|must|underlies)|necessary assumption|assumption underlying/,
  /which additional evidence|what additional evidence|would most (?:weaken|strengthen)|best evidence to (?:test|support|assess)/,
  /most directly test|confounding (?:factor|variable)|selection bias|alternative explanation/,
  /causal claim|caused the (?:increase|improvement|change)|correlation.{0,55}causation/,
  /conditional probability|probability.{0,70}without replacement|without replacement.{0,90}probability/,
  /multiple constraints|more than one condition|two constraints|three conditions|must occupy|immediately before|immediately after/,
  /successive percentage|successive (?:increase|decrease|change)|after .{0,90} then .{0,90}(?:increase|decrease|change|price|amount)/,
  /integration by parts|partial fractions|implicit differentiation|differential equation|improper integral|related rates/,
  /dihybrid|pedigree analysis|genetic linkage|two loci/,
  /limiting reagent.{0,100}(?:moles?|grams?|mass|volume|amount|how many|calculate|formed)/,
];

const EASY_PATTERNS = [
  /what does .+ mean/,
  /what is (?:the )?(?:meaning|definition|name|function|role) of/,
  /define\b|definition of/,
  /which (?:organelle|cell|phase|stage|term|element|compound|structure|gas|river|organ|part|process|substance|office|institution|antigen|base|ion|agency|line|sea|body|enzyme|hormone|molecule|functional group)/,
  /where does .+ occur/,
  /name the|identify the (?:term|organ|organelle|process|structure)/,
  /which part of .+ (?:receives|contains|produces|secretes|binds)/,
  /during which (?:phase|stage) .+ (?:replicated|align|separate|occur)/,
  /choose the correct (?:verb|passive form|completion|transition)/,
  /which statement best describes/,
  /what happens when .+ (?:forms|occurs|is formed)/,
  /what is (?:15% of|\d+% of|the next term|the median|the gradient|the decimal value of|the momentum|the net force|the equivalent resistance|the area of|the perimeter of)/,
  /solve\s+\d*x\s*[+−-]\s*\d+\s*=\s*\d+/,
  /if\s+\d*x\s*[+−-]\s*\d+\s*=\s*\d+.{0,35}(?:what is x|value of x)/,
  /what does (?:len\(|items\[\d+\]|[a-z_]\w*\[\d+\])|what value is printed by this (?:short )?code/,
  /how many (?:protons|permanent members|members|minutes|seconds|moles) (?:are|is|does|of)/,
];

const STANDARD_PATTERNS = [
  /calculate|determine|solve|find the value|what is the value|how many|how much/,
  /ratio|percentage|probability|mean|median|standard deviation/,
  /acceleration|resistance|current|voltage|power|momentum|density|molarity|electric field|torque/,
  /linear equation|quadratic equation|simultaneous equation|function value|differentiation|integration/,
  /interpret|infer|predict|identify the relationship|choose the best transition/,
  /subject.?verb|punctuation|sentence revision|parallel structure|logical deduction/,
  /apply|application|which statement (?:best describes|is most accurate)|which conclusion/,
  /evaluate|compare|assess|analyse|analyze/,
  /composite function|logarithm|determinant|vector|stoichiometry|equilibrium|work rate|weighted average/,
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
  return normalizeText(prompt).replace(/%/g, " ").trim().replace(/\s+/g, " ");
}

/**
 * Editorial rubric:
 * EASY is direct recall, language recognition or one routine operation.
 * STANDARD applies a familiar rule or formula in a normal exam-style task.
 * CHALLENGING combines evidence, conditions or stages, or uses a genuinely
 * advanced method. Wording length and the number of answer choices do not
 * determine the level. Authored question records should carry an explicit
 * level; this classifier is a fallback for drafts and unlabelled imports.
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
  if (
    /^(?:which|what|where|who|during which|name|choose|identify)\b/.test(prompt) &&
    !/conclusion|inference|assumption|evidence|argument|most reasonable|most likely|best supported|strongest|follows|immediately before|immediately after|compare|evaluate|assess/.test(text) &&
    !/\d+\s*(?:%|cm|kg|mol|m\/s|hz|v|a)|\d+\/\d+/.test(prompt)
  ) return "EASY";
  if (STANDARD_PATTERNS.some((pattern) => pattern.test(text))) return "STANDARD";

  return "STANDARD";
}
