# Google sign-in setup

Google sign-in is implemented through Supabase Auth using OAuth with PKCE. Arthic does not store a Google client secret. Google redirects to Supabase first; Supabase then returns an authorization code to Arthic's callback page.

## 1. Configure Google OAuth

1. Open the Supabase project used by Arthic.
2. In Authentication -> Providers, enable Google.
3. Create or select a Google OAuth client in Google Cloud Console.
4. Copy the Supabase callback URL shown in the Supabase Google provider settings into the Google OAuth client's Authorized redirect URIs. Google must redirect to Supabase first, not directly to Arthic.
5. Add the Google client ID and client secret to the Supabase Google provider configuration and save.

## 2. Configure Supabase redirects

In Supabase Authentication URL Configuration, set the site URL to the primary Arthic domain and add these exact redirects:

- https://arthic.tech/auth-callback.html
- https://www.arthic.tech/auth-callback.html
- http://localhost:5173/auth-callback.html

Add a temporary preview origin only while testing it. Remove preview origins when no longer needed. Do not use wildcard redirects.

## 3. Vercel environment variables

Configure these values for the same Supabase project:

- SUPABASE_URL
- SUPABASE_PUBLISHABLE_KEY
- VITE_SUPABASE_URL
- VITE_SUPABASE_PUBLISHABLE_KEY
- POSTGRES_URL
- ADMIN_EMAILS
- STUDENT_ACCOUNTS_ENABLED=false
- VITE_STUDENT_ACCOUNTS_ENABLED=false

The SUPABASE_ values are used by serverless functions. The VITE_ values are public browser configuration used to start the OAuth flow, and must match the same project. Never expose a Supabase secret/service-role key or the database connection string in a VITE_ variable.

ADMIN_EMAILS is a comma-separated allowlist of exact Google account email addresses permitted to open the operations dashboard. It is read only by server code. A normal student login does not grant admin access.

## 4. Initialize the database

1. Open /admin.html.
2. Sign in with a Google account listed in ADMIN_EMAILS.
3. Select Initialize student database once.
4. Confirm statistics load. Setup creates account, session, answer, preference and data-request tables. Original sample questions are seeded as drafts and not published automatically.
5. Create a test student account through /dashboard.html, accept the current Terms and Privacy Policy, and complete the age/guardian declaration.
6. Start a practice session while signed in, answer a question, reload Dashboard and check that the result synced.

## 5. Enable student accounts only after setup

Keep both student account flags set to false by default. The Google admin sign-in works independently of student registration. After the schema setup, Google callback verification, data-flow/security checks and legal/age-consent review are complete, set both STUDENT_ACCOUNTS_ENABLED and VITE_STUDENT_ACCOUNTS_ENABLED to true and rebuild/redeploy the frontend. The server still rejects new student accounts unless its server-side flag is true.

## 6. Important limitations

- The age/guardian declaration is self-attested and does not independently verify parent/guardian identity or permission. Do not broadly enable minor accounts until a suitable consent process has been implemented and reviewed by local counsel.
- Account deletion is currently queued for administrative review. It does not automatically delete the Supabase Auth user. An administrator must remove both the student's application data and authentication identity and record completion.
- Auth tokens are kept in sessionStorage for the active tab. Anonymous practice stays temporary and is not synced.
- Every admin API request checks the signed-in email against ADMIN_EMAILS. Hiding an admin link is not the access-control mechanism.

Do not describe the system as legally certified or fully compliant until the consent, privacy, retention, deletion and provider setup have been reviewed and tested.