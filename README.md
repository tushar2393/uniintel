# UnitIntel marketing site

Single-page marketing website for **UnitIntel**, an AI integration consultancy focused on helping B2B teams reach **5x throughput** by removing repetitive work from existing workflows.

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

## Deploy on Cloudflare Pages

Do **not** use the “Next.js on Cloudflare / OpenNext” Workers preset — this site is static HTML.

In Cloudflare Pages → project settings → Builds:

| Setting | Value |
| --- | --- |
| Framework preset | **None** (or Next.js static HTML export) |
| Build command | `npm run build` |
| Build output directory | `out` |
| Root directory | `/` (repo root) |
| Environment variable | `NODE_VERSION` = `20` |

Then reconnect the GitHub repo `tushar2393/uniintel` and redeploy.

If a previous deploy used OpenNext and failed looking for `.next/standalone/.../pages-manifest.json`, switch the preset/output as above and retry — that error means Cloudflare tried a server adapter on a static export.

## Project structure

- `app/` — App Router entrypoints and global styles
- `components/marketing/` — landing page sections
- `components/ui/` — shared UI primitives
- `lib/` — small utilities
