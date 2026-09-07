/**
 * Where the journal/subscribe API lives.
 *
 * Local dev talks to the backend on :3001 automatically. In production,
 * set VITE_API_BASE at build time (see frontend/README.md) to point at
 * your deployed backend. Until you do, the site still works perfectly —
 * every section that touches the API degrades to static content.
 */
const inferredDevBase = "http://localhost:3001";

export const API_BASE: string =
  (import.meta.env.VITE_API_BASE as string | undefined)?.replace(/\/$/, "") ||
  (import.meta.env.DEV ? inferredDevBase : "");

export const hasApiBase = API_BASE.length > 0;
