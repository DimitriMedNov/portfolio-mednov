---
name: accessibility-a11y-react
description: Revisa accesibilidad (WCAG 2.1 AA) en los componentes React/shadcn de este portafolio — navegación por teclado, foco, contraste dark/light, enlaces e imágenes. Úsala al crear/editar componentes en src/components o antes de un deploy.
---

# accessibility-a11y-react

Skill específica para los componentes de este portafolio (React 18 + Tailwind + shadcn/ui, dark mode por clase vía `next-themes`). Objetivo: **WCAG 2.1 nivel AA**.

## Patrones ya buenos (mantener)
- [Navbar.tsx](../../../src/components/Navbar.tsx) usa `aria-label` en botones de iconos y enlaces sociales, y `focus-visible:ring-2 focus-visible:ring-primary/40` consistente. Reutiliza esa clase `itemClasses` como referencia de foco visible.
- shadcn/ui (Radix) ya aporta roles/teclado en sus primitivos — no los reimplementes.

## Bugs de a11y conocidos en el código actual
1. **Enlace vacío** en [ProjectCard.tsx:47-55](../../../src/components/projects/ProjectCard.tsx#L47-L55): el `<a href={project.github}>` tiene su contenido comentado → es un enlace **sin texto accesible ni contenido visible**, apuntando además a URLs placeholder. Un lector de pantalla anuncia un link vacío. → Restaurar el icono+texto con `aria-label`, o eliminar el `<a>`.
2. **Enlaces externos** en ProjectCard (Demo/Code) y Navbar abren en `target="_blank"`: ya llevan `rel="noopener noreferrer"` (✅) pero **no indican que abren en nueva pestaña** → añadir `aria-label="… (abre en nueva pestaña)"`.
3. **Botón dentro de Link** en [HeroSection.tsx:26-35](../../../src/components/HeroSection.tsx#L26-L35): `react-scroll` `<Link>` envuelve un `<Button>`. Verificar que no se generen dos elementos interactivos anidados (button dentro de a) — preferir `Button asChild` o un solo elemento focusable.
4. **Iconos decorativos** (`<Code2>` en Hero, iconos lucide dentro de enlaces con texto) deben tener `aria-hidden="true"` para no duplicar la lectura.

## Checklist WCAG AA

### Teclado y foco
- [ ] Todo lo interactivo es alcanzable con Tab y tiene foco visible (`focus-visible:ring`).
- [ ] El menú móvil ([Navbar.tsx:115-172](../../../src/components/Navbar.tsx#L115-L172)) no deja elementos focusables cuando está cerrado (hoy usa `max-h-0 opacity-0 overflow-hidden` pero **los enlaces siguen en el DOM y son tabulables**). Añadir `hidden`/`inert` o no renderizarlos cuando `!isOpen`.
- [ ] Sin "trampas" de foco; orden de tabulación lógico.

### Semántica
- [ ] Un solo `<h1>` por página; jerarquía de headings sin saltos.
- [ ] Imágenes con `alt` descriptivo (ProjectCard usa `alt={project.title}` ✅; las decorativas con `alt=""`).
- [ ] Enlaces e botones con nombre accesible (texto visible o `aria-label`), nunca vacíos.
- [ ] Landmarks: `<header>`/`<main>`/`<footer>` presentes (✅ en Index/Navbar/Footer).

### Color y movimiento
- [ ] Contraste texto/fondo ≥ 4.5:1 en **ambos** temas (revisar `text-gray-600 dark:text-gray-400` sobre fondos claros/oscuros — borderline en algunos casos).
- [ ] Animaciones (`animate-fade-in`, `animate-pulse-slow`, `animate-bounce`, `spin-slow`) respetan `prefers-reduced-motion`. Hoy **no** lo hacen → envolver en `motion-reduce:animate-none` o media query.

## Criterios de aceptación
1. No hay enlaces ni botones sin nombre accesible (ProjectCard GitHub corregido).
2. El menú móvil cerrado no es tabulable.
3. Las animaciones se desactivan con `prefers-reduced-motion: reduce`.
4. Enlaces `target="_blank"` avisan de nueva pestaña; iconos decorativos con `aria-hidden`.
5. Contraste AA verificado en light y dark para texto de cuerpo.
6. (Si `playwright` está instalado) un smoke test de teclado pasa: Tab recorre nav → hero CTAs → proyectos → contacto.

## Ejemplos aplicables

```tsx
// ProjectCard: enlace de GitHub accesible (o eliminarlo si no hay repo)
<a href={project.github} target="_blank" rel="noopener noreferrer"
   aria-label={`Código de ${project.title} (abre en nueva pestaña)`}
   className="inline-flex items-center text-sm font-medium ...">
  <Github className="h-4 w-4 mr-1" aria-hidden="true" /> Código
</a>
```

```tsx
// Respetar reduced motion en utilidades de animación
<div className="animate-fade-in motion-reduce:animate-none">
```

```tsx
// Menú móvil: no dejar enlaces tabulables al estar cerrado
<div className={isOpen ? "..." : "hidden"}>  {/* en vez de solo opacity/max-h */}
```

## Cómo trabajar
1. Empieza por los 4 bugs conocidos (alto impacto, bajo esfuerzo).
2. Recorre el checklist componente por componente.
3. Verifica contraste con las clases reales en light y dark.
4. Si hay `playwright`, añade un check de navegación por teclado.
