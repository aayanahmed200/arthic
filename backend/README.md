# Arthic Backend

An optional self-hosted Express API using Node.js and SQLite. It is separate from the deployed Vercel/Postgres API; choose one backend for a deployment.

## Overview

The backend provides journal and subscription endpoints for a self-hosted Arthic deployment. Data is stored in a local SQLite database, separately from the deployed Vercel/Postgres API. The `/admin` panel manages journal entries and subscribers using the same Basic-auth credentials as the API.

## Highlights

- JSON API for journal entries and subscriptions.
- Basic-auth protection for admin endpoints.
- Starter journal data can be seeded from the command line.
- SQLite database files are kept out of version control.

## Technology

Node.js 22.5 or later, Express, and SQLite (`node:sqlite`).

## Run locally

```bash
npm install
cp .env.example .env
npm run seed
npm start
```

Set `ADMIN_PASSWORD` before using any admin route. There is no default password.

## Configuration

See `.env.example` for all settings:

- `PORT` — server port; defaults to `3001`.
- `ALLOWED_ORIGIN` — allowed frontend origin. Use `*` only for local development.
- `ADMIN_USER` — admin username; defaults to `admin`.
- `ADMIN_PASSWORD` — required admin password.
- `DATABASE_PATH` — SQLite file path; defaults to `./data/arthic.db`.

## API

All responses are JSON. Admin-only endpoints use HTTP Basic authentication.

- `GET /api/health` — health check.
- `GET /api/journal` — list journal entries.
- `GET /api/journal/:slug` — fetch one entry.
- `POST /api/journal` — create an entry; requires title, excerpt, and publication date.
- `PUT /api/journal/:slug` — update an entry.
- `DELETE /api/journal/:slug` — delete an entry.
- `POST /api/subscribe` — subscribe an email address.
- `GET /api/subscribers` — list subscribers; admin only.


## License

The code is MIT licensed; see `../LICENSE`. The Arthic name and wordmark are not included.
