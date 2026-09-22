import Shell from "@/components/hud/Shell";
import CaseStudy from "@/components/hud/CaseStudy";
import { useContent } from "@/content/state";

/** Página de detalle: no es una pestaña, así que trae su propio título. */
const CasoCrmPage = () => {
  const caseStudy = useContent().caseStudies.crm;
  return (
    <Shell
      path="/casos/crm"
      seo={{ title: caseStudy.seoTitle, description: caseStudy.seoDescription }}
    >
      <CaseStudy slug="crm" />
    </Shell>
  );
};

export default CasoCrmPage;
