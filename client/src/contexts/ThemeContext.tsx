import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  switchable: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
interface ThemeProviderProps { children: React.ReactNode; defaultTheme?: Theme; switchable?: boolean }

function readDocumentTheme(defaultTheme: Theme): Theme {
  if (typeof document === "undefined") return defaultTheme;
  return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
}

export function ThemeProvider({ children, defaultTheme = "light", switchable = false }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(() => readDocumentTheme(defaultTheme));

  useEffect(() => {
    if (!switchable) return;
    let stored: string | null = null;
    try { stored = window.localStorage.getItem("theme"); } catch { /* Storage may be unavailable. */ }
    if (stored === "light" || stored === "dark") {
      setTheme(stored);
      return;
    }
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const syncWithSystem = () => {
      try {
        if (window.localStorage.getItem("theme") === null) setTheme(media.matches ? "dark" : "light");
      } catch { setTheme(media.matches ? "dark" : "light"); }
    };
    syncWithSystem();
    media.addEventListener("change", syncWithSystem);
    return () => media.removeEventListener("change", syncWithSystem);
  }, [switchable]);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", theme === "dark" ? "#171614" : "#ffffff");
  }, [theme]);

  const toggleTheme = () => {
    setTheme((previous) => {
      const next = previous === "light" ? "dark" : "light";
      if (switchable) {
        try { window.localStorage.setItem("theme", next); } catch { /* Keep the current choice for this visit. */ }
      }
      return next;
    });
  };

  return <ThemeContext.Provider value={{ theme, toggleTheme, switchable }}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within ThemeProvider");
  return context;
}
