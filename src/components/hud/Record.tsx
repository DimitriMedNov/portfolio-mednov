import { useContent } from "@/content/state";
import { Label, Panel, Reveal, SectionTitle } from "@/components/hud/primitives";

/** Currículum: resumen, experiencia con viñetas, formación y habilidades. */
const Record = () => {
  const { resume, skills } = useContent();
  const { education } = resume;

  return (
    <>
      <section>
        <SectionTitle title={resume.title} note={resume.note} tone="green" />

        <Panel className="mt-10">
          <div className="p-6 sm:p-10">
            <h3 className="text-headline font-semibold text-txt">Jesus D&apos;mitri Medina Novelo</h3>
            <p className="mt-1 text-title text-mut">AI Software Engineer &amp; Full Stack Developer</p>
            <p className="mt-5 max-w-[72ch] text-body text-mut">{resume.summary}</p>
            <p className="mt-5 text-meta text-mut">
              <a href="mailto:mednov@outlook.es" className="text-arc no-underline hover:underline">
                mednov@outlook.es
              </a>{" "}
              ·{" "}
              <a href="tel:+529993590366" className="text-arc no-underline hover:underline">
                +52 999 359 0366
              </a>{" "}
              ·{" "}
              <a
                href="https://www.linkedin.com/in/dimitrimednoov"
                target="_blank"
                rel="noopener noreferrer"
                className="text-arc no-underline hover:underline"
              >
                linkedin.com/in/dimitrimednoov
              </a>
            </p>
          </div>
        </Panel>

        <div className="mt-12">
          <Label>{resume.experienceLabel}</Label>
          <div className="mt-8 flex flex-col gap-12">
            {resume.roles.map((role, i) => (
              <Reveal key={role.id} delay={i * 0.04}>
                <article className="grid grid-cols-1 gap-x-10 gap-y-3 border-t border-line/70 pt-6 lg:grid-cols-[200px_1fr]">
                  <div>
                    <div className="text-meta font-medium text-txt">{role.dates}</div>
                    {role.location && <div className="mt-1 text-caption text-mut">{role.location}</div>}
                  </div>

                  <div>
                    <h4 className="text-title font-semibold text-txt">{role.role}</h4>
                    <p className="mt-1 text-body text-mut">{role.company}</p>

                    {role.concurrent && (
                      <p className="mt-3 inline-block rounded-full bg-green/10 px-3 py-1 text-caption font-medium text-green">
                        {role.concurrent}
                      </p>
                    )}

                    {role.bullets.length > 0 && (
                      <ul className="mt-4 flex list-disc flex-col gap-2 pl-5 text-body text-mut marker:text-line">
                        {role.bullets.map((bullet) => (
                          <li key={bullet}>{bullet}</li>
                        ))}
                      </ul>
                    )}

                    {role.tech.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {role.tech.map((tech) => (
                          <span key={tech} className="hud-chip">
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}

                    {role.projects && (
                      <div className="mt-7 flex flex-col gap-7">
                        {role.projects.map((project, p) => (
                          <div key={project.name} className="rounded-[14px] bg-deep p-6">
                            <h5 className={`text-body font-semibold ${p === 0 ? "text-green" : "text-txt"}`}>
                              {project.name}
                            </h5>
                            {project.meta && <p className="mt-1 text-caption text-mut">{project.meta}</p>}
                            <ul className="mt-3 flex list-disc flex-col gap-2 pl-5 text-body text-mut marker:text-line">
                              {project.bullets.map((bullet) => (
                                <li key={bullet}>{bullet}</li>
                              ))}
                            </ul>
                            <div className="mt-4 flex flex-wrap gap-2">
                              {project.tech.map((tech) => (
                                <span key={tech} className="hud-chip">
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <Label>{resume.educationLabel}</Label>
          <div className="mt-6 grid grid-cols-1 gap-x-10 gap-y-3 border-t border-line/70 pt-6 lg:grid-cols-[200px_1fr]">
            <div>
              <div className="text-meta font-medium text-txt">{education.dates}</div>
              {education.location && <div className="mt-1 text-caption text-mut">{education.location}</div>}
            </div>
            <div>
              <h4 className="text-title font-semibold text-txt">{education.degree}</h4>
              <p className="mt-1 text-body text-mut">{education.school}</p>
              <p className="mt-3 text-meta text-mut">
                {resume.courseworkLabel}: {education.coursework.join(" · ")}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <SectionTitle title={skills.title} note={skills.note} tone="orange" />

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-[1.4fr_1fr]">
          <Panel>
            <div className="flex flex-col gap-6 p-6 sm:p-9">
              {skills.groups.map((group, i) => (
                <Reveal key={group.cat} delay={i * 0.03}>
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-[160px_1fr] sm:items-start">
                    <Label>{group.cat}</Label>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <span key={item} className="hud-chip">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </Panel>

          <Panel>
            <div className="flex flex-col gap-8 p-6 sm:p-9">
              <div>
                <Label>{skills.certificationsLabel}</Label>
                <div className="mt-4 flex flex-col gap-4">
                  {skills.certifications.map((cert) => (
                    <div key={cert.no} className="border-t border-line/70 pt-3">
                      <div className="text-meta text-txt">{cert.name}</div>
                      <div className="mt-1 text-caption text-mut">
                        {cert.issuer ? `${cert.issuer} · ` : ""}
                        {cert.year}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <Label>{skills.coursesLabel}</Label>
                <div className="mt-4 flex flex-wrap gap-2">
                  {skills.courses.map((course) => (
                    <span key={course} className="hud-chip">
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Panel>
        </div>
      </section>
    </>
  );
};

export default Record;
