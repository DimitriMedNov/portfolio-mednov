import Shell from "@/components/hud/Shell";
import { useContent } from "@/content/state";
import { Panel, SectionTitle } from "@/components/hud/primitives";

const NotFound = () => {
  const { notFound } = useContent();

  return (
    <Shell path="/">
      <Panel>
        <SectionTitle title={notFound.title} note={notFound.note} />
        <div className="px-6 py-10 sm:px-10 sm:py-14">
          <h1 className="text-[clamp(3.5rem,14vw,7.5rem)] font-bold leading-none tracking-tight text-arc glow-arc">
            404
          </h1>
          <p className="hud-body mt-6 max-w-[52ch]">{notFound.body}</p>
          <a
            href="/"
            className="glow-line mt-8 inline-block border border-arc/70 bg-arc/10 px-6 py-4 text-caption text-arc no-underline hover:bg-arc/20"
          >
            {notFound.cta}
          </a>
        </div>
      </Panel>
    </Shell>
  );
};

export default NotFound;
