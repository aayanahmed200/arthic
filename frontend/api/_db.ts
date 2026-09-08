/**
 * Shared Postgres access for every /api serverless function (waitlist
 * signups, job applications). Uses @vercel/postgres, which reads its
 * connection string from the POSTGRES_URL env var — set this to a
 * Supabase (or any Postgres) connection string in the Vercel project's
 * environment variables and every function below picks it up
 * automatically. Nothing else to configure.
 */
import { sql } from "@vercel/postgres";

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
    })();
  }
  return ensured;
}

export { sql };
