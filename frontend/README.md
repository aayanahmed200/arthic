# Arthic Frontend

The Vite and TypeScript marketing site, with the deployed Vercel serverless API in `api/`.

## Setup

To run the site and deployed API locally:

```bash
npm install
npx vercel dev
```

For the frontend alone:

```bash
npm install
npm run dev
```

The Vite server uses `http://localhost:5173`. When the standalone Express backend is running, the development frontend can connect to it at `http://localhost:3001`.

## Scripts

- `npm run dev` — Vite development server.
- `npx vercel dev` — frontend and serverless API together.
- `npm run build` — type-check and build the multi-page site to `dist/`.
- `npm run preview` — serve the production build locally.

When adding a top-level page, add its HTML file and an entry in `vite.config.ts`.

## Configuration

See `.env.example` for the full list:

- `VITE_API_BASE` — leave empty for the normal same-origin Vercel API. Set it only when using the standalone Express backend.
- `POSTGRES_URL` — Postgres connection string for the deployed API.
- `ADMIN_USER` — admin username; defaults to `admin`.
- `ADMIN_PASSWORD` — required for admin endpoints.

Without `POSTGRES_URL`, the site still loads; routes that need storage return a clear not-configured response.

## Deployment

The frontend is configured for Vercel. Set the Vercel Root Directory to `frontend`, add the server environment variables, and use `vercel.json` for the build and output settings. See the repository's `DEPLOYMENT.md` for the full domain and database setup.

## Project structure

- `*.html` — multi-page site routes.
- `src/` — page entry points, shared navigation, theme, forms, and styles.
- `api/` — serverless endpoints for waitlist subscriptions and job applications.
- `public/` — logos, icons, board marks, and static assets.

## Notes

- Content is visible without JavaScript; scroll reveals are progressive enhancement and respect reduced-motion preferences.
- The homepage feature cards are previews, not claims that the AI mentor is complete.
- The app is English-only for now; the language control indicates that more languages are planned.

## License

The code is MIT licensed; see `../LICENSE`. The Arthic name and wordmark are not included.
