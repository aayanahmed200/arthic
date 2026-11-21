# Arthic

An early-access exam-preparation platform for Pakistani entrance and competitive exams.

**[Visit arthic.tech](https://arthic.tech)**

## Overview

This repository contains the public Arthic website, a practice experience and the APIs behind forms and study features. The current practice feed supports LCAT, NUST NET, CSS MPT and MDCAT. It serves original sample questions and can include published questions from the PostgreSQL question bank when the database is configured.

Answer checking is handled by a server endpoint so correct answers and explanations are not included in the public question-feed response. Public application and waitlist forms also use server-side API routes.

## Repository contents

- `frontend/` — Vite and TypeScript site, page styles, practice interface and Vercel serverless API routes.
- `frontend/api/study/` — question feed and answer-checking endpoints, plus the sample question content.
- `frontend/api/admin/` — protected question-bank and student-schema administration endpoints.
- `backend/` — optional self-hosted Express and SQLite API, separate from the Vercel/PostgreSQL implementation.
- `DEPLOYMENT.md` — database, Vercel, environment-variable and domain setup.
- `LICENSE` — code license and brand exclusion.

## Technology

TypeScript, JavaScript, Vite, hand-written CSS, Vercel serverless functions and PostgreSQL. The optional standalone backend uses Node.js, Express and SQLite. The two backend implementations are separate; use one for a deployment.

## Run locally

The main application uses Vercel's local development server to run the frontend and its API routes together:

```bash
cd frontend
npm install
cp .env.example .env
npx vercel dev
```

Set `POSTGRES_URL` for database-backed features and configure `ADMIN_USER` and `ADMIN_PASSWORD` before using protected admin routes. Without a database connection, the site can load but endpoints that require storage report that storage is unavailable; the practice API can use its sample question content.

To use the optional Express/SQLite backend instead, follow [backend/README.md](backend/README.md). Do not run both backends as though they share a database.

## Scope and limitations

Arthic is in early access. The current practice API covers LCAT, NUST NET, CSS MPT and MDCAT; other exam pages or planned tracks should not be taken as evidence that a full question bank is available for every exam. The current interface is English-only. Student sign-up is intentionally disabled in the checked-in configuration; the student workspace schema and identity-verification settings are marked as not active. The AI mentor and wider student workspace remain under development.

The practice bank includes original sample questions. They are not official past-paper questions unless a source and permission status are explicitly recorded for a published entry. Educational content should be reviewed before being relied on for exam preparation.

## License

The code is licensed under the MIT License. See [LICENSE](LICENSE) for the full text. The Arthic name and wordmark are not included.
