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
    setHeader(name, value) {
      this.headers[name] = value;
      return this;
    },
    status(code) {
      this.code = code;
      return this;
    },
    json(value) {
      this.body = value;
      return this;
    },
  };
  return { req: { method, body, headers: { "x-forwarded-for": "203.0.113.10" } }, res };
}

try {
  // With no database configured the optional demo rate limiter intentionally
  // fails open. Suppress its expected diagnostic in this isolated API test.
  delete process.env.POSTGRES_URL;
  console.error = () => {};

  const questionsHandler = (await server.ssrLoadModule("/api/study/questions.ts")).default;
  const checkHandler = (await server.ssrLoadModule("/api/study/check.ts")).default;
  const { SAMPLE_QUESTIONS } = await server.ssrLoadModule("/api/study/_sample-content.ts");

  const feed = mockRequest("GET");
  questionsHandler(feed.req, feed.res);
  assert.equal(feed.res.code, 200);
  assert.equal(feed.res.body.questions.length, 920);
  const examCodes = ["LCAT", "NET", "CSS", "MDCAT"];
  assert.deepEqual([...new Set(feed.res.body.questions.map((item) => item.examCode))].sort(), [...examCodes].sort());
  for (const examCode of examCodes) {
    assert.equal(feed.res.body.questions.filter((item) => item.examCode === examCode).length, 230);
  }
  assert.equal(feed.res.body.dataVersion, "arthic-original-four-track-v15-920");
  assert.equal(feed.res.body.isOfficialPastPaper, false);
  assert.ok(feed.res.body.dataVersion);
  assert.ok(feed.res.body.questions.some((item) => item.id === "mdcat-extra-014"));
  const lcatSubjects = [...new Set(feed.res.body.questions.filter((item) => item.examCode === "LCAT").map((item) => item.subjectCode))].sort();
  assert.deepEqual(lcatSubjects, ["MATH", "VERBAL"]);
  assert.equal(feed.res.body.questions.filter((item) => item.examCode === "MDCAT" && item.subjectCode === "ENGLISH").length, 10);
  assert.equal(feed.res.body.questions.filter((item) => item.examCode === "MDCAT" && item.subjectCode === "LOGIC").length, 10);

  const v11Questions = SAMPLE_QUESTIONS.filter((item) => item.id.startsWith("v11-"));
  assert.equal(v11Questions.length, 80);
  for (const examCode of examCodes) {
    assert.equal(v11Questions.filter((item) => item.examCode === examCode).length, 20);
  }
  for (const question of v11Questions) {
    assert.equal(question.options.length, 4, question.id);
    assert.ok(question.options.some((option) => option.key === question.answer), question.id);
    const check = mockRequest("POST", { questionId: question.id, selectedOption: question.answer });
    await checkHandler(check.req, check.res);
    assert.equal(check.res.code, 200, question.id);
    assert.equal(check.res.body.isCorrect, true, question.id);
    assert.equal(check.res.body.correctOption, question.answer, question.id);
    assert.ok(check.res.body.explanation, question.id);
    assert.ok(check.res.body.takeaway, question.id);
  }


  const v12Questions = SAMPLE_QUESTIONS.filter((item) => item.id.startsWith("v12-"));
  assert.equal(v12Questions.length, 80);
  for (const examCode of examCodes) {
    assert.equal(v12Questions.filter((item) => item.examCode === examCode).length, 20);
  }
  for (const question of v12Questions) {
    assert.equal(question.options.length, 4, question.id);
    assert.ok(question.options.some((option) => option.key === question.answer), question.id);
    assert.ok(question.explanation, question.id);
    assert.ok(question.takeaway, question.id);
    const check = mockRequest("POST", { questionId: question.id, selectedOption: question.answer });
    await checkHandler(check.req, check.res);
    assert.equal(check.res.code, 200, question.id);
    assert.equal(check.res.body.isCorrect, true, question.id);
    assert.equal(check.res.body.correctOption, question.answer, question.id);
    assert.ok(check.res.body.explanation, question.id);
    assert.ok(check.res.body.takeaway, question.id);
  }




  const v15Questions = SAMPLE_QUESTIONS.filter((item) => item.id.startsWith("v15-"));
  assert.equal(v15Questions.length, 40);
  for (const examCode of examCodes) {
    assert.equal(v15Questions.filter((item) => item.examCode === examCode).length, 10);
  }
  for (const question of v15Questions) {
    assert.equal(question.options.length, 4, question.id);
    assert.ok(question.options.some((option) => option.key === question.answer), question.id);
    assert.ok(question.explanation, question.id);
    assert.ok(question.takeaway, question.id);
    const check = mockRequest("POST", { questionId: question.id, selectedOption: question.answer });
    await checkHandler(check.req, check.res);
    assert.equal(check.res.code, 200, question.id);
    assert.equal(check.res.body.isCorrect, true, question.id);
    assert.equal(check.res.body.correctOption, question.answer, question.id);
    assert.ok(check.res.body.explanation, question.id);
    assert.ok(check.res.body.takeaway, question.id);
  }

  const v14Questions = SAMPLE_QUESTIONS.filter((item) => item.id.startsWith("v14-"));
  assert.equal(v14Questions.length, 40);
  for (const examCode of examCodes) {
    assert.equal(v14Questions.filter((item) => item.examCode === examCode).length, 10);
  }
  for (const question of v14Questions) {
    assert.equal(question.options.length, 4, question.id);
    assert.ok(question.options.some((option) => option.key === question.answer), question.id);
    assert.ok(question.explanation, question.id);
    assert.ok(question.takeaway, question.id);
    const check = mockRequest("POST", { questionId: question.id, selectedOption: question.answer });
    await checkHandler(check.req, check.res);
    assert.equal(check.res.code, 200, question.id);
    assert.equal(check.res.body.isCorrect, true, question.id);
    assert.equal(check.res.body.correctOption, question.answer, question.id);
    assert.ok(check.res.body.explanation, question.id);
    assert.ok(check.res.body.takeaway, question.id);
  }

  const v13Questions = SAMPLE_QUESTIONS.filter((item) => item.id.startsWith("v13-"));
  assert.equal(v13Questions.length, 40);
  for (const examCode of examCodes) {
    assert.equal(v13Questions.filter((item) => item.examCode === examCode).length, 10);
  }
  for (const question of v13Questions) {
    assert.equal(question.options.length, 4, question.id);
    assert.ok(question.options.some((option) => option.key === question.answer), question.id);
    assert.ok(question.explanation, question.id);
    assert.ok(question.takeaway, question.id);
    const check = mockRequest("POST", { questionId: question.id, selectedOption: question.answer });
    await checkHandler(check.req, check.res);
    assert.equal(check.res.code, 200, question.id);
    assert.equal(check.res.body.isCorrect, true, question.id);
    assert.equal(check.res.body.correctOption, question.answer, question.id);
    assert.ok(check.res.body.explanation, question.id);
    assert.ok(check.res.body.takeaway, question.id);
  }

  const v10Questions = SAMPLE_QUESTIONS.filter((item) => item.id.startsWith("v10-"));
  assert.equal(v10Questions.length, 80);
  for (const question of v10Questions) {
    assert.equal(question.options.length, 4, question.id);
    assert.ok(question.options.some((option) => option.key === question.answer), question.id);
    const check = mockRequest("POST", { questionId: question.id, selectedOption: question.answer });
    await checkHandler(check.req, check.res);
    assert.equal(check.res.code, 200, question.id);
    assert.equal(check.res.body.isCorrect, true, question.id);
    assert.equal(check.res.body.correctOption, question.answer, question.id);
    assert.ok(check.res.body.explanation, question.id);
    assert.ok(check.res.body.takeaway, question.id);
  }

  for (const item of feed.res.body.questions) {
    assert.equal("answer" in item, false);
    assert.equal("correctOption" in item, false);
    assert.equal("explanation" in item, false);
    assert.equal("takeaway" in item, false);
  }


  // Confirm answer data for the four newly expanded tracks remains server-side.
  for (const [questionId, correctOption] of [
    ["lcat-new-001", "B"],
    ["net-new-001", "C"],
    ["css-new-001", "B"],
    ["mdcat-new-001", "B"],
    ["lcat-plus-001", "A"],
    ["net-plus-001", "C"],
    ["css-plus-001", "B"],
    ["mdcat-plus-001", "A"],
    ["lcat-next-001", "C"],
    ["net-next-001", "C"],
    ["css-next-001", "C"],
    ["mdcat-next-001", "B"],
  ]) {
    const added = mockRequest("POST", { questionId, selectedOption: correctOption });
    await checkHandler(added.req, added.res);
    assert.equal(added.res.code, 200, questionId);
    assert.equal(added.res.body.isCorrect, true, questionId);
    assert.equal(added.res.body.correctOption, correctOption, questionId);
    assert.ok(added.res.body.explanation, questionId);
    assert.ok(added.res.body.takeaway, questionId);
  }

  // New question set also rejects incorrect answers while revealing explanation only after submission.
  const freshWrong = mockRequest("POST", { questionId: "lcat-plus-001", selectedOption: "B" });
  await checkHandler(freshWrong.req, freshWrong.res);
  assert.equal(freshWrong.res.code, 200);
  assert.equal(freshWrong.res.body.isCorrect, false);
  assert.equal(freshWrong.res.body.correctOption, "A");

  const feedWrongMethod = mockRequest("POST");
  questionsHandler(feedWrongMethod.req, feedWrongMethod.res);
  assert.equal(feedWrongMethod.res.code, 405);

  const correct = mockRequest("POST", {
    questionId: "mdcat-bio-cell-001",
    selectedOption: "B",
  });
  await checkHandler(correct.req, correct.res);
  assert.equal(correct.res.code, 200);
  assert.equal(correct.res.body.isCorrect, true);
  assert.equal(correct.res.body.correctOption, "B");
  assert.ok(correct.res.body.explanation);
  assert.ok(correct.res.body.takeaway);
  assert.equal(correct.res.headers["Cache-Control"], "no-store");

  const incorrect = mockRequest("POST", {
    questionId: "mdcat-bio-cell-001",
    selectedOption: "A",
  });
  await checkHandler(incorrect.req, incorrect.res);
  assert.equal(incorrect.res.code, 200);
  assert.equal(incorrect.res.body.isCorrect, false);
  assert.equal(incorrect.res.body.correctOption, "B");


  const expandedCorrect = mockRequest("POST", {
    questionId: "mdcat-extra-014",
    selectedOption: "C",
  });
  await checkHandler(expandedCorrect.req, expandedCorrect.res);
  assert.equal(expandedCorrect.res.code, 200);
  assert.equal(expandedCorrect.res.body.isCorrect, true);
  assert.equal(expandedCorrect.res.body.correctOption, "C");

  const expandedIncorrect = mockRequest("POST", {
    questionId: "mdcat-extra-014",
    selectedOption: "A",
  });
  await checkHandler(expandedIncorrect.req, expandedIncorrect.res);
  assert.equal(expandedIncorrect.res.code, 200);
  assert.equal(expandedIncorrect.res.body.isCorrect, false);
  assert.equal(expandedIncorrect.res.body.correctOption, "C");

  const newNetCorrect = mockRequest("POST", {
    questionId: "net-extra-017",
    selectedOption: "C",
  });
  await checkHandler(newNetCorrect.req, newNetCorrect.res);
  assert.equal(newNetCorrect.res.code, 200);
  assert.equal(newNetCorrect.res.body.isCorrect, true);
  assert.equal(newNetCorrect.res.body.correctOption, "C");
  assert.ok(newNetCorrect.res.body.explanation.includes("f′(2) = 4 + 3 = 7"));

  const newNetIncorrect = mockRequest("POST", {
    questionId: "net-extra-017",
    selectedOption: "D",
  });
  await checkHandler(newNetIncorrect.req, newNetIncorrect.res);
  assert.equal(newNetIncorrect.res.code, 200);
  assert.equal(newNetIncorrect.res.body.isCorrect, false);
  assert.equal(newNetIncorrect.res.body.correctOption, "C");

  const invalid = mockRequest("POST", {
    questionId: "mdcat-bio-cell-001",
    selectedOption: "Z",
  });
  await checkHandler(invalid.req, invalid.res);
  assert.equal(invalid.res.code, 400);

  const unknown = mockRequest("POST", {
    questionId: "not-a-question",
    selectedOption: "A",
  });
  await checkHandler(unknown.req, unknown.res);
  assert.equal(unknown.res.code, 404);

  const wrongMethod = mockRequest("GET", {});
  await checkHandler(wrongMethod.req, wrongMethod.res);
  assert.equal(wrongMethod.res.code, 405);

  console.log("Study question API tests passed (920 questions; all V10, V11, V12, V13, V14 and V15 answer keys checked):");
  console.log("- public feed returns questions without answer keys or explanations");
  console.log("- correct and incorrect answers are scored server-side");
  console.log("- explanations and takeaways arrive only after submission");
  console.log("- invalid answers, unknown questions and wrong methods are rejected");
} finally {
  console.error = originalError;
  await server.close();
}
