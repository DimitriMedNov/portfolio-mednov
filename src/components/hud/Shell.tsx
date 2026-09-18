import React, { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useApp } from "@/content/state";
import Seo from "@/components/Seo";

type Props = {
  /** Ruta de la vista actual; marca la pestaña activa. */
  path: string;
  children: React.ReactNode;
};

/**
 * Estructura de página: barra translúcida arriba, contenido centrado con
 * márgenes amplios, pie discreto. La barra es la única capa con cristal.
 */
const Shell = ({ path, children }: Props) => {
  const { content, theme, toggleTheme, toggleLang, lang } = useApp();
  const index = Math.max(
    content.sheets.findIndex((sheet) => sheet.path === path),
    0,
  );
  const sheet = content.sheets[index];
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
      <Seo title={sheet.seoTitle} description={sheet.seoDescription} path={sheet.path} />

      <header className="glass-bar sticky top-0 z-40" data-scrolled={scrolled}>
        <div className="mx-auto flex w-full max-w-[1600px] flex-wrap items-center gap-x-4 px-6 lg:flex-nowrap lg:gap-6 lg:px-12">
          <a href="/" className="hit order-1 min-h-[56px] shrink-0 text-lead font-semibold tracking-[-0.01em] text-txt no-underline hover:text-arc">
            MedNov
          </a>

          <nav
            aria-label={content.ui.navLabel}
            className="order-3 -mx-6 flex w-full items-center gap-1 overflow-x-auto px-6 pb-1 [scrollbar-width:none] lg:order-2 lg:mx-0 lg:w-auto lg:flex-1 lg:justify-center lg:overflow-visible lg:px-0 lg:pb-0"
          >
            {content.sheets.map((item) => {
              const active = item.path === sheet.path;
              return (
                <a
                  key={item.path}
                  href={item.path}
                  aria-current={active ? "page" : undefined}
                  className={`hit min-h-[56px] whitespace-nowrap px-4 text-meta no-underline transition-colors ${
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
          <span>© 2026 Jesus D&apos;mitri Medina Novelo · Mérida, Yucatán</span>
          <a href="mailto:mednov@outlook.es" className="text-arc no-underline hover:underline">
            mednov@outlook.es
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Shell;
