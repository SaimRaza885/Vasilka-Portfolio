import { projects } from "../data/projects";
import FAQSection from "../components/FAQSection";
import ContactForm from "../components/ContactForm";
import { useInView } from "../hooks/useInView";

const proofMetrics = [
  {
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
    label: "Degree Focus",
    value: "BSc (Hons) Computing",
    detail: "Data science, database systems & algorithms",
  },
  {
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    label: "Core Stack",
    value: "Python · SQL · HTML · CSS",
    detail: "ML, NLP, DL, Figma, and modern architecture",
  },
  {
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
    label: "Experience",
    value: "Project Intern",
    detail: "Regent College London (VR & software systems)",
  },
  {
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    label: "Location & Status",
    value: "London, UK",
    detail: "Available for Graduate Roles & Freelance",
  },
];

const capabilities = [
  {
    title: "Data Analysis & Machine Learning",
    desc: "Extracting actionable insights from messy datasets, building machine-learning, NLP, and deep-learning models, and deploying intuitive interfaces.",
    tools: ["Python", "Pandas", "Machine Learning", "NLP", "Deep Learning"],
    accentIcon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
  {
    title: "Database Architecture & Systems",
    desc: "Designing resilient 3NF relational schemas, indexing high-velocity transactional data, and crafting robust SQL queries.",
    tools: ["MySQL", "SQL Queries", "Database Design", "System Design"],
    accentIcon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
  },
  {
    title: "Solution Architecture & Modern Web",
    desc: "Transforming functional specifications into scalable architecture, thoughtful prototypes, and accessible web experiences through an agile delivery approach.",
    tools: ["System Design & Architecture", "Prototype Design", "HTML", "CSS", "Figma", "Agile"],
    accentIcon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
];

export default function Home() {
  const projectReveal = useInView<HTMLDivElement>();
  const capabilityReveal = useInView<HTMLDivElement>();

  const selectedProjects = projects.filter(p => p.isFeatured !== false);

  return (
    <div className="home-container">
      {/* 1. HERO SECTION */}
      <section className="hero-section" aria-labelledby="hero-title">
        <div className="page-width hero-grid">
          <div className="hero-content">
            <h1 id="hero-title" className="hero-heading">
              Data, Systems &amp;
              <br />
              <span className="text-gradient">Engineered Clarity.</span>
            </h1>

            <p className="hero-lead">
              I’m <strong>Vasilka Vlaykova</strong> — a BSc Computing graduate
              and data professional based in London. I engineer data pipelines,
              machine learning classifiers, and scalable relational systems.
            </p>

            <div className="hero-actions">
              <a
                className="action-button action-button--primary"
                href="/projects/"
              >
                Explore Projects
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>

              <a
                className="action-button action-button--secondary"
                href="/Vasilka_Vlaykova_CV.pdf"
                download="Vasilka_Vlaykova_CV.pdf"
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
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download CV
              </a>
            </div>
          </div>

          <div className="hero-visual-wrapper">
            <div className="hero-card-stack">
              <figure className="portrait-showcase">
                <div className="portrait-image-container">
                  <img
                    src="/vasilka-profile.jpg"
                    alt="Vasilka Vlaykova - BSc Computing and Data Professional in London."
                    width="600"
                    height="750"
                    fetchPriority="high"
                    decoding="async"
                  />
                  {/* <div className="portrait-overlay-badge">
                    <div className="badge-avatar">VV</div>
                    <div className="badge-text">
                      <strong>Vasilka Vlaykova</strong>
                      <span>Data, AI &amp; Software Systems</span>
                    </div>
                  </div> */}
                </div>
                {/* <figcaption>
                  Professional Workspace · London, England, UK
                </figcaption> */}
              </figure>

              {/* <div className="floating-metric-card" aria-hidden="true">
                <div className="metric-icon-bubble">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#b83528"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12.01" y2="16" />
                  </svg>
                </div>
                <div>
                  <div className="floating-metric-title">
                    Threat Detection NLP
                  </div>
                  <div className="floating-metric-sub">
                    98.4% detection prototype
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* 2. PROOF STRIP
      <section className="proof-strip-section" aria-label="Core credentials">
        <div className="page-width">
          <div className="proof-cards-grid">
            {proofMetrics.map((item, idx) => (
              <div className="proof-card" key={idx}>
                <div className="proof-card-icon">{item.icon}</div>
                <div className="proof-card-body">
                  <span className="proof-label">{item.label}</span>
                  <strong className="proof-value">{item.value}</strong>
                  <span className="proof-detail">{item.detail}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* 3. ABOUT */}
      <section className="home-about-section" aria-labelledby="home-about-title">
        <div className="page-width home-about-grid">
          <div>
            <span className="badge-pill">About Vasilka</span>
            <h2 id="home-about-title" className="section-title">
              Turning data and ideas into useful systems.
            </h2>
          </div>
          <div className="home-about-copy">
            <p>
              Vasilka Vlaykova is a London-based Computing professional with a
              practical interest in data analysis, programming, system design,
              and modern application development.
            </p>
            <p>
              Her work combines analytical thinking with hands-on experience
              across Python, SQL, HTML, CSS, machine learning, NLP, deep
              learning, databases, prototypes, and scalable system concepts.
            </p>
            <div className="text-actions">
              <a className="action-button action-button--primary" href="/about/">Read more about Vasilka →</a>
              <a className="action-button action-button--secondary" href="/contact/">Get in touch</a>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SELECTED WORK */}
      <section
        className="showcase-section"
        aria-labelledby="more-projects-title"
      >
        <div className="page-width">
          <div className="section-header-centered">
            <span className="badge-pill">Systems &amp; Architecture</span>
            <h2 id="more-projects-title" className="section-title">
              Selected Projects
            </h2>
            <p className="section-subtitle">
              Relational data modeling, scalable query design, and multimodal
              system architectures.
            </p>
          </div>

          <div
            ref={projectReveal.ref}
            className={`projects-grid-2col${projectReveal.isVisible ? " is-visible" : ""}`}
          >
            {selectedProjects.map(project => (
              <article className="project-preview-card" key={project.slug}>
                <div className="project-preview-media">
                  <img
                    src={project.image || "/project-kompas.svg"}
                    alt={`${project.title} architectural visualization`}
                    width="800"
                    height="480"
                    loading="lazy"
                  />
                  <span className="project-tag-floating">
                    {project.category}
                  </span>
                  {project.slug === "scamlens" && (
                    <span className="project-best-tag">Best project</span>
                  )}
                </div>
                <div className="project-preview-content">
                  <div className="project-preview-header">
                    <span className="project-number-chip">
                      {project.number}
                    </span>
                    <h3>{project.title}</h3>
                  </div>
                  <p className="project-preview-summary">{project.summary}</p>

                  <div className="project-preview-footer">
                    <ul
                      className="tag-list"
                      aria-label={`${project.title} technologies`}
                    >
                      {project.technologies.slice(0, 3).map(tech => (
                        <li key={tech}>{tech}</li>
                      ))}
                    </ul>
                    <a
                      className="text-link text-link--primary"
                      href={`/projects/${project.slug}/`}
                    >
                      Case Study →
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CORE CAPABILITIES */}
      <section
        className="capabilities-section"
        aria-labelledby="capabilities-title"
      >
        <div className="page-width">
          <div className="section-header-centered">
            <span className="badge-pill">Technical Skills</span>
            <h2 id="capabilities-title" className="section-title">
              Core Capabilities
            </h2>
            <p className="section-subtitle">
              Analytical problem-solving, structured database modeling, and
              modern software engineering.
            </p>
          </div>

          <div
            ref={capabilityReveal.ref}
            className={`capabilities-grid${capabilityReveal.isVisible ? " is-visible" : ""}`}
          >
            {capabilities.map((cap, i) => (
              <div className="capability-card" key={i}>
                <div className="capability-icon-wrap">{cap.accentIcon}</div>
                <h3>{cap.title}</h3>
                <p>{cap.desc}</p>
                <div className="capability-footer">
                  <ul className="tag-list" aria-label={`${cap.title} tools`}>
                    {cap.tools.map(t => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FAQ SECTION */}
      <div className="page-width">
        <FAQSection />
      </div>

      {/* 7. CONTACT & COLLABORATION FORM SECTION */}
      <section
        className="home-contact-section"
        aria-labelledby="home-contact-title"
      >
        <div className="page-width">
          <div className="contact-section-split">
            <div className="contact-lead-side">
              <span className="badge-pill">Let's Connect</span>
              <h2 id="home-contact-title" className="section-title">
                Ready to Discuss a Role or Project?
              </h2>
              <p className="contact-lead-desc">
                Whether you’re seeking a driven graduate software engineer, data
                analyst, or looking to collaborate on a system architecture
                project, I’d love to speak with you.
              </p>

              <div className="contact-social-links" aria-label="Social links">
                <a
                  className="contact-social-link"
                  href="mailto:vasilkavlaykova@yahoo.com"
                  aria-label="Send an email"
                  title="Send an email"
                >
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </a>
                <a
                  className="contact-social-link"
                  href="https://www.linkedin.com/in/vasilka-vlaykova-a0ba792b9/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Open LinkedIn profile"
                  title="LinkedIn"
                >
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M6.5 8.5H3V21h3.5V8.5ZM4.75 3A2.05 2.05 0 1 0 4.75 7.1 2.05 2.05 0 0 0 4.75 3ZM21 13.85c0-3.77-2-5.52-4.67-5.52-2.15 0-3.11 1.18-3.65 2.01V8.5H9.18V21h3.5v-6.19c0-1.63.31-3.2 2.33-3.2 1.99 0 2.02 1.86 2.02 3.31V21H21v-7.15Z" />
                  </svg>
                </a>
                <a
                  className="contact-social-link"
                  href="https://github.com/VasilkaVlaykova"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Open GitHub profile"
                  title="GitHub"
                >
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M12 2.5a9.5 9.5 0 0 0-3 18.51c.48.09.65-.2.65-.46v-1.63c-2.65.58-3.21-1.13-3.21-1.13-.44-1.1-1.06-1.39-1.06-1.39-.87-.59.07-.58.07-.58.96.07 1.47.99 1.47.99.86 1.47 2.26 1.05 2.81.8.09-.62.34-1.05.61-1.29-2.12-.24-4.35-1.06-4.35-4.71 0-1.04.37-1.89.99-2.56-.1-.24-.43-1.21.09-2.52 0 0 .81-.26 2.63.98A9.2 9.2 0 0 1 12 7.2c.82 0 1.65.11 2.42.33 1.82-1.24 2.63-.98 2.63-.98.52 1.31.19 2.28.09 2.52.62.67.99 1.52.99 2.56 0 3.66-2.23 4.47-4.36 4.71.35.3.65.88.65 1.78v2.64c0 .26.17.56.66.46A9.5 9.5 0 0 0 12 2.5Z" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="contact-form-side">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
