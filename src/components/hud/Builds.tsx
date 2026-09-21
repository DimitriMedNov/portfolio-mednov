import { projects } from "@/data/projects";
import { useContent } from "@/content/state";
import { Panel, Reveal, SectionTitle } from "@/components/hud/primitives";

/** Proyectos públicos, cada uno con su captura y su demo en vivo. */
const Builds = () => {
  const { builds, ui } = useContent();

  return (
    <section>
      <SectionTitle title={builds.title} note={builds.note(projects.length)} tone="purple" />

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 2xl:grid-cols-3">
        {projects.map((project, i) => {
          const text = builds.text[project.id];
          return (
            <Reveal key={project.id} delay={i * 0.05} className="h-full">
              <Panel className="lift group h-full">
                <article className="flex h-full flex-col">
                  {project.image && (
                    <div className="overflow-hidden bg-deep">
                      <img
                        src={project.image}
                        alt={`${project.name} — ${text.summary}`}
                        loading="lazy"
                        width={640}
                        height={400}
                        className="block aspect-[8/5] w-full object-cover transition-transform duration-500 motion-safe:group-hover:scale-[1.02]"
                      />
                    </div>
                  )}

                  <div className="flex flex-1 flex-col gap-4 p-6 sm:p-7">
                    <div>
                      <p className="hud-label">{text.category}</p>
                      <h3 className="mt-1 text-title font-semibold text-txt">{project.name}</h3>
                    </div>

                    <p className="text-body text-mut">{text.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="hud-chip">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto flex flex-wrap gap-6 pt-2">
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="link-chevron"
                        >
                          {project.demoLabelKey ? builds[project.demoLabelKey] : builds.demo} ›
                          <span className="sr-only"> — {project.name}</span>
                        </a>
                      )}
                      {project.codePrivate && (
                        <span className="text-body text-mut/70">{builds.codePrivate}</span>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-body text-mut no-underline hover:underline"
                        >
                          {ui.source} ›<span className="sr-only"> — {project.name}</span>
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              </Panel>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
};

export default Builds;
