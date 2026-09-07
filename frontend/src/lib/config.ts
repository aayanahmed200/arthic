/**
 * Where the journal/subscribe API lives.
 *
 * Same-origin by default: the /api/* serverless functions in frontend/api
 * ship alongside this site on Vercel, so a plain relative path just works
 * there (and under `vercel dev` locally) — nothing to configure. Set
 * VITE_API_BASE only if you're running the standalone Express server in
 * backend/ instead (see backend/README.md), e.g. http://localhost:3001.
 *
 * Either way, if the API has no database connected yet it replies 503
 * with an honest message rather than a fake success — every section that
 * touches it already degrades to static content in that case.
 */
export const API_BASE: string = (import.meta.env.VITE_API_BASE as string | undefined)?.replace(/\/$/, "") || "";

export const hasApiBase = true;
