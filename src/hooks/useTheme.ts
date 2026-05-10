import { createContext, useContext, useEffect, useState } from "react";

// ─── Types ────────────────────────────────────────────────────
export type Theme     = "light" | "dark";
export type Direction = "ltr" | "rtl";
export type Language  = "en" | "ar";

export interface ThemeContextValue {
  theme:       Theme;
  language:    Language;
  direction:   Direction;
  toggleTheme: () => void;
  setLanguage: (lang: Language) => void;
}

// ─── Context ──────────────────────────────────────────────────
export const ThemeContext = createContext<ThemeContextValue | null>(null);

// ─── Hook ────────────────────────────────────────────────────
export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be called inside <ThemeProvider>");
  return ctx;
}

// ─── State factory (used inside ThemeProvider) ────────────────
export function useThemeState() {
  const [theme, setTheme]       = useState<Theme>("light");
  const [language, setLang]     = useState<Language>("en");

  const direction: Direction = language === "ar" ? "rtl" : "ltr";

  // Sync to DOM
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.setAttribute("dir",  direction);
    document.documentElement.setAttribute("lang", language);
  }, [direction, language]);

  const toggleTheme  = () => setTheme(t => t === "light" ? "dark" : "light");
  const setLanguage  = (lang: Language) => setLang(lang);

  return { theme, language, direction, toggleTheme, setLanguage };
}
