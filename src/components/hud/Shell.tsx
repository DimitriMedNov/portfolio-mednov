import React, { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useApp } from "@/content/state";
import Seo from "@/components/Seo";

type Props = {
  /** Ruta de la vista actual; marca la pestaña activa. */
  path: string;
  /**
   * Para páginas que no son una pestaña, como un caso de estudio: llevan su
   * propio título sin aparecer en la navegación ni marcar otra pestaña activa.
   */
  seo?: { title: string; description: string };
  children: React.ReactNode;
};

/**
 * Estructura de página: barra translúcida arriba, contenido centrado con
 * márgenes amplios, pie discreto. La barra es la única capa con cristal.
 */
const Shell = ({ path, seo, children }: Props) => {
  const { content, theme, toggleTheme, toggleLang, lang } = useApp();
  const encontrada = content.sheets.find((sheet) => sheet.path === path);
  const sheet = encontrada ?? content.sheets[0];
  const [scrolled, setScrolled] = useState(false);

  // La barra solo gana su línea cuando hay contenido detrás.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <Seo
        title={seo?.title ?? sheet.seoTitle}
        description={seo?.description ?? sheet.seoDescription}
        path={path}
      />

      <header className="glass-bar sticky top-0 z-40" data-scrolled={scrolled}>
        <div className="mx-auto flex w-full max-w-[1600px] flex-wrap items-center gap-x-4 px-6 lg:flex-nowrap lg:gap-6 lg:px-12">
          <a href="/" className="hit order-1 min-h-[56px] shrink-0 text-lead font-semibold tracking-[-0.01em] text-txt no-underline hover:text-arc">
            MedNov
          </a>

          <nav
            aria-label={content.ui.navLabel}
            /* En móvil la barra sale a sangre para recuperar los márgenes y las
               cinco se reparten el ancho, así entra Contacto, que antes se
               quedaba fuera de la tira desplazable. El reparto va por ancho
               natural y no en columnas iguales: "CV" no necesita lo mismo que
               "Identidad", y a 320 px esa diferencia es la que hace que quepan. */
            className="order-3 -mx-6 flex w-[calc(100%+3rem)] items-stretch justify-between px-2 pb-1 lg:order-2 lg:mx-0 lg:w-auto lg:flex-1 lg:items-center lg:justify-center lg:gap-1 lg:px-0 lg:pb-0"
          >
            {content.sheets.map((item) => {
              // Una página de detalle no marca ninguna pestaña: no es ninguna.
              const active = encontrada !== undefined && item.path === sheet.path;
              return (
                <a
                  key={item.path}
                  href={item.path}
                  aria-current={active ? "page" : undefined}
                  className={`hit flex min-h-[56px] items-center justify-center whitespace-nowrap px-1 text-caption no-underline transition-colors lg:px-4 lg:text-meta ${
                    active ? "font-semibold text-txt" : "text-mut hover:text-txt"
                  }`}
                >
                  {item.tab}
                </a>
              );
            })}
          </nav>

          <div className="order-2 ml-auto flex shrink-0 items-center gap-2 lg:order-3">
            <button
              type="button"
              onClick={toggleLang}
              aria-label={content.ui.langSwitch}
              className="hit min-h-[44px] rounded-full px-4 text-label font-medium text-mut transition-colors hover:bg-panel2 hover:text-txt"
            >
              {lang === "en" ? "ES" : "EN"}
            </button>
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={theme === "dark" ? content.ui.themeToLight : content.ui.themeToDark}
              className="hit h-11 w-11 rounded-full text-mut transition-colors hover:bg-panel2 hover:text-txt"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Moon className="h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-[1600px] flex-1 px-6 py-12 lg:px-12 lg:py-20">
        <div className="flex flex-col gap-16 lg:gap-24">{children}</div>
      </main>

      <footer className="border-t border-line/60 bg-deep">
        <div className="mx-auto flex w-full max-w-[1600px] flex-wrap items-center justify-between gap-x-8 gap-y-2 px-6 py-8 text-caption text-mut lg:px-12">
          <span>© 2026 Jesus D&apos;mitri Medina Novelo</span>
          <a href="mailto:mednov@outlook.es" className="text-arc no-underline hover:underline">
            mednov@outlook.es
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Shell;
