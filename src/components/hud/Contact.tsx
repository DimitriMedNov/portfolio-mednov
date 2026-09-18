import { sileo } from "sileo";
import { useApp } from "@/content/state";
import { Label, Panel, Reveal, SectionTitle } from "@/components/hud/primitives";

/** Contacto: una frase, el correo grande y los canales con copia al portapapeles. */
const Contact = () => {
  const { content } = useApp();
  const { contact, ui } = content;

  const copy = async (label: string, value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      sileo.success({ title: `${label} ${ui.copied}`, description: value });
    } catch {
      sileo.error({ title: ui.copyFailed, description: ui.copyFailedHint });
    }
  };

  return (
    <section>
      <SectionTitle title={contact.title} note={contact.note} tone="pink" />

      <div className="mt-10 text-center">
        <p className="mx-auto max-w-[24ch] text-[clamp(2rem,5vw,3.25rem)] font-semibold leading-[1.08] tracking-[-0.02em] text-txt">
          {contact.headline} <span className="gradient-name">{contact.headlineAccent}</span>{" "}
          {contact.headlineTail}
        </p>
        <p className="mx-auto mt-5 max-w-[56ch] text-body text-mut">{contact.body}</p>

        <a href="mailto:mednov@outlook.es" className="btn-primary mt-8">
          mednov@outlook.es
        </a>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {contact.channels.map((channel, i) => (
          <Reveal key={channel.label} delay={i * 0.04} className="h-full">
            <Panel className="h-full">
              <div className="flex h-full flex-col gap-2 p-6 sm:p-7">
                <Label>{channel.label}</Label>
                <a
                  href={channel.href}
                  target={channel.href.startsWith("http") ? "_blank" : undefined}
                  rel={channel.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="text-title text-txt no-underline [overflow-wrap:anywhere] hover:text-arc"
                >
                  {channel.value}
                </a>
                {channel.copy && (
                  <button
                    type="button"
                    onClick={() => copy(channel.label, channel.copy as string)}
                    className="hit mt-auto self-start rounded-full bg-panel2 px-5 text-caption font-medium text-txt transition-opacity hover:opacity-80"
                  >
                    {ui.copy}
                  </button>
                )}
              </div>
            </Panel>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Contact;
