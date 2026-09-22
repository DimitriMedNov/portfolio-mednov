import Shell from "@/components/hud/Shell";
import CaseStudy from "@/components/hud/CaseStudy";
import { useContent } from "@/content/state";

/** Página de detalle: no es una pestaña, así que trae su propio título. */
const CasoInventarioPage = () => {
  const caseStudy = useContent().caseStudies.inventario;
  return (
    <Shell
      path="/casos/inventario"
      seo={{ title: caseStudy.seoTitle, description: caseStudy.seoDescription }}
    >
      <CaseStudy slug="inventario" />
    </Shell>
  );
};

export default CasoInventarioPage;
