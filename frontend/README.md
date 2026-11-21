# Arthic Frontend

The Vite and TypeScript marketing site, with the deployed Vercel serverless API in `api/`.

## Overview

The frontend is a multi-page site for Arthic's Pakistani entrance-test preparation product. It can run with the same-origin Vercel API or be connected to the optional standalone Express backend.

## Highlights

- Multi-page Vite site with shared navigation and styles.
- Waitlist and job-application forms backed by serverless endpoints.
- Responsive pages with progressive enhancement and reduced-motion support.
- The `/study-preview.html` route contains an interactive practice preview using original sample questions. Answer keys stay server-side and are checked by `api/study/check.ts`.
- Google sign-in uses Supabase Auth with OAuth PKCE. Student registration is disabled by default and can only be enabled with both a server-side and public build-time flag after database, provider and age/consent setup.
- When explicitly enabled, signed-in students can sync practice sessions and answer results to PostgreSQL. Dashboard shows progress, Settings supports study preferences and JSON export, and deletion requests enter an admin review queue.
- The `/admin.html` operations dashboard uses Google sign-in plus a server-side `ADMIN_EMAILS` allowlist. It shows aggregate student/practice/question-bank/waitlist/application statistics, pending data requests, and first-party daily public page-view counts by route (not unique visitors). Private dashboard/admin/callback pages are excluded.
- The existing `/admin/` question-bank editor continues to use the existing admin credentials.
- See `GOOGLE_SIGNIN_SETUP.md` for Supabase, callback and Vercel setup. See `../docs/LEGAL_REVIEW_BEFORE_LAUNCH.md` for the privacy, operator identity and age-consent launch checklist.
- Preview features are labelled as previews rather than presented as finished functionality.
- The AI mentor is in development and the current product is English-only.
- `api/study/questions.ts` serves the same versioned original sample set used by the preview. It is not an official past-paper feed.
- `api/admin/student-schema.ts` prepares the additive PostgreSQL schema for student accounts, sessions, question content, study sessions, answers, preferences and data requests. It is admin-protected and does not open student accounts.
- `api/student/me.ts` verifies a Supabase access token against the Auth service and requires `email_confirmed_at`; it never trusts client-supplied profile data. `api/student/account.ts` provisions the Arthic profile only after explicit policy/age declarations and the server-side feature flag is enabled.
- Set `SUPABASE_URL` and `SUPABASE_PUBLISHABLE_KEY` only in server environment settings to enable the verification check. Do not add a Supabase secret key to frontend variables.
- Student sign-in remains disabled by default. Keep `STUDENT_ACCOUNTS_ENABLED` and `VITE_STUDENT_ACCOUNTS_ENABLED` false until the schema has been initialized, provider settings verified, and the age/guardian-consent, deletion and legal review gates are complete.
- `api/study/questions.ts` returns published question prompts without answer keys; `api/study/check.ts` scores a submitted option and returns the explanation only after submission. The original demo set remains the fallback until the database has published content.
- `api/admin/questions.ts` is protected by the existing admin credentials. The `/admin` question-bank tab supports creating, editing, previewing, publishing, unpublishing and archiving. Editing a published item returns it to draft for review.
- The admin schema setup adds authoring fields and seeds original sample questions as drafts. It never overwrites later edits.
- `npm run build` type-checks the frontend and Vercel API files, runs identity, practice and question-bank validation/access tests, and then builds the site.
- Run `npm run test:api` alone to test identity verification, server-side question scoring and question-bank validation without contacting a live Supabase project or writing to the database.

## Technology

TypeScript, Vite, CSS, Vercel Functions, and PostgreSQL.

## Run locally

To run the site with its Vercel API:

```bash
npm install
npx vercel dev
```

For the frontend alone:

```bash
npm install
npm run dev
```

The Vite server uses `http://localhost:5173`. The standalone Express backend can be reached at `http://localhost:3001` when configured. For Vercel deployment, set the Root Directory to `frontend`, add the server environment variables, and use `vercel.json` for build and output settings.

## Configuration

See `.env.example` for all settings:

- `VITE_API_BASE` — leave empty for the normal same-origin Vercel API. Set it only when using the standalone Express backend.
- `POSTGRES_URL` — Postgres connection string for the deployed API.
- `ADMIN_USER` — admin username; defaults to `admin`.
- `ADMIN_PASSWORD` — required for the existing Basic-auth question editor.
- `ADMIN_EMAILS` — comma-separated Google email allowlist for `/admin.html`.
- `SUPABASE_URL`, `SUPABASE_PUBLISHABLE_KEY` — server-side Supabase Auth verification.
- `VITE_SUPABASE_URL`, `VITE_SUPABASE_PUBLISHABLE_KEY` — public browser OAuth configuration for the same Supabase project.
- `STUDENT_ACCOUNTS_ENABLED`, `VITE_STUDENT_ACCOUNTS_ENABLED` — independent server and frontend switches; both default to false.

Without `POSTGRES_URL`, the site still loads; routes that need storage return a clear not-configured response.

