
import { Suspense, lazy } from "react";
import { ThemeProvider } from "next-themes";
import Index from "./pages/Index";

// Code-splitting: estas rutas no se necesitan en la carga inicial de la home.
const About = lazy(() => import("./pages/About"));
const NotFound = lazy(() => import("./pages/NotFound"));

const App = () => {
  const pathname = window.location.pathname.replace(/\/+$/, "") || "/";
  const Page = pathname === "/" ? Index : pathname === "/about" ? About : NotFound;

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <Suspense fallback={<div className="min-h-screen bg-background" aria-busy="true" />}>
        <Page />
      </Suspense>
    </ThemeProvider>
  );
};

export default App;
