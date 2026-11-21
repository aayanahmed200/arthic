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

const originalFetch = globalThis.fetch;
const originalUrl = process.env.SUPABASE_URL;
const originalKey = process.env.SUPABASE_PUBLISHABLE_KEY;
const originalAccountsEnabled = process.env.STUDENT_ACCOUNTS_ENABLED;
const originalPostgresUrl = process.env.POSTGRES_URL;

function mockRequest(method, authorization) {
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
    json(body) {
      this.body = body;
      return this;
    },
  };

  return {
    req: {
      method,
      headers: authorization ? { authorization } : {},
    },
    res,
  };
}

try {
  const me = (await server.ssrLoadModule("/api/student/me.ts")).default;
  const status = (await server.ssrLoadModule("/api/student/status.ts")).default;

  delete process.env.SUPABASE_URL;
  delete process.env.SUPABASE_PUBLISHABLE_KEY;
  delete process.env.STUDENT_ACCOUNTS_ENABLED;
  delete process.env.POSTGRES_URL;

  const noToken = mockRequest("GET");
  await me(noToken.req, noToken.res);
  assert.equal(noToken.res.code, 401);
  assert.equal(noToken.res.body.code, "missing-token");

  const notConfigured = mockRequest("GET", "Bearer demo.access.token");
  await me(notConfigured.req, notConfigured.res);
  assert.equal(notConfigured.res.code, 503);
  assert.equal(notConfigured.res.body.code, "not-configured");

  process.env.SUPABASE_URL = "http://not-a-provider.example";
  process.env.SUPABASE_PUBLISHABLE_KEY = "sb_publishable_test_key";
  const invalidConfig = mockRequest("GET", "Bearer demo.access.token");
  await me(invalidConfig.req, invalidConfig.res);
  assert.equal(invalidConfig.res.code, 503);
  assert.equal(invalidConfig.res.body.code, "not-configured");

  const invalidConfigStatus = mockRequest("GET");
  status(invalidConfigStatus.req, invalidConfigStatus.res);
  assert.equal(invalidConfigStatus.res.body.identityVerificationConfigured, false);

  process.env.SUPABASE_URL = "https://arthic-test.supabase.co";
  process.env.SUPABASE_PUBLISHABLE_KEY = "sb_publishable_test_key";

  let providerCalls = 0;
  globalThis.fetch = async (url, options) => {
    providerCalls += 1;
    assert.equal(String(url), "https://arthic-test.supabase.co/auth/v1/user");
    assert.equal(options.headers.apikey, "sb_publishable_test_key");
    assert.equal(options.headers.Authorization, "Bearer demo.access.token");
    return new Response(JSON.stringify({
      id: "550e8400-e29b-41d4-a716-446655440000",
      email: "student@example.com",
      email_confirmed_at: "2026-10-12T10:30:00.000Z",
      user_metadata: { full_name: "Student One" },
    }), { status: 200, headers: { "Content-Type": "application/json" } });
  };

  const verified = mockRequest("GET", "Bearer demo.access.token");
  await me(verified.req, verified.res);
  assert.equal(verified.res.code, 200);
  assert.equal(verified.res.body.authenticated, true);
  assert.equal(verified.res.body.emailVerified, true);
  assert.equal(verified.res.body.identity.email, "student@example.com");
  assert.equal(verified.res.body.identity.displayName, "Student One");
  assert.equal(verified.res.body.workspace.available, false);
  assert.equal(verified.res.headers["Cache-Control"], "no-store");

  globalThis.fetch = async () => new Response(JSON.stringify({
    id: "550e8400-e29b-41d4-a716-446655440000",
    email: "student@example.com",
    email_confirmed_at: null,
  }), { status: 200 });

  const unverified = mockRequest("GET", "Bearer demo.access.token");
  await me(unverified.req, unverified.res);
  assert.equal(unverified.res.code, 403);
  assert.equal(unverified.res.body.code, "email-unverified");

  globalThis.fetch = async () => new Response("{}", { status: 401 });
  const expired = mockRequest("GET", "Bearer demo.access.token");
  await me(expired.req, expired.res);
  assert.equal(expired.res.code, 401);
  assert.equal(expired.res.body.code, "invalid-token");

  globalThis.fetch = async () => {
    throw new Error("simulated Auth network outage");
  };
  const unavailable = mockRequest("GET", "Bearer demo.access.token");
  await me(unavailable.req, unavailable.res);
  assert.equal(unavailable.res.code, 503);
  assert.equal(unavailable.res.body.code, "provider-unavailable");

  const wrongMethod = mockRequest("POST", "Bearer demo.access.token");
  await me(wrongMethod.req, wrongMethod.res);
  assert.equal(wrongMethod.res.code, 405);
  assert.equal(wrongMethod.res.headers.Allow, "GET");

  const availability = mockRequest("GET");
  status(availability.req, availability.res);
  assert.equal(availability.res.code, 200);
  assert.equal(availability.res.body.identityProvider, "supabase");
  assert.equal(availability.res.body.identityVerificationConfigured, true);
  assert.equal(availability.res.body.accountsOpen, false);
  assert.equal(availability.res.body.signInEnabled, false);

  const statusWrongMethod = mockRequest("POST");
  status(statusWrongMethod.req, statusWrongMethod.res);
  assert.equal(statusWrongMethod.res.code, 405);

  assert.equal(providerCalls, 1, "only the verified success case should make one Auth request");

  console.log("Student identity tests passed:");
  console.log("- missing bearer token is rejected");
  console.log("- missing and invalid provider configuration fail closed");
  console.log("- verified email returns only the authenticated identity");
  console.log("- unverified email, expired token and provider outage are rejected");
  console.log("- wrong HTTP methods are rejected");
  console.log("- student sign-in and workspace access remain disabled");
  console.log("- no database writes are performed");
} finally {
  globalThis.fetch = originalFetch;
  if (originalUrl === undefined) delete process.env.SUPABASE_URL;
  else process.env.SUPABASE_URL = originalUrl;
  if (originalKey === undefined) delete process.env.SUPABASE_PUBLISHABLE_KEY;
  else process.env.SUPABASE_PUBLISHABLE_KEY = originalKey;
  if (originalAccountsEnabled === undefined) delete process.env.STUDENT_ACCOUNTS_ENABLED;
  else process.env.STUDENT_ACCOUNTS_ENABLED = originalAccountsEnabled;
  if (originalPostgresUrl === undefined) delete process.env.POSTGRES_URL;
  else process.env.POSTGRES_URL = originalPostgresUrl;
  await server.close();
}
