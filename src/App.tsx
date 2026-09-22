import { ComponentType, Suspense, lazy } from "react";
import { Toaster } from "sileo";
import { AppProvider } from "@/content/AppProvider";
import "sileo/styles.css";
import Index from "./pages/Index";

// Code-splitting: these views are not needed for the first paint of the home view.
const Systems = lazy(() => import("./pages/Systems"));
const Projects = lazy(() => import("./pages/Projects"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const CasoCompras = lazy(() => import("./pages/CasoCompras"));
const CasoCrm = lazy(() => import("./pages/CasoCrm"));
const NotFound = lazy(() => import("./pages/NotFound"));

const routes: Record<string, ComponentType> = {
  "/": Index,
  "/systems": Systems,
  "/projects": Projects,
  "/about": About,
  "/contact": Contact,
  // Páginas de detalle: viven fuera de la navegación principal.
  "/casos/compras": CasoCompras,
  "/casos/crm": CasoCrm,
};

const App = () => {
  const pathname = window.location.pathname.replace(/\/+$/, "") || "/";
  const Page = routes[pathname] ?? NotFound;

  return (
    <AppProvider>
      <Toaster position="bottom-right" />
      <Suspense fallback={<div className="min-h-screen bg-void" aria-busy="true" />}>
        <Page />
      </Suspense>
    </AppProvider>
  );
};

export default App;
