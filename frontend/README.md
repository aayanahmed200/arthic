# arthic — frontend

The marketing site and its deployed API. Vite + TypeScript, hand-written CSS, no UI framework, plus the `api/` serverless functions that back the waitlist signup and job applications. See the [root README](../README.md) for the project as a whole.

## Setup

Two ways to run this, depending on whether you want the API running too:

```
npm install
npx vercel dev      # serves the site AND api/ together, reads .env — see below
```

or, frontend only (talks to nothing, or to a separately-running `backend/`):

```
npm install
npm run dev         # plain Vite dev server, http://localhost:5173
```

Either way, no database configured is fine: the waitlist and apply forms say honestly that they're not configured yet, instead of pretending to succeed. Plain `npm run dev` talks to a `backend/` instance on `http://localhost:3001` automatically if one is running — see [`src/lib/config.ts`](src/lib/config.ts).

## Scripts

| Command | Does |
| --- | --- |
| `npm run dev` | Vite dev server only, hot module reload, no `api/` |
| `npx vercel dev` | Site + `api/` serverless functions together, via the Vercel CLI (no separate install — `npx` fetches it) |
| `npm run build` | Type-checks (`tsc`) then builds `dist/` |
| `npm run preview` | Serves the built `dist/` locally, to sanity-check a production build |

## Environment variables

See [`.env.example`](.env.example) for the authoritative list and comments. Two different things read these:

