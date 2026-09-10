# arthic

[![TypeScript](https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Vercel](https://img.shields.io/badge/vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)
[![PostgreSQL](https://img.shields.io/badge/postgresql-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![Node.js](https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/express-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)

ratta nahi, samajh — that's the whole idea. arthic is an all-in-one, bilingual (English/Urdu) exam-prep platform for Pakistan's toughest entrance tests: MDCAT, ECAT, NUST NET, FAST, CSS, PMS, and LUMS LNAT. Not just a chatbot — an AI mentor, organized past papers, a personalized study plan, and an exam calendar, all in one place, in whichever language a student actually thinks in.

This repo is the actual production site, not a mockup — clone it and `npm run build` produces the real thing. arthic is currently in early access: the mentor itself is still being built, and the site says so honestly rather than pretending otherwise. Live today for Pakistani boards; UK, US, and India are marked "coming soon," not silently implied.

## Why this exists

Most exam prep for these seven exams still means the same thing: a stack of guides, a crowded academy, and an instructor who doesn't have time to explain a concept twice. If English isn't the language a student thinks fastest in, that gap gets wider, not smaller. arthic is a small, student-run team building a platform that meets students where they actually are — an AI mentor that teaches in English and Urdu in the same conversation (native script both ways, no Roman-Urdu shortcut), past papers organized by topic instead of a dumped PDF pile, a study plan personalized to an exam date, and an exam calendar so no deadline sneaks up. The mentor is built to notice when a student is pattern-matching instead of understanding, and to slow down exactly there instead of moving on to the next chapter.

## Structure

- **`frontend/`** — the marketing site *and* its live API. Vite + TypeScript, hand-written CSS (no UI framework, no Tailwind), and a scroll-reveal system that fails safe — content is real markup first, animation is a progressive enhancement on top of it, never a gate in front of it. Nine real routes/pages: home, subjects, method, pricing, careers, waitlist, privacy, terms, and a custom 404. The waitlist form and job applications are backed by `frontend/api/` — Vercel serverless functions talking to Postgres — deployed same-origin alongside the site. Falls back to an honest "not configured yet" response when there's no database connected, rather than pretending to succeed. See `frontend/README.md`.
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

A light "paper" background (`#fcfbf8`) and near-black ink (`#15140f`) rather than true black-on-white — closer to a printed page than a screen default — with a real light/dark theme toggle (persisted in `localStorage`, defaulting to the visitor's OS preference) that inverts the same two tokens rather than swapping in a separate dark stylesheet. One accent, emerald (`#0e8f63` decorative / `#0a6e4c` for text in light mode, brightened to `#17a674` / `#34c48f` in dark to hold contrast), used sparingly for links, active states, and exam tags. Two self-hosted Latin faces — Bricolage Grotesque (display, variable weight) for everything from the hero to body copy, IBM Plex Mono reserved for labels, tags, and UI chrome — plus a third, Noto Nastaliq Urdu, that only loads for the Urdu half of the site, with its own tuned line-height (Nastaliq's diagonal stacking needs far more vertical room than a Latin display face) rather than inheriting the Latin type scale's tighter spacing. Motion is `cubic-bezier(0.16, 1, 0.3, 1)` almost everywhere — scroll reveals, hovers, smooth-scroll easing — one curve, used consistently.

Every section — including the closing call-to-action, which used to be a permanent dark bookend — now shares the same background tokens as the rest of the page. That contrast moment belongs to the theme toggle, available to any visitor on any section, rather than being baked into one hardcoded section.

The homepage's features section (`#preview`) is an honest look at what's shipping, not a fake product demo: four cards (AI mentor, past papers, study plan, exam calendar) labeled plainly as still in development, with no simulated chat transcript or invented screenshot standing in for a mentor that doesn't fully exist yet.

## Bilingual by construction

Every page ships an English/Urdu toggle (`src/lib/lang.ts`) — full Urdu script, not Roman Urdu/transliteration. English lives directly in each page's markup (so it can never drift out of sync with the DOM); switching to Urdu walks every `[data-i18n]` element and swaps in the matching dictionary entry, caching the original English `innerHTML` so switching back is an exact restore. Exam names and institution names (MDCAT, LNAT, LUMS, NUST…) stay in Latin script in both languages, the same as any other proper noun. `dir="rtl"` flips layout, iconography, and arrow direction site-wide when Urdu is active.

## Who arthic preps students for

The homepage's board strip (`streams.css`) shows the real seals of the institutions whose entrance tests arthic teaches to — full color, no card box, sitting directly on the section background — captioned plainly as "shown here because arthic preps students for exams at these institutions, not an endorsement or partnership with any of them." A small set of self-hosted SVG flag icons (`public/flags/`, hand-authored rather than pulled from a font or CDN) mark Pakistan as live today and the UK, US, and India as coming soon.

## Pricing

`frontend/pricing.html` is a real page, not a placeholder — three tiers (free, Plus at Rs. 8,999/month once early access ends, and custom institutional pricing) and an FAQ that answers the questions a prospective student would actually ask: which exams are covered, why it's free right now, whether it replaces an academy, why English and Urdu specifically, and how pricing might change later. The Plus number is labeled as today's plan, not a locked-in final price.

## Tech stack

- TypeScript, Vite (frontend build + dev server), multi-page build (`vite.config.ts` lists every `.html` entry explicitly)
- Hand-written CSS — custom properties for design tokens, fluid type via `clamp()`, CSS Grid for every layout
- [Lenis](https://github.com/darkroomengineering/lenis) for smooth scrolling; everything else (reveals, nav state, the section folio label, the theme/language toggles) is plain `IntersectionObserver`, `localStorage`, and `requestAnimationFrame` — no animation or i18n library
- Vercel serverless functions (`frontend/api/`) + Postgres (`@vercel/postgres`) for the deployed API — waitlist signups, job applications
- Node.js, Express, `node:sqlite` for `backend/`, the self-host alternative
- Self-hosted variable fonts via `@fontsource` (Bricolage Grotesque, IBM Plex Mono, Noto Nastaliq Urdu) — no third-party font requests at runtime

## Project structure

```
arthic/
├── frontend/          marketing site (Vite + TypeScript) + its API
│   ├── src/
│   │   ├── styles/     design tokens + one CSS file per section, plus rtl.css for Urdu-specific overrides
│   │   └── lib/        nav, common page bootstrap, reveal system, smooth scroll, theme + language toggles, waitlist form
│   ├── api/            deployed API — Vercel functions + Postgres (waitlist, job applications)
│   ├── public/admin/    the waitlist admin panel, served same-origin at /admin
│   ├── public/boards/   real seals of the institutions arthic preps students for
│   ├── public/flags/    self-hosted SVG flag icons (Pakistan live, UK/US/India coming soon)
│   ├── index.html      home — hero, features preview, why arthic, board strip, hiring, closing
│   ├── subjects.html   all seven exams grouped into four streams, plus what each exam actually covers
│   ├── method.html     the "rule of three" — how the mentor identifies, explains, and tests
│   ├── pricing.html    three tiers (free/plus/institutions) and an exam-prep FAQ
│   ├── careers.html    open roles + apply forms
│   ├── waitlist.html   the early-access signup, its own dedicated page
│   ├── privacy.html     detailed privacy policy
│   ├── terms.html        detailed terms of use
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
- The site is already wired for `arthic.tech` — canonical links, Open Graph/Twitter image URLs, structured data, `sitemap.xml`, and `robots.txt` all point there. If the domain ever changes, those are the places to update (search for `arthic.tech`).

See [DEPLOYMENT.md](DEPLOYMENT.md) for the actual Vercel + Postgres deploy steps and DNS records (and the Render-based self-host alternative, if you'd rather run `backend/` instead).

## License

The code is MIT — see [LICENSE](LICENSE). The arthic name and wordmark are not covered by that license and are all rights reserved.
