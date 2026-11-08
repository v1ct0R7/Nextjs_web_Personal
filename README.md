# Elvis Murati — Portfolio

A bilingual Albanian / English personal portfolio built with the existing Next.js App Router and TypeScript application.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) for English and `/sq` for Albanian.

## Inquiry email setup

Copy the safe variable names from `.env.example` into a local `.env.local` or your hosting provider’s server-side environment configuration:

- `RESEND_API_KEY` — a Resend API key. Keep it server-side; never prefix it with `NEXT_PUBLIC_` or commit its value.
- `RESEND_FROM_EMAIL` — a sender address on a domain/identity verified in Resend. The recipient is configured as `elvismurati15@gmail.com`.
- `SITE_URL` — optional until the production domain is known. When set, use only the real HTTPS origin. It enables canonical and language alternate URLs plus absolute sitemap URLs. Do not use a placeholder value in production.

The inquiry endpoint validates submissions server-side and sends through Resend. Until the API key and verified sender are configured, it returns an error state and the page offers a direct email link; it does not pretend a message was delivered.

## Validation

```bash
npm run lint
npx tsc --noEmit
npm run build
```

Project cards intentionally show a pending state until real project names, descriptions, technologies, links, and imagery are provided.
