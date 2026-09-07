# arthic — frontend

The marketing site. Vite + TypeScript, hand-written CSS, no UI framework. See the [root README](../README.md) for the project as a whole.

## Setup

```
npm install
npm run dev
```

Dev server runs on `http://localhost:5173` and talks to a backend on `http://localhost:3001` automatically — see [`src/lib/config.ts`](src/lib/config.ts). No backend running is fine too: the journal falls back to the static entries in `src/lib/journal-entries.ts` and the subscribe form says honestly that it's not configured, instead of pretending to succeed.

## Scripts

| Command | Does |
| --- | --- |
| `npm run dev` | Vite dev server, hot module reload |
| `npm run build` | Type-checks (`tsc`) then builds `dist/` |
| `npm run preview` | Serves the built `dist/` locally, to sanity-check a production build |

## Environment variables

Read at build time by Vite, so they need to be set wherever `npm run build` actually runs (CI, host build step, etc.), not just in a local `.env`.

| Variable | Default | Purpose |
| --- | --- | --- |
| `VITE_API_BASE` | *(empty in production, `localhost:3001` in dev)* | Base URL of the deployed backend. Leave unset and the site still works — journal and subscribe both degrade to static/honest-error states. |
| `VITE_DISCORD_URL` | `https://discord.gg/arthic` | Real invite link. The placeholder is intentionally an invalid-looking default so it's obvious if it ships unset. |

## Deploying

Ships configured for Vercel — [`vercel.json`](vercel.json) sets the build command, output directory, and a few security/cache headers. Set **Root Directory** to `frontend` in the Vercel project settings (this is a monorepo), add `VITE_API_BASE` / `VITE_DISCORD_URL` as project environment variables, and see [`../DEPLOYMENT.md`](../DEPLOYMENT.md) for the full walkthrough including the `arthic.tech` DNS records.

## Project structure

```
frontend/
├── index.html            home — hero, studio intro, game teaser, journal, community, closing
├── about.html             the studio's story, philosophy, and a note on AI tools
├── games.html             Orbital — the one game currently in development
├── careers.html           open roles
├── journal.html           journal index + entry detail (?slug=...)
├── 404.html                custom not-found page — a real route, not a static drop-in
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
│   │   ├── config.ts      API_BASE / DISCORD_INVITE_URL resolution
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
└── public/                logo, favicons, og-image, robots.txt, sitemap.xml
```

## Shared page bootstrap

Every page's entry script calls `initCommon()` (`src/lib/common-init.ts`) first: it wires the nav, Discord links, smooth scroll, scroll-reveal, and the footer subscribe form — the chrome that's identical everywhere. Anything page-specific (the Orbital canvas, journal data-fetching) is initialized afterward by that page's own script. Because every page is now a real route (`/`, `/about.html`, `/games.html`, `/careers.html`, `/journal.html`) rather than an anchor into one long page, `initNav()`'s active-link highlighting (`src/lib/nav.ts`) is a one-time pathname match on load instead of something scroll position decides.

## The reveal system

Every section is real, visible markup by default — nothing depends on JavaScript to appear. `initReveal()` (`src/lib/reveal.ts`) progressively adds a `.reveal` class (opacity 0, translated slightly) and then, per-element, `.is-in` once an `IntersectionObserver` sees it enter the viewport. Three separate safety nets keep content from ever getting stuck invisible: `prefers-reduced-motion` skips the whole system, missing `IntersectionObserver` support skips it, and a 4-second timeout force-reveals everything regardless. Content is the fallback, not the effect.

## The Orbital artwork

`src/art/orbital.ts` is a from-scratch Canvas 2D piece, not a stock render or a video loop, living on `games.html` next to the game it represents. The orbiting point's position is the actual solution to Kepler's equation (solved via Newton–Raphson for eccentric anomaly, `e = 0.62`), so it genuinely accelerates near periapsis instead of just looping a canned easing curve. The starfield is generated from a seeded PRNG (`mulberry32`) so it's stable across reloads rather than re-randomized every visit. Pauses via `IntersectionObserver` when off-screen, and renders one static frame under `prefers-reduced-motion`.

## Fonts

Bricolage Grotesque (display, variable weight) and IBM Plex Mono (labels/dates/numbers) are self-hosted via `@fontsource` — no request ever goes to a third-party font host at runtime.
