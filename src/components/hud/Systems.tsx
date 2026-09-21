import { useContent } from "@/content/state";
import { Chip, Label, Panel, Reveal, SectionTitle } from "@/components/hud/primitives";

/** Sistemas privados y las sedes donde corren. */
const Systems = () => {
  const { systems, sites } = useContent();

  return (
    <>
      <section>
        <SectionTitle title={systems.title} note={systems.note} tone="blue" />

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2 2xl:grid-cols-3">
          {systems.cases.map((item, i) => (
            <Reveal key={item.id} delay={i * 0.05} className="h-full">
              <Panel className="lift h-full">
                <article className="flex h-full flex-col gap-5 p-6 sm:p-9">
                  <div className="flex flex-wrap items-center gap-3">
                    {item.logo && (
                      <img
                        src={item.logo}
                        alt=""
                        height={40}
                        loading="lazy"
                        className={`h-10 shrink-0 rounded-[10px] border border-line/60 bg-white object-contain p-1 ${
                          item.logoShape === "wide" ? "w-auto max-w-[132px] px-2" : "w-10"
                        }`}
                      />
                    )}
                    <Chip tone={item.status}>{item.statusLabel}</Chip>
                    <Chip>{item.access.label}</Chip>
                  </div>

                  <div>
                    <p className="hud-label">
                      {item.desig} · {item.org} · {item.year}
                    </p>
                    <h3 className="mt-2 text-title font-semibold text-txt">{item.title}</h3>
                    <p className="mt-3 text-body text-mut">{item.desc}</p>
                  </div>

                  {item.reads.length > 0 && (
                    <div className="flex flex-wrap gap-6">
                      {item.reads.map((read) => (
                        <div key={read.l}>
                          <div className="text-headline font-semibold text-txt">{read.v}</div>
                          <div className="hud-label mt-1">{read.l}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  {item.url && (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-chevron self-start"
                    >
                      {item.url.replace(/^https?:\/\//, "").replace(/\/$/, "")} ›
                      <span className="sr-only"> — {item.title}</span>
                    </a>
                  )}

                  {item.repos && (
                    <div className="flex flex-wrap gap-x-6 gap-y-1">
                      {item.repos.map((repo) => (
                        <a
                          key={repo.href}
                          href={repo.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="link-chevron"
                        >
                          {repo.label} ›
                          <span className="sr-only"> — {item.title}</span>
                        </a>
                      ))}
                    </div>
                  )}

                  <div className="mt-auto pt-2">
                    <Label>{systems.stackLabel}</Label>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {item.stack.map((tech) => (
                        <span key={tech} className="hud-chip">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </Panel>
            </Reveal>
          ))}
        </div>
      </section>

      <section>
        <SectionTitle title={sites.title} note={sites.note} tone="teal" />
        <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {sites.rows.map((site, i) => (
            <Reveal key={site.code} delay={i * 0.05}>
              <div className="flex h-full flex-col gap-1 border-t border-line/70 pt-4">
                <span className="text-title font-semibold text-txt">
                  {site.name}
                </span>
                <span className="text-caption text-mut">
                  {site.lat} / {site.lon}
                </span>
                <span className="hud-label mt-auto pt-2">{site.fn}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
};

export default Systems;
