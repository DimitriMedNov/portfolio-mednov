# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Single-page personal portfolio for Dimitri MedNov. Vite + React 18 + TypeScript + Tailwind + shadcn/ui. Originally scaffolded by Lovable (`lovable-tagger` Vite plugin runs in dev mode; `gptengineer.js` script in `index.html` — do not remove that script tag). Deployed to Vercel (`https://portfolio-mednov.vercel.app/`). UI copy is mixed Spanish/English; `index.html` is `lang="es"`.

## Commands

```bash
npm run dev        # Vite dev server on port 8080 (host "::")
npm run build      # production build
npm run build:dev  # build with development mode (keeps lovable-tagger)
npm run lint       # eslint .
npm run preview    # preview the production build
```

No test framework is configured. `bun.lockb` and `package-lock.json` both exist — npm is the working assumption (`package-lock.json` is what shows as modified in git).

## Architecture

- **Routing** ([src/App.tsx](src/App.tsx)): `react-router-dom` with three routes — `/` ([Index](src/pages/Index.tsx)), `/about` ([About](src/pages/About.tsx)), and catch-all `*` ([NotFound](src/pages/NotFound.tsx)). Keep new routes **above** the catch-all. The app is wrapped in `QueryClientProvider` (react-query), `next-themes` `ThemeProvider` (class-based dark mode, `defaultTheme="dark"`), `TooltipProvider`, and both toasters (`Toaster` from shadcn + `Sonner`).
- **Page composition**: [Index](src/pages/Index.tsx) is a vertical scroll of section components — `Navbar`, `HeroSection`, `ProjectsSection`, `ContactSection`, `Footer`. In-page navigation uses `react-scroll` (smooth scroll to section anchors), not router links.
- **Section components** live in [src/components/](src/components/); compound features are grouped in subfolders (`projects/`, `contact/`). [src/components/ui/](src/components/ui/) is the shadcn/ui primitive library — generally don't hand-edit these unless intentionally customizing a primitive.
- **Project data** is static: [src/data/projects.ts](src/data/projects.ts) exports a `Project[]` typed by [src/types/project.ts](src/types/project.ts). Project images live in `public/images/` and are referenced by absolute path (e.g. `/images/clima.png`). To add/edit a portfolio project, edit `projects.ts` — no CMS or fetch.

## Conventions

- **Import alias**: `@/` → `src/` (configured in [vite.config.ts](vite.config.ts) and `tsconfig`). Use it instead of relative paths.
- **Adding shadcn components**: configured via [components.json](components.json) (style "default", base color, `@/components/ui` path). Use the shadcn CLI; new primitives land in `src/components/ui/`.
- **Styling**: Tailwind only. Custom theme tokens in [tailwind.config.ts](tailwind.config.ts) — HSL CSS variables for shadcn colors, plus `blue-accent` (#3B82F6) and `turquoise` (#06B6D4) brand colors, `poppins` font, and `spin-slow` animation. Dark mode is class-based.
- **TypeScript is loose**: `tsconfig` has `noImplicitAny`, `strictNullChecks`, and `noUnusedLocals`/`noUnusedParameters` all disabled. Don't rely on strict-mode guarantees.
- **Toasts**: `sonner` is the primary toast API (`import { toast } from "sonner"`).

## Contact form / EmailJS

[src/components/contact/ContactForm.tsx](src/components/contact/ContactForm.tsx) sends mail client-side via `@emailjs/browser`. The EmailJS `SERVICE_ID`, template id (`email_direct`), and `PUBLIC_KEY` are hardcoded constants in the file (EmailJS public keys are designed to be client-exposed). If email stops working, check the EmailJS dashboard config matches these values.
