# Arthic Frontend

The Vite and TypeScript marketing site, with the deployed Vercel serverless API in `api/`.

## Overview

The frontend is a multi-page site for Arthic's Pakistani entrance-test preparation product. It can run with the same-origin Vercel API or be connected to the optional standalone Express backend.

## Highlights

- Multi-page Vite site with shared navigation and styles.
- Waitlist and job-application forms backed by serverless endpoints.
- Responsive pages with progressive enhancement and reduced-motion support.
- The `/study-preview.html` route contains an interactive browser-only practice session using original sample questions. It has no student sign-in, live question bank, AI mentor connection, or server-side progress storage.
- Preview features are labelled as previews rather than presented as finished functionality.
- The AI mentor is in development and the current product is English-only.

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

