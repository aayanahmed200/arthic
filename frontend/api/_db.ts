/**
 * Shared Postgres access for every /api serverless function (waitlist
 * signups, job applications). Reads its connection string from the
 * POSTGRES_URL env var — set this to a Supabase (or any Postgres)
 * connection string in the Vercel project's environment variables and
 * every function below picks it up automatically.
 *
 * Deliberately uses @vercel/postgres's createClient() rather than its
 * default pool-based `sql` export. That default assumes it's managing
 * its own pool on top of a *direct* database connection — point it at an
 * already-pooled connection string (Supabase's "Transaction pooler",
 * PgBouncer under the hood) and it throws `invalid_connection_string`
 * ("this connection string is meant to be used with a direct
 * connection... use createClient() instead"). createClient() opens one
 * plain connection per warm function instance instead, which is exactly
 * right for a string that's already pooled upstream — and avoids
 * Supabase's direct-connection host, which needs IPv6 (or a paid add-on)
 * that Vercel's functions don't have.
 *
 * For Supabase specifically: Project Settings > Database > Connect >
 * "Transaction pooler" — not the direct connection string.
 */
import { createClient } from "@vercel/postgres";

type SqlValue = string | number | boolean | null | undefined;
type DbClient = ReturnType<typeof createClient>;

let client: DbClient | null = null;
let connecting: Promise<DbClient> | null = null;

function resetClient() {
  const dying = client;
  client = null;
  connecting = null;
  if (dying) {
    dying.end().catch(() => {});
  }
}

async function getClient(): Promise<DbClient> {
  if (!connecting) {
    const next = createClient();
    connecting = next
      .connect()
      .then(() => {
        client = next;
        return next;
      })
      .catch((err) => {
        connecting = null;
        throw err;
      });
  }
  return connecting;
}

// Same call shape as the sql tagged-template every route already uses
// (`await sql\`INSERT ...\``) — swapping the implementation above
// shouldn't require touching subscribe.ts, apply.ts, or subscribers.ts.
export async function sql(strings: TemplateStringsArray, ...values: SqlValue[]) {
  const c = await getClient();
  try {
    return await c.sql(strings, ...values);
  } catch (err) {
    // the underlying connection can go stale between invocations on a
    // warm lambda instance — drop it so the *next* call reconnects
    // instead of reusing a dead client for the rest of this instance's
    // lifetime.
    resetClient();
    throw err;
  }
}

let ensured: Promise<void> | null = null;

export function ensureTables(): Promise<void> {
  if (!ensured) {
    ensured = (async () => {
      await sql`
        CREATE TABLE IF NOT EXISTS applications (
          id SERIAL PRIMARY KEY,
          role TEXT NOT NULL,
          name TEXT NOT NULL,
          email TEXT NOT NULL,
          link TEXT,
          message TEXT,
          created_at TIMESTAMPTZ NOT NULL DEFAULT now()
        );
      `;
      await sql`
        CREATE TABLE IF NOT EXISTS subscribers (
          id SERIAL PRIMARY KEY,
          email TEXT UNIQUE NOT NULL,
          created_at TIMESTAMPTZ NOT NULL DEFAULT now()
        );
      `;
    })().catch((err) => {
      ensured = null; // let the next request retry table creation
      throw err;
    });
  }
  return ensured;
}
