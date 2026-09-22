import Shell from "@/components/hud/Shell";
import CaseStudy from "@/components/hud/CaseStudy";
import { useContent } from "@/content/state";

/** Página de detalle: no es una pestaña, así que trae su propio título. */
const CasoHemerotecaPage = () => {
  const caseStudy = useContent().caseStudies.hemeroteca;
  return (
    <Shell
      path="/casos/hemeroteca"
      seo={{ title: caseStudy.seoTitle, description: caseStudy.seoDescription }}
    >
      <CaseStudy slug="hemeroteca" />
    </Shell>
  );
};

export default CasoHemerotecaPage;
