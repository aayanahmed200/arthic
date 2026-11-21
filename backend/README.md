# Arthic Self-hosted Backend

An optional Express API for running Arthic's journal and subscription services with a local SQLite database.

## Overview

This backend provides JSON endpoints for journal entries and email subscriptions, along with a small admin interface. It is a separate implementation from the deployed Vercel Functions and PostgreSQL API; the two backends do not share data.

## Repository contents

- `src/server.js` — Express server, middleware and route registration.
- `src/routes/` — journal and subscriber endpoints.
- `src/public/admin/` — browser-based admin interface.
- `src/db.js` — SQLite database setup.
- `src/seed.js` — idempotent starter journal data.
- `.env.example` — server and admin configuration.
- `render.yaml` — Render deployment configuration.

## Technology

Node.js 22.5 or later, Express, SQLite via the built-in `node:sqlite` module, dotenv and express-rate-limit.

## Run locally

From this directory:

```bash
npm install
cp .env.example .env
npm run seed
npm start
```

The API listens on port `3001` by default. Set a non-empty `ADMIN_PASSWORD` in `.env` before using admin routes.

## Configuration

See `.env.example`:

- `PORT` — listening port; defaults to `3001`.
- `ALLOWED_ORIGIN` — permitted frontend origin; `*` is intended only for local development.
- `ADMIN_USER` — admin username; defaults to `admin`.
- `ADMIN_PASSWORD` — required for admin endpoints; there is no default password.
- `DATABASE_PATH` — optional SQLite file path; defaults to `./data/arthic.db`.

## API

All endpoints return JSON unless serving the admin interface.

- `GET /api/health` — health check.
- `GET /api/journal` — list journal entries.
- `GET /api/journal/:slug` — retrieve one journal entry.
- `POST /api/journal` — create an entry; admin authentication required.
- `PUT /api/journal/:slug` — update an entry; admin authentication required.
- `DELETE /api/journal/:slug` — delete an entry; admin authentication required.
- `POST /api/subscribe` — submit an email subscription.
- `GET /api/subscribers` — list subscribers; admin authentication required.
- `/admin` — admin interface; its protected operations use the API's Basic authentication.

## Scope and limitations

This is an optional self-hosted backend for the journal and subscription features. It is not the API used by the main Vercel/PostgreSQL deployment, and data stored in its SQLite database is not synchronised with PostgreSQL. The repository does not define an automated test script.

## License

The code is licensed under the MIT License. See [../LICENSE](../LICENSE) for the full text. The Arthic name and wordmark are not included.
