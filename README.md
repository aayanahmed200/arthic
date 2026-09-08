# arthic

[![TypeScript](https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Vercel](https://img.shields.io/badge/vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)
[![PostgreSQL](https://img.shields.io/badge/postgresql-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![Node.js](https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/express-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)

compliance that keeps up with the rules. — the marketing site for arthic, an AI-assisted sustainability-compliance reporting product for mid-sized companies navigating CSRD, SB 253, and ISSB.

This repo is the actual production site, not a mockup — clone it and `npm run build` produces the real thing. The homepage includes a working preview of the product dashboard (illustrative data, clearly labeled) so visitors can see what's shipping before it does.

## Why this exists

CSRD and SB 253 are landing on mid-sized companies that don't have a sustainability-reporting team, and the rules keep shifting under them. Most compliance software is priced and built for enterprises with a dedicated function to run it. arthic is a small, early-stage team building the alternative: software that tracks what's actually in force, maps a company's existing data to it, and keeps the report current when the rules move — instead of a consultant re-doing the same spreadsheet every quarter.

## Structure

- **`frontend/`** — the marketing site *and* its live API. Vite + TypeScript, hand-written CSS (no UI framework, no Tailwind), and a scroll-reveal system that fails safe — content is real markup first, animation is a progressive enhancement on top of it, never a gate in front of it. Home, Careers, Privacy, and Terms are each real routes/pages. The waitlist form and job applications are backed by `frontend/api/` — Vercel serverless functions talking to Postgres — deployed same-origin alongside the site. Falls back to an honest "not configured yet" response when there's no database connected, rather than pretending to succeed. See `frontend/README.md`.
- **`backend/`** — a self-hostable Express + SQLite alternative to `frontend/api/`, predating arthic's pivot to this product. Its `/api/subscribe` and `/api/subscribers` routes still match what the current waitlist form expects, so it remains usable for anyone who'd rather self-host that one form on a normal Node server (e.g. Render) than use Vercel + Postgres. It also still carries a `/api/journal` route from an earlier version of the site; nothing in the current frontend calls it — treat it as vestigial. See `backend/README.md`.

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

`vercel dev` (Vercel's CLI, no separate install needed beyond `npx`) serves the Vite frontend and everything under `api/` together on one port, reading `.env` for the API's environment variables. No `POSTGRES_URL`? The site still works — the waitlist and apply forms say so honestly instead of pretending to succeed.

**Standalone Express backend instead:**

```
cd backend && npm install && cp .env.example .env && npm start
cd frontend && npm install && npm run dev
```

Here the frontend talks to the backend at `http://localhost:3001` automatically in dev (plain `vite`, no Vercel CLI). In production this path only activates if you set `VITE_API_BASE` at build time — see `frontend/README.md`. This path covers the waitlist form only, not job applications.

## Design system

Two ink colors, not black-and-white but close to it (`#0a0a09` / `#f3f1ea` — true pure black reads cheap on screens; this reads closer to print), plus a single muted green accent (`#6fa080`) used sparingly for active states and the one place the product's own data needs a color — the dashboard preview. One display typeface (Bricolage Grotesque, self-hosted, variable weight) doing everything from the hero to body copy, plus IBM Plex Mono reserved for labels, dates, and numbers — the small editorial trick of using a second face only for metadata. Motion is `cubic-bezier(0.16, 1, 0.3, 1)` almost everywhere — scroll reveals, hovers, smooth-scroll easing — one curve, used consistently, rather than a different easing per component.

Every section shares the same background except one deliberate exception: the concept centerpiece (`#concept`, between "why now" and "how it works") sits on the one shade darker in the token set, bordered by hairlines, so it reads as a single intentional beat rather than an accident. It's a hand-built visual, not stock art — a scattered pile of the messy inputs a real mid-sized company actually has (spreadsheets, utility bills, a supplier email thread) resolving into the frameworks that matter, using the type scale's largest, otherwise-unused size.

The product-preview dashboard (`#preview` on the homepage) isn't a screenshot or a stock template — it's hand-built markup and CSS made to look like a real app: a working tab switcher, a CSS-only progress ring, a trend chart, a recent-activity feed, and every number in it labeled as illustrative.

## Pricing

`frontend/pricing.html` is a real page, not a placeholder — three tiers with actual numbers, an FAQ that answers the regulatory questions people are most likely to search for (does CSRD apply to me, what's the SB 253 deadline, is there a federal law), and a short, direct explanation of why the numbers are public at all: almost nothing else in this category publishes pricing. The figures are early-access pricing for a pre-launch product, anchored to what comparable mid-market compliance software actually costs — not a finalized rate card.

## Tech stack

- TypeScript, Vite (frontend build + dev server)
- Hand-written CSS — custom properties for design tokens, fluid type via `clamp()`, CSS Grid for every layout
- [Lenis](https://github.com/darkroomengineering/lenis) for smooth scrolling; everything else (reveals, nav state, the section folio label) is plain `IntersectionObserver` and `requestAnimationFrame`, no animation library
- Vercel serverless functions (`frontend/api/`) + Postgres (`@vercel/postgres`) for the deployed API — waitlist signups, job applications
- Node.js, Express, `node:sqlite` for `backend/`, the self-host alternative
- Self-hosted variable fonts via `@fontsource` (Bricolage Grotesque, IBM Plex Mono) — no third-party font requests at runtime

## Project structure

```
arthic/
├── frontend/          marketing site (Vite + TypeScript) + its API
│   ├── src/
│   │   ├── styles/     design tokens + one CSS file per section, including the dashboard preview
│   │   └── lib/        nav, common page bootstrap, reveal system, smooth scroll, waitlist form
│   ├── api/            deployed API — Vercel functions + Postgres (waitlist, job applications)
│   ├── public/admin/    the waitlist admin panel, served same-origin at /admin
│   ├── index.html      home — hero, why now, concept centerpiece, how it works, product preview, mission, hiring, waitlist
│   ├── pricing.html    three tiers, real numbers, and an FAQ built around the regulatory questions people actually search for
│   ├── careers.html    open roles
│   ├── privacy.html     privacy policy
│   ├── terms.html        terms of use
│   └── 404.html          custom not-found page
├── backend/            self-host API alternative (Express + node:sqlite) — waitlist only, see above
│   └── src/
│       ├── routes/     subscribers (+ a vestigial journal route, unused by the current site)
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

The code is MIT — see [LICENSE](LICENSE). The arthic name and wordmark are not covered by that license and are all rights reserved.
