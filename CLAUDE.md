# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Single-page personal portfolio for Dimitri MedNov. Vite + React 18 + TypeScript + Tailwind + shadcn/ui. Originally scaffolded by Lovable (`gptengineer.js` remains in `index.html` — do not remove that script tag). Deployed to Vercel (`https://portfolio-mednov.vercel.app/`). The primary UI language and `index.html` language are English.

## Commands

```bash
npm run dev        # Vite dev server on port 8080 (host "::")
npm run build      # production build
npm run build:dev  # build with development mode
npm run lint       # eslint .
npm run typecheck  # TypeScript validation without emitting files
npm run test       # Vitest component and navigation tests
npm run check      # lint + typecheck + tests + production build
npm run preview    # preview the production build
```

Vitest and Testing Library cover the main navigation and content paths. npm is the package manager and `package-lock.json` is the source of truth.

## Architecture

- **Routing** ([src/App.tsx](src/App.tsx)): lightweight pathname routing with three outcomes — `/` ([Index](src/pages/Index.tsx)), `/about` ([About](src/pages/About.tsx)), and [NotFound](src/pages/NotFound.tsx) for everything else. Navigation uses normal document links and Vercel rewrites extensionless paths to `index.html`. The app is wrapped in the `next-themes` `ThemeProvider` (class-based dark mode, `defaultTheme="dark"`).
- **Page composition**: [Index](src/pages/Index.tsx) is a vertical scroll of section components — `Navbar`, `HeroSection`, `ProjectsSection`, `ContactSection`, `Footer`. In-page navigation uses native hash links and CSS smooth scrolling.
- **Section components** live in [src/components/](src/components/); compound features are grouped in subfolders (`projects/`, `contact/`). [src/components/ui/](src/components/ui/) is the shadcn/ui primitive library — generally don't hand-edit these unless intentionally customizing a primitive.
- **Project data** is static: [src/data/projects.ts](src/data/projects.ts) exports a `Project[]` typed by [src/types/project.ts](src/types/project.ts). Project images live in `public/images/` and are referenced by absolute path (e.g. `/images/clima.png`). To add/edit a portfolio project, edit `projects.ts` — no CMS or fetch.

## Conventions

- **Import alias**: `@/` → `src/` (configured in [vite.config.ts](vite.config.ts) and `tsconfig`). Use it instead of relative paths.
- **Adding shadcn components**: configured via [components.json](components.json) (style "default", base color, `@/components/ui` path). Use the shadcn CLI; new primitives land in `src/components/ui/`.
- **Styling**: Tailwind only. Custom theme tokens in [tailwind.config.ts](tailwind.config.ts) — HSL CSS variables for shadcn colors, plus `blue-accent` (#3B82F6) and `turquoise` (#06B6D4) brand colors, `poppins` font, and `spin-slow` animation. Dark mode is class-based.
- **TypeScript is loose**: `tsconfig` has `noImplicitAny`, `strictNullChecks`, and `noUnusedLocals`/`noUnusedParameters` all disabled. Don't rely on strict-mode guarantees.
- **Toasts**: `sonner` is the primary toast API (`import { toast } from "sonner"`).

## Contact

The contact section exposes direct email and telephone links. There is no client-side contact form or EmailJS integration.
