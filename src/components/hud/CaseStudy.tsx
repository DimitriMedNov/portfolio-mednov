import { useContent } from "@/content/state";
import { Label, Panel, Reveal } from "@/components/hud/primitives";

/**
 * Caso de estudio en profundidad.
 *
 * A diferencia de una ficha de Sistemas, que resume, aquí se lee de corrido:
 * el problema, la decisión que lo resuelve, cómo se mide y qué no se puede
 * medir. Esa última parte es la que sostiene a las demás, así que no es un
 * apéndice al final sino una sección con el mismo peso visual.
 */
const CaseStudy = ({ slug }: { slug: string }) => {
  const { caseStudies } = useContent();
  const caseStudy = caseStudies[slug];

  return (
    <article className="mx-auto w-full max-w-[64rem]">
      <a href="/systems" className="link-chevron text-meta">
        ← {caseStudy.back}
      </a>

      <header className="mt-8">
        <Label>{caseStudy.eyebrow}</Label>
        <h1 className="display mt-4 text-display text-txt">{caseStudy.title}</h1>
        <p className="mt-6 max-w-[62ch] text-lead text-mut">{caseStudy.lede}</p>
      </header>

      {/* Las columnas siguen a cuántas cifras haya: con tres, cuatro dejaban
          una celda vacía al final. */}
      <div
        className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-[14px] border border-line/70 bg-line/70"
        style={{ gridTemplateColumns: `repeat(${Math.min(caseStudy.figures.length, 4)}, minmax(0, 1fr))` }}
      >
        {caseStudy.figures.map((figure) => (
          <div key={figure.l} className="bg-panel px-5 py-6">
            <div className="text-headline font-semibold tabular-nums text-txt">{figure.v}</div>
            <div className="mt-1 text-caption text-mut">{figure.l}</div>
          </div>
        ))}
      </div>

      <div className="mt-16 flex flex-col gap-14">
        {caseStudy.sections.map((section, i) => (
          <Reveal key={section.id} delay={i * 0.04}>
            <section className="border-t border-line/70 pt-8">
              <h2 className="text-title font-semibold text-txt">{section.title}</h2>
              <div className="mt-5 flex max-w-[68ch] flex-col gap-4 text-body text-mut">
                {section.body.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                ))}
              </div>
            </section>
          </Reveal>
        ))}
      </div>

      {/* Decir qué no se demuestra es lo que hace creíble lo que sí. */}
      <Reveal delay={0.16}>
        <Panel className="mt-16">
          <div className="p-6 sm:p-9">
            <h2 className="text-title font-semibold text-txt">{caseStudy.honesty.title}</h2>
            <ul className="mt-5 flex max-w-[68ch] list-disc flex-col gap-3 pl-5 text-body text-mut marker:text-line">
              {caseStudy.honesty.items.map((item) => (
                <li key={item.slice(0, 40)}>{item}</li>
              ))}
            </ul>
          </div>
        </Panel>
      </Reveal>

      <p className="mt-10 max-w-[68ch] text-caption text-mut">{caseStudy.note}</p>
    </article>
  );
};

export default CaseStudy;
