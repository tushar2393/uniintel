# Uniintel marketing site

Single-page marketing website for **Uniintel**, which helps **specialty and multi-site ambulatory clinics** reclaim capacity on prior-auth packet prep, referral chase, and inbox triage — inside the EHR, portals, fax, and email they already run, with human checkpoints.

**Not in scope:** credentialing / payer enrollment, hospital enterprise platforms, telehealth brands, or generic “AI for any ops team” positioning.

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production build

```bash
npm run build
```

Configured as a **static export**. Output is written to `out/`.

## Deploy on Cloudflare (Workers Builds)

Your dashboard shows **Workers** settings (`npx wrangler deploy`), not classic Pages — that is why there is no “Build output directory” field.

Use these build settings:

| Setting | Value |
| --- | --- |
| Build command | `npm run build` |
| Deploy command | `npx wrangler deploy` |
| Version command | `npx wrangler versions upload` (ok to leave) |
| Root directory | `/` |
| `NODE_VERSION` | `20` |

`wrangler.toml` serves the static export from `./out` via Workers Static Assets. Do **not** enable OpenNext / “Next.js on Cloudflare” — this project uses `output: "export"`.

### Easier alternative: Cloudflare Pages

Workers & Pages → **Create** → **Pages** → Connect `tushar2393/uniintel`:

| Setting | Value |
| --- | --- |
| Framework preset | None |
| Build command | `npm run build` |
| Build output directory | `out` |

## Project structure

- `app/` — App Router entrypoints and global styles
- `components/marketing/` — landing page sections
- `components/ui/` — shared UI primitives
- `lib/` — small utilities

## Offer (site copy)

- 45-minute workflow discovery → `mailto:tushar@uniintel.org`
- Paid pilot / throughput audit (pilot engagement — baseline hours and first sprint plan)
- Fixed-scope 4–6 week sprint on one queue (PA or referrals)
