# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Single-page personal portfolio for Dimitri MedNov. Vite + React 18 + TypeScript + Tailwind + shadcn/ui. Originally scaffolded by Lovable (`gptengineer.js` remains in `index.html` — do not remove that script tag). Deployed to Vercel (`https://portfolio-mednov.vercel.app/`). The primary UI language and `index.html` language are English.

## Commands

```bash
bun install          # install dependencies
bun run dev          # Vite dev server on port 8080 (host "::")
bun run build        # production build
bun run build:dev    # build with development mode
bun run lint         # eslint .
bun run typecheck    # TypeScript validation without emitting files
bun run test         # Vitest component and navigation tests
bun run check        # lint + typecheck + tests + production build
bun run preview      # preview the production build
```

Vitest and Testing Library cover the main navigation and content paths. Bun is the package manager and `bun.lock` is the source of truth; don't use npm/pnpm/yarn or commit their lockfiles.

## Architecture

- **Routing** ([src/App.tsx](src/App.tsx)): lightweight pathname routing over a `routes` map — `/` (Index), `/systems`, `/projects`, `/about`, `/contact`, and [NotFound](src/pages/NotFound.tsx) for anything else. Navigation uses normal document links and Vercel rewrites extensionless paths to `index.html`.
- **Design concept**: a dark operations console (HUD). Arc cyan is the system colour, gold means "in build", magenta means withheld; panels are hairline frames with corner brackets over a blurred, grid-lit ground. [Shell](src/components/hud/Shell.tsx) draws the sticky top bar (brand, availability, live Mérida clock), the tab nav and the footer; each page renders numbered sections inside it. Dark is the default; a light reading is defined under `:root[data-theme="light"]` in [src/index.css](src/index.css), where glows are switched off.
- **Section components** live in [src/components/hud/](src/components/hud/): `Hero` (portada + ficha de identidad), `Metrics`, `Systems` (private work + site index), `Builds` (public projects), `Record` (CV-style résumé: summary, roles with bullets and stack, education, certifications, courses, skills), `Contact`. Shared bits: `primitives.tsx` (Panel, Corners, SectionTitle, Chip, Reveal, Counter) and `status.ts`.
- **Movimiento**: curvas de Apple en `--ease` y `--ease-spring` (src/index.css). El contenido aparece al entrar en pantalla con [useReveal](src/components/hud/useReveal.ts): el elemento **nace visible** y el hook solo lo oculta si puede garantizar que volverá a mostrarlo, con un plazo de seguridad de 2.5s; sin JavaScript o con `prefers-reduced-motion` no se oculta nada. La portada entra escalonada, las tarjetas se levantan al pasar el cursor (`.lift`), los botones se hunden al presionar y la barra superior gana su línea solo al desplazar (`data-scrolled`).
- **Third-party UI**: `sileo` provides the physics toasts used by the contact copy buttons (`Toaster` mounts in `App.tsx`).
- **Logos**: en `public/logos/` (diprolam, diario, megamedia, solido, nidal, empleate). Cada sistema los referencia con `logo` en las dos dicciones; `logoShape: "wide"` es para marcas horizontales, que se muestran en caja rectangular en vez de cuadrada. Los logos van sobre una placa blanca para que los de fondo oscuro y los de fondo claro se lean en ambos temas.
- **Marca de la portada** ([GraphOrb](src/components/hud/GraphOrb.tsx)): nube de nodos en tres capas (icosaedro, octaedro interior girando al revés y polvo esférico) proyectada a mano con `requestAnimationFrame` sobre SVG, sin librerías 3D. Gira en tres ejes y además pasea por su caja rebotando en los bordes. Hasta `lg` se monta como fondo de la página de identidad, al 40% y con `aria-hidden`, y cruza por detrás del texto; de `lg` en adelante ocupa su columna al costado. Con `prefers-reduced-motion` dibuja una sola pose y se detiene.
- **Content is bilingual**: every user-facing string lives in [src/content/en.ts](src/content/en.ts) and [src/content/es.ts](src/content/es.ts), both typed by [src/content/types.ts](src/content/types.ts) — add a field to the type and both dictionaries together, never to only one. [src/data/projects.ts](src/data/projects.ts) keeps structural project data only (id, code, name, image, tags, links); the copy for each project lives under `builds.text[id]` in the dictionaries. Never add estimated metrics — a value is real or absent. Project images live in `public/images/`.
- **Language & theme**: [AppProvider](src/content/AppProvider.tsx) owns both, persisted in `localStorage` (`mednov.lang`, `mednov.theme`) and applied to `<html lang>` and `<html data-theme>`; an inline script in `index.html` applies them before first paint so nothing flashes. Components read them through `useApp()` / `useContent()` from [src/content/state.ts](src/content/state.ts). Language defaults to the browser's, theme defaults to dark. Both toggles sit in the header.

