# Arthic

[![TypeScript](https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/) [![Vite](https://img.shields.io/badge/vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/) [![Vercel](https://img.shields.io/badge/vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/) [![PostgreSQL](https://img.shields.io/badge/postgresql-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/) [![Node.js](https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/) [![Express](https://img.shields.io/badge/express-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)

Arthic is an exam-preparation platform for Pakistani entrance tests, bringing study resources, planning tools, and an AI mentor concept into one place.

## Overview

The platform is designed around topic-organised past papers, personalised study plans, an exam calendar, and guided explanations that help learners understand concepts rather than only check answers.

## Highlights

- Covers MDCAT, ECAT, NUST NET, FAST, CSS, PMS, and LUMS LNAT.
- Includes subject, method, pricing, careers, waitlist, privacy, and terms pages.
- The AI mentor and several learning features are still in development; the site labels previews as previews rather than presenting them as live functionality.
- The current product is English-only. Additional regions and language support are marked as future work.

## Technology

- Frontend: TypeScript, Vite, and hand-written CSS.
- Deployed API: Vercel serverless functions with Postgres for waitlist signups and job applications.
- Optional self-hosted alternative: Express and SQLite in `backend/`. It supports the waitlist API, not job applications.

## Run locally

To run the deployed frontend and API together:

```bash
cd frontend
npm install
cp .env.example .env
npx vercel dev
```

Set `POSTGRES_URL` for database-backed routes and configure `ADMIN_USER` and `ADMIN_PASSWORD` for admin access. Without a database, the site remains viewable and the forms report that storage is not configured.

To run the standalone Express alternative, follow `backend/README.md`. Do not run both API implementations for the same deployment.

## Notes and limitations

- The mentor is in development; the site does not claim that the preview is a live AI tutor.
- The backend in `backend/` is an independent SQLite implementation and does not share data with the deployed Postgres API.
- See `DEPLOYMENT.md` for Vercel configuration and the self-hosting option.

## License

The code is MIT licensed; see `LICENSE`. The Arthic name and wordmark are not covered by that license.
