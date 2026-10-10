# Aakriti Architects — Next.js starter

A modular, typed starter based on the supplied Figma frame, **Main Page (1:3)**.

**This is a scaffold, not a PRD-complete implementation.** No PRD was attached or found. The linked Figma frame is an architecture studio landing page, although its file is named “Real Estate.” Do not infer property search, account management, CRM, payments, or admin requirements from the filename.

## Run

Use Node.js 22 or newer (Node.js 24 used for validation).

```bash
npm ci
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000. On Windows PowerShell, use `Copy-Item .env.example .env.local`.

```bash
npm run lint
npm run typecheck
npm test
npm run build
npm start
```

## Architecture

| Directory | Responsibility |
| --- | --- |
| `src/app` | Next.js App Router layouts, page composition, metadata, route handlers |
| `src/app/(marketing)` | Public website routes and shared outer layout |
| `src/components/layout` | Header, brand, footer, responsive site shell |
| `src/components/ui` | Reusable asset slot, link button, section heading |
| `src/features/home` | Hero, About, Services, Testimonials |
| `src/features/projects` | Typed project data, repository boundary, project UI |
| `src/features/consultation` | Form, shared validation, server integration adapter |
| `src/content` | Editable landing-page copy and sample testimonials |
| `src/config` | Site settings and navigation |
| `src/styles` | Global reset and Figma-derived CSS tokens |
| `src/types` | Shared content contracts |
| `public/assets` | Local images and original SVG exports; import pending |
| `docs` | Figma asset mapping, assumptions, requirements handoff, validation report |
| `tests` | Validation and request/adapter behavior |

Pages and content composition use Server Components. Client boundaries are limited to the menu, asset loading state, testimonial controls, and form. The projects repository is the replacement point for a CMS or backend. No extra state manager or database is required for this scaffold.

## Routes

| Route | Behavior |
| --- | --- |
| `/` | Responsive implementation structure for all seven Figma sections |
| `/about` | About content placeholder; secondary layout inferred |
| `/projects/[slug]` | Six statically generated sample project routes |
| `/consultation` | Accessible enquiry form; secondary layout inferred |
| `/api/consultations` | Validated JSON POST forwarded to configured server endpoint |
| `/privacy`, `/terms` | Explicit unpublished-content placeholders, excluded from indexing |
| `/sitemap.xml`, `/robots.txt` | SEO scaffolding |

## Import the design assets

Asset URLs supplied by Figma returned HTML instead of image files in this execution environment. Those invalid downloads were removed. **This archive contains no Figma images, SVGs, or font binaries.**

See [docs/assets.md](docs/assets.md) for the node-to-filename mapping. Export the original assets from Figma and name them accordingly, then run:

```bash
node scripts/import-assets.mjs /absolute/path/to/exports
```

The importer validates all required files before copying them. It preserves bytes, rejects missing/invalid files, and does not crop, redraw, or resize assets. An explicit image-pending slot is shown until imports are present. Decorative icons remain blank until imported. The design screenshot is never used as a page background or implementation substitute.

The exact named font families are set in CSS tokens; system fallback fonts are currently used. Provide licensed webfont files and connect them with `next/font/local` or `@font-face` before visual signoff.

## Consultation integration

Configure `CONSULTATION_API_URL` and, when needed, `CONSULTATION_API_TOKEN` in server environment variables. The adapter forwards this JSON contract:

```json
{
  "name": "Client name",
  "email": "client@example.com",
  "phone": "+971 50 000 0000",
  "service": "Architecture",
  "message": "Project brief",
  "consent": true
}
```

The endpoint must return 2xx only after accepting the enquiry durably. An absent endpoint returns 503; a failed endpoint returns 502. The form never reports a successful submission without a successful backend response. No database, email provider, or CRM connection is provisioned.

The adapter times out after 10 seconds. Input is limited to 16 KiB and validated on the server. Same-origin browser requests are required. Authentication, spam controls, rate limiting, persistence, delivery guarantees, and CRM mapping depend on the missing PRD/backend contract.

## Extend

1. Read the PRD and update [docs/requirements.md](docs/requirements.md).
2. Replace sample copy and confirm the Figma contact details in `src/config/site.ts`.
3. Import the original assets and licensed fonts.
4. Replace the project repository with the approved CMS/API adapter.
5. Configure consultation delivery and production environment variables.
6. Recheck desktop and mobile rendering against Figma after asset/font import.

## Docker

```bash
docker build -t aakriti-nextjs .
docker run -p 3000:3000 --env-file .env.local --restart unless-stopped aakriti-nextjs
```

Docker uses a standalone Next.js build and an unprivileged runtime user. Docker execution was not validated here. Public environment variables used in generated pages are build-time values; set the final site origin during the production build.

## Reference

- [Figma Main Page](https://www.figma.com/design/w60SINabBjmrfayFY1Maig/Real-Estate?node-id=1-3)
- [Next.js App Router documentation](https://nextjs.org/docs/app/getting-started)
