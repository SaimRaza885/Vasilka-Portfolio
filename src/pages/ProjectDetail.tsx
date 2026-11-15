import type { Project } from "../data/projects";
import { projects } from "../data/projects";

function previousProject(slug: string) {
  const index = projects.findIndex(project => project.slug === slug);
  return projects[Math.max(0, index - 1)].slug;
}

function nextProject(slug: string) {
  const index = projects.findIndex(project => project.slug === slug);
  return projects[Math.min(projects.length - 1, index + 1)].slug;
}

export default function ProjectDetail({ project }: { project: Project }) {
  return (
    <div className="page-width content-page project-detail-page">
      <div className="breadcrumb-nav">
        <a href="/projects/" className="breadcrumb-back">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
          Back to all projects
        </a>
        <span className="breadcrumb-separator">/</span>
        <span className="breadcrumb-current">{project.title}</span>
      </div>

      <header className="project-detail-intro">
        <div className="project-detail-heading">
          <span className="badge-pill">
            Project {project.number} · {project.category}
          </span>
          <h1>{project.title}</h1>
          <p className="page-lead">{project.summary}</p>
        </div>
        <div className="project-detail-meta" aria-label="Project details">
          <span className="project-meta-label">Focus</span>
          <strong>{project.category}</strong>
          <span className="project-meta-label">Technologies</span>
          <strong>{project.technologies.slice(0, 3).join(" · ")}</strong>
        </div>
      </header>

      {/* Main visual graphic banner */}
      {project.image && (
        <div className="detail-media-banner">
          <img
            src={project.image}
            alt={`${project.title} technical architecture and user interface schematic`}
            width="800"
            height="480"
          />
        </div>
      )}

      {/* Structured Problem / Role / Outcome Grid */}
      {(project.problem || project.outcome || project.role) && (
        <section
          className="project-highlight-grid"
          aria-label="Project framing"
        >
          {project.problem && (
            <div className="highlight-card">
              <span className="card-badge">The Problem</span>
              <p>{project.problem}</p>
            </div>
          )}
          {project.role && (
            <div className="highlight-card">
              <span className="card-badge">Role &amp; Focus</span>
              <p>{project.role}</p>
            </div>
          )}
          {project.outcome && (
            <div className="highlight-card highlight-card--accent">
              <span className="card-badge">The Outcome</span>
              <p>{project.outcome}</p>
            </div>
          )}
        </section>
      )}

      {/* Overview Prose Section */}
      <section className="content-section prose project-detail-overview">
        <h2>In-Depth Overview</h2>
        <div className="project-detail-copy">
          <p>{project.overview}</p>
          {project.details.map((detail, idx) => (
            <p key={idx}>{detail}</p>
          ))}
        </div>
      </section>

      {/* Technologies & Tools */}
      <section className="content-section project-detail-stack">
        <h2>Technical Stack &amp; Concepts</h2>
        <ul className="tag-list tag-list--large" aria-label="Technologies used">
          {project.technologies.map(tech => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      </section>

      {project.statusNote && (
        <div className="project-status-box">
          <strong>Project Status:</strong> {project.statusNote}
        </div>
      )}

      <div className="detail-actions">
        {project.liveDemo && (
          <a
            className="action-button action-button--primary"
            href={project.liveDemo}
            target="_blank"
            rel="noreferrer"
          >
            Try Live Demo ↗
          </a>
        )}
        <a
          className="action-button action-button--secondary"
          href={project.repository}
          target="_blank"
          rel="noreferrer"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
          </svg>
          View Source Repository on GitHub ↗
        </a>
        <a className="action-button action-button--secondary" href="/projects/">
          Back to all projects
        </a>
      </div>

      <nav className="project-pager" aria-label="Other projects">
        {project.number !== "01" ? (
          <a
            className="text-link"
            href={`/projects/${previousProject(project.slug)}/`}
          >
            ← Previous Project
          </a>
        ) : (
          <div></div>
        )}
        {project.number !== "04" && (
          <a
            className="text-link"
            href={`/projects/${nextProject(project.slug)}/`}
          >
            Next Project →
          </a>
        )}
      </nav>
    </div>
  );
}
