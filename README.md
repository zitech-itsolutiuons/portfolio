# Portfolio — Next.js

A full-featured, black & white portfolio site built with Next.js 14 (App Router), TypeScript, and Tailwind CSS.

## Features

- Strict monochrome black/white design system with a light/dark toggle (persisted, no flash on load)
- Typing preloader that spells out the wordmark, configurable from `data/loader.ts`
- Animated network-node canvas in the hero + terminal-style typing intro
- Sticky navbar with mobile menu and smooth-scroll anchor links
- Scroll progress bar and custom cursor trail (desktop only, respects reduced motion)
- About section with a stats grid
- Skills grouped by category
- Projects grid with live tag filtering
- Experience timeline
- Contact form with client + server-side validation, wired to an API route (`/app/api/contact/route.ts`) ready to connect to an email provider
- SEO metadata, `sitemap.xml`, `robots.txt`, Open Graph + Twitter cards
- Custom 404 page, loading state
- Fully responsive, keyboard-accessible, `prefers-reduced-motion` respected throughout

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Customize your content

Almost everything on the site is driven from **one file**:

```
data/portfolio.ts
```

Edit your name, role, tagline, bio, stats, skills, projects, experience, social links, and email there — the whole site updates automatically.

### The preloader

The typing intro is configured separately, in:

```
data/loader.ts
```

`text` is the word that gets typed, `subtitle` is the line underneath, and the
timing fields control pacing. `enabled: false` removes it entirely.

`oncePerSession` ships as `false`, so the intro plays on every page view — which
is what you want while editing. Flip it to `true` before you deploy and it plays
only on the first view of a browser session.

Other things to swap in:

- `public/resume.pdf` — add your actual resume (the download button in the hero links here)
- `app/layout.tsx` — update `metadataBase` to your real domain
- `app/sitemap.ts` / `app/robots.ts` — update the URL to your real domain
- `app/api/contact/route.ts` — connect a real email provider (e.g. [Resend](https://resend.com)) so submissions actually get delivered; right now it just logs to the server console

## Deploy

The fastest path is [Vercel](https://vercel.com/new) — import the repo and it deploys with zero config. Any Node host that supports Next.js works too (`npm run build && npm start`).

## Stack

- [Next.js 14](https://nextjs.org/) (App Router)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide icons](https://lucide.dev/)
- Fonts: Space Grotesk (display), Inter (body), JetBrains Mono (utility)
