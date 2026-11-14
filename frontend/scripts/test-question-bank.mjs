import assert from "node:assert/strict";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createServer } from "vite";
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const server = await createServer({ root, configFile: path.join(root, "vite.config.ts"), server: { middlewareMode: true }, appType: "custom" });
try {
  const { parseQuestionDraft, EXAM_CODES } = await server.ssrLoadModule("/api/_question-bank-validation.ts");
  const base = {
    examCode: "MDCAT", subjectCode: "BIO", topic: "Cell biology",
    prompt: "Which organelle stores most of a eukaryotic cell's genetic material?",
    instruction: "Choose one answer.",
    options: [{ key: "A", text: "Ribosome" }, { key: "B", text: "Nucleus" }, { key: "C", text: "Golgi apparatus" }, { key: "D", text: "Lysosome" }],
    answerKey: "B", explanation: "The nucleus contains most of a eukaryotic cell's DNA.",
    takeaway: "The nucleus stores most of the cell's genetic material.",
    sourceKind: "original-sample", sourceNote: "",
  };
  const valid = parseQuestionDraft(base);
  assert.equal(valid.ok, true);
  assert.ok(EXAM_CODES.includes("MDCAT"));
  assert.equal(valid.value.answerKey, "B");
  for (const [name, patch] of [
    ["unsupported exam", { examCode: "UNKNOWN" }],
    ["missing prompt", { prompt: "" }],
    ["duplicate options", { options: [{ key: "A", text: "One" }, { key: "A", text: "Two" }] }],
    ["missing answer option", { answerKey: "F" }],
    ["licensed content without source note", { sourceKind: "licensed", sourceNote: "" }],
    ["too many options", { options: Array.from({ length: 7 }, (_, i) => ({ key: String.fromCharCode(65 + i), text: "Option " + i })) }],
  ]) assert.equal(parseQuestionDraft({ ...base, ...patch }).ok, false, name);
  console.log("Question-bank validation tests passed: valid content, exam code, options, answer key and attribution rules.");
} finally { await server.close(); }
