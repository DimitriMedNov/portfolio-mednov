# portfolio-mednov

[![Pruebas](https://github.com/DimitriMedNov/portfolio-mednov/actions/workflows/pruebas.yml/badge.svg)](https://github.com/DimitriMedNov/portfolio-mednov/actions/workflows/pruebas.yml)
[![Licencia: MIT](https://img.shields.io/badge/licencia-MIT-blue.svg)](https://github.com/DimitriMedNov/portfolio-mednov/blob/main/LICENSE)

Mi portafolio: **https://portfolio-mednov.vercel.app**

Sitio de una sola página que reúne los sistemas que he construido en el trabajo, los proyectos públicos con su código, y mi currículum completo. Está en español e inglés, y el idioma y el tema claro u oscuro se eligen desde el encabezado y se recuerdan entre visitas.

## Cómo está armado

El contenido y la estructura viven separados a propósito. `src/data/projects.ts` guarda sólo lo estructural de cada proyecto —identificador, etiquetas, enlaces— y todo el texto que lee una persona está en `src/content/es.ts` y `src/content/en.ts`, los dos tipados por `src/content/types.ts`, de modo que un campo nuevo obliga a llenarlo en los dos idiomas o no compila.

La marca de la portada (`src/components/hud/GraphOrb.tsx`) es una nube de nodos en tres capas proyectada a mano sobre SVG con `requestAnimationFrame`, sin librerías 3D. Con `prefers-reduced-motion` dibuja una sola pose y se detiene.

El enrutado es propio sobre `pathname`, sin librería de rutas, y Vercel reescribe las rutas sin extensión a `index.html`.

## Una regla del contenido

Toda cifra que aparece es real o no aparece. No se estima una métrica para llenar un hueco.

## Stack

React · TypeScript · Vite · Tailwind CSS · Vitest · Vercel

## Comandos

```bash
bun install
bun run dev        # servidor de desarrollo
bun run check      # lint + tipos + pruebas + build
```
