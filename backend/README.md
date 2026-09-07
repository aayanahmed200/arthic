# arthic — backend

A self-host alternative to `frontend/api/`, the API that's actually deployed at arthic.tech. This is a complete, independent implementation of the journal and email-signup endpoints, plus a small admin panel for writing journal entries without touching code — Express + Node's built-in `node:sqlite`, no native modules to compile, no separate database to run. Use this instead of `frontend/api/` if you'd rather run a normal Node server (e.g. Render) than Vercel serverless functions + Postgres; the two are independent, don't share a database, and only one should be live per deployment. It doesn't cover pre-orders or job applications — those only exist in `frontend/api/`. See the [root README](../README.md) for the project as a whole and [`../DEPLOYMENT.md`](../DEPLOYMENT.md) for how each path actually gets deployed.

## Setup

```
npm install
cp .env.example .env   # then set ADMIN_PASSWORD
npm run seed
npm start
```

Requires Node 22.5+ (for `node:sqlite`). The server refuses every admin request until `ADMIN_PASSWORD` is set in `.env` — there's no working default password.

## Scripts

| Command | Does |
| --- | --- |
| `npm start` | Runs the server once |
| `npm run dev` | Runs the server with `--watch`, restarts on file changes |
| `npm run seed` | Idempotent — inserts the three starter journal entries if they aren't already there, safe to re-run |

## Environment variables

See [`.env.example`](.env.example) for the authoritative list.

| Variable | Default | Purpose |
| --- | --- | --- |
| `PORT` | `3001` | Port the API listens on |
| `ALLOWED_ORIGIN` | `*` | CORS origin allowed to call the API. Set to your deployed frontend's exact URL in production — `*` is for local dev only |
| `ADMIN_USER` | `admin` | Username for `/admin` and the write endpoints |
| `ADMIN_PASSWORD` | *(none — required)* | Password for the same. Server returns 500 on any admin request until this is set |
| `DATABASE_PATH` | `./data/arthic.db` | Override where the SQLite file lives |

## API

All responses are JSON. Admin-only routes require HTTP Basic auth (`ADMIN_USER` / `ADMIN_PASSWORD`) and are otherwise unreachable — there's no session or cookie involved, the header is sent on every request (see `backend/src/public/admin/admin.js`).

| Method | Path | Auth | Does |
| --- | --- | --- | --- |
| `GET` | `/api/health` | — | `{ ok: true }`, for uptime checks |
| `GET` | `/api/journal` | — | List entries, newest first (no `body` field, keeps the payload small) |
| `GET` | `/api/journal/:slug` | — | One entry, full `body` included |
| `POST` | `/api/journal` | admin | Create. Requires `title`, `excerpt`, `published_at`; slug is derived from `title`. 409 if the derived slug collides |
| `PUT` | `/api/journal/:slug` | admin | Update any subset of `title` / `excerpt` / `body` / `published_at` |
| `DELETE` | `/api/journal/:slug` | admin | Delete |
| `POST` | `/api/subscribe` | — | Email signup. Rate-limited to 10 requests / 15 min per IP. Always returns success on a valid address, even if already subscribed — doesn't leak list membership |
| `GET` | `/api/subscribers` | admin | List of `{ email, created_at }`, newest first |

Length limits on journal fields: title 200 characters, excerpt 400, body 20,000.

## Admin panel

`/admin`, served as static files from `src/public/admin/`, talking to the same API same-origin. Sign in with `ADMIN_USER` / `ADMIN_PASSWORD`; the panel stores the resulting Basic-auth header in `sessionStorage` (cleared on sign-out or a 401), never in anything durable. Two tabs: journal (create/edit/delete entries) and subscribers (list + copy-all-emails for pasting into whatever you actually send mail through — this doesn't send email itself).

## Data

A single SQLite file at `data/arthic.db` (gitignored, along with `.env`). Two tables — `journal_entries` and `subscribers`, schema in [`src/db.js`](src/db.js). There's no migration system: this app is small enough that schema changes so far have just been edits to that one `CREATE TABLE IF NOT EXISTS` block, which is safe to extend but won't retroactively alter existing columns — handle those by hand if it ever comes up.

## Deploying

Runs anywhere Node 22.5+ runs — a single `node src/server.js` process, no build step. Set `ADMIN_PASSWORD` and `ALLOWED_ORIGIN` (your real frontend origin, not `*`) on the host, mount a persistent volume for `data/` if the platform's filesystem is ephemeral, then point the frontend's `VITE_API_BASE` at this service's URL.

This repo ships configured for Render specifically — see [`render.yaml`](render.yaml) and [`../DEPLOYMENT.md`](../DEPLOYMENT.md) for the exact settings, including the persistent-disk setup SQLite needs.
