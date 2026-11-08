import { projects } from "./projects";

export type SiteRoute = { path: string; title: string; description: string };

export const siteRoutes: SiteRoute[] = [
  { path: "/", title: "Vasilka Vlaykova | Computing, Data & AI", description: "Meet Vasilka Vlaykova, a London-based BSc Computing student exploring data science, artificial intelligence, and system design through projects." },
  { path: "/about/", title: "About | Vasilka Vlaykova", description: "Learn about Vasilka Vlaykova's Computing studies, interests in data science and AI, and growing technical toolkit." },
  { path: "/projects/", title: "Projects | Vasilka Vlaykova", description: "Explore Vasilka Vlaykova's project work in machine learning, database design, solution architecture, and Git practice." },
  ...projects.map((project) => ({
    path: `/projects/${project.slug}/`,
    title: `${project.title} | Projects by Vasilka Vlaykova`,
    description: project.summary,
  })),
  { path: "/journal/", title: "Learning Journal | Vasilka Vlaykova", description: "A space for notes and reflections on Computing, data, AI, and learning through projects by Vasilka Vlaykova." },
  { path: "/contact/", title: "Contact | Vasilka Vlaykova", description: "Find Vasilka Vlaykova on LinkedIn and GitHub to connect about technology, data, AI, and project collaboration." },
];