**Build-time (Vite)** — need to be set wherever `npm run build` actually runs (Vercel's build step, CI, etc.), not just in a local `.env`:

| Variable | Default | Purpose |
| --- | --- | --- |
| `VITE_API_BASE` | *(empty — same-origin)* | Only set this if you're running the standalone `backend/` Express server instead of `api/`. Leave unset for the normal setup — `api/` ships same-origin, so a relative path already works. |

**Runtime (the `api/` serverless functions, not Vite)** — set as Vercel project environment variables, or in a local `.env` for `vercel dev`:

| Variable | Default | Purpose |
| --- | --- | --- |
| `POSTGRES_URL` | *(none)* | Postgres connection string (Supabase or any provider). Unset means every route needing storage replies `503` with an honest message rather than a fake success. |
| `ADMIN_USER` | `admin` | Username for `/admin` and the write endpoints |
| `ADMIN_PASSWORD` | *(none — required)* | Password for the same. Every admin request is rejected until this is set |

## Deploying

Ships configured for Vercel — [`vercel.json`](vercel.json) sets the build command, output directory, and a few security/cache headers; everything under `api/` is picked up automatically as serverless functions, no extra routing config needed. Set **Root Directory** to `frontend` in the Vercel project settings (this is a monorepo), add the environment variables above as project environment variables, and see [`../DEPLOYMENT.md`](../DEPLOYMENT.md) for the full walkthrough including the database setup and `arthic.tech` DNS records.

## Project structure

```
frontend/
├── index.html            home — hero, why-now, how it works, product preview, mission, hiring, waitlist, closing
├── careers.html           open roles + apply forms
├── privacy.html            plain-English privacy policy
├── terms.html               plain-English terms
├── 404.html                custom not-found page — a real route, not a static drop-in
├── api/                   serverless functions — see "The API" below
│   ├── _db.ts              shared Postgres client + ensureTables()
│   ├── _auth.ts             timing-safe admin Basic-auth check
│   ├── subscribe.ts         POST — waitlist signup
│   ├── subscribers.ts       GET (admin) — waitlist list
│   └── apply.ts             POST — job application
├── src/
│   ├── main.ts            home entry point — also wires the product-preview dashboard's tab switcher
│   ├── careers.ts         careers page entry point
│   ├── legal.ts            privacy/terms entry point
│   ├── notfound.ts        404 page entry point
│   ├── styles/
│   │   ├── tokens.css     colors, type scale, spacing, motion — the whole design system
│   │   ├── base.css       reset + reduced-motion handling
│   │   ├── utilities.css  shared patterns (reveal, containers, buttons, links)
│   │   ├── preview.css    the product-preview dashboard mock
│   │   ├── entry.css      shared long-form layout (privacy/terms/404)
│   │   └── *.css          one file per section, reused across pages
│   └── lib/
│       ├── config.ts      API_BASE resolution
│       ├── common-init.ts shared page bootstrap — see below
│       ├── reveal.ts      fail-safe scroll-reveal (see below)
│       ├── nav.ts         header state, mobile menu, active-route highlighting
│       ├── smooth-scroll.ts   Lenis setup + anchor-link upgrade
│       ├── subscribe.ts   waitlist email-capture form
│       └── form-submit.ts shared submit handler for the apply forms
└── public/
    ├── admin/              waitlist admin panel, served same-origin at /admin
    └── ...                 logo, favicons, og-image, robots.txt, sitemap.xml
```

## Shared page bootstrap

Every page's entry script calls `initCommon()` (`src/lib/common-init.ts`) first: it wires the nav, smooth scroll, scroll-reveal, and the footer waitlist form — the chrome that's identical everywhere. Anything page-specific (the dashboard-preview tabs on the homepage, the apply forms on careers) is initialized afterward by that page's own script. Every page is a real route (`/`, `/careers.html`, `/privacy.html`, `/terms.html`), so `initNav()`'s active-link highlighting (`src/lib/nav.ts`) is a one-time pathname match on load instead of something scroll position decides; the homepage's in-page anchors (`#product`, `#preview`, `#waitlist`) aren't separately highlighted, which is expected for anchor nav.

## The reveal system

Every section is real, visible markup by default — nothing depends on JavaScript to appear. `initReveal()` (`src/lib/reveal.ts`) progressively adds a `.reveal` class (opacity 0, translated slightly) and then, per-element, `.is-in` once an `IntersectionObserver` sees it enter the viewport. Three separate safety nets keep content from ever getting stuck invisible: `prefers-reduced-motion` skips the whole system, missing `IntersectionObserver` support skips it, and a 4-second timeout force-reveals everything regardless. Content is the fallback, not the effect. (Worth remembering when testing headlessly — a screenshot taken well under 4 seconds after load, without scrolling, will show mostly-empty sections; that's the timeout not having fired yet, not a bug.)

## The product-preview dashboard

`#preview` on the homepage is a hand-built UI mock (`.dash*` classes in `src/styles/preview.css`, markup in `index.html`, tab-switching in `src/main.ts`) — a browser-chrome frame around a compliance dashboard with illustrative stats, a framework checklist, and an "advisor view" with example recommendations. Every number in it is static and clearly labeled as a preview, not live data; nothing fetches anything.

## Fonts

Bricolage Grotesque (display, variable weight) and IBM Plex Mono (labels/dates/numbers) are self-hosted via `@fontsource` — no request ever goes to a third-party font host at runtime.

## The API

Vercel picks up every file under `api/` as its own serverless function; `_`-prefixed files (`_db.ts`, `_auth.ts`) are shared helpers, not routes. All responses are JSON. The admin-only route requires HTTP Basic auth (`ADMIN_USER` / `ADMIN_PASSWORD`, checked with a timing-safe comparison in `_auth.ts`) and is otherwise unreachable. Every route replies `503` instead of erroring when `POSTGRES_URL` isn't set, so the site degrades honestly rather than looking broken.

| Method | Path | Auth | Does |
| --- | --- | --- | --- |
| `POST` | `/api/subscribe` | — | Waitlist signup — email. Always returns success on a valid address, even if already subscribed — doesn't leak list membership |
| `GET` | `/api/subscribers` | admin | List of `{ email, created_at }`, newest first |
| `POST` | `/api/apply` | — | Job application — role, name, email, link, message |

Length limits: application role 80 characters / name 120 / link 300 / message 4,000. Neither public POST route is rate-limited yet — see the "Known limitation" note in [`../DEPLOYMENT.md`](../DEPLOYMENT.md).

This is the deployed API. `backend/` is a separate, independent implementation (Express + SQLite) of a subscribe-style route only, for anyone who'd rather self-host — see `../backend/README.md`. The two don't share code or a database; use one or the other per deployment.
