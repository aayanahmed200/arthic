import assert from "node:assert/strict";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createServer } from "vite";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const server = await createServer({
  root,
  configFile: path.join(root, "vite.config.ts"),
  server: { middlewareMode: true },
  appType: "custom",
});

function templateKey(prompt) {
  return String(prompt ?? "")
    .toLocaleLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[’‘]/g, "'")
    .replace(/\d+(?:\.\d+)?/g, "#")
    .replace(/[^\p{L}\p{N}#%]+/gu, " ")
    .trim()
    .replace(/\s+/g, " ");
}

try {
  const { SAMPLE_QUESTIONS, RETIRED_NEAR_DUPLICATE_IDS } =
    await server.ssrLoadModule("/api/study/_sample-content.ts");
  const { normalizeQuestionStem } =
    await server.ssrLoadModule("/src/data/question-difficulty.ts");

  assert.equal(SAMPLE_QUESTIONS.length, 1160, "published sample bank count");
  assert.equal(new Set(SAMPLE_QUESTIONS.map((question) => question.id)).size, 1160,
    "question IDs must be unique");
  assert.equal(new Set(SAMPLE_QUESTIONS.map((question) => normalizeQuestionStem(question.prompt))).size, 1160,
    "exact repeated stems must be removed");

  const exams = ["LCAT", "NET", "CSS", "MDCAT"];
  for (const examCode of exams) {
    const examQuestions = SAMPLE_QUESTIONS.filter((question) => question.examCode === examCode);
    assert.equal(examQuestions.length, 290, examCode + " question count");
    for (const question of examQuestions) {
      assert.ok(["EASY", "STANDARD", "CHALLENGING"].includes(question.difficulty),
        question.id + " needs an explicit difficulty");
      assert.ok(question.subjectCode.trim(), question.id + " needs a subject");
      assert.ok(question.topic.trim(), question.id + " needs a specific topic");
      assert.ok(question.sourceNote?.trim(), question.id + " needs source provenance");
      assert.equal(question.sourceKind, "original-sample",
        question.id + " must not be described as an official past-paper question");
      assert.equal(question.examYear ?? null, null, question.id + " must not have an invented year");
      assert.equal(question.examMonth ?? null, null, question.id + " must not have an invented month");
      assert.equal(question.options.length, 4, question.id + " must have four options");
      assert.equal(new Set(question.options.map((option) => option.key)).size, 4,
        question.id + " has repeated option keys");
      assert.equal(new Set(question.options.map((option) => option.text.trim().toLowerCase())).size, 4,
        question.id + " has repeated answer choices");
      assert.ok(question.options.some((option) => option.key === question.answer),
        question.id + " answer key does not match an option");
      assert.ok(question.explanation.trim().length >= 20, question.id + " needs a worked explanation");
      assert.ok(question.takeaway.trim().length >= 8, question.id + " needs a useful takeaway");
      assert.equal(RETIRED_NEAR_DUPLICATE_IDS.has(question.id), false,
        question.id + " is marked as retired but still appears in the bank");
    }
  }

  const templates = new Map();
  for (const question of SAMPLE_QUESTIONS) {
    const key = question.examCode + "|" + question.subjectCode + "|" + templateKey(question.prompt);
    const group = templates.get(key) ?? [];
    group.push(question);
    templates.set(key, group);
  }

  const repeatedTemplates = [...templates.entries()]
    .filter(([, group]) => group.length > 1)
    .map(([key, group]) => ({
      key,
      count: group.length,
      ids: group.map((question) => question.id),
      topics: [...new Set(group.map((question) => question.topic))],
      samplePrompts: [...new Set(group.map((question) => question.prompt))].slice(0, 3),
    }))
    .sort((a, b) => b.count - a.count || a.key.localeCompare(b.key));

  console.log("Question bank quality audit passed: 1,160 unique prompts, 290 per exam, explicit difficulty, provenance and worked answers.");
  console.log("Potential number-swapped/reused templates requiring editorial review:", repeatedTemplates.length);
  for (const group of repeatedTemplates.slice(0, 25)) {
    console.log(JSON.stringify(group));
  }
  if (repeatedTemplates.length > 25) {
    console.log("Additional repeated template groups:", repeatedTemplates.length - 25);
  }
} finally {
  await server.close();
}
