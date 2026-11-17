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
    ["too many options", { options: Array.from({ length: 7 }, (_, i) => ({ key: String.fromCharCode(65 + i), text: "Option " + i })) }],
  ]) assert.equal(parseQuestionDraft({ ...base, ...patch }).ok, false, name);
  console.log("Question-bank validation tests passed: valid content, exam code, options, answer key and attribution rules.");

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
    assert.equal(unauthenticated.res.code, 401);

    const authorizedWithoutDatabase = mockAdminRequest(
      "GET",
      "Basic " + Buffer.from("admin:question-bank-test-password").toString("base64"),
    );
    await admin(authorizedWithoutDatabase.req, authorizedWithoutDatabase.res);
    assert.equal(authorizedWithoutDatabase.res.code, 503);
    console.log("Question-bank admin API access tests passed: invalid methods and unauthenticated requests are rejected; missing database fails closed.");
  } finally {
    if (previousAdminPassword === undefined) delete process.env.ADMIN_PASSWORD;
    else process.env.ADMIN_PASSWORD = previousAdminPassword;
    if (previousAdminUser === undefined) delete process.env.ADMIN_USER;
    else process.env.ADMIN_USER = previousAdminUser;
    if (previousPostgresUrl === undefined) delete process.env.POSTGRES_URL;
    else process.env.POSTGRES_URL = previousPostgresUrl;
  }

} finally { await server.close(); }
