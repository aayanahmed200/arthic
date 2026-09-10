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
| `npm run build` | Type-checks (`tsc`) then builds `dist/` — every page in `vite.config.ts`'s `rollupOptions.input` |
| `npm run preview` | Serves the built `dist/` locally, to sanity-check a production build |

Adding a new top-level page means adding both the `.html` file and an entry in `vite.config.ts`'s `build.rollupOptions.input` — Vite's multi-page build only bundles HTML files it's told about explicitly; a page missing from that list won't make it into `dist/` even though it builds and runs fine in `npm run dev`.

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
├── index.html            home — hero (+ a mentor-dashboard preview), features preview, why arthic, board strip, hiring, closing
├── subjects.html          all seven exams grouped into four streams, plus what each exam covers
├── method.html            the "rule of three" — identify, explain, test
├── pricing.html           three tiers (free/plus/institutions) and an exam-prep FAQ
├── careers.html           open roles, each "apply for this role" linking to apply.html?role=…
├── apply.html             one shared, detailed application form, relabeled per-role by apply.ts
├── waitlist.html          early-access signup, its own dedicated page
├── privacy.html            detailed privacy policy
├── terms.html               detailed terms
├── 404.html                 custom not-found page — a real route, not a static drop-in
├── vite.config.ts          multi-page build config — every HTML entry point is listed explicitly here
├── api/                   serverless functions — see "The API" below
│   ├── _db.ts              shared Postgres client + ensureTables()
│   ├── _auth.ts             timing-safe admin Basic-auth check
│   ├── subscribe.ts         POST — waitlist signup
│   ├── subscribers.ts       GET (admin) — waitlist list
│   └── apply.ts             POST — job application
├── src/
│   ├── main.ts            home entry point
│   ├── subjects, method    share `legal.ts` as their entry point (chrome only, no page-specific JS)
│   ├── careers.ts         careers page entry point (chrome only — apply links are plain hrefs)
│   ├── apply.ts           apply page entry point — reads ?role=, relabels the form, submits it
│   ├── pricing.ts         pricing page entry point (shared chrome only)
│   ├── legal.ts            shared entry point for subjects/method/waitlist/privacy/terms
│   ├── notfound.ts        404 page entry point
│   ├── styles/
│   │   ├── tokens.css     colors (incl. light/dark theme pairs), type scale, spacing, motion
│   │   ├── base.css       reset + reduced-motion handling
│   │   ├── utilities.css  shared patterns (reveal, containers, buttons, links)
│   │   ├── streams.css    subject stream cards + the board-institution logo strip + flag icons
│   │   ├── preview.css    the homepage features-preview cards (AI mentor, past papers, plan, calendar)
│   │   ├── dashboard.css  the hero's mentor-dashboard preview (labeled a preview, not a live product)
│   │   ├── apply.css      the shared apply-page form and its role-context card
│   │   ├── entry.css      shared long-form layout (subjects/method/waitlist/privacy/terms/404)
│   │   └── *.css          one file per section, reused across pages
│   └── lib/
│       ├── config.ts      API_BASE resolution
│       ├── common-init.ts shared page bootstrap — see below
│       ├── reveal.ts      fail-safe scroll-reveal (see below)
│       ├── nav.ts         header state, mobile menu, active-route highlighting
│       ├── theme.ts       light/dark toggle, persisted to localStorage
│       ├── lang-stub.ts   nav globe button → "more languages, coming soon" tooltip (no dictionary, no RTL — see Fonts below)
│       ├── smooth-scroll.ts   Lenis setup + same-page anchor-link upgrade
│       ├── subscribe.ts   waitlist email-capture form
│       └── form-submit.ts shared submit handler for the apply page's form
└── public/
    ├── admin/              waitlist admin panel, served same-origin at /admin
    ├── boards/             real seals of the institutions arthic preps students for
    ├── flags/              self-hosted SVG flag icons (Pakistan live, UK/US/India coming soon)
    └── ...                 logo, favicons, og-image, robots.txt, sitemap.xml
