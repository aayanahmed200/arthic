# Arthic Frontend

The Vite and TypeScript marketing site, with the deployed Vercel serverless API in `api/`.

## Overview

The frontend is a multi-page site for Arthic's Pakistani entrance-test preparation product. It can run with the same-origin Vercel API or be connected to the optional standalone Express backend.

## Highlights

- Multi-page Vite site with shared navigation and styles.
- Waitlist and job-application forms backed by serverless endpoints.
- Responsive pages with progressive enhancement and reduced-motion support.
- The `/study-preview.html` route contains an interactive practice preview using original sample questions. Answer keys stay server-side and are checked by `api/study/check.ts`; the preview still has no student sign-in, licensed live question bank, AI mentor connection, or saved progress.
- Preview features are labelled as previews rather than presented as finished functionality.
- The AI mentor is in development and the current product is English-only.
- `api/study/questions.ts` serves the same versioned original sample set used by the preview. It is not an official past-paper feed.
- `api/admin/student-schema.ts` prepares the additive PostgreSQL schema for student accounts, sessions, question content, study sessions, answers and data requests. It is admin-protected and does not open student accounts.
- `api/student/me.ts` verifies a Supabase access token against the Auth service and requires `email_confirmed_at`; it never trusts client-supplied profile data. It does not create a local profile or open the workspace.
- Set `SUPABASE_URL` and `SUPABASE_PUBLISHABLE_KEY` only in server environment settings to enable the verification check. Do not add a Supabase secret key to frontend variables.
- Student sign-in remains unavailable until sign-up UI, verified email and recovery, age-appropriate consent, privacy terms and deletion/support procedures are ready.
- `api/study/questions.ts` returns published question prompts without answer keys; `api/study/check.ts` scores a submitted option and returns the explanation only after submission. The original demo set remains the fallback until the database has published content.
- `api/admin/questions.ts` is protected by the existing admin credentials. The `/admin` question-bank tab supports creating, editing, previewing, publishing, unpublishing and archiving. Editing a published item returns it to draft for review.
- The admin schema setup adds authoring fields and seeds the three original sample questions as drafts. It never overwrites later edits.
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
- `ADMIN_PASSWORD` — required for admin endpoints.

Without `POSTGRES_URL`, the site still loads; routes that need storage return a clear not-configured response.

