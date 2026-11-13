import FAQSection from "../components/FAQSection";
import { useInView } from "../hooks/useInView";

const heroStats = [
  { value: "Jan 2023", label: "Started Degree" },
  { value: "3+ Years", label: "Project Internship" },
  { value: "10+ Focus Areas", label: "Across the Stack" },
];

const journey = [
  {
    overline: "Experience",
    title: "Project Intern · Software & VR Systems",
    org: "Regent College London",
    dates: "Jan 2023 — Present",
    tone: "current",
    desc: "Contributing to programming and interactive VR-based initiatives for modern educational environments — working across agile development cycles, requirements gathering, and rapid software prototyping.",
    tags: ["Python", "VR Education", "Software Prototyping", "Agile Workflow"],
  },
  {
    overline: "Advocacy & Leadership",
    title: "Women in STEM Advocate",
    org: "Regent College London",
    dates: "Active Involvement",
    tone: "active",
    desc: "Promoting diversity in computing through peer mentoring, community events, and encouraging women pursuing careers in software engineering, data science, and technology leadership.",
    tags: ["Peer Mentoring", "Diversity in Tech", "Tech Leadership"],
  },
  {
    overline: "Education",
    title: "BSc (Hons) Computing",
    org: "University of Greater Manchester",
    dates: "Jan 2023 — Oct 2026",
    tone: "default",
    desc: "Comprehensive study across computer science foundations, algorithms, mathematics for computing, database administration, software engineering, and system analysis and design.",
    tags: ["SQL & Databases", "Software Engineering", "Algorithms & Analysis"],
  },
];

