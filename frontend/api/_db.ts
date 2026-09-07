/**
 * Shared Postgres access for the /api serverless functions (pre-orders,
 * job applications). Uses @vercel/postgres, which reads its connection
 * string from the POSTGRES_URL env var that Vercel injects automatically
 * once a Postgres store is connected to this project under Storage in the
 * dashboard — nothing to configure by hand beyond connecting the store.
 */
import { sql } from "@vercel/postgres";

let ensured: Promise<void> | null = null;

export function ensureTables(): Promise<void> {
  if (!ensured) {
    ensured = (async () => {
      await sql`
        CREATE TABLE IF NOT EXISTS preorders (
          id SERIAL PRIMARY KEY,
          email TEXT UNIQUE NOT NULL,
          phone TEXT NOT NULL,
          created_at TIMESTAMPTZ NOT NULL DEFAULT now()
        );
      `;
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
    })();
  }
  return ensured;
}

export { sql };
