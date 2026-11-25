# Arthic Frontend

> The Vite and TypeScript marketing site for Arthic, together with the Vercel serverless API it calls.

[![TypeScript](https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/) [![Vite](https://img.shields.io/badge/vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/) [![Vercel](https://img.shields.io/badge/vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/) [![PostgreSQL](https://img.shields.io/badge/postgresql-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)

## Overview

The frontend is the public Arthic site: informational pages for Pakistani entrance and competitive exams, waitlist and job-application forms, and an interactive practice-session preview built around original sample questions.

It runs against the same-origin Vercel API in `api/`, and can alternatively be pointed at the optional standalone Express backend. The deployed site is static apart from those serverless routes.

## Key features

- Multi-page Vite site with shared navigation and styles.
- Subject, study-method, pricing, career, waitlist, application, privacy, terms and cookie pages, plus a custom 404.
- Waitlist and job-application forms backed by server-side endpoints.
- Responsive pages with progressive enhancement and reduced-motion support.
- Interactive, browser-only study preview; answer keys stay server-side and are checked after submission.
- Admin-protected question bank supporting creating, editing, previewing, publishing, unpublishing and archiving; editing a published item returns it to draft for review.

## Implementation

The pages are hand-written HTML with one stylesheet, built by Vite without a framework, so navigation stays shared and the site ships as static files. The practice preview is the only JavaScript-heavy page and asks the API for its questions.

The API in `api/` is a set of Vercel serverless functions written in TypeScript against PostgreSQL through `pg`. The waitlist and application endpoints create their own tables on first use. The student schema is prepared by an admin-protected endpoint that never opens sign-up by itself, and identity checks verify a Supabase access token against the Auth service instead of trusting client-supplied profile data. Question-bank items stay drafts until each has an answer, an explanation and a takeaway.

## Repository structure

- `index.html`, `subjects.html`, `method.html`, `pricing.html`, `careers.html`, `waitlist.html`, `apply.html` — the marketing pages.
- `privacy.html`, `terms.html`, `cookies.html`, `404.html` — policy and fallback pages.
- `study-preview.html` — the interactive practice preview.
- `src/` — shared styles and page scripts.
- `api/study/` — the versioned sample question sets, the question feed and the answer check.
- `api/student/` — Supabase token verification, the current-student route and workspace status.
- `api/admin/` — the admin-only question bank and student-schema endpoints.
- `scripts/` — the validation and access tests run as part of the build.

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

`npm run build` type-checks the frontend and API files, runs the identity, practice and question-bank checks, then builds the site. `npm run test:api` runs those checks alone without contacting a live Supabase project or writing to the database.

## Status and limitations

Student sign-in is not open: it stays unavailable until sign-up UI, verified email and recovery, age-appropriate consent, privacy terms and deletion procedures are ready. The practice preview is illustrative — progress exists only for the current page view, nothing is saved or sent, and its questions are not official past-paper content; `api/study/questions.ts` serves the same versioned original sample set and remains the fallback until the database has published content. Supabase settings belong only in server environment variables, never in frontend variables. Without a database connection the site still loads and routes that need storage return a clear not-configured response. The AI mentor and synced learner progress are still in development, and the product is English-only.

## License

The code is MIT licensed; see [`../LICENSE`](../LICENSE). The Arthic name and wordmark are not covered by that license.
