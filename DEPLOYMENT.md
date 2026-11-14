# Deploying arthic

One deploy: the frontend and the `/api` serverless functions ship together as a single Vercel project, backed by a Postgres database (Supabase's free tier is the easy path, but nothing in the code is Supabase-specific — any Postgres connection string works), with `arthic.tech`'s DNS pointed at Vercel.

Do the database first; Vercel needs its connection string.

## 1. Database — Supabase (or any Postgres)

1. Create a free project at [supabase.com](https://supabase.com) — pick a name, region, and database password (save that password, you'll need it in the next step).
2. In the new project: **Project Settings → Database → Connection string**. Copy the **URI** under "Connection pooling" (transaction mode) — serverless functions open a lot of short-lived connections, and the pooled connection string is built for that; the direct (non-pooled) string will work too but can exhaust Postgres's connection limit under real traffic.
3. Paste your real database password into the copied string in place of the `[YOUR-PASSWORD]` placeholder. That whole string is what `POSTGRES_URL` gets set to in the next step.

Already have a Postgres database somewhere else (Neon, RDS, your own instance)? Skip Supabase entirely and use that connection string instead. The deployed functions use `pg` (node-postgres) and expect a standard Postgres URI. For Supabase, use the transaction pooler connection string described above.

The waitlist and application endpoints create their own `subscribers` and `applications` tables on first use through `ensureTables()`. The student workspace schema is separate and is **not** created by public form traffic.

After the redesigned branch is deployed to a review environment with `POSTGRES_URL` and the admin credentials configured, an administrator can prepare the additive student tables once:

```bash
curl -X POST "https://YOUR-DEPLOYMENT/api/admin/student-schema" -u "$ADMIN_USER:$ADMIN_PASSWORD"
```

This creates the student account, provider-session, question-bank, study-session, answer and data-request tables. It does not create accounts, accept student information or open sign-up.

## 2. Vercel

1. Import this repo into Vercel. In the project's settings, set **Root Directory** to `frontend`. Vercel auto-detects the Vite build from [`frontend/vercel.json`](frontend/vercel.json) and picks up every file under `frontend/api/` as a serverless function automatically — no extra config needed for routing.
2. Add these under Project Settings → Environment Variables:

   | Variable | Value |
   | --- | --- |
   | `POSTGRES_URL` | the connection string from step 1 |
   | `ADMIN_USER` | whatever username you want for `/admin` |
   | `ADMIN_PASSWORD` | a real password — pick one, don't leave it blank |

   All three are read at request time by the serverless functions (not baked in by Vite), so a change takes effect on the next request — though Vercel does need at least one deployment to exist before project environment variables take effect on it at all.
3. Add the domain: Project Settings → Domains → add `arthic.tech` (and `www.arthic.tech` if you want that to work too). Vercel shows the exact DNS records to set — typically an `A` record on the root and a `CNAME` on `www`. Add those at whichever registrar manages the domain; Vercel's domain page confirms once they've propagated.

## HTTPS — free and automatic, nothing to buy

Vercel provisions a free SSL certificate (via Let's Encrypt) for every domain on a project automatically, as soon as its DNS is verified and propagated. Nothing to configure beyond adding the domain and its DNS records in step 3 above.

If the site is loading over plain HTTP, or a browser is warning about the connection:

- **DNS hasn't finished propagating.** Project Settings → Domains in Vercel shows "Valid Configuration" once the certificate is actually issued; propagation can take anywhere from a few minutes to ~48 hours depending on the registrar.
- **The DNS records don't quite match.** Re-check the `A` record (root) and `CNAME` (`www`) against exactly what Vercel's Domains page shows for this project — a stale or slightly-off record is the most common cause of a stuck certificate.
- **Something links to `http://arthic.tech` directly.** Vercel forwards all HTTP requests to HTTPS with a `308` redirect automatically, so this self-heals, but it's worth keeping canonical links, Open Graph/Twitter image URLs, and any external links on `https://`.

`frontend/vercel.json` also sets `Strict-Transport-Security: max-age=63072000; includeSubDomains` on every response — once a visitor has loaded the site over HTTPS once, their browser will refuse to try plain HTTP again for two years, without waiting on a redirect.

## Admin panel

`https://arthic.tech/admin` — same origin as the site itself, served as static files from `frontend/public/admin/`. Sign in with the `ADMIN_USER` / `ADMIN_PASSWORD` you set in step 2. One tab: the waitlist (list + copy-all-emails for pasting into whatever you actually send mail through — the panel doesn't send email itself).

## Rate limiting

The public `/api/subscribe` and `/api/apply` endpoints use a Postgres-backed fixed-window limiter in `frontend/api/_rate_limit.ts`. It stores counters in the shared database so limits work across stateless Vercel function invocations. If the limiter's database operation fails, its current implementation fails open and logs the failure; Vercel Firewall rules can provide an additional edge-level control.

## Self-hosting instead of Vercel + Postgres

`backend/` is a complete, independent alternative: Express + `node:sqlite`, meant for Render specifically (see [`backend/render.yaml`](backend/render.yaml) and [`backend/README.md`](backend/README.md)). It predates arthic's current product and still carries a `/api/journal` route from that earlier version — nothing in the current site calls it, so treat it as vestigial rather than something to wire up. Its `/api/subscribe` (and admin `/api/subscribers`) routes still match what the current waitlist form expects, so it remains a valid option if you'd rather run a normal Node server than Vercel serverless functions + Postgres for that one form. It doesn't cover job applications — those only exist in the Vercel API.

If you go this route, point the frontend at it instead of same-origin: set `VITE_API_BASE` to the Render service's URL at build time (see `frontend/README.md`), and don't set `POSTGRES_URL` in Vercel — leaving it unset means `frontend/api/*` simply 503s instead of being used. Run one or the other for a given deployment, not both; nothing breaks if you do, it just means subscribe requests always go wherever `VITE_API_BASE` points, and the unused API becomes dead weight.

## After that

The Vercel project redeploys automatically on every push to `main`. Nothing about the deploy process above needs touching again for routine updates — checking the waitlist or reviewing applications goes through `/admin`, not a redeploy.


## Student account readiness

The student workspace tables are preparatory only. Student accounts are not open, and there is currently no sign-up, login, email-verification or account-recovery flow. Before collecting student information, choose and configure a managed identity provider, implement verified email and recovery, review the privacy notice and terms for the intended student age range, and define consent, support, export and deletion procedures. Do not turn on account creation before those pieces are in place.

The schema stores an external identity-provider subject instead of a locally managed password. Server-side session records are designed to keep only a hash of the session token, not the raw token. The design keeps password management with a future identity provider and stores only session-token hashes, not raw session tokens. See the [OWASP Password Storage guidance](https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html) and [Session Management guidance](https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html).
