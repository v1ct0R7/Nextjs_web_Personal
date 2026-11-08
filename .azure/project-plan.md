# Approved Project Plan: Elvis Murati Portfolio

> **Status: Approved by Elvis Murati.** This plan was reviewed and explicitly approved before implementation. The required plan-preview step was unavailable, so the approved plan was presented and confirmed through the chat approval form.

## Goal

Build a polished, bilingual personal portfolio that presents Elvis Murati as a Full Stack Developer, demonstrates his skills and real work, and makes it easy for prospective clients or employers to get in touch.

## Audience and language

- Prospective clients and employers.
- Albanian and English content, with clear language switching and language-specific metadata.

## Profile content supplied

- Name: Elvis Murati
- Title: Full Stack Developer
- Skills: React.js, Next.js, NestJS, Express.js, MongoDB, MySQL, API integration, and full-stack development.
- Education: currently pursuing a master's degree in Cybersecurity.
- Contact email: `elvismurati15@gmail.com`
- Do not invent project case studies, client names, outcomes, or credentials.

## Visual direction

- Minimalist, modern presentation using a Nardo Grey-inspired palette.
- Clear typography, strong contrast, restrained accent colors, responsive layouts, and subtle motion only where it improves usability.

## Planned experience and features

1. Home/hero section with a clear professional introduction and contact call to action.
2. About and education section.
3. Skills grouped by frontend, backend, databases, and integrations.
4. Project portfolio with polished cards and detail links. Real project content, links, screenshots, and outcomes remain pending; use an honest empty/pending state until supplied rather than fabricated examples.
5. Client inquiry form requesting contact details, project summary, and relevant scope/timeline information.
6. Contact links, including email.
7. Responsive navigation, accessible forms, keyboard support, and visible validation, loading, success, and error states.

## Technical approach

- Continue in the existing Next.js application and TypeScript; do not add a separate frontend or backend framework.
- Use Next.js server-side request handling for the inquiry form.
- Use Resend to deliver submissions to `elvismurati15@gmail.com`.
- Keep the Resend API key and verified sender address in server-side environment variables. Do not commit credentials. Live delivery requires a valid API key and a sender identity/domain verified with Resend.
- No database, user accounts, or persistent project CMS are in scope. Portfolio content can be maintained in the application until a CMS is explicitly requested.

## SEO and discoverability

- Provide unique Albanian and English page titles, descriptions, canonical/language alternates, Open Graph metadata, and social-sharing metadata.
- Add sitemap and robots directives, semantic page structure, descriptive image text, and structured data where accurate.
- A production domain is not yet known, so canonical URLs, sitemap host, and domain-dependent metadata must be finalized after the domain is supplied.
- SEO work improves technical readiness but cannot guarantee search ranking or indexing.

## Pending content and setup

- Real project titles, descriptions, technologies, screenshots, links, and outcomes.
- Domain name, if available.
- Resend API key and verified sender address, supplied securely through environment/deployment configuration during setup.
- Optional profile photo, résumé/CV, social links, and preferred public contact details.

## Acceptance criteria

- The site presents the supplied profile in Albanian and English without invented credentials or work history.
- It is responsive, accessible, and visually consistent with the approved Nardo Grey direction.
- Visitors can submit a validated inquiry and receive clear success or failure feedback; the server sends the inquiry through Resend when valid configuration is present.
- Secrets are never exposed to the browser or committed.
- Metadata and crawl-related files are present and use the real production domain once known.
- Project items can be added with real content without redesigning the portfolio.

## Approval

Elvis Murati explicitly approved this plan before implementation began. Any additions to the scope, especially authentication, database/CMS, file uploads, or deployment, require clarification and approval.
