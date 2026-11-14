import type { VercelRequest } from "@vercel/node";

export interface VerifiedStudentIdentity {
  id: string;
  email: string;
  emailVerifiedAt: string;
  displayName: string;
}

export type StudentAuthResult =
  | { ok: true; identity: VerifiedStudentIdentity }
  | { ok: false; kind: "missing-token" | "invalid-token" | "email-unverified" | "not-configured" | "provider-unavailable"; message: string };

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface SupabaseAuthUser {
  id?: unknown;
  email?: unknown;
  email_confirmed_at?: unknown;
  user_metadata?: unknown;
}

function bearerToken(req: VercelRequest): string | null {
  const header = req.headers.authorization;
  const value = Array.isArray(header) ? header[0] : header;
  if (!value || value.length > 8200) return null;

  const match = /^Bearer\s+([^\s]+)$/i.exec(value.trim());
  return match?.[1] ?? null;
}

function providerBaseUrl(): URL | null {
  const raw = process.env.SUPABASE_URL?.trim();
  if (!raw) return null;

  try {
    const url = new URL(raw);
    const localHost = url.hostname === "localhost" || url.hostname === "127.0.0.1";
    if (url.protocol !== "https:" && !(localHost && url.protocol === "http:")) return null;
    if (url.username || url.password || url.search || url.hash) return null;
    if (url.pathname !== "/" && url.pathname !== "") return null;
    return url;
  } catch {
    return null;
  }
}

function displayName(metadata: unknown): string {
  if (!metadata || typeof metadata !== "object" || Array.isArray(metadata)) return "";
  const data = metadata as Record<string, unknown>;
  const value = data.full_name ?? data.name ?? data.display_name;
  return typeof value === "string" ? value.trim().slice(0, 120) : "";
}

/**
 * Validates a student's Supabase access token against the Auth service.
 * The publishable key identifies this app; only the bearer access token
 * identifies the signed-in user. Never pass a publishable/secret key here
 * as the bearer token, and never expose a Supabase secret key to the client.
 */
export async function authenticateStudent(req: VercelRequest): Promise<StudentAuthResult> {
  const token = bearerToken(req);
  if (!token) {
    return {
      ok: false,
      kind: "missing-token",
      message: "Sign in to continue.",
    };
  }

  const baseUrl = providerBaseUrl();
  const publishableKey = process.env.SUPABASE_PUBLISHABLE_KEY?.trim();

  if (!baseUrl || !publishableKey) {
    return {
      ok: false,
      kind: "not-configured",
      message: "Student identity verification is not configured.",
    };
  }

  try {
    const response = await fetch(new URL("/auth/v1/user", baseUrl), {
      method: "GET",
      headers: {
        apikey: publishableKey,
        Authorization: "Bearer " + token,
        Accept: "application/json",
      },
      cache: "no-store",
      signal: AbortSignal.timeout(5000),
    });

    if (response.status === 401 || response.status === 403) {
      return {
        ok: false,
        kind: "invalid-token",
        message: "Your sign-in session is invalid or has expired. Sign in again.",
      };
    }

    if (!response.ok) {
      return {
        ok: false,
        kind: "provider-unavailable",
        message: "Student identity verification is temporarily unavailable.",
      };
    }

    const user = (await response.json()) as SupabaseAuthUser;
    const id = typeof user.id === "string" ? user.id : "";
    const email = typeof user.email === "string" ? user.email.trim().toLowerCase() : "";
    const emailVerifiedAt =
      typeof user.email_confirmed_at === "string" ? user.email_confirmed_at : "";

    if (!UUID_RE.test(id) || !EMAIL_RE.test(email) || email.length > 254) {
      return {
        ok: false,
        kind: "invalid-token",
        message: "The identity provider returned an incomplete account.",
      };
    }

    if (!emailVerifiedAt) {
      return {
        ok: false,
        kind: "email-unverified",
        message: "Verify your email address before continuing.",
      };
    }

    return {
      ok: true,
      identity: {
        id,
        email,
        emailVerifiedAt,
        displayName: displayName(user.user_metadata),
      },
    };
  } catch {
    return {
      ok: false,
      kind: "provider-unavailable",
      message: "Student identity verification is temporarily unavailable.",
    };
  }
}
