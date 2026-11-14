# Arthic Backend

An optional self-hosted Express API using Node.js and SQLite. It is separate from the Vercel/Postgres API in `frontend/api/`; choose one backend for a deployment.

## Requirements and setup

Requires Node.js 22.5 or later for `node:sqlite`.

```bash
npm install
cp .env.example .env
npm run seed
npm start
```

Set `ADMIN_PASSWORD` before using any admin route. There is no default password.

## Scripts

- `npm start` — start the server.
- `npm run dev` — start with Node's `--watch` mode.
- `npm run seed` — insert the starter journal entries; safe to run more than once.

## Configuration

See `.env.example` for the full list. Main settings:

- `PORT` — server port; defaults to `3001`.
- `ALLOWED_ORIGIN` — allowed frontend origin. Set the production frontend URL; `*` is for local development only.
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

Journal field limits: title 200 characters, excerpt 400, and body 20,000.

## Data and admin panel

Data is stored in `data/arthic.db`, which is gitignored. The `/admin` panel manages journal entries and lists subscribers. It uses the same Basic-auth credentials as the API; signing out or receiving a 401 clears the browser session.

## Deployment

Runs as a single Node process. Set `ADMIN_PASSWORD` and the production `ALLOWED_ORIGIN`, persist the `data/` directory on hosts with ephemeral filesystems, and point the frontend's `VITE_API_BASE` at this service. Render configuration is in `render.yaml`.

## License

The code is MIT licensed; see `../LICENSE`. The Arthic name and wordmark are not included.
