# arthic — frontend

The marketing site and its deployed API. Vite + TypeScript, hand-written CSS, no UI framework, plus the `api/` serverless functions that back the journal, subscribe form, pre-orders, and job applications. See the [root README](../README.md) for the project as a whole.

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

Either way, no database configured is fine: the journal falls back to the static entries in `src/lib/journal-entries.ts` and the subscribe form says honestly that it's not configured, instead of pretending to succeed. Plain `npm run dev` talks to a `backend/` instance on `http://localhost:3001` automatically if one is running — see [`src/lib/config.ts`](src/lib/config.ts).

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
├── index.html            home — hero, studio intro, game teaser, journal, community, closing
├── about.html             the studio's story, philosophy, and a note on AI tools
├── games.html             Orbital — the one game currently in development
├── careers.html           open roles
├── journal.html           journal index + entry detail (?slug=...)
├── 404.html                custom not-found page — a real route, not a static drop-in
├── api/                   serverless functions — see "The API" below
│   ├── _db.ts              shared Postgres client + ensureTables()
│   ├── _auth.ts             timing-safe admin Basic-auth check
│   ├── _slugify.ts          title → slug, shared by journal create/update
│   ├── journal/index.ts     GET list / POST create
│   ├── journal/[slug].ts    GET one / PUT update / DELETE
│   ├── subscribe.ts         POST — email signup
│   ├── subscribers.ts       GET (admin) — signup list
│   ├── preorder.ts          POST — game pre-order
│   └── apply.ts             POST — job application
├── src/
│   ├── main.ts            home entry point
│   ├── about.ts           about page entry point
│   ├── games.ts           games page entry point (also boots the Orbital canvas)
│   ├── careers.ts         careers page entry point
│   ├── journal.ts         journal page entry point
│   ├── notfound.ts        404 page entry point
│   ├── styles/
│   │   ├── tokens.css     colors, type scale, spacing, motion — the whole design system
│   │   ├── base.css       reset + reduced-motion handling
│   │   ├── utilities.css  shared patterns (reveal, containers, buttons, links)
│   │   └── *.css          one file per section, reused across pages
│   ├── lib/
│   │   ├── config.ts      API_BASE resolution
│   │   ├── common-init.ts shared page bootstrap — see below
│   │   ├── reveal.ts      fail-safe scroll-reveal (see below)
│   │   ├── nav.ts         header state, mobile menu, active-route highlighting
│   │   ├── smooth-scroll.ts   Lenis setup + anchor-link upgrade
│   │   ├── subscribe.ts   email capture form
│   │   ├── journal-data.ts    swaps in live journal entries when a backend exists
│   │   ├── journal-entries.ts static fallback entries
│   │   └── html.ts        escapeHtml — used on anything interpolated from the API
│   └── art/
│       └── orbital.ts     the Orbital game's canvas piece
└── public/
    ├── admin/              journal/subscribers admin panel, served same-origin at /admin
    └── ...                 logo, favicons, og-image, robots.txt, sitemap.xml
```

## Shared page bootstrap

Every page's entry script calls `initCommon()` (`src/lib/common-init.ts`) first: it wires the nav, smooth scroll, scroll-reveal, and the footer subscribe form — the chrome that's identical everywhere. Anything page-specific (the Orbital canvas, journal data-fetching) is initialized afterward by that page's own script. Because every page is now a real route (`/`, `/about.html`, `/games.html`, `/careers.html`, `/journal.html`) rather than an anchor into one long page, `initNav()`'s active-link highlighting (`src/lib/nav.ts`) is a one-time pathname match on load instead of something scroll position decides.

## The reveal system

Every section is real, visible markup by default — nothing depends on JavaScript to appear. `initReveal()` (`src/lib/reveal.ts`) progressively adds a `.reveal` class (opacity 0, translated slightly) and then, per-element, `.is-in` once an `IntersectionObserver` sees it enter the viewport. Three separate safety nets keep content from ever getting stuck invisible: `prefers-reduced-motion` skips the whole system, missing `IntersectionObserver` support skips it, and a 4-second timeout force-reveals everything regardless. Content is the fallback, not the effect.

## The Orbital artwork

`src/art/orbital.ts` is a from-scratch Canvas 2D piece, not a stock render or a video loop, living on `games.html` next to the game it represents. The orbiting point's position is the actual solution to Kepler's equation (solved via Newton–Raphson for eccentric anomaly, `e = 0.62`), so it genuinely accelerates near periapsis instead of just looping a canned easing curve. The starfield is generated from a seeded PRNG (`mulberry32`) so it's stable across reloads rather than re-randomized every visit. Pauses via `IntersectionObserver` when off-screen, and renders one static frame under `prefers-reduced-motion`.

## Fonts

Bricolage Grotesque (display, variable weight) and IBM Plex Mono (labels/dates/numbers) are self-hosted via `@fontsource` — no request ever goes to a third-party font host at runtime.

## The API

Vercel picks up every file under `api/` as its own serverless function; the `_`-prefixed files (`_db.ts`, `_auth.ts`, `_slugify.ts`) are shared helpers, not routes. All responses are JSON. Admin-only routes require HTTP Basic auth (`ADMIN_USER` / `ADMIN_PASSWORD`, checked with a timing-safe comparison in `_auth.ts`) and are otherwise unreachable. Every route replies `503` instead of erroring when `POSTGRES_URL` isn't set, so the site degrades honestly rather than looking broken.

| Method | Path | Auth | Does |
| --- | --- | --- | --- |
| `GET` | `/api/journal` | — | List entries, newest first (no `body` field, keeps the payload small) |
| `GET` | `/api/journal/:slug` | — | One entry, full `body` included |
| `POST` | `/api/journal` | admin | Create. Requires `title`, `excerpt`, `published_at`; slug is derived from `title`. 409 if the derived slug collides |
| `PUT` | `/api/journal/:slug` | admin | Update any subset of `title` / `excerpt` / `body` / `published_at` |
| `DELETE` | `/api/journal/:slug` | admin | Delete |
| `POST` | `/api/subscribe` | — | Email signup. Always returns success on a valid address, even if already subscribed — doesn't leak list membership |
| `GET` | `/api/subscribers` | admin | List of `{ email, created_at }`, newest first |
| `POST` | `/api/preorder` | — | Game pre-order — email + phone |
| `POST` | `/api/apply` | — | Job application — role, name, email, link, message |

Length limits: journal title 200 characters / excerpt 400 / body 20,000; application role 80 / name 120 / link 300 / message 4,000. None of the public POST routes are rate-limited yet — see the "Known limitation" note in [`../DEPLOYMENT.md`](../DEPLOYMENT.md).

This is the deployed API. `backend/` is a separate, independent implementation of the journal + subscribe routes only (Express + SQLite) for anyone who'd rather self-host — see `../backend/README.md`. The two don't share code or a database; use one or the other per deployment.
