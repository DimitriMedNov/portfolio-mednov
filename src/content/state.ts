import { createContext, useContext } from "react";
import type { Content } from "@/content/types";

export type Lang = "en" | "es";
export type Theme = "dark" | "light";

export const LANG_KEY = "mednov.lang";
export const THEME_KEY = "mednov.theme";

/** Accent colours the canvas layers read, per theme. */
export const accents: Record<Theme, { arc: string; mag: string }> = {
  dark: { arc: "94, 234, 255", mag: "255, 77, 157" },
  light: { arc: "14, 116, 144", mag: "190, 24, 93" },
};

export type AppState = {
  content: Content;
  lang: Lang;
  theme: Theme;
  toggleLang: () => void;
  toggleTheme: () => void;
};

export const AppContext = createContext<AppState | null>(null);

export const useApp = (): AppState => {
  const value = useContext(AppContext);
  if (!value) throw new Error("useApp must be used inside <AppProvider>");
  return value;
};

/** Shortcut for components that only need the copy. */
export const useContent = (): Content => useApp().content;
