# Personal Portfolio

A résumé-themed personal portfolio website built with Next.js and Tailwind CSS.

## Overview

This project is a single-page portfolio designed to present experience, projects, and contact links in a clean, accessible layout. It uses a local Poppins font setup, SEO-friendly metadata, structured data, a sitemap, and a robots file.

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- shadcn UI with Base UI primitives
- Local fonts loaded from `public/fonts`

## Folder Structure

```text
personal-portfolio/
├── app/
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   ├── robots.ts
│   └── sitemap.ts
├── components/
│   ├── About.tsx
│   ├── Experience.tsx
│   ├── Footer.tsx
│   ├── Introduction.tsx
│   ├── Navbar.tsx
│   ├── Project.tsx
│   ├── Spotlight.tsx
│   ├── interfaces/
│   │   ├── about.ts
│   │   ├── experience.ts
│   │   ├── introduction.ts
│   │   └── project.ts
│   └── ui/
│       └── button.tsx
├── hooks/
│   ├── interfaces/
│   │   └── useMousePosition.ts
│   └── useMousePosition.tsx
├── lib/
│   ├── site.ts
│   └── utils.ts
├── public/
│   ├── fonts/
│   │   ├── Poppins-*.ttf
│   │   └── .gitkeep
│   └── images/
│       ├── 1_HD.webp
│       ├── 2_HD.webp
│       ├── 3_HD.webp
│       ├── 4_HD.webp
│       └── 5_HD.webp
├── components.json
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tsconfig.json
└── README.md
```

## Scripts

- `pnpm dev` - start the development server
- `pnpm build` - create a production build
- `pnpm start` - start the production server
- `pnpm lint` - run ESLint

## Notes

- The portfolio content lives in `components/About.tsx`, `components/Experience.tsx`, and `components/Project.tsx`.
- Shared interfaces now live in `components/interfaces/` and `hooks/interfaces/`.
- SEO metadata is centralized in `app/layout.tsx` and `lib/site.ts`.
- The footer and other UI pieces are intentionally lightweight so the visual design stays consistent.
