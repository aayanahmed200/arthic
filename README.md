# arthic

[![TypeScript](https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Vercel](https://img.shields.io/badge/vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)
[![PostgreSQL](https://img.shields.io/badge/postgresql-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![Node.js](https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/express-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)

games with ideas. — the site for arthic, an independent PC game studio making affordable, ad-free, idea-driven PC games for real players, especially students.

Live copy of the brief this was built against: black background, huge type, extreme negative space, minimal navigation, no cards, no gradients, no stock imagery. This repo is the actual production site, not a mockup — clone it and `npm run build` produces the real thing.

## Why this exists

Most indie studio sites either read like a SaaS landing page or lean hard into "gamer" visual clichés — neither fit a studio built around taking a small number of ideas seriously instead of shipping a lot of generic ones. This is arthic's actual storefront: what the studio is, what it's building, and why, without the parts of "having a company website" that don't matter yet. No team bios, no fake press logos, no roadmap with dates nobody can promise.

## Structure

- **`frontend/`** — the marketing site *and* its API. Vite + TypeScript, hand-written CSS (no UI framework, no Tailwind), a small generative-art module for the Orbital game page, and a scroll-reveal system that fails safe — content is real markup first, animation is a progressive enhancement on top of it, never a gate in front of it. Home, About, Games, Careers, and Journal are each real routes/pages, not anchors into one long scroll. The journal, subscribe form, pre-orders, and job applications are all backed by `frontend/api/` — Vercel serverless functions talking to Postgres — deployed same-origin alongside the site. Falls back to static content when there's no database connected. See `frontend/README.md`.
- **`backend/`** — a complete, independent alternative to `frontend/api/`: Express + SQLite (via Node's built-in `node:sqlite`, so nothing native to compile), plus a small admin panel for writing journal entries without touching code. Meant for anyone who'd rather self-host on a normal Node server (e.g. Render) than use Vercel + Postgres — see `backend/README.md`. Covers the journal and subscribe endpoints only; pre-orders and job applications exist solely in `frontend/api/`.

Run one API or the other for a given deployment — see [DEPLOYMENT.md](DEPLOYMENT.md).

## Running the whole thing locally

Two ways to run it, depending on which API you want:

**Vercel + Postgres (the deployed setup):**

```
cd frontend
npm install
cp .env.example .env   # fill in POSTGRES_URL, ADMIN_USER, ADMIN_PASSWORD
npx vercel dev
```

`vercel dev` (Vercel's CLI, no separate install needed beyond `npx`) serves the Vite frontend and everything under `api/` together on one port, reading `.env` for the API's environment variables. No `POSTGRES_URL`? The site still works — the journal shows its three static entries and the subscribe form says so honestly instead of pretending to succeed.

**Standalone Express backend instead:**

```
cd backend && npm install && cp .env.example .env && npm run seed && npm start
cd frontend && npm install && npm run dev
```

Here the frontend talks to the backend at `http://localhost:3001` automatically in dev (plain `vite`, no Vercel CLI). In production this path only activates if you set `VITE_API_BASE` at build time — see `frontend/README.md`.

## Design system

Two ink colors, not black-and-white but close to it (`#0a0a09` / `#f3f1ea` — true pure black read cheap on screens; this reads closer to print). One display typeface (Bricolage Grotesque, self-hosted, variable weight) doing everything from the hero to body copy, plus IBM Plex Mono reserved for labels, dates, and numbers — the small editorial trick of using a second face only for metadata. No accent color anywhere; restraint was the actual design decision, not a placeholder for one we didn't get to. Motion is `cubic-bezier(0.16, 1, 0.3, 1)` almost everywhere — scroll reveals, hovers, smooth-scroll easing — one curve, used consistently, rather than a different easing per component.

The Orbital game page isn't fronted by a stock image or a gradient — it's a canvas piece where the orbiting point actually solves Kepler's equation for an eccentric ellipse, so it visibly speeds up near periapsis the way a real orbit would.

## Tech stack

- TypeScript, Vite (frontend build + dev server)
- Hand-written CSS — custom properties for design tokens, fluid type via `clamp()`, CSS Grid for every layout
- [Lenis](https://github.com/darkroomengineering/lenis) for smooth scrolling; everything else (reveals, nav state, the section folio label) is plain `IntersectionObserver` and `requestAnimationFrame`, no animation library
- Canvas 2D for the generative Orbital artwork
- Vercel serverless functions (`frontend/api/`) + Postgres (`@vercel/postgres`) for the deployed API — journal, subscribe, pre-orders, job applications
- Node.js, Express, `node:sqlite` for `backend/`, the self-host alternative
- Self-hosted variable fonts via `@fontsource` (Bricolage Grotesque, IBM Plex Mono) — no third-party font requests at runtime

## Project structure

```
arthic/
├── frontend/          marketing site (Vite + TypeScript) + its API
│   ├── src/
│   │   ├── styles/     design tokens + one CSS file per section
│   │   ├── lib/        nav, common page bootstrap, reveal system, smooth scroll, subscribe form, journal data
│   │   └── art/        the Orbital canvas piece
│   ├── api/            deployed API — Vercel functions + Postgres (journal, subscribe, pre-orders, applications)
│   ├── public/admin/    the journal admin panel, served same-origin at /admin
│   ├── index.html      home
│   ├── about.html      studio story, philosophy, AI-tools note
│   ├── games.html      Orbital — the one game in development
│   ├── careers.html    open roles
│   ├── journal.html    journal index + entry detail (?slug=...)
│   └── 404.html         custom not-found page
├── backend/            self-host API alternative (Express + node:sqlite)
│   └── src/
│       ├── routes/     journal + subscribers
│       └── public/admin/   its own copy of the admin panel
├── LICENSE
├── DEPLOYMENT.md      how this actually gets onto arthic.tech
└── README.md           you are here
```

## Before launch

- Set `POSTGRES_URL` and a real `ADMIN_PASSWORD` in the Vercel project's environment variables — never commit `.env`. (Self-hosting `backend/` instead? Same rule applies there, and also set `VITE_API_BASE` to point at it.)
- The site is already wired for `arthic.tech` — canonical links, Open Graph/Twitter image URLs, `sitemap.xml`, and `robots.txt` all point there. If the domain ever changes, those are the four places to update (search for `arthic.tech`)

See [DEPLOYMENT.md](DEPLOYMENT.md) for the actual Vercel + Postgres deploy steps and DNS records (and the Render-based self-host alternative, if you'd rather run `backend/` instead).

## License

The code is MIT — see [LICENSE](LICENSE). The arthic name, wordmark, and game names and concepts (including *Orbital*) are not covered by that license and are all rights reserved.
