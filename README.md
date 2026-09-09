# arthic

[![TypeScript](https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Vercel](https://img.shields.io/badge/vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)
[![PostgreSQL](https://img.shields.io/badge/postgresql-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![Node.js](https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/express-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)

ratta nahi, samajh — that's the whole idea. — the marketing site for arthic, a bilingual AI mentor for Pakistan's toughest competitive exams: MDCAT, ECAT, NUST NET, FAST, CSS, and PMS.

This repo is the actual production site, not a mockup — clone it and `npm run build` produces the real thing. The homepage includes a working preview of the AI-mentor chat (illustrative conversations, clearly labeled) so visitors can see how it teaches before it ships.

## Why this exists

Most exam prep for MDCAT, ECAT, NUST NET, FAST, CSS, and PMS still means the same thing: a stack of guides, a crowded academy, and an instructor who doesn't have time to explain a concept twice. If English isn't the language a student thinks fastest in, that gap gets wider, not smaller. arthic is a small, student-run team building an AI mentor that teaches in English and Roman Urdu in the same conversation, is built to notice when a student is pattern-matching instead of understanding, and slows down exactly there instead of moving on to the next chapter.

## Structure

- **`frontend/`** — the marketing site *and* its live API. Vite + TypeScript, hand-written CSS (no UI framework, no Tailwind), and a scroll-reveal system that fails safe — content is real markup first, animation is a progressive enhancement on top of it, never a gate in front of it. Home, Pricing, Careers, Privacy, and Terms are each real routes/pages. The waitlist form and job applications are backed by `frontend/api/` — Vercel serverless functions talking to Postgres — deployed same-origin alongside the site. Falls back to an honest "not configured yet" response when there's no database connected, rather than pretending to succeed. See `frontend/README.md`.
- **`backend/`** — a self-hostable Express + SQLite alternative to `frontend/api/`, predating arthic's current product. Its `/api/subscribe` and `/api/subscribers` routes still match what the current waitlist form expects, so it remains usable for anyone who'd rather self-host that one form on a normal Node server (e.g. Render) than use Vercel + Postgres. It also still carries a `/api/journal` route from an earlier version of the site; nothing in the current frontend calls it — treat it as vestigial. See `backend/README.md`.

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

A light "paper" background (`#fcfbf8`) and near-black ink (`#15140f`) rather than true black-on-white — closer to a printed page than a screen default — plus a single accent, emerald (`#0e8f63` decorative, `#0a6e4c` for text, chosen to clear WCAG AA at 4.5:1), used sparingly for links, active states, and the one place the product's own content needs a color — the mentor-chat preview. One display typeface (Bricolage Grotesque, self-hosted, variable weight) doing everything from the hero to body copy, plus IBM Plex Mono reserved for labels, tags, and the chat preview's UI chrome — the small editorial trick of using a second face only for metadata. Motion is `cubic-bezier(0.16, 1, 0.3, 1)` almost everywhere — scroll reveals, hovers, smooth-scroll easing — one curve, used consistently, rather than a different easing per component.

Every section shares the same paper background except one deliberate exception: the closing call-to-action, which drops to a near-black bookend (`#100f0b`) so the site opens and closes on two different notes instead of fading out on the same tone it started on.

The product-preview mock (`#preview` on the homepage) isn't a screenshot or a stock template — it's hand-built markup and CSS made to look like a real app: a working subject-tab switcher, a browser-chrome frame, and three illustrative mentor conversations (an MDCAT chemistry mix-up, an ECAT physics concept, a CSS essay) that exist to show the teaching style, not to demo a real model — labeled as illustrative in both the visible copy and the code.

## Pricing

`frontend/pricing.html` is a real page, not a placeholder — three tiers (free, a not-yet-priced "Plus," and custom institutional pricing) and an FAQ that answers the questions a prospective student would actually ask: which exams are covered, why it's free right now, whether it replaces an academy, why Roman Urdu specifically, and how pricing might change later. Nothing on the page invents a number it doesn't have yet — "Plus" pricing says plainly that it isn't set.

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
│   │   ├── styles/     design tokens + one CSS file per section, including the mentor-chat preview and the exam-stream/team-logo strip
│   │   └── lib/        nav, common page bootstrap, reveal system, smooth scroll, waitlist form
│   ├── api/            deployed API — Vercel functions + Postgres (waitlist, job applications)
│   ├── public/admin/    the waitlist admin panel, served same-origin at /admin
│   ├── public/logos/    recolored university logos for the team-strip section
│   ├── index.html      home — hero + mentor-chat preview, why arthic, subjects, how it works (rule of three), team strip, hiring, waitlist, closing
│   ├── pricing.html    three tiers (free/plus/institutions) and an exam-prep FAQ
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
