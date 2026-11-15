export const EXAM_CODES = ["MDCAT", "ECAT", "NUST_NET", "FAST", "LUMS_BALLB", "CSS", "PMS"] as const;
export type QuestionSourceKind = "original-sample" | "licensed" | "public-domain";

export interface QuestionDraftInput {
  examCode: string;
  subjectCode: string;
  topic: string;
  prompt: string;
  instruction: string;
  options: Array<{ key: string; text: string }>;
  answerKey: string;
  explanation: string;
  takeaway: string;
  sourceKind: QuestionSourceKind;
  sourceNote: string | null;
}

export type QuestionInputResult =
  | { ok: true; value: QuestionDraftInput }
  | { ok: false; error: string };

function boundedText(value: unknown, maxLength: number): string | null {
  if (typeof value !== "string") return null;
  const result = value.trim();
  return result && result.length <= maxLength ? result : null;
}

/** Strictly validate question-bank input before it reaches SQL. */
export function parseQuestionDraft(body: unknown): QuestionInputResult {
  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return { ok: false, error: "send a question object." };
  }
  const data = body as Record<string, unknown>;
  const examCode = boundedText(data.examCode, 24);
  const subjectCode = boundedText(data.subjectCode, 24)?.toUpperCase() ?? null;
  const topic = boundedText(data.topic, 120);
  const prompt = boundedText(data.prompt, 1800);
  const instruction = boundedText(data.instruction, 200) ?? "Choose one answer.";
  const explanation = boundedText(data.explanation, 2400);
  const takeaway = boundedText(data.takeaway, 500);
  const answerKey = boundedText(data.answerKey, 1)?.toUpperCase() ?? null;
  const sourceKind = boundedText(data.sourceKind, 24) as QuestionSourceKind | null;
  const sourceNoteRaw = data.sourceNote;
  const sourceNote = typeof sourceNoteRaw === "string" && sourceNoteRaw.trim()
    ? sourceNoteRaw.trim().slice(0, 500)
    : null;

  if (!examCode || !(EXAM_CODES as readonly string[]).includes(examCode)) return { ok: false, error: "choose a supported exam." };
  if (!subjectCode || !/^[A-Z0-9_-]{2,24}$/.test(subjectCode)) return { ok: false, error: "enter a valid subject code." };
  if (!topic) return { ok: false, error: "enter a topic." };
  if (!prompt) return { ok: false, error: "enter the question prompt." };
  if (!explanation) return { ok: false, error: "enter an explanation." };
  if (!takeaway) return { ok: false, error: "enter a short takeaway." };
  if (!answerKey || !/^[A-F]$/.test(answerKey)) return { ok: false, error: "choose a valid answer key." };
  if (!sourceKind || !["original-sample", "licensed", "public-domain"].includes(sourceKind)) return { ok: false, error: "choose a valid source type." };
  if (sourceKind !== "original-sample" && !sourceNote) return { ok: false, error: "add the source and permission/reference note before saving." };
  if (!Array.isArray(data.options) || data.options.length < 2 || data.options.length > 6) return { ok: false, error: "add between two and six answer options." };

  const options: Array<{ key: string; text: string }> = [];
  const seen = new Set<string>();
  for (const raw of data.options) {
    if (!raw || typeof raw !== "object" || Array.isArray(raw)) return { ok: false, error: "check the answer options." };
    const option = raw as Record<string, unknown>;
    const key = boundedText(option.key, 1)?.toUpperCase() ?? null;
    const text = boundedText(option.text, 300);
    if (!key || !/^[A-F]$/.test(key) || !text || seen.has(key)) return { ok: false, error: "each option needs a unique letter A–F and text." };
    seen.add(key);
    options.push({ key, text });
  }
  if (!seen.has(answerKey)) return { ok: false, error: "the answer key must match one of the answer options." };

  return {
    ok: true,
    value: {
      examCode, subjectCode, topic, prompt, instruction, options, answerKey,
      explanation, takeaway, sourceKind,
      sourceNote: sourceNote ?? (sourceKind === "original-sample" ? "Original Arthic sample content." : null),
    },
  };
}