const skillGroups = [
  {
    title: "Core Technologies",
    tools: [
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
      { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
      { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
      { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
    ],
  },
  {
    title: "Data Science & AI",
    tools: [
      { name: "Data Analysis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg" },
      { name: "Machine Learning", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg" },
      { name: "NLP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/huggingface/huggingface-original.svg" },
      { name: "Deep Learning", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg" },
      { name: "Streamlit", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/streamlit/streamlit-original.svg" },
      { name: "Statistical Modeling", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg" },
    ],
  },
  {
    title: "Design & Prototyping",
    tools: [
      { name: "System Design & Architecture", icon: "/system-architecture.svg" },
      { name: "Prototype Design", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
      { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
      { name: "UI/UX Design", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
    ],
  },
  {
    title: "Databases & Systems",
    tools: [
      { name: "Relational DB Modeling", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
      { name: "MySQL Admin", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
      { name: "Schema Design", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
      { name: "Query Optimization", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
    ],
  },
  {
    title: "Delivery & Methods",
    tools: [
      { name: "Cloud Architecture", icon: "/cloud-architecture.svg" },
      { name: "CISCO Networking", icon: "/cisco-networking.svg" },
      { name: "Git / GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
      { name: "Software Development Life Cycle", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg" },
      { name: "Agile Approach", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg" },
    ],
  },
];

export default function About() {
  const journeyReveal = useInView<HTMLOListElement>();
  const skillsReveal = useInView<HTMLUListElement>();

  return (
    <div className="about-shell">
      <div className="page-width content-page">
        {/* ── HERO ─────────────────────────────────────────── */}
        <header className="page-intro" aria-labelledby="about-title">
          <span className="badge-pill">About &amp; Technical Focus</span>

          <h1 id="about-title">
            Designing
            <br />
            <span className="text-gradient">Useful Technology.</span>
          </h1>

          <p className="page-lead">
            A computing graduate and data professional focused on building
            clear, practical solutions across data, AI, software, and systems
            architecture.
          </p>

          <div className="about-hero-actions">
            <a className="about-btn about-btn--primary" href="/contact/">
              Get in touch
              <svg
                width="15"
                height="15"
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
              className="about-btn about-btn--ghost"
              href="/Vasilka_Vlaykova_CV.pdf"
              download="Vasilka_Vlaykova_CV.pdf"
            >
              <svg
                width="15"
                height="15"
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
              Download CV (PDF)
            </a>
          </div>
        </header>


        {/* ── 01 · THE PERSON ─────────────────────────────── */}
        <section className="about-section about-person-section" aria-labelledby="about-person-title">
          <div className="about-section-head">
            <span className="about-index" aria-hidden="true">
              01
            </span>
            <div>
              <span className="about-kicker">Beyond the technical work</span>
              <h2 id="about-person-title" className="about-section-title">
                The Person Behind the Work
              </h2>
              <p className="about-section-sub">
                A little more about how I think, learn, and approach the work I do.
              </p>
            </div>
          </div>

          <div className="about-person-card">
            <div className="about-person-copy">
              <p className="about-person-lead">
                I am Vasilka, a curious and people-focused computing graduate
                who enjoys turning complex ideas into useful, understandable
                technology.
              </p>
              <p>
                My interests sit at the intersection of data, artificial
                intelligence, software engineering, and systems design. I enjoy
                asking thoughtful questions, learning through projects, and
                finding the practical story behind the technical details.
              </p>
              <p>
                Outside of building systems, I care about continuous learning,
                inclusive technology, and creating work that is clear enough to
                help people make confident decisions.
              </p>
            </div>
            <div className="about-person-values">
              <span className="about-kicker">How I work</span>
              <ul>
                <li>Curious before jumping to solutions</li>
                <li>Clear, thoughtful, and user-focused</li>
                <li>Always learning through practical work</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ── 02 · THE JOURNEY ─────────────────────────────── */}
        <section className="about-section" aria-labelledby="about-journey-title">
          <div className="about-section-head">
            <span className="about-index" aria-hidden="true">
              02
            </span>
            <div>
              <span className="about-kicker">Experience &amp; Education</span>
              <h2 id="about-journey-title" className="about-section-title">
                The Journey
              </h2>
              <p className="about-section-sub">
                A practical path through software engineering, advocacy, and
                formal computing education.
              </p>
            </div>
          </div>

          <ol
            ref={journeyReveal.ref}
            className={`about-timeline${journeyReveal.isVisible ? " is-visible" : ""}`}
            role="list"
          >
            {journey.map(item => (
              <li className="about-timeline-item" key={item.title}>
                <span className="about-timeline-dot" aria-hidden="true" />
                <div className="about-timeline-card">
                  <div className="about-timeline-head">
                    <div>
                      <span className="about-kicker">{item.overline}</span>
                      <h3 className="about-timeline-title">{item.title}</h3>
                      <p className="about-timeline-org">{item.org}</p>
                    </div>
                    <span
                      className={`about-timeline-badge${
                        item.tone !== "default"
                          ? ` about-timeline-badge--${item.tone}`
                          : ""
                      }`}
                    >
                      {item.tone === "active" && (
                        <span
                          className="about-timeline-badge-pulse"
                          aria-hidden="true"
                        />
                      )}
                      {item.dates}
                    </span>
                  </div>
                  <p className="about-timeline-desc">{item.desc}</p>
                  <ul className="about-tags" aria-label={`${item.title} tags`}>
                    {item.tags.map(tag => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* ── 03 · SKILLSET BENTO ──────────────────────────── */}
        <section className="about-section" aria-labelledby="about-skills-title">
          <div className="about-section-head">
            <span className="about-index" aria-hidden="true">
              03
            </span>
            <div>
              <span className="about-kicker">Skillset</span>
              <h2 id="about-skills-title" className="about-section-title">
                Technical Competencies
              </h2>
              <p className="about-section-sub">
                The technologies, design practices, and delivery methods I use
                to turn ideas into useful systems.
              </p>
            </div>
          </div>

          <ul
            ref={skillsReveal.ref}
            className={`about-bento${skillsReveal.isVisible ? " is-visible" : ""}`}
            role="list"
          >
            {skillGroups.map(group => (
              <li className="about-bento-card" key={group.title}>
                <h3 className="about-bento-title">{group.title}</h3>
                <ul className="about-bento-list">
                  {group.tools.map(tool => (
                    <li key={tool.name}>
                      <img src={tool.icon} alt="" loading="lazy" />
                      {tool.name}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </section>

        {/* ── AT A GLANCE ──────────────────────────────────── */}
        <div className="about-glance" aria-label="At a glance">
          <span className="about-kicker">At a glance</span>
          <ul className="about-stats">
            {heroStats.map(stat => (
              <li className="about-stat-card" key={stat.value}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* ── FAQ ──────────────────────────────────────────── */}
        <div className="about-faq-wrap">
          <FAQSection />
        </div>

        {/* ── PAGE END CTA ─────────────────────────────────── */}
        <div className="about-end text-actions">
          <a className="about-btn about-btn--primary" href="/contact/">
            Get in touch →
          </a>
          <a
            className="about-btn about-btn--ghost"
            href="/Vasilka_Vlaykova_CV.pdf"
            download="Vasilka_Vlaykova_CV.pdf"
          >
            Download CV (PDF)
          </a>
          <a
            className="about-btn about-btn--ghost"
            href="https://www.linkedin.com/in/vasilka-vlaykova-a0ba792b9/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn Profile
          </a>
        </div>
      </div>
    </div>
  );
}
