# Arthic

**Live:** [arthic.tech](https://arthic.tech/)

[![TypeScript](https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/) [![Vite](https://img.shields.io/badge/vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/) [![Vercel](https://img.shields.io/badge/vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/) [![PostgreSQL](https://img.shields.io/badge/postgresql-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/) [![Node.js](https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/) [![Express](https://img.shields.io/badge/express-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)

Arthic is an exam-preparation platform for Pakistani entrance tests, bringing study resources and planning tools into one place.

## Overview

The platform is organised around topic-based past papers, personalised study plans, an exam calendar, and guided explanations.

## How it was made

A Vite and TypeScript multi-page site with hand-written CSS rather than a framework: the marketing pages are static HTML, and the study preview is a browser-only page whose answer keys stay on the server and are checked by an API route.

The server side is a set of Vercel serverless functions in `frontend/api/`, written in TypeScript against Postgres through `pg`. The waitlist and application endpoints create their own tables on first use, while the student workspace schema is prepared once by an admin-protected endpoint that never opens sign-up by itself. The question-bank editor under `/admin` uses the same server-side credentials and keeps new questions as drafts until each has an answer, an explanation and a takeaway.

There is also an optional standalone Express and SQLite backend in `backend/` for local work and self-hosting. The two backends are independent, and a deployment uses one of them. The domain and database wiring are described in `DEPLOYMENT.md`.

## Highlights

- Focuses on MDCAT, ECAT, NUST NET, FAST, LUMS BA-LL.B admission, CSS, and PMS.
- Includes subject, method, pricing, careers, waitlist, privacy, and terms pages.
- Includes an interactive, browser-only study-session preview with original sample questions and written explanations.
- Keeps answer keys, question validation and admin actions behind serverless routes, with the public preview falling back to the original sample set until questions are published.

## Repository contents

- `frontend/` — the Vite site, its styles and the Vercel serverless API under `frontend/api/`.
- `frontend/api/study/` — the versioned sample question sets and the answer check used by the preview.
- `frontend/api/admin/` — the admin-only question bank and student schema endpoints.
- `backend/` — the optional Express and SQLite backend, with its own README.
- `DEPLOYMENT.md` — how the Vercel project, database and domain are wired together.

## Notes and limitations

The AI mentor, student accounts, synced learner progress, question-bank services, and several learning features are still in development. The study-session preview is illustrative only: progress exists for the current page view, no data is saved or sent, and its questions are not official past-paper content. The current product is English-only. The optional Express/SQLite backend is independent of the deployed Vercel/PostgreSQL API, so one backend is used per deployment.

## License

The code is MIT licensed; see `LICENSE`. The Arthic name and wordmark are not covered by that license.
