# Deploying arthic

Two independent deploys — the frontend (static) on Vercel, the backend (Node + SQLite) on Render — pointed at each other through one environment variable, with `arthic.tech`'s DNS pointed at Vercel.

Do the backend first; the frontend needs its URL.

## Backend — Render

**Fastest path:** New → Blueprint → point it at this repo. Render reads [`backend/render.yaml`](backend/render.yaml) and proposes the `arthic-backend` service. If Render's Blueprint UI ever rejects a field (its syntax has changed before), the manual settings below are exactly equivalent.

Manual settings, if you're not using the blueprint:

- **Root directory:** `backend`
- **Build command:** `npm install`
- **Start command:** `npm start`
- **Health check path:** `/api/health`
- **Disk:** mount a persistent disk at `/var/data` (1 GB is plenty). This is the part that requires a paid instance type — Render's free tier doesn't keep disks, and without one `data/arthic.db` gets wiped on every restart. Check Render's current plans and pick whichever paid tier is cheapest; this app is small enough that the smallest one is enough.
- **Environment variables:** `ADMIN_USER=admin`, `ADMIN_PASSWORD=<pick a real one>`, `ALLOWED_ORIGIN=https://arthic.tech`, `DATABASE_PATH=/var/data/arthic.db`

Once it's deployed, open a shell on the service (Render's dashboard has a Shell tab) and run `npm run seed` once to load the three starter journal entries. Copy the service's `https://something.onrender.com` URL — the frontend needs it next.

## Frontend — Vercel

1. Import this repo into Vercel. In the project's settings, set **Root Directory** to `frontend`. Vercel then picks up [`frontend/vercel.json`](frontend/vercel.json) automatically.
2. Add two environment variables (Project Settings → Environment Variables): `VITE_API_BASE` = the Render URL from above, and `VITE_DISCORD_URL` = your real Discord invite. Vite bakes both in at build time, so redeploy after setting them — changing them later always needs a redeploy, not just a restart.
3. Add the domain: Project Settings → Domains → add `arthic.tech` (and `www.arthic.tech` if you want that to work too). Vercel will show the exact DNS records for those — typically an `A` record on the root and a `CNAME` on `www`. Add those records at whichever registrar you bought the domain through; Vercel's domain page confirms once they've propagated.

## HTTPS — free and automatic, nothing to buy

Vercel provisions a free SSL certificate (via Let's Encrypt) for every domain on a project automatically, `arthic.tech` included, as soon as its DNS is verified and propagated. There's no certificate to purchase and nothing to configure beyond adding the domain and its DNS records in step 3 above — Vercel requests it, proves control of the domain, and installs it without any further action.

**Current known issue (checked 2026-08-25):** `arthic.tech` and `www.arthic.tech` are both resolving to `185.199.108.153` / `.109.153` / `.110.153` / `.111.153` — those are GitHub Pages' apex IPs, not Vercel's. The domain isn't pointed at Vercel at all right now, which is almost certainly the actual cause of the insecure-connection warning: Vercel can't issue a certificate for a domain that isn't resolving to it yet, regardless of whether it's been added in the Vercel dashboard. Fix: at whichever registrar/DNS provider manages `arthic.tech`, replace the apex `A` record(s) with Vercel's (`76.76.21.21` as of this writing — Project Settings → Domains in Vercel shows the exact current value to use) and point the `www` `CNAME` at what that same page shows. Once that propagates, Vercel's certificate issues on its own.

If the site is still loading over plain HTTP, or a browser is warning about the connection, after that DNS change has propagated, check these instead:

- **DNS hasn't finished propagating.** Project Settings → Domains in Vercel shows "Valid Configuration" once the certificate is actually issued; propagation can take anywhere from a few minutes to ~48 hours depending on the registrar.
- **The DNS records don't quite match.** Re-check the `A` record (root) and `CNAME` (`www`) against exactly what Vercel's Domains page shows for this project — a stale or slightly-off record is the most common cause of a stuck certificate.
- **Something links to `http://arthic.tech` directly.** Vercel forwards all HTTP requests to HTTPS with a `308` redirect automatically, so this self-heals, but it's worth keeping canonical links, Open Graph/Twitter image URLs, and any external links on `https://`.

`frontend/vercel.json` also sets `Strict-Transport-Security: max-age=63072000; includeSubDomains` on every response — once a visitor has loaded the site over HTTPS once, their browser will refuse to try plain HTTP again for two years, without waiting on a redirect.

## Last step back on the backend

Once `arthic.tech` is actually resolving to the Vercel deployment, double check `ALLOWED_ORIGIN` on the Render service is `https://arthic.tech` exactly (no trailing slash) — that's what CORS uses to decide which frontend origin the API accepts requests from.

## After that

Both platforms redeploy automatically on a push to `main`. The admin panel lives at `https://<your-render-url>/admin` — that's the one place journal entries actually get written; nothing about the deploy process above needs touching again for routine updates.
