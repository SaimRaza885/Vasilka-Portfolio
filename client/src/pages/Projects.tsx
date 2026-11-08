import { projects } from "../data/projects";

export default function Projects() {
  return (
    <div className="page-width content-page">
      <header className="page-intro">
        <p className="eyebrow">PROJECTS</p>
        <h1>Selected<br /><em>work.</em></h1>
        <p className="page-lead">Projects, experiments, and learning work across data, software, and system design.</p>
      </header>
      <section className="project-list" aria-label="Project list">
        {projects.map((project) => (
          <article className="project-row" key={project.slug}>
            <span className="project-number">{project.number}</span>
            <div className="project-row-copy">
              <p className="project-category">{project.category}</p>
              <h2><a href={`/projects/${project.slug}/`}>{project.title}</a></h2>
              <p>{project.summary}</p>
              <ul className="tag-list" aria-label={`${project.title} technologies`}>
                {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
              </ul>
            </div>
            <a className="project-open-link" href={`/projects/${project.slug}/`}>Read overview</a>
          </article>
        ))}
      </section>
      <p className="page-end-link"><a className="text-link" href="https://github.com/VasilkaVlaykova" target="_blank" rel="noreferrer">Browse my GitHub profile</a></p>
    </div>
  );
}
