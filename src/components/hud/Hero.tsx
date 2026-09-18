import { useApp } from "@/content/state";
import GraphOrb from "@/components/hud/GraphOrb";
import { Reveal } from "@/components/hud/primitives";

const stack = ["Python", "React 19", "TypeScript", "FastAPI", "Supabase", "OpenAI API", "OCR", "AWS"];

/**
 * Portada centrada con la marca al costado: titular grande, una frase de apoyo,
 * dos acciones y la ficha de identidad debajo, a todo el ancho.
 *
 * La marca se muestra de dos maneras según el ancho. Hasta `lg` es un fondo que
 * ocupa la página entera: sube, baja y cruza por detrás del texto, atenuada para
 * no restarle contraste a la lectura. De `lg` en adelante hay sitio al costado,
 * así que ahí vive en su propia columna, a plena opacidad.
 */
const Hero = () => {
  const { content } = useApp();
  const { hero, idFields } = content;

  return (
    <div className="relative flex flex-col gap-16 lg:gap-24">
      {/* Fondo de la página de identidad: solo hasta `lg`. */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-40 lg:hidden" aria-hidden="true">
        <GraphOrb />
      </div>

      <section className="relative grid items-center gap-10 pt-6 sm:pt-10 lg:grid-cols-[minmax(0,1fr)_440px] lg:gap-16">
        {/* La portada entra escalonada: antetítulo, nombre, frase, acciones. */}
        <div className="relative z-10 text-center">
          <Reveal>
            <p className="text-meta font-semibold text-green">{hero.eyebrow}</p>
          </Reveal>

          <Reveal delay={0.06}>
            <h1 className="mx-auto mt-3 max-w-[16ch] text-[clamp(2.25rem,8vw,4.5rem)] font-semibold leading-[1.04] tracking-[-0.022em] text-txt">
              {hero.name} <span className="gradient-name">{hero.surname}</span>
            </h1>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mx-auto mt-4 max-w-[36ch] text-title font-medium text-txt">
              AI Software Engineer &amp; Full Stack Developer
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <p className="mx-auto mt-6 max-w-[62ch] text-body text-mut">{hero.summary}</p>
          </Reveal>

          <Reveal delay={0.24} className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <a href="/systems" className="btn-primary">
              {hero.ctaSystems}
            </a>
            <a href="/contact" className="link-chevron">
              {hero.ctaContact} ›
            </a>
          </Reveal>

          <Reveal delay={0.3} className="mt-10 flex flex-wrap justify-center gap-2">
            {stack.map((item) => (
              <span key={item} className="hud-chip">
                {item}
              </span>
            ))}
          </Reveal>
        </div>

        {/* De `lg` en adelante, la marca tiene su propia columna al costado. */}
        <Reveal delay={0.12} className="hidden lg:block">
          <GraphOrb />
        </Reveal>
      </section>

      <Reveal className="relative z-10">
        <dl className="grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-4">
          {idFields.map((field) => (
            <div key={field.k}>
              <dt className="hud-label">{field.k}</dt>
              <dd className="mt-1 text-meta text-txt [overflow-wrap:anywhere]">
                {field.href ? (
                  <a href={field.href} className="text-arc no-underline hover:underline">
                    {field.v}
                  </a>
                ) : (
                  field.v
                )}
              </dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </div>
  );
};

export default Hero;
