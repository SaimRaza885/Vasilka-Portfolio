import React, { createContext, useContext, useEffect, useState } from "react";

type RouterContextType = {
  currentPath: string;
  navigate: (to: string) => void;
};

const RouterContext = createContext<RouterContextType>({
  currentPath: "/",
  navigate: () => {},
});

export function useRouter() {
  return useContext(RouterContext);
}

function normalizePath(value: string) {
  if (!value || value === "/") return "/";
  const clean = value.split("?")[0].split("#")[0];
  const parts = clean.split("/").filter(Boolean);
  return `/${parts.join("/")}/`;
}

export function RouterProvider({ children }: { children: React.ReactNode }) {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window === "undefined") {
      const prerenderPath = (
        globalThis as typeof globalThis & { __PORTFOLIO_RENDER_PATH__?: string }
      ).__PORTFOLIO_RENDER_PATH__;
      return normalizePath(prerenderPath || "/");
    }
    return normalizePath(window.location.pathname);
  });

  useEffect(() => {
    function handlePopState() {
      setCurrentPath(normalizePath(window.location.pathname));
    }
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  function navigate(to: string) {
    if (typeof window === "undefined") return;
    const normalized = normalizePath(to);
    if (normalized === currentPath) return;

    window.history.pushState({}, "", normalized);
    setCurrentPath(normalized);
    window.scrollTo({ top: 0, behavior: "instant" });
  }

  // Intercept all internal anchor clicks globally to prevent full page reloads & blinks!
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const target = (e.target as HTMLElement).closest("a");
      if (!target) return;
      const href = target.getAttribute("href");
      if (
        !href ||
        href.startsWith("http") ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:") ||
        href.startsWith("#") ||
        href.endsWith(".pdf") ||
        target.hasAttribute("download") ||
        target.getAttribute("target") === "_blank" ||
        e.metaKey ||
        e.ctrlKey ||
        e.shiftKey ||
        e.altKey
      ) {
        return;
      }

      e.preventDefault();
      navigate(href);
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [currentPath]);

  return (
    <RouterContext.Provider value={{ currentPath, navigate }}>
      {children}
    </RouterContext.Provider>
  );
}
