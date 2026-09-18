import React, { useCallback, useEffect, useMemo, useState } from "react";
import { en } from "@/content/en";
import { es } from "@/content/es";
import type { Content } from "@/content/types";
import { AppContext, LANG_KEY, THEME_KEY, type AppState, type Lang, type Theme } from "@/content/state";

const dictionaries: Record<Lang, Content> = { en, es };

const read = <T extends string>(key: string, allowed: readonly T[], fallback: T): T => {
  try {
    const stored = window.localStorage.getItem(key);
    if (stored && (allowed as readonly string[]).includes(stored)) return stored as T;
  } catch {
    // Private mode or blocked storage: fall through to the default.
  }
  return fallback;
};

const detectLang = (): Lang =>
  read(LANG_KEY, ["en", "es"] as const, navigator.language?.toLowerCase().startsWith("es") ? "es" : "en");

/**
 * El tema sigue la preferencia del sistema mientras nadie elija otra cosa
 * (dark-mode.md › Best practices: no imponer un ajuste propio de la app).
 */
const detectTheme = (): Theme =>
  read(THEME_KEY, ["dark", "light"] as const, window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");

const persist = (key: string, value: string) => {
  try {
    window.localStorage.setItem(key, value);
  } catch {
    // Ignore: the choice simply will not persist.
  }
};

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [lang, setLang] = useState<Lang>(detectLang);
  const [theme, setTheme] = useState<Theme>(detectTheme);

  useEffect(() => {
    document.documentElement.lang = lang;
    persist(LANG_KEY, lang);
  }, [lang]);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    persist(THEME_KEY, theme);
  }, [theme]);

  // Si el visitante no ha elegido tema, seguimos al sistema cuando cambie.
  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: light)");
    const onChange = (event: MediaQueryListEvent) => {
      try {
        if (window.localStorage.getItem(THEME_KEY)) return;
      } catch {
        // Sin almacenamiento tratamos la preferencia del sistema como la fuente.
      }
      setTheme(event.matches ? "light" : "dark");
    };
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  const toggleLang = useCallback(() => setLang((current) => (current === "en" ? "es" : "en")), []);
  const toggleTheme = useCallback(() => setTheme((current) => (current === "dark" ? "light" : "dark")), []);

  const value = useMemo<AppState>(
    () => ({ content: dictionaries[lang], lang, theme, toggleLang, toggleTheme }),
    [lang, theme, toggleLang, toggleTheme],
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppProvider;
