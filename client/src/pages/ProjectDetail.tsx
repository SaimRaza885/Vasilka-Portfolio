import type { Project } from "../data/projects";

export default function ProjectDetail({ project }: { project: Project }) {
  return (
    <div className="page-width content-page project-detail-page">
      <p className="eyebrow">PROJECT {project.number} · {project.category.toUpperCase()}</p>
      <header className="page-intro project-detail-intro">
        <h1>{project.title}</h1>
        <p className="page-lead">{project.summary}</p>
      </header>
      <section className="content-section prose">
        <h2>Overview</h2>
        <p>{project.overview}</p>
        {project.details.map((detail) => <p key={detail}>{detail}</p>)}
      </section>
      <section className="content-section">
        <h2>Tools and topics</h2>
        <ul className="plain-list inline-list">{project.technologies.map((technology) => <li key={technology}>{technology}</li>)}</ul>
      </section>
      {project.statusNote && <p className="project-status">Project status: {project.statusNote}</p>}
      <div className="detail-actions">
        <a className="text-link text-link--primary" href={project.repository} target="_blank" rel="noreferrer">View the source repository</a>
        <a className="text-link" href="/projects/">Back to all projects</a>
      </div>
      <nav className="project-pager" aria-label="Other projects">
        {project.number !== "01" && <a className="text-link" href={`/projects/${previousProject(project.slug)}/`}>Previous project</a>}
        {project.number !== "04" && <a className="text-link" href={`/projects/${nextProject(project.slug)}/`}>Next project</a>}
      </nav>
    </div>
  );
}

import { projects } from "../data/projects";

function previousProject(slug: string) {
  const index = projects.findIndex((project) => project.slug === slug);
  return projects[Math.max(0, index - 1)].slug;
}

function nextProject(slug: string) {
  const index = projects.findIndex((project) => project.slug === slug);
  return projects[Math.min(projects.length - 1, index + 1)].slug;
}
