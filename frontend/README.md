# Arthic Frontend

Vite and TypeScript multi-page website with Vercel serverless APIs.

## Features

- Anonymous practice remains available without an account; its answer state is temporary in the page.
- Google sign-in uses Supabase Auth and OAuth PKCE. A verified identity is required before an Arthic student account is created.
- Signed-in practice sessions, selected options, correctness and study preferences are synced to PostgreSQL under the authenticated student ID.
- Dashboard shows saved sessions, answer totals and accuracy.
- Settings supports a preferred exam, optional product updates, JSON data export and a deletion-request submission.
- Admin statistics are protected by Google identity and a server-side ADMIN_EMAILS allowlist. The panel shows student accounts, practice activity, published questions, waitlist, applications and pending data requests.
- Admin statistics do not include anonymous page views. This implementation adds no third-party analytics or advertising trackers.
- The existing /admin/ question-bank editor continues to use separate Basic-auth credentials. The new /admin.html operations panel uses Google identity plus ADMIN_EMAILS.

## Data and account behavior

Supabase access and refresh tokens are kept in tab-scoped sessionStorage, not persistent localStorage. A reload in the same tab may refresh the session. Closing the tab clears the browser-side session. Sign in again on another device to access synced progress.

Each signed-in quiz creates a server-owned practice session. Each answer is checked by the server and saved against the active session. The API verifies session ownership and prevents duplicate question answers in a session. Anonymous answers are not stored in student accounts.

Account deletion is currently a request-and-review process. Settings records a pending request; it does not delete the user's Google account or automatically erase the Supabase Auth identity. An administrator must verify and remove the Arthic database records and associated Supabase Auth identity, then record completion. Do not say a deletion request has been completed until that work is actually done.

The age/guardian checkbox is a self-declaration, not independent parent or guardian verification. Do not broadly enable accounts for minors until an age-appropriate consent and support process has been designed, legally reviewed and implemented.

## Google and admin setup

Read GOOGLE_SIGNIN_SETUP.md before enabling accounts. Configure the Supabase Google provider, exact callback redirects, and the variables listed in .env.example.

Set POSTGRES_URL to the database connection string. Set ADMIN_EMAILS to the exact Google account emails permitted to administer Arthic. The allowlist is server-only. Never put it or a database password in a VITE_ variable.

Open /admin.html with an allowlisted Google account and run Initialize student database once. The idempotent setup prepares account, session, answer, preferences and data-request tables. Original sample questions are seeded as drafts, not published automatically.

Keep ADMIN_USER and ADMIN_PASSWORD for the existing question editor.

## Run locally

Install dependencies, then run npm run dev for the Vite frontend. Use npx vercel dev to run the Vercel API locally. The Vite server defaults to http://localhost:5173. Add that exact callback URL to the Supabase Auth redirect allowlist before testing local sign-in.

Run npm run build and npm run test:api from this directory to check the project.