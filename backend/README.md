# Arthic Backend

> An optional self-hosted Express and SQLite API for Arthic, used instead of the deployed Vercel/PostgreSQL API.

[![Node.js](https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/) [![Express](https://img.shields.io/badge/express-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/) [![SQLite](https://img.shields.io/badge/sqlite-003B57?style=for-the-badge&logo=sqlite&logoColor=white)](https://sqlite.org/)

## Overview

The backend provides journal and subscription endpoints for a self-hosted Arthic deployment, storing data in a local SQLite file separately from the deployed Vercel/PostgreSQL API. The `/admin` panel manages journal entries and subscribers using the same Basic-auth credentials as the API.

It is independent of the frontend's serverless API, so a deployment uses one backend architecture or the other, never both.

## Key features

- JSON API for journal entries and subscriptions.
- Basic-auth protection for admin endpoints.
- Starter journal data that can be seeded from the command line.
- Health endpoint for uptime checks.
- CORS origin restricted to one configured frontend.
- SQLite database files kept out of version control.

## Implementation

A small Express server on Node.js, using the built-in `node:sqlite` module rather than an external driver, so it needs Node.js 22.5 or later and no database server to install. The schema and starter rows are created on first run, with a seed script for the initial journal entries; routes are split by resource, and Basic-auth middleware guards the admin ones. `render.yaml` describes the optional hosted deployment.

## Repository structure

- `src/server.js` — the Express app and its middleware.
- `src/routes/` — the journal and subscription routes.
- `src/db.js` — the SQLite connection and schema.
- `src/seed.js` — the starter journal entries.
- `src/middleware/` — shared request middleware.
- `src/lib/` — helper modules.
- `src/public/` — the `/admin` panel.
- `render.yaml` — the optional hosted deployment description.

## Status and limitations

There is no default admin password, and the admin endpoints refuse to work until one is configured — so the basic-auth routes are only as safe as the password set for them. The allowed origin should name one frontend and only be widened for local development. The port defaults to `3001`, the SQLite file to `./data/arthic.db`, and the admin username to `admin`; `.env.example` lists every setting.

This backend is narrower than the deployed API: there is no question bank, student workspace or practice scoring, and its database is a file local to the machine running the server. It is optional, and it is not what serves arthic.tech.

## License

The code is MIT licensed; see [`../LICENSE`](../LICENSE). The Arthic name and wordmark are not included.
