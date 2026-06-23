---
name: portfolio-copy-seo
description: Audita y mejora copy + SEO técnico del portafolio (index.html meta tags, OG/Twitter, JSON-LD, robots/sitemap, copy de Hero/Projects/About). Úsala al editar textos visibles, metadatos o antes de un deploy a Vercel.
---

# portfolio-copy-seo

Skill específica del portafolio de Dimitri MedNov (Vite SPA, una sola página HTML servida desde [index.html](../../../index.html)). Como es SPA sin SSR, **todo el SEO indexable vive en `index.html`** — los componentes React no añaden meta tags. Por eso el foco es: `index.html`, `public/robots.txt`, `public/og-image.png` y el copy de las secciones.

## Contexto del proyecto

- Idioma del sitio: `<html lang="es">`, pero el copy visible está mezclado ES/EN (Hero en inglés, `aria-label` en español). Decide un idioma por superficie y sé consistente.
- Dominio canónico: `https://portfolio-mednov.vercel.app/`.
- Identidad: "Jesus D'mitri Medina Novelo" / "DevMedNov" — AI Software Engineer & Full Stack Developer.
- OG image ya existe (1200×630) en `public/og-image.png`.

## Checklist de auditoría

### Metadatos (`index.html`)
- [ ] `<title>` ≤ 60 caracteres, con nombre + rol + keyword.
- [ ] `<meta name="description">` 120–160 caracteres, sin duplicar literal el title.
- [ ] `<link rel="canonical">` presente y absoluto (✅ ya está).
- [ ] OG completo: `og:title`, `og:description`, `og:type`, `og:image`, `og:image:width/height` (✅) **+ falta `og:url` y `og:locale` (`es_ES`)**.
- [ ] Twitter card `summary_large_image` (✅).
- [ ] **Falta**: `<meta name="theme-color">` (combinar con dark mode), `<meta name="robots" content="index,follow">`.
- [ ] **Falta**: JSON-LD `Person` (schema.org) con `name`, `jobTitle`, `url`, `sameAs` (GitHub/LinkedIn de [Navbar.tsx:28-32](../../../src/components/Navbar.tsx#L28-L32)).

### Indexación (`public/`)
- [ ] `robots.txt` (✅ existe) **debe añadir** `Sitemap: https://portfolio-mednov.vercel.app/sitemap.xml`.
- [ ] Crear `public/sitemap.xml` con `/` y `/about`.

### Copy de secciones
- [ ] Hero ([HeroSection.tsx:18-22](../../../src/components/HeroSection.tsx#L18-L22)): un solo `<h1>` por página (✅). Verificar que no haya errores de tipeo y consistencia de idioma.
- [ ] Projects ([projects.ts](../../../src/data/projects.ts)): descripciones con keyword + resultado, no genéricas. **Bug de copy/credibilidad**: los `github` apuntan a `https://github.com/ejemplo/proyecto1` (falsos) — corregir o quitar el enlace.
- [ ] Sin "Lorem ipsum", placeholders ni texto en dos idiomas dentro de la misma frase.

## Criterios de aceptación

1. `index.html` incluye `og:url`, `og:locale`, `theme-color`, `robots` y un bloque `<script type="application/ld+json">` con `Person` válido (verificable en https://validator.schema.org/).
2. `description` y `og:description` entre 120–160 chars.
3. `public/sitemap.xml` existe y `robots.txt` lo referencia.
4. Ningún enlace de proyecto apunta a un dominio placeholder (`ejemplo`, `tu-usuario`, etc.).
5. Idioma consistente por superficie (todo el copy visible en el mismo idioma que `lang`).
6. `npm run build` sigue pasando sin warnings nuevos.

## Ejemplo aplicable (añadir a `<head>` de index.html)

```html
<meta property="og:url" content="https://portfolio-mednov.vercel.app/" />
<meta property="og:locale" content="es_ES" />
<meta name="theme-color" content="#0f172a" media="(prefers-color-scheme: dark)" />
<meta name="robots" content="index,follow" />
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Jesus D'mitri Medina Novelo",
  "jobTitle": "AI Software Engineer & Full Stack Developer",
  "url": "https://portfolio-mednov.vercel.app/",
  "sameAs": [
    "https://github.com/DimitriMedNov",
    "https://www.linkedin.com/in/jdmtmednov82/"
  ]
}
</script>
```

## Cómo trabajar
1. Lee `index.html`, `public/robots.txt` y `src/data/projects.ts`.
2. Recorre el checklist y reporta hallazgos antes de editar.
3. Aplica cambios mínimos, valida JSON-LD y corre `npm run build`.
