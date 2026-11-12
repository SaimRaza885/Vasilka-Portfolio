import { projects } from "../data/projects";
import { useInView } from "../hooks/useInView";

export default function Projects() {
  const featuredReveal = useInView<HTMLElement>();
  const featuredWorks = projects.filter(p => p.isFeatured !== false);
  const practiceWorks = projects.filter(p => p.isFeatured === false);

  return (
    <div className="page-width content-page">
      <header className="page-intro">
        <span className="badge-pill">Portfolio &amp; Engineering</span>
        <h1>
          Selected
          <br />
          <span className="text-gradient">Case Studies &amp; Code.</span>
        </h1>
        <p className="page-lead">
          Real problem-solving across applied machine learning, enterprise
          relational database design, and cloud system architecture.
        </p>
      </header>

      {/* Featured Projects with full graphic previews */}
      <section
        ref={featuredReveal.ref}
        className={`project-grid-detailed${featuredReveal.isVisible ? " is-visible" : ""}`}
        aria-label="Featured projects"
      >
        {featuredWorks.map(project => (
          <article className="project-card-full" key={project.slug}>
            <div className="project-card-visual">
              {project.image ? (
                <img
                  src={project.image}
                  alt={`${project.title} graphical interface and architecture preview`}
                  width="800"
                  height="480"
                  loading="lazy"
                />
              ) : (
                <div className="project-placeholder-visual">
                  <span className="project-number-huge">{project.number}</span>
                </div>
              )}
              <span className="project-category-badge">{project.category}</span>
            </div>

            <div className="project-card-info">
              <div className="project-info-header">
                <span className="project-num">{project.number}</span>
                <h2>
                  <a href={`/projects/${project.slug}/`}>{project.title}</a>
                </h2>
              </div>
              <p className="project-summary-text">{project.summary}</p>

              <div className="project-card-bottom">
                <ul
                  className="tag-list"
                  aria-label={`${project.title} technologies`}
                >
                  {project.technologies.map(technology => (
                    <li key={technology}>{technology}</li>
                  ))}
                </ul>

                <div className="project-card-actions">
                  <a
                    className="action-button action-button--primary"
                    href={`/projects/${project.slug}/`}
                  >
                    Read Case Study →
                  </a>
                  <a
                    className="action-button action-button--ghost"
                    href={project.repository}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub Code
                  </a>
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* Exploratory / Practice Section */}
      {practiceWorks.length > 0 && (
        <section
          className="practice-section"
          aria-label="Practice and learning repositories"
        >
          <div className="practice-header">
            <span className="badge-pill">Foundations &amp; Tooling</span>
            <h2>Exploratory Repositories</h2>
            <p className="practice-lead">
              Projects focused on mastering version control, branching
              strategies, and daily development workflows.
            </p>
          </div>
          <div className="project-list">
            {practiceWorks.map(project => (
              <article
                className="project-row project-row--subtle"
                key={project.slug}
              >
                <span className="project-number">{project.number}</span>
                <div className="project-row-copy">
                  <p className="project-category">{project.category}</p>
                  <h3>
                    <a href={`/projects/${project.slug}/`}>{project.title}</a>
                  </h3>
                  <p>{project.summary}</p>
                  <ul
                    className="tag-list"
                    aria-label={`${project.title} technologies`}
                  >
                    {project.technologies.map(technology => (
                      <li key={technology}>{technology}</li>
                    ))}
                  </ul>
                </div>
                <a
                  className="project-open-link"
                  href={`/projects/${project.slug}/`}
                >
                  View Notes →
                </a>
              </article>
            ))}
          </div>
        </section>
      )}

        <br/>
      <div className="page-end-link text-actions">
        <a
          className="action-button action-button--secondary"
          href="https://github.com/VasilkaVlaykova"
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
          Browse All GitHub Repositories
        </a>
        <a className="action-button action-button--primary" href="/contact/">
          Discuss a Project or Role
        </a>
      </div>
    </div>
  );
}
