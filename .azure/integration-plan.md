# Integration hand-off

- **Backend:** repository root; Next.js App Router; run `npm run dev` (port `3000`); build `npm run build`; page health check `GET /`; inquiry route `POST /api/contact`.
- **Frontend:** `services/web` is not present; frontend is the repository root (`app/`); build `npm run build`; dev `npm run dev`; no mock API seam or mock data exists to replace.
- **Routes:** `POST /api/contact` accepts JSON `{ name, email, summary, scope?, companyWebsite?, locale? }`; `GET /robots.txt`; `GET /sitemap.xml`. Main portfolio routes are `GET /` (English) and `GET /sq` (Albanian).
- **Database:** none; no migrations or seed data.
- **Email:** Resend API; server-only `RESEND_API_KEY` and `RESEND_FROM_EMAIL`; deliver to `elvismurati15@gmail.com`.
- **SEO configuration:** set `SITE_URL` to the real HTTPS production origin when supplied; canonical/language alternates and absolute sitemap URLs intentionally remain unset until then.
- **Shared types:** no shared package; request validation/types live in `app/api/contact/route.ts`.
- **Services:** Portfolio website (Essential); Next.js server-side inquiry handler and Resend delivery (Essential).
