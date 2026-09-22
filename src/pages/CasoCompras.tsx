import Shell from "@/components/hud/Shell";
import CaseStudy from "@/components/hud/CaseStudy";
import { useContent } from "@/content/state";

/** Página de detalle: no es una pestaña, así que trae su propio título. */
const CasoComprasPage = () => {
  const { caseStudy } = useContent();
  return (
    <Shell
      path="/casos/compras"
      seo={{ title: caseStudy.seoTitle, description: caseStudy.seoDescription }}
    >
      <CaseStudy />
    </Shell>
  );
};

export default CasoComprasPage;
