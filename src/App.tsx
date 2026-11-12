import ErrorBoundary from "./components/ErrorBoundary";
import SiteLayout from "./components/SiteLayout";
import { ThemeProvider } from "./contexts/ThemeContext";
import { RouterProvider, useRouter } from "./contexts/RouterContext";
import About from "./pages/About";
import BlogDetail from "./pages/BlogDetail";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Journal from "./pages/Journal";
import NotFound from "./pages/NotFound";
import ProjectDetail from "./pages/ProjectDetail";
import Projects from "./pages/Projects";
import { projects } from "./data/projects";
import { blogPosts } from "./pages/Journal";

function AppContent() {
  const { currentPath } = useRouter();
  const project = projects.find(
    item => currentPath === `/projects/${item.slug}/`
  );
  const blogPost = blogPosts.find(
    item => currentPath === `/journal/${item.slug}/`
  );

  let page: React.ReactNode;
  if (currentPath === "/") page = <Home />;
  else if (currentPath === "/about/") page = <About />;
  else if (currentPath === "/projects/") page = <Projects />;
  else if (project) page = <ProjectDetail project={project} />;
  else if (blogPost) page = <BlogDetail post={blogPost} />;
  else if (currentPath === "/journal/") page = <Journal />;
  else if (currentPath === "/contact/") page = <Contact />;
  else page = <NotFound />;

  return <SiteLayout path={currentPath}>{page}</SiteLayout>;
}

export default function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light" switchable>
        <RouterProvider>
          <AppContent />
        </RouterProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}
