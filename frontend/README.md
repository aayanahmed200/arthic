# Arthic Frontend

The Vite and TypeScript website for Arthic, including its public pages, practice preview and Vercel serverless API routes.

## Overview

The frontend serves the public Arthic site and the practice experience for LCAT, NUST NET, CSS MPT and MDCAT. Its API routes handle application and waitlist submissions, question delivery, answer checking and protected administration.

The practice feed does not expose answer keys. The browser submits a selected option to a server endpoint, which checks it and returns the result and explanation.

## Repository contents

- `index.html` and the other page HTML files — public site pages.
- `src/` — TypeScript page behaviour, practice interface, data and shared styles.
- `api/` — Vercel serverless endpoints for forms, student verification, practice and administration.
- `study-preview.html` — practice interface using the original sample feed and published content when configured.
- `vercel.json` — Vite build, output and routing configuration.
- `.env.example` — local server-side and build-time configuration names.

## Technology

TypeScript, Vite, CSS, Vercel Functions and PostgreSQL. The optional self-hosted Express/SQLite backend is maintained separately in [`../backend/`](../backend/README.md).

## Run locally

From this directory, install dependencies and start the frontend with its Vercel API routes:

```bash
npm install
cp .env.example .env
npx vercel dev
```

To run only the Vite frontend:

```bash
npm run dev
```

The Vite-only command does not run the Vercel API routes. Use `npx vercel dev` to test frontend and API behaviour together.

## Configuration

See `.env.example` and the root [deployment guide](../DEPLOYMENT.md).

- `POSTGRES_URL` — PostgreSQL connection string for database-backed features.
- `ADMIN_USER` and `ADMIN_PASSWORD` — credentials for protected administration routes.
- `SUPABASE_URL` and `SUPABASE_PUBLISHABLE_KEY` — server-side student identity verification settings. Student sign-in is not enabled by these settings alone.
- `VITE_API_BASE` — leave unset for the normal same-origin Vercel API; use only when connecting to the optional standalone backend.

Without `POSTGRES_URL`, the site can still load and use the original sample practice content; endpoints that require database storage report that storage is not configured.

## Tests

Run the API validation tests:

```bash
npm run test:api
```

Run the full TypeScript, API-test and Vite production-build sequence:

```bash
npm run build
```

## Scope and limitations

The current public practice tracks are LCAT, NUST NET, CSS MPT and MDCAT. Original sample questions are not official past-paper content. Database-backed questions are served only when records have been published in the configured question bank. Student sign-up and the wider student workspace remain disabled; the AI mentor is not a live feature. The current interface is English-only.

## License

The code is licensed under the MIT License. See [../LICENSE](../LICENSE) for the full text. The Arthic name and wordmark are not included.
