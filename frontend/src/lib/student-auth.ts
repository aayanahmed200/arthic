const SESSION_KEY = "arthic.auth-session.v1";
const OAUTH_VERIFIER_KEY = "arthic.oauth-verifier.v1";
const OAUTH_INTENT_KEY = "arthic.oauth-intent.v1";
const ACCOUNT_CONSENT_KEY = "arthic.account-consent.v1";

type AuthSession = {
  access_token: string;
  refresh_token: string;
  expires_at: number;
  token_type?: string;
};

type AuthIntent = "student" | "admin";

function config() {
  const env = import.meta.env as ImportMetaEnv & {
    readonly VITE_SUPABASE_URL?: string;
    readonly VITE_SUPABASE_PUBLISHABLE_KEY?: string;
  };
  return {
    url: (env.VITE_SUPABASE_URL || "").replace(/\/$/, ""),
    key: env.VITE_SUPABASE_PUBLISHABLE_KEY || "",
  };
}

function base64Url(bytes: Uint8Array): string {
  let binary = "";
  bytes.forEach((byte) => { binary += String.fromCharCode(byte); });
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}

function randomVerifier(): string {
  return base64Url(crypto.getRandomValues(new Uint8Array(64)));
}

async function sha256(value: string): Promise<string> {
  const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(value));
  return base64Url(new Uint8Array(digest));
}

function readSession(): AuthSession | null {
  try {
    const raw = sessionStorage.getItem(SESSION_KEY);
    if (!raw) return null;
    const value = JSON.parse(raw) as Partial<AuthSession>;
    if (
      typeof value.access_token !== "string" ||
      typeof value.refresh_token !== "string" ||
      typeof value.expires_at !== "number"
    ) return null;
    return value as AuthSession;
  } catch {
    return null;
  }
}

function saveSession(value: Record<string, unknown>): AuthSession {
  const access = typeof value.access_token === "string" ? value.access_token : "";
  const refresh = typeof value.refresh_token === "string" ? value.refresh_token : "";
  const expiresIn = Number(value.expires_in);
  if (!access || !refresh || !Number.isFinite(expiresIn) || expiresIn <= 0) {
    throw new Error("The sign-in provider returned an incomplete session.");
  }
  const session: AuthSession = {
    access_token: access,
    refresh_token: refresh,
    expires_at: Math.floor(Date.now() / 1000) + expiresIn,
    token_type: typeof value.token_type === "string" ? value.token_type : "bearer",
  };
  sessionStorage.setItem(SESSION_KEY, JSON.stringify(session));
  return session;
}

export function authIsConfigured(): boolean {
  const { url, key } = config();
  return Boolean(url && key);
}

export async function startGoogleSignIn(intent: AuthIntent): Promise<void> {
  const { url, key } = config();
  if (!url || !key) throw new Error("Google sign-in has not been configured yet. Please try again later.");
  const verifier = randomVerifier();
  const challenge = await sha256(verifier);
  sessionStorage.setItem(OAUTH_VERIFIER_KEY, verifier);
  sessionStorage.setItem(OAUTH_INTENT_KEY, intent);

  const authorize = new URL("/auth/v1/authorize", url);
  authorize.searchParams.set("apikey", key);
  authorize.searchParams.set("provider", "google");
  authorize.searchParams.set("scopes", "openid email profile");
  authorize.searchParams.set("redirect_to", new URL("/auth-callback.html", window.location.origin).toString());
  authorize.searchParams.set("code_challenge", challenge);
  authorize.searchParams.set("code_challenge_method", "s256");
  authorize.searchParams.set("prompt", "select_account");
  window.location.assign(authorize.toString());
}

export function currentAuthIntent(): AuthIntent | null {
  const value = sessionStorage.getItem(OAUTH_INTENT_KEY);
  return value === "student" || value === "admin" ? value : null;
}

export function clearAuthIntent(): void {
  sessionStorage.removeItem(OAUTH_INTENT_KEY);
}

export function saveAccountConsent(value: {
  acceptedTerms: boolean;
  acceptedPrivacy: boolean;
  ageDeclaration: boolean;
}): void {
  sessionStorage.setItem(ACCOUNT_CONSENT_KEY, JSON.stringify(value));
}

export function readAccountConsent(): {
  acceptedTerms: boolean;
  acceptedPrivacy: boolean;
  ageDeclaration: boolean;
} | null {
  try {
    const raw = sessionStorage.getItem(ACCOUNT_CONSENT_KEY);
    if (!raw) return null;
    const value = JSON.parse(raw) as Record<string, unknown>;
    if (value.acceptedTerms === true && value.acceptedPrivacy === true && value.ageDeclaration === true) {
      return { acceptedTerms: true, acceptedPrivacy: true, ageDeclaration: true };
    }
    return null;
  } catch {
    return null;
  }
}

export function clearAccountConsent(): void {
  sessionStorage.removeItem(ACCOUNT_CONSENT_KEY);
}

export async function completeGoogleCallback(): Promise<void> {
  const params = new URLSearchParams(window.location.search);
  const providerError = params.get("error_description") || params.get("error");
  if (providerError) throw new Error(providerError);
  const code = params.get("code");
  const verifier = sessionStorage.getItem(OAUTH_VERIFIER_KEY);
  if (!code || !verifier) throw new Error("The sign-in link is incomplete or has expired. Start again from Arthic.");
  const { url, key } = config();
  if (!url || !key) throw new Error("Google sign-in is not configured for this site.");

  const response = await fetch(new URL("/auth/v1/token?grant_type=pkce", url), {
    method: "POST",
    headers: {
      apikey: key,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ auth_code: code, code_verifier: verifier }),
    cache: "no-store",
  });
  const payload = await response.json().catch(() => ({})) as Record<string, unknown>;
  if (!response.ok) {
    const message = typeof payload.msg === "string" ? payload.msg :
      typeof payload.message === "string" ? payload.message :
        "Google sign-in could not be completed. Please try again.";
    throw new Error(message);
  }
  saveSession(payload);
  sessionStorage.removeItem(OAUTH_VERIFIER_KEY);
}

export async function getAccessToken(): Promise<string | null> {
  const session = readSession();
  if (!session) return null;
  if (session.expires_at * 1000 > Date.now() + 60_000) return session.access_token;

  const { url, key } = config();
  if (!url || !key) return null;
  try {
    const response = await fetch(new URL("/auth/v1/token?grant_type=refresh_token", url), {
      method: "POST",
      headers: { apikey: key, "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ refresh_token: session.refresh_token }),
      cache: "no-store",
    });
    const payload = await response.json().catch(() => ({})) as Record<string, unknown>;
    if (!response.ok) {
      sessionStorage.removeItem(SESSION_KEY);
      return null;
    }
    return saveSession(payload).access_token;
  } catch {
    return null;
  }
}

export async function signOut(): Promise<void> {
  const session = readSession();
  const { url, key } = config();
  sessionStorage.removeItem(SESSION_KEY);
  clearAccountConsent();
  clearAuthIntent();
  if (!session || !url || !key) return;
  try {
    await fetch(new URL("/auth/v1/logout", url), {
      method: "POST",
      headers: { apikey: key, Authorization: "Bearer " + session.access_token },
      cache: "no-store",
    });
  } catch {
    // The local session is cleared even when the provider is temporarily unreachable.
  }
}