## Conventions

- **Import alias**: `@/` → `src/` (configured in [vite.config.ts](vite.config.ts) and `tsconfig`). Use it instead of relative paths.
- **Adding shadcn components**: configured via [components.json](components.json) (style "default", base color, `@/components/ui` path). Use the shadcn CLI; new primitives land in `src/components/ui/`.
- **Lenguaje visual**: páginas de producto de Apple. Superficie casi blanca (`#fbfbfd`) o negra en oscuro, texto grafito, un solo azul de sistema para lo accionable, tarjetas con radio 18px y sombra suave, botones en píldora, enlaces con chevron, todo en caja de oración. Sin monoespaciada, sin mayúsculas decorativas, sin rejillas ni marcos de HUD.
- **Tipografía**: SF Pro vía `-apple-system` con **Inter** como respaldo (`index.html`); los títulos usan la familia `font-display` con tracking negativo.
- **Apple HIG**: la interfaz se audita contra la guía instalada en `~/.claude/skills/apple-design` (ver `SKILL.md` y `references/hig/*.md`). Reglas que ya están aplicadas y no deben romperse: tipografía en `rem` con piso de 12px, controles con `min-height: 44px` (clase `.hit`), el tema sigue a `prefers-color-scheme` mientras nadie elija, y hay respuesta a `prefers-reduced-motion`, `prefers-reduced-transparency` y `prefers-contrast`.
- **Cristal**: dos capas distintas. **Liquid Glass** solo en `.glass-bar` (el encabezado, capa funcional): blur 28px, saturación 180%, reflejo interior, banda de degradado, y opacidad 72% en reposo / 94% al desplazar. **Material estándar** en `.panel` (tarjetas, capa de contenido, permitido por `materials.md › Standard materials`): blur 20px, saturación 160%, relleno 80% en claro y 62% en oscuro. El relleno no debe bajar de ahí: es lo que mantiene el texto atenuado por encima de 4.5:1 sobre el fondo teñido. Las manchas de color de `body::before` existen para que el material tenga algo que difuminar. Con `prefers-reduced-transparency` todo se vuelve opaco y el fondo teñido desaparece.
- **Styling**: Tailwind only. Custom theme tokens in [tailwind.config.ts](tailwind.config.ts) — HSL CSS variables for shadcn colors, plus the HUD tokens (`void`, `deep`, `panel`, `panel2`, `line`, `arc`, `gold`, `mag`, `txt`, `mut`). Those are stored in [src/index.css](src/index.css) as RGB channel triplets so Tailwind opacity modifiers (`bg-panel/70`) work. Type is IBM Plex Sans for prose and IBM Plex Mono for every label, number and status. Los tamaños salen de los roles de `fontSize` en `tailwind.config.ts` (`caption` 12px … `display` 32px), en `rem`; no usar `text-[Npx]`.
- **TypeScript is loose**: `tsconfig` has `noImplicitAny`, `strictNullChecks`, and `noUnusedLocals`/`noUnusedParameters` all disabled. Don't rely on strict-mode guarantees.
- **Toasts**: `sonner` is the primary toast API (`import { toast } from "sonner"`).

## Contact

`/contact` exposes direct email and telephone links plus copy-to-clipboard buttons backed by `sileo` toasts. There is no contact form or EmailJS integration.
