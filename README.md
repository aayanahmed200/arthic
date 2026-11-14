# Arthic

[![TypeScript](https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/) [![Vite](https://img.shields.io/badge/vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/) [![Vercel](https://img.shields.io/badge/vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/) [![PostgreSQL](https://img.shields.io/badge/postgresql-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/) [![Node.js](https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/) [![Express](https://img.shields.io/badge/express-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)

Arthic is an exam-preparation platform for Pakistani entrance tests, bringing study resources and planning tools into one place.

## Overview

The platform is organised around topic-based past papers, personalised study plans, an exam calendar, and guided explanations.

## Highlights

- Covers MDCAT, ECAT, NUST NET, FAST, CSS, PMS, and LUMS LNAT.
- Includes subject, method, pricing, careers, waitlist, privacy, and terms pages.
- Provides an early-access English-language product.

## Technology

TypeScript, Vite, hand-written CSS, Vercel serverless functions, PostgreSQL, and an optional Express/SQLite backend.

## Run locally

To run the frontend and deployed API together:

```bash
cd frontend
npm install
cp .env.example .env
npx vercel dev
```

The optional standalone Express/SQLite backend is documented in `backend/README.md`.

## Notes and limitations

The AI mentor and several learning features are still in development. The current product is English-only. The optional Express/SQLite backend is independent of the deployed Vercel/PostgreSQL API; use one backend per deployment.

## License

The code is MIT licensed; see `LICENSE`. The Arthic name and wordmark are not covered by that license.