import Shell from "@/components/hud/Shell";
import CaseStudy from "@/components/hud/CaseStudy";
import { useContent } from "@/content/state";

/** Página de detalle: no es una pestaña, así que trae su propio título. */
const CasoErpPage = () => {
  const caseStudy = useContent().caseStudies.erp;
  return (
    <Shell
      path="/casos/erp"
      seo={{ title: caseStudy.seoTitle, description: caseStudy.seoDescription }}
    >
      <CaseStudy slug="erp" />
    </Shell>
  );
};

export default CasoErpPage;
