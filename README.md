# UnitIntel marketing site

A production-ready single-page marketing website for **UnitIntel**, an AI
integration consultancy focused on helping B2B teams reach **5x throughput** by
removing repetitive work from existing workflows.

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion

## Local development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Then open `http://localhost:3000`.

## Production build

Create a production build:

```bash
npm run build
```

The site is configured as a static export, so the generated output is written
to `out/`.

Serve the built site locally:

```bash
npm run start
```

## Project structure

- `app/` - Next.js app router entrypoints and global styles
- `components/marketing/` - landing page sections and marketing UI
- `components/ui/` - shared UI primitives
- `lib/` - small utilities