```

## Shared page bootstrap

Every page's entry script calls `initCommon()` (`src/lib/common-init.ts`) first: it wires the nav, theme toggle, the language stub tooltip, smooth scroll, scroll-reveal, and the waitlist subscribe form (wherever one exists on the page) — the chrome that's identical everywhere. Anything page-specific (the detailed form on `apply.html`, the tab-switching that used to exist on an older homepage mock) is initialized afterward by that page's own script. Every page is a real route (`/`, `/subjects.html`, `/method.html`, `/pricing.html`, `/careers.html`, `/waitlist.html`, `/privacy.html`, `/terms.html`), so `initNav()`'s active-link highlighting (`src/lib/nav.ts`) is a one-time pathname match on load rather than something scroll position decides — it explicitly skips any link that's a same-page hash anchor (like the footer's "back to top"), so those never get falsely marked active.

## The reveal system

Every section is real, visible markup by default — nothing depends on JavaScript to appear. `initReveal()` (`src/lib/reveal.ts`) progressively adds a `.reveal` class (opacity 0, translated slightly) and then, per-element, `.is-in` once an `IntersectionObserver` sees it enter the viewport. Three separate safety nets keep content from ever getting stuck invisible: `prefers-reduced-motion` skips the whole system, missing `IntersectionObserver` support skips it, and a 4-second timeout force-reveals everything regardless. Content is the fallback, not the effect. (Worth remembering when testing headlessly — a screenshot taken well under 4 seconds after load, without scrolling, will show mostly-empty sections; that's the timeout not having fired yet, not a bug.)

## The features preview

`#preview` on the homepage (`.features*` classes in `src/styles/preview.css`) is an honest look at what's shipping, not a product demo — four cards (AI mentor, past papers, study plan, exam calendar), each with a one-line description of what it'll actually do, and an explicit note that arthic is still in development. No simulated chat transcript, no invented dashboard screenshot standing in for a mentor that doesn't fully exist yet.

## Subjects and the board strip

`subjects.html` groups all seven exams (MDCAT, ECAT, NUST NET, FAST, CSS, PMS, LUMS LNAT) into four streams (medical, engineering, civil service, law), each described honestly without inventing precise weightages or dates the team hasn't verified. The homepage's board strip (`.boards*` classes, also in `streams.css`) shows the real seals of the institutions whose entrance tests map to those exams, captioned as exactly that — not an endorsement or partnership claim.

## Fonts

Bricolage Grotesque (display, variable weight) and IBM Plex Mono (labels/dates/numbers) are self-hosted via `@fontsource`. No request ever goes to a third-party font host at runtime. arthic is English-only for now — the site previously shipped a full Urdu translation toggle (native script, RTL layout via a since-removed `rtl.css`); it's been pulled back to a "coming soon" tooltip (`lang-stub.ts`) rather than left half-working, and will get its own font (and this section updated) if/when it ships.

## The API

Vercel picks up every file under `api/` as its own serverless function; `_`-prefixed files (`_db.ts`, `_auth.ts`) are shared helpers, not routes. All responses are JSON. The admin-only route requires HTTP Basic auth (`ADMIN_USER` / `ADMIN_PASSWORD`, checked with a timing-safe comparison in `_auth.ts`) and is otherwise unreachable. Every route replies `503` instead of erroring when `POSTGRES_URL` isn't set, so the site degrades honestly rather than looking broken.

| Method | Path | Auth | Does |
| --- | --- | --- | --- |
| `POST` | `/api/subscribe` | — | Waitlist signup — email. Always returns success on a valid address, even if already subscribed — doesn't leak list membership |
| `GET` | `/api/subscribers` | admin | List of `{ email, created_at }`, newest first |
| `POST` | `/api/apply` | — | Job application — role, name, email, link, message, availability, start |

Length limits: application role 80 characters / name 120 / link 300 / message 4,000 / availability 40 / start 40. Neither public POST route is rate-limited yet — see the "Known limitation" note in [`../DEPLOYMENT.md`](../DEPLOYMENT.md).

This is the deployed API. `backend/` is a separate, independent implementation (Express + SQLite) of a subscribe-style route only, for anyone who'd rather self-host — see `../backend/README.md`. The two don't share code or a database; use one or the other per deployment.
