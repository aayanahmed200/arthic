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
    sourceKind: "original-sample", sourceNote: "", difficulty: "EASY",
    examYear: null, examMonth: null, examSession: null,
  };
  const valid = parseQuestionDraft(base);
  assert.equal(valid.ok, true);
  assert.ok(EXAM_CODES.includes("MDCAT"));
  assert.ok(EXAM_CODES.includes("LCAT"));
  assert.ok(EXAM_CODES.includes("NET"));
  assert.ok(EXAM_CODES.includes("CSS"));
  assert.equal(EXAM_CODES.includes("ECAT"), false);
  assert.equal(valid.value.answerKey, "B");
  for (const [name, patch] of [
    ["unsupported exam", { examCode: "UNKNOWN" }],
    ["missing prompt", { prompt: "" }],
    ["duplicate options", { options: [{ key: "A", text: "One" }, { key: "A", text: "Two" }] }],
    ["missing answer option", { answerKey: "F" }],
    ["licensed content without source note", { sourceKind: "licensed", sourceNote: "" }],
    ["missing difficulty", { difficulty: "" }],
    ["past paper without date", { sourceKind: "past-paper", sourceNote: "FPSC CSS MPT paper" }],
    ["past paper with invalid month", { sourceKind: "past-paper", sourceNote: "FPSC CSS MPT paper", examYear: 2025, examMonth: 13 }],
    ["original sample with invented date", { examYear: 2025, examMonth: 2 }],
    ["unpaired paper date", { sourceKind: "licensed", sourceNote: "Licensed set", examYear: 2025, examMonth: null }],
    ["too many options", { options: Array.from({ length: 7 }, (_, i) => ({ key: String.fromCharCode(65 + i), text: "Option " + i })) }],
  ]) assert.equal(parseQuestionDraft({ ...base, ...patch }).ok, false, name);
  const datedPastPaper = parseQuestionDraft({
    ...base,
    sourceKind: "past-paper",
    sourceNote: "FPSC CSS MPT 2025 paper, official public paper archive",
    examYear: 2025,
    examMonth: 2,
    examSession: "MPT",
  });
  assert.equal(datedPastPaper.ok, true);
  assert.equal(datedPastPaper.value.examYear, 2025);
  assert.equal(datedPastPaper.value.examMonth, 2);
  console.log("Question-bank validation tests passed: difficulty, source attribution, real paper dates, options and answer keys.");

  const admin = (await server.ssrLoadModule("/api/admin/questions.ts")).default;
  const previousAdminPassword = process.env.ADMIN_PASSWORD;
  const previousAdminUser = process.env.ADMIN_USER;
  const previousPostgresUrl = process.env.POSTGRES_URL;
  const mockAdminRequest = (method, authorization) => {
    const res = {
      code: 200, headers: {}, body: null,
      setHeader(name, value) { this.headers[name] = value; return this; },
      status(code) { this.code = code; return this; },
      json(value) { this.body = value; return this; },
    };
    return { req: { method, headers: authorization ? { authorization } : {} }, res };
  };
  try {
    process.env.ADMIN_PASSWORD = "question-bank-test-password";
    process.env.ADMIN_USER = "admin";
    delete process.env.POSTGRES_URL;

    const wrongMethod = mockAdminRequest("PUT");
    await admin(wrongMethod.req, wrongMethod.res);
    assert.equal(wrongMethod.res.code, 405);
    assert.equal(wrongMethod.res.headers.Allow, "GET, POST, PATCH");

    const unauthenticated = mockAdminRequest("GET");
    await admin(unauthenticated.req, unauthenticated.res);
    assert.equal(unauthenticated.res.code, 503,
      "the strict shared rate limiter must fail closed when its database is unavailable");

    const authorizedWithoutDatabase = mockAdminRequest(
      "GET",
      "Basic " + Buffer.from("admin:question-bank-test-password").toString("base64"),
    );
    await admin(authorizedWithoutDatabase.req, authorizedWithoutDatabase.res);
    assert.equal(authorizedWithoutDatabase.res.code, 503);
    console.log("Question-bank admin API access tests passed: invalid methods are rejected and database-backed request protection fails closed when storage is unavailable.");
  } finally {
    if (previousAdminPassword === undefined) delete process.env.ADMIN_PASSWORD;
    else process.env.ADMIN_PASSWORD = previousAdminPassword;
    if (previousAdminUser === undefined) delete process.env.ADMIN_USER;
    else process.env.ADMIN_USER = previousAdminUser;
    if (previousPostgresUrl === undefined) delete process.env.POSTGRES_URL;
    else process.env.POSTGRES_URL = previousPostgresUrl;
  }

} finally { await server.close(); }
