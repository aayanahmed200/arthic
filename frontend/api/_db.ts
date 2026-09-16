/**
 * Shared Postgres access for every /api serverless function (waitlist
 * signups, job applications). Reads its connection string from the
 * POSTGRES_URL env var — set this to a Supabase (or any Postgres)
 * connection string in the Vercel project's environment variables and
 * every function below picks it up automatically.
 *
 * This used to go through @vercel/postgres. Worth spelling out why it
 * doesn't anymore, so nobody swaps it back in without knowing what broke:
 *
 * @vercel/postgres wraps @neondatabase/serverless, whose driver tunnels
 * the Postgres wire protocol over a WebSocket proxy that — by default —
 * assumes the target is a Neon database and routes through Neon's own
 * proxy infrastructure. Pointed at a non-Neon host (Supabase's pooler,
 * here), it can fail before ever opening a real connection: the error
 * that surfaces still has genuine Postgres error shape (a real
 * "password authentication failed", code 28P01), which reads exactly
 * like a wrong password — but Supabase's own server-side logs showed
 * zero login attempts, ever, from this app, rejected or otherwise. The
 * failure was happening client-side, before any packet reached Supabase.
 *
 * `pg` (node-postgres) makes a plain, real TCP+TLS connection to
 * whatever host you give it — no proxy assumptions, no vendor coupling.
 * That's what Supabase's own docs recommend pairing with the
 * Transaction pooler for serverless functions in the first place.
 *
 * For Supabase specifically: Project Settings > Database > Connect >
 * "Transaction pooler" — not the direct connection string (that one
 * needs IPv6, which Vercel's functions don't have without a paid
 * add-on).
 */
import { Client } from "pg";

type SqlValue = string | number | boolean | null | undefined;

let client: Client | null = null;
let connecting: Promise<Client> | null = null;

function resetClient() {
  const dying = client;
  client = null;
  connecting = null;
  if (dying) {
    dying.end().catch(() => {});
  }
}

async function getClient(): Promise<Client> {
  if (!connecting) {
    const connectionString = process.env.POSTGRES_URL;
    if (!connectionString) {
      return Promise.reject(new Error("POSTGRES_URL is not set"));
    }
    const next = new Client({
      connectionString,
      // Supabase's pooler presents a valid cert, but the minimal cert
      // bundle in some serverless runtimes can't always chain-verify it —
      // this is the connection setting Supabase's own docs use for
      // serverless/edge platforms.
      ssl: { rejectUnauthorized: false },
    });
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

// Same call shape as before (`await sql\`INSERT ...\``) — every route
// keeps working unchanged. Converts the tagged template into a
// standard $1, $2, ... parameterized query, which is what actually
// keeps this safe from SQL injection (values never get string-interpolated
// into the query text).
export async function sql(strings: TemplateStringsArray, ...values: SqlValue[]) {
  const c = await getClient();
  const text = strings.reduce((acc, part, i) => acc + part + (i < values.length ? `$${i + 1}` : ""), "");
  try {
    return await c.query(text, values);
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
