/**
 * Shared Postgres access for every /api serverless function (waitlist
 * signups, job applications). Reads its connection string from the
 * POSTGRES_URL env var — set this to a Supabase (or any Postgres)
 * connection string in the Vercel project's environment variables and
 * every function below picks it up automatically.
 *
 * Two @vercel/postgres quirks made this less plug-and-play than the name
 * suggests, both worth spelling out so nobody "fixes" this back to the
 * obvious-looking version:
 *
 * 1. Deliberately uses createClient() rather than the default pool-based
 *    `sql` export. That default assumes it's managing its own pool on
 *    top of a *direct* database connection — point it at an
 *    already-pooled connection string (Supabase's "Transaction pooler",
 *    PgBouncer under the hood) and it throws `invalid_connection_string`.
 *    createClient() opens one plain connection per warm function
 *    instance instead, which is right for a string that's already pooled
 *    upstream — and lets us avoid Supabase's direct-connection host,
 *    which needs IPv6 (or a paid add-on) that Vercel's functions don't
 *    have.
 * 2. createClient() is passed `connectionString` explicitly rather than
 *    being called bare (`createClient()`) and left to read an env var
 *    itself — bare, it reads POSTGRES_URL_NON_POOLING, not POSTGRES_URL,
 *    and it also *sniffs the hostname* to sanity-check what it's given:
 *    anything without a literal "-pooler." (hyphen, not dot) substring
 *    is treated as a direct connection. That heuristic is Neon-specific
 *    naming (`...-pooler.<region>.aws.neon.tech`) — Supabase's pooler
 *    host (`aws-0-<region>.pooler.supabase.com`) has a dot before
 *    "pooler", not a hyphen, so the sniff misreads it. Passing the
 *    string straight through sidesteps both mismatches.
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
    const connectionString = process.env.POSTGRES_URL;
    if (!connectionString) {
      return Promise.reject(new Error("POSTGRES_URL is not set"));
    }
    const next = createClient({ connectionString });
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
          availability TEXT,
          start_window TEXT,
          created_at TIMESTAMPTZ NOT NULL DEFAULT now()
        );
      `;
      // applications predates the availability/start_window columns —
      // ADD COLUMN IF NOT EXISTS backfills them on a table that already
      // exists, since CREATE TABLE IF NOT EXISTS above is a no-op there.
      await sql`ALTER TABLE applications ADD COLUMN IF NOT EXISTS availability TEXT;`;
      await sql`ALTER TABLE applications ADD COLUMN IF NOT EXISTS start_window TEXT;`;
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
