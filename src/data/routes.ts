import { projects } from "./projects";
import { blogPosts } from "../pages/Journal";

export type SiteRoute = { path: string; title: string; description: string };

export const siteRoutes: SiteRoute[] = [
  {
    path: "/",
    title: "Vasilka Vlaykova | BSc Computing, Data & Systems Architecture",
    description:
      "Vasilka Vlaykova is a London-based BSc Computing graduate and data professional specializing in data analysis, machine learning, and scalable system architecture.",
  },
  ...blogPosts.map(post => ({
    path: `/journal/${post.slug}/`,
    title: `${post.title} | Vasilka Vlaykova`,
    description: post.summary,
  })),
  {
    path: "/about/",
    title: "About | Vasilka Vlaykova - BSc Computing & Data Professional",
    description:
      "Discover Vasilka Vlaykova's background in computing, data analysis, Regent College London project internship, and Women in STEM leadership.",
  },
  {
    path: "/projects/",
    title: "Projects & Architecture | Vasilka Vlaykova",
    description:
      "Explore selected engineering and machine learning projects by Vasilka Vlaykova, including ScamLens, Kompas MySQL architecture, and LIMA.",
  },
  ...projects.map(project => ({
    path: `/projects/${project.slug}/`,
    title: `${project.title} | Case Study by Vasilka Vlaykova`,
    description: project.summary,
  })),
  {
    path: "/journal/",
    title: "Blog | Vasilka Vlaykova",
    description:
      "Practical thoughts, project lessons, and ideas about data, AI, and software by Vasilka Vlaykova.",
  },
  {
    path: "/contact/",
    title: "Contact & Collaboration | Vasilka Vlaykova",
    description:
      "Connect with Vasilka Vlaykova for graduate roles, internships, or freelance data and systems architecture projects in London or remote.",
  },
];
