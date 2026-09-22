import Shell from "@/components/hud/Shell";
import CaseStudy from "@/components/hud/CaseStudy";
import { useContent } from "@/content/state";

/** Página de detalle: no es una pestaña, así que trae su propio título. */
const CasoSaasPage = () => {
  const caseStudy = useContent().caseStudies.saas;
  return (
    <Shell
      path="/casos/saas"
      seo={{ title: caseStudy.seoTitle, description: caseStudy.seoDescription }}
    >
      <CaseStudy slug="saas" />
    </Shell>
  );
};

export default CasoSaasPage;
