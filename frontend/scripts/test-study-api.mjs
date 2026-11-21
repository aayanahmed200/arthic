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
const originalError = console.error;

function mockRequest(method, body) {
  const res = {
    code: 200,
    headers: {},
    body: null,
    setHeader(name, value) { this.headers[name] = value; return this; },
    status(code) { this.code = code; return this; },
    json(value) { this.body = value; return this; },
  };
  return { req: { method, body, headers: { "x-forwarded-for": "203.0.113.10" } }, res };
}

try {
  delete process.env.POSTGRES_URL;
  console.error = () => {};

  const questionsHandler = (await server.ssrLoadModule("/api/study/questions.ts")).default;
  const checkHandler = (await server.ssrLoadModule("/api/study/check.ts")).default;
  const { SAMPLE_QUESTIONS } = await server.ssrLoadModule("/api/study/_sample-content.ts");
  const { normalizeQuestionStem } = await server.ssrLoadModule("/src/data/question-difficulty.ts");

  const feed = mockRequest("GET");
  await questionsHandler(feed.req, feed.res);
  assert.equal(feed.res.code, 200);
  console.log("DE-DUP COUNTS", JSON.stringify({
    total: feed.res.body.questions.length,
    byExam: Object.fromEntries(["LCAT", "NET", "CSS", "MDCAT"].map((exam) => [exam,
      feed.res.body.questions.filter((question) => question.examCode === exam).length
    ])),
    v18ByExam: Object.fromEntries(["LCAT", "NET", "CSS", "MDCAT"].map((exam) => [exam,
      SAMPLE_QUESTIONS.filter((question) => question.id.startsWith("v18-") && question.examCode === exam).length
    ])),
  }));
  assert.equal(feed.res.body.questions.length, 1060);
  assert.equal(feed.res.body.dataVersion, "arthic-original-four-track-v18-1060");
  assert.equal(feed.res.body.isOfficialPastPaper, false);

  const examCodes = ["LCAT", "NET", "CSS", "MDCAT"];
  for (const examCode of examCodes) {
    assert.equal(feed.res.body.questions.filter((item) => item.examCode === examCode).length, 265, examCode);
  }
  assert.deepEqual([...new Set(feed.res.body.questions.map((item) => item.examCode))].sort(), [...examCodes].sort());

  assert.equal(SAMPLE_QUESTIONS.length, 1060);
  assert.equal(new Set(SAMPLE_QUESTIONS.map((question) => question.id)).size, 1060, "question IDs must be unique");
  assert.equal(new Set(SAMPLE_QUESTIONS.map((question) => normalizeQuestionStem(question.prompt))).size, 1060,
    "duplicate question stems must be removed across all exam tracks");

  const difficultyValues = new Set(["EASY", "STANDARD", "CHALLENGING"]);
  for (const question of SAMPLE_QUESTIONS) {
    assert.ok(question.prompt.trim().length >= 20, question.id + " prompt too short");
    assert.ok(question.topic.trim(), question.id + " missing topic");
    assert.ok(question.subjectCode.trim(), question.id + " missing subject");
    assert.ok(difficultyValues.has(question.difficulty), question.id + " missing or invalid difficulty");
    assert.ok(question.sourceNote?.trim(), question.id + " missing provenance note");
    assert.equal(question.sourceKind, "original-sample", question.id + " must not be mislabelled as a past paper");
    assert.equal(question.examYear, undefined, question.id + " must not be assigned an invented paper year");
    assert.equal(question.examMonth, undefined, question.id + " must not be assigned an invented paper month");
    assert.ok(Array.isArray(question.options) && question.options.length === 4, question.id + " must have four options");
    assert.equal(new Set(question.options.map((option) => option.key)).size, 4, question.id + " has duplicate option keys");
    assert.equal(new Set(question.options.map((option) => option.text.trim().toLowerCase())).size, 4, question.id + " has duplicate option text");
    assert.ok(question.options.some((option) => option.key === question.answer), question.id + " answer does not match an option");
    assert.ok(question.explanation.trim().length >= 30, question.id + " explanation too short");
    assert.ok(question.takeaway.trim().length >= 12, question.id + " takeaway too short");
  }

  const v18 = SAMPLE_QUESTIONS.filter((question) => question.id.startsWith("v18-"));
  assert.equal(v18.length, 133, "all V18 additions must survive de-duplication");
  const expectedV18 = { LCAT: 28, NET: 41, CSS: 21, MDCAT: 43 };
  for (const [examCode, expectedCount] of Object.entries(expectedV18)) {
    assert.equal(v18.filter((question) => question.examCode === examCode).length, expectedCount, examCode + " V18 count");
  }
  for (const question of v18) {
    const check = mockRequest("POST", { questionId: question.id, selectedOption: question.answer });
    await checkHandler(check.req, check.res);
    assert.equal(check.res.code, 200, question.id);
    assert.equal(check.res.body.isCorrect, true, question.id);
    assert.equal(check.res.body.correctOption, question.answer, question.id);
    assert.ok(check.res.body.explanation, question.id);
    assert.ok(check.res.body.takeaway, question.id);
  }

  // Test server-side keys and explanations for every original question.
  for (const question of SAMPLE_QUESTIONS) {
    const check = mockRequest("POST", { questionId: question.id, selectedOption: question.answer });
    await checkHandler(check.req, check.res);
    assert.equal(check.res.code, 200, question.id);
    assert.equal(check.res.body.isCorrect, true, question.id);
    assert.equal(check.res.body.correctOption, question.answer, question.id);
    assert.ok(check.res.body.explanation, question.id);
    assert.ok(check.res.body.takeaway, question.id);
  }

  const representative = SAMPLE_QUESTIONS.find((question) => question.id === "v18-lcat-006");
  assert.ok(representative);
  const wrongChoice = representative.options.find((option) => option.key !== representative.answer);
  assert.ok(wrongChoice);
  const incorrect = mockRequest("POST", { questionId: representative.id, selectedOption: wrongChoice.key });
  await checkHandler(incorrect.req, incorrect.res);
  assert.equal(incorrect.res.code, 200);
  assert.equal(incorrect.res.body.isCorrect, false);
  assert.equal(incorrect.res.body.correctOption, representative.answer);
  assert.equal(incorrect.res.headers["Cache-Control"], "no-store");

  for (const question of feed.res.body.questions) {
    assert.equal("answer" in question, false);
    assert.equal("correctOption" in question, false);
    assert.equal("explanation" in question, false);
    assert.equal("takeaway" in question, false);
  }

  const invalid = mockRequest("POST", { questionId: representative.id, selectedOption: "Z" });
  await checkHandler(invalid.req, invalid.res);
  assert.equal(invalid.res.code, 400);

  const unknown = mockRequest("POST", { questionId: "not-a-question", selectedOption: "A" });
  await checkHandler(unknown.req, unknown.res);
  assert.equal(unknown.res.code, 404);

  const wrongMethod = mockRequest("GET", {});
  await checkHandler(wrongMethod.req, wrongMethod.res);
  assert.equal(wrongMethod.res.code, 405);

  const feedWrongMethod = mockRequest("POST");
  await questionsHandler(feedWrongMethod.req, feedWrongMethod.res);
  assert.equal(feedWrongMethod.res.code, 405);

  console.log("Study question API tests passed (1,060 unique questions; 265 per exam track):");
  console.log("- 133 V18 additions are all present and have server-checked answers");
  console.log("- every item has a subject, topic, four distinct options, explanation and explicit difficulty");
  console.log("- question stems are unique across all four tracks");
  console.log("- original practice questions have no invented past-paper dates");
  console.log("- public feed never includes answer keys or explanations");
  console.log("- correct and incorrect answer submissions, invalid answers and unknown IDs are handled");
} finally {
  console.error = originalError;
  await server.close();
}
