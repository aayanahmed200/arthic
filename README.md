# Arthic

> An early-access exam-preparation platform for Pakistani entrance tests, with subject and exam information, study resources, and an interactive sample-practice preview.

**Live product:** [arthic.tech](https://arthic.tech/)

[![TypeScript](https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/) [![Vite](https://img.shields.io/badge/vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/) [![Vercel](https://img.shields.io/badge/vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/) [![PostgreSQL](https://img.shields.io/badge/postgresql-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/) [![Node.js](https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/) [![Express](https://img.shields.io/badge/express-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)

## Overview

Arthic brings exam information, study resources, and planning tools together for students preparing for Pakistani entrance and competitive examinations. The current public site includes informational pages, a waitlist and application forms, and an interactive practice-session preview built around original sample questions.

The active Vercel deployment uses the Vite/TypeScript frontend and serverless API backed by PostgreSQL. The repository also contains an optional, separate Express/SQLite backend for self-hosting; it is not the backend used by the current Vercel deployment.

## Highlights

- Information for MDCAT, ECAT, NUST NET, FAST, LUMS BA-LL.B admission, CSS, and PMS.
- Subject, study-method, pricing, career, privacy, and terms pages.
- Waitlist and application forms backed by server-side endpoints.
- Interactive practice preview with original sample questions; answer keys remain server-side and are checked after submission.
- Admin-protected question-bank authoring endpoints and a preparation schema for a future student workspace.

## Implementation

The frontend is a multi-page Vite site written in TypeScript with shared CSS. Vercel serverless functions in `frontend/api/` handle forms, practice scoring, administrative question-bank actions, and database access through PostgreSQL.

The optional `backend/` directory is an independent Express and SQLite service intended for self-hosting. It has its own API and setup instructions. Choose one backend architecture for a given deployment rather than combining the two.

## Repository structure

- `frontend/` — active Vite site, static pages, styles, public assets, and Vercel serverless API.
- `frontend/api/study/` — sample-question feed and server-side answer checking.
- `frontend/api/admin/` — admin-protected question-bank and student-schema endpoints.
- `backend/` — optional standalone Express/SQLite backend; see its separate README.
- `DEPLOYMENT.md` — current Vercel/PostgreSQL deployment setup and the alternative self-hosting path.
- `LICENSE` — code license; the Arthic name and wordmark are excluded.

## Status and limitations

Arthic is still in early access. Student accounts, verified sign-in, saved learner progress, the AI mentor, and several planned learning features are not yet available as a complete student-facing experience. The public practice preview is illustrative and uses original sample questions, not an official past-paper feed; progress is not saved. The current product is English-only. The student database schema is preparatory and does not by itself open registration. The database variables, admin credentials and domain configuration are described in [DEPLOYMENT.md](DEPLOYMENT.md).

## License

The code is MIT licensed; see [LICENSE](LICENSE). The Arthic name and wordmark are not covered by that license.
