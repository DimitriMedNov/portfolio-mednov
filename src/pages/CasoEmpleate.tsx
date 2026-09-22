import Shell from "@/components/hud/Shell";
import CaseStudy from "@/components/hud/CaseStudy";
import { useContent } from "@/content/state";

/** Página de detalle: no es una pestaña, así que trae su propio título. */
const CasoEmpleatePage = () => {
  const caseStudy = useContent().caseStudies.empleate;
  return (
    <Shell
      path="/casos/empleate"
      seo={{ title: caseStudy.seoTitle, description: caseStudy.seoDescription }}
    >
      <CaseStudy slug="empleate" />
    </Shell>
  );
};

export default CasoEmpleatePage;
