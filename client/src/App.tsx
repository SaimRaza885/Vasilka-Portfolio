import ErrorBoundary from "./components/ErrorBoundary";
import SiteLayout from "./components/SiteLayout";
import { ThemeProvider } from "./contexts/ThemeContext";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Journal from "./pages/Journal";
import NotFound from "./pages/NotFound";
import ProjectDetail from "./pages/ProjectDetail";
import Projects from "./pages/Projects";
import { projects } from "./data/projects";

function normalizePath(value: string) {
  if (value === "/") return "/";
  return `/${value.split("/").filter(Boolean).join("/")}/`;
}

export function resolvePath() {
  const prerenderPath = (globalThis as typeof globalThis & { __PORTFOLIO_RENDER_PATH__?: string }).__PORTFOLIO_RENDER_PATH__;
  const browserPath = typeof window === "undefined" ? "/" : window.location.pathname;
  return normalizePath(prerenderPath ?? browserPath);
}

export default function App() {
  const path = resolvePath();
  const project = projects.find((item) => path === `/projects/${item.slug}/`);

  let page: React.ReactNode;
  if (path === "/") page = <Home />;
  else if (path === "/about/") page = <About />;
  else if (path === "/projects/") page = <Projects />;
  else if (project) page = <ProjectDetail project={project} />;
  else if (path === "/journal/") page = <Journal />;
  else if (path === "/contact/") page = <Contact />;
  else page = <NotFound />;

  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light" switchable>
        <SiteLayout path={path}>{page}</SiteLayout>
      </ThemeProvider>
    </ErrorBoundary>
  );
}
