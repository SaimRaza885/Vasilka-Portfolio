import { useEffect, useState } from "react";
import { ArrowDown, ArrowUpRight, Github, Linkedin, Menu, X } from "lucide-react";

const navigation = [
  { label: "Portfolio", href: "#portfolio", id: "portfolio" },
  { label: "About me", href: "#about", id: "about" },
  { label: "Skills", href: "#skills", id: "skills" },
  { label: "My projects", href: "#work", id: "work" },
  { label: "Contact me", href: "#contact", id: "contact" },
];

const socials = {
  linkedin: "https://www.linkedin.com/in/vasilka-vlaykova-a0ba792b9/",
  github: "https://github.com/VasilkaVlaykova",
};

function SocialLinks({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`social-links${compact ? " social-links--compact" : ""}`}>
      <a href={socials.linkedin} target="_blank" rel="noreferrer" aria-label="Vasilka on LinkedIn">
        <Linkedin aria-hidden="true" />
        {!compact && <span>LinkedIn</span>}
      </a>
      <a href={socials.github} target="_blank" rel="noreferrer" aria-label="Vasilka on GitHub">
        <Github aria-hidden="true" />
        {!compact && <span>GitHub</span>}
      </a>
    </div>
  );
}

function GeometricLines() {
  return (
    <svg className="geometry" viewBox="0 0 420 410" fill="none" aria-hidden="true">
      <g stroke="currentColor" strokeWidth="1">
        <path d="M12 79 78 14l78 35 19 81-71 43-67-24L12 79Z" />
        <path d="m156 49 61-42 67 29 12 73-51 41-70-20" />
        <path d="m175 130 35 77 79 9 37-59-30-78" />
        <path d="m284 36 70-20 45 66-33 69-70 18" />
        <path d="m79 173-10 81 65 37 76-24" />
        <path d="m210 207 16 91 68 31 57-52-24-61" />
        <path d="m366 151 42 66-34 60-62 0" />
        <path d="m134 291 24 78 83 25 53-65" />
        <path d="m294 329 13 69 74-20 27-66" />
      </g>
      <g fill="currentColor">
        <circle cx="78" cy="14" r="2.5" /><circle cx="175" cy="130" r="2.5" />
        <circle cx="284" cy="36" r="2.5" /><circle cx="210" cy="207" r="2.5" />
        <circle cx="366" cy="151" r="2.5" /><circle cx="134" cy="291" r="2.5" />
        <circle cx="307" cy="398" r="2.5" />
      </g>
      <path d="m354 16 45 66-33 69-70 18-12-73 70-80Z" stroke="var(--red)" strokeWidth="1.15" />
    </svg>
  );
}

function PortraitPlaceholder() {
  return (
    <figure className="portrait-figure" aria-label="Abstract portrait placeholder; no photograph has been supplied">
      <div className="portrait-backdrop" />
      <span className="portrait-watermark" aria-hidden="true">VV</span>
      <svg className="portrait-shape" viewBox="0 0 430 590" role="img" aria-labelledby="portrait-title portrait-description">
        <title id="portrait-title">Portrait placeholder</title>
        <desc id="portrait-description">An abstract, faceless silhouette reserved for Vasilka's portrait when she chooses to add one.</desc>
        <path d="M66 568c9-83 28-128 80-156 23-13 39-22 43-40l2-28c-31-22-50-58-50-105V205c0-82 37-127 86-127s87 45 87 127v34c0 47-19 83-51 105l3 28c4 18 20 27 43 40 51 28 70 73 79 156H66Z" fill="#151311" />
        <path d="M140 234c15-81 31-136 87-157 57 22 76 76 90 157" fill="none" stroke="#d52f20" strokeWidth="2" />
        <path d="M106 519c44-37 77-52 122-52s78 15 122 52" fill="none" stroke="#ffe5e3" strokeWidth="1.5" opacity=".62" />
        <path d="m203 374 24 30 24-30" fill="none" stroke="#ffe5e3" strokeWidth="1.5" opacity=".72" />
      </svg>
      <figcaption className="portrait-caption">
        <span className="caption-rule" />
        <span>Portrait to be added</span>
        <span className="caption-index">01 / 01</span>
      </figcaption>
      <span className="portrait-side-note" aria-hidden="true">A SPACE FOR A PORTRAIT</span>
    </figure>
  );
}

function ProjectArtwork({ kind }: { kind: string }) {
  if (kind === "scamlens") {
    return (
      <div className="project-art project-art--scam" role="img" aria-label="Abstract illustrative visual study for ScamLens; not a product screenshot">
        <div className="art-topline"><span>VISUAL STUDY / 01</span><span>SCAMLENS</span></div>
        <div className="lens-orbit lens-orbit--one" /><div className="lens-orbit lens-orbit--two" />
        <div className="lens-core"><span>SL</span></div>
        <div className="lens-label lens-label--sms">SMS <i /></div>
        <div className="lens-label lens-label--mail">MAIL <i /></div>
        <div className="lens-label lens-label--url">URL <i /></div>
        <span className="art-side-copy">SIGNALS / PATTERNS / TRUST</span>
        <div className="art-bottomline"><span>ILLUSTRATIVE PREVIEW</span><span>PYTHON · ML</span></div>
      </div>
    );
  }

  if (kind === "kompas") {
    return (
      <div className="project-art project-art--kompas" role="img" aria-label="Abstract illustrative visual study about books and databases; not a project screenshot">
        <div className="art-topline"><span>VISUAL STUDY / 02</span><span>KOMPAS</span></div>
        <div className="book-stack">
          <div className="book book--back"><span>DATABASE DESIGN</span><i /></div>
          <div className="book book--middle"><span>ONLINE BOOK STORE</span><i /></div>
          <div className="book book--front"><span>KOMPAS</span><i /></div>
        </div>
        <div className="book-index"><span>01</span><span>02</span><span>03</span></div>
        <div className="art-bottomline"><span>ILLUSTRATIVE PREVIEW</span><span>MYSQL · SQL</span></div>
      </div>
    );
  }

  if (kind === "lima") {
    return (
      <div className="project-art project-art--lima" role="img" aria-label="Abstract illustrative library visual study; not a project screenshot">
        <div className="art-topline"><span>VISUAL STUDY / 03</span><span>LIMA</span></div>
        <svg className="library-drawing" viewBox="0 0 520 300" fill="none" aria-hidden="true">
          <path d="M90 232h340M110 230V93h300v137M93 93h334M110 128h300M110 164h300M110 199h300" stroke="currentColor" strokeWidth="1.4" />
          <path d="M129 94V66h36v27m18 0V53h43v40m19 0V72h35v21m16 0V58h42v35m18 0V69h42v24" stroke="currentColor" strokeWidth="3" />
          <path d="M139 128v35m16-35v35m47-35v35m17-35v35m48-35v35m20-35v35m41-35v35m20-35v35m-201 36v31m46-31v31m18-31v31m54-31v31m19-31v31m43-31v31m17-31v31" stroke="var(--red)" strokeWidth="4" />
          <circle cx="260" cy="36" r="8" stroke="var(--red)" />
          <path d="M260 28V10m-8 26-15 8m31-8 15 8" stroke="var(--red)" />
        </svg>
        <div className="lima-caption">Library<br />Intelligence<br />Management<br />Assistant</div>
        <div className="art-bottomline"><span>ILLUSTRATIVE PREVIEW</span><span>LIBRARY / SYSTEMS</span></div>
      </div>
    );
  }

  return (
    <div className="project-art project-art--git" role="img" aria-label="Abstract illustrative study of version-control notes; not a repository screenshot">
      <div className="art-topline"><span>VISUAL STUDY / 04</span><span>GIT LEARNING</span></div>
      <div className="git-paper">
        <span className="git-margin">FIELD NOTES<br />V. 001</span>
        <div className="git-lines"><span><b>01</b> git init</span><span><b>02</b> git status</span><span><b>03</b> git add .</span><span><b>04</b> git commit</span></div>
        <span className="git-stamp">A PRACTICE<br />IN PROGRESS</span>
      </div>
      <div className="art-bottomline"><span>ILLUSTRATIVE PREVIEW</span><span>GIT · GITHUB</span></div>
    </div>
  );
}

const projects = [
  {
    number: "01",
    title: "ScamLens",
    description: "A Streamlit-based application for detecting suspicious SMS messages, phishing emails, and malicious URLs.",
    technologies: ["Python", "Machine Learning", "Streamlit"],
    kind: "scamlens",
    className: "project--wide",
  },
  {
    number: "02",
    title: "Online Book Store — Kompas",
    description: "An online bookstore database design and implementation project.",
    technologies: ["MySQL", "SQL", "Database Design"],
    kind: "kompas",
    className: "project--narrow",
  },
  {
    number: "03",
    title: "LIMA",
    description: "Library Intelligence Management Assistant.",
    technologies: [],
    kind: "lima",
    className: "project--narrow",
  },
  {
    number: "04",
    title: "Git Learning",
    description: "A personal repository documenting Git and GitHub learning, commands, and workflow practice.",
    technologies: ["Git", "GitHub"],
    kind: "git",
    className: "project--wide",
  },
];

function Project({ project }: { project: (typeof projects)[number] }) {
  return (
    <article className={`project ${project.className} reveal`}>
      <ProjectArtwork kind={project.kind} />
      <div className="project-copy">
        <span className="project-number">{project.number} <span>— SELECTED WORK</span></span>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        {project.technologies.length > 0 && (
          <ul className="project-tags" aria-label="Technologies">
            {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
          </ul>
        )}
      </div>
    </article>
  );
}

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("portfolio");

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const sectionObserver = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActiveSection(visible.target.id);
    }, { rootMargin: "-25% 0px -55% 0px", threshold: [0.05, 0.2, 0.5] });
    navigation.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) sectionObserver.observe(section);
    });

    let revealObserver: IntersectionObserver | undefined;
    if (!reduceMotion && "IntersectionObserver" in window) {
      document.documentElement.classList.add("motion-ready");
      revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      }, { rootMargin: "0px 0px -7% 0px", threshold: 0.12 });
      document.querySelectorAll(".reveal").forEach((element) => revealObserver?.observe(element));
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("keydown", onKeyDown);
      sectionObserver.disconnect();
      revealObserver?.disconnect();
      document.documentElement.classList.remove("motion-ready");
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main">Skip to content</a>
      <header className={`site-header${scrolled ? " site-header--scrolled" : ""}`}>
        <div className="nav-wrap">
          <a className="wordmark" href="#portfolio" aria-label="Vasilka Vlaykova — home" onClick={closeMenu}>
            <span className="wordmark-monogram">V<span>V</span></span>
            <span className="wordmark-name">VASILKA</span>
          </a>

          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>

          <nav id="primary-navigation" className={`primary-navigation${menuOpen ? " primary-navigation--open" : ""}`} aria-label="Main navigation">
            <div className="nav-links">
              {navigation.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  className={activeSection === item.id ? "nav-link is-active" : "nav-link"}
                  aria-current={activeSection === item.id ? "location" : undefined}
                  onClick={closeMenu}
                >
                  {item.label}
                </a>
              ))}
            </div>
            <div className="nav-social"><SocialLinks compact /></div>
          </nav>
        </div>
      </header>

      <main id="main">
        <section id="portfolio" className="hero section-anchor" aria-labelledby="hero-title">
          <GeometricLines />
          <div className="hero-vertical" aria-hidden="true">DATA SCIENCE</div>
          <div className="hero-content">
            <p className="eyebrow hero-eyebrow"><span className="eyebrow-mark" />HELLO THERE, NICE TO MEET YOU.</p>
            <h1 id="hero-title"><span>Vasilka</span></h1>
            <p className="hero-role">BSc Computing Student <i aria-hidden="true">|</i> Exploring Data Science &amp; Artificial Intelligence</p>
            <p className="hero-intro">Turning curiosity into practical solutions through data, machine learning, and thoughtful system design.</p>
            <p className="hero-location"><span className="location-dot" />London, United Kingdom</p>
            <div className="hero-actions">
              <a className="button button--dark" href="#work">Explore My Work <ArrowDown aria-hidden="true" /></a>
              <a className="button button--text" href="#contact">Let's Connect <ArrowUpRight aria-hidden="true" /></a>
            </div>
            <div className="hero-footnote"><span>COMPUTING · DATA · CURIOSITY</span><span>01 — 07</span></div>
          </div>
          <div className="hero-portrait-wrap"><PortraitPlaceholder /></div>
          <a className="hero-scroll" href="#about" aria-label="Scroll to about me"><span>SCROLL TO EXPLORE</span><ArrowDown aria-hidden="true" /></a>
        </section>

        <section id="about" className="about section section-anchor" aria-labelledby="about-heading">
          <div className="section-kicker reveal"><span>01</span><span>THE PERSON BEHIND THE WORK</span></div>
          <div className="about-layout">
            <div className="about-heading-block reveal">
              <p className="eyebrow">A LITTLE CONTEXT</p>
              <h2 id="about-heading">A little<br />about <em>me.</em></h2>
            </div>
            <div className="about-copy reveal">
              <p className="about-lead">I’m Vasilka — a Computing student in London, drawn to the ways data and thoughtful technology can make complex things feel clearer.</p>
              <p>My studies have opened up a world of ideas in Data Science, Artificial Intelligence, and System Design Architecture. I like taking those ideas out of theory and learning by building practical projects, one step at a time.</p>
              <blockquote>“I genuinely enjoy learning new tools and improving my technical skills step by step.”</blockquote>
              <div className="about-details">
                <span><b>BASE</b>London, UK</span>
                <span><b>STUDYING</b>BSc Computing</span>
                <span><b>CURIOUS ABOUT</b>AI &amp; Machine Learning</span>
                <span><b>ALWAYS</b>Learning by making</span>
              </div>
            </div>
          </div>
          <div className="about-aside" aria-hidden="true"><span>CURIOUS BY NATURE</span><span>01 / 03</span></div>
        </section>

        <section id="skills" className="skills section section-anchor" aria-labelledby="skills-heading">
          <div className="section-kicker reveal"><span>02</span><span>TOOLS, IDEAS &amp; FOUNDATIONS</span></div>
          <div className="section-heading-row reveal">
            <div><p className="eyebrow">A GROWING TOOLKIT</p><h2 id="skills-heading">What I <em>work</em> with.</h2></div>
            <p className="section-note">A foundation in computing,<br />with plenty more to explore.</p>
          </div>
          <div className="skill-list">
            <div className="skill-group reveal">
              <div className="skill-number">01</div>
              <div className="skill-name"><h3>Programming<br />&amp; tools</h3><span>Building blocks</span></div>
              <ul className="skill-items"><li>Python</li><li>SQL</li><li>Git</li><li>GitHub</li><li>MySQL</li><li>Streamlit</li></ul>
              <span className="skill-glyph" aria-hidden="true">{`</>`}</span>
            </div>
            <div className="skill-group reveal">
              <div className="skill-number">02</div>
              <div className="skill-name"><h3>Data<br />&amp; AI</h3><span>Questions &amp; patterns</span></div>
              <ul className="skill-items"><li>Data Analysis</li><li>Machine Learning</li><li>Deep Learning</li><li>Natural Language Processing</li></ul>
              <span className="skill-glyph skill-glyph--spark" aria-hidden="true">✳</span>
            </div>
            <div className="skill-group reveal">
              <div className="skill-number">03</div>
              <div className="skill-name"><h3>Computer<br />science</h3><span>Under the surface</span></div>
              <ul className="skill-items"><li>System Design</li><li>Database Design</li><li>Software Development</li></ul>
              <span className="skill-glyph skill-glyph--circle" aria-hidden="true">◉</span>
            </div>
          </div>
        </section>

        <section id="work" className="work section section-anchor" aria-labelledby="work-heading">
          <div className="section-kicker reveal"><span>03</span><span>SELECTED WORK &amp; LEARNING</span></div>
          <div className="section-heading-row work-heading-row reveal">
            <div><p className="eyebrow">A FEW THINGS IN PROGRESS</p><h2 id="work-heading">Selected <em>Work.</em></h2></div>
            <p className="section-note">A collection of projects,<br />experiments, and things I've been building.</p>
          </div>
          <div className="project-grid">
            {projects.map((project) => <Project project={project} key={project.number} />)}
          </div>
          <p className="gallery-note"><span className="gallery-star">✳</span> Each project preview is an original visual study, not a screenshot.</p>
        </section>

        <section id="education" className="journey section" aria-labelledby="journey-heading">
          <div className="section-kicker reveal"><span>04</span><span>STILL IN THE MAKING</span></div>
          <div className="journey-layout reveal">
            <div><p className="eyebrow">MY LEARNING JOURNEY</p><h2 id="journey-heading">Learning<br />as I <em>go.</em></h2></div>
            <div className="journey-entry">
              <span className="journey-marker" aria-hidden="true" />
              <p className="journey-label">CURRENTLY STUDYING</p>
              <h3>BSc Computing</h3>
              <p>I’m building a foundation in computer science while exploring Data Science and AI. Along the way, practical projects help me connect what I’m learning with what I can make.</p>
              <span className="journey-place">LONDON, UNITED KINGDOM</span>
            </div>
          </div>
          <div className="journey-rule" aria-hidden="true" />
        </section>

        <section id="contact" className="contact section-anchor" aria-labelledby="contact-heading">
          <div className="contact-ornament" aria-hidden="true">✳</div>
          <div className="contact-inner reveal">
            <div className="section-kicker"><span>05</span><span>THE NEXT CONVERSATION</span></div>
            <p className="eyebrow">HAVE A GOOD IDEA IN MIND?</p>
            <h2 id="contact-heading">Let's create<br />something <em>meaningful.</em></h2>
            <div className="contact-bottom">
              <p>Interested in technology, data, AI, or collaborating on interesting ideas? I'd love to connect.</p>
              <div className="contact-links">
                <a href={socials.linkedin} target="_blank" rel="noreferrer">Find me on LinkedIn <ArrowUpRight aria-hidden="true" /></a>
                <a href={socials.github} target="_blank" rel="noreferrer">Explore my GitHub <ArrowUpRight aria-hidden="true" /></a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a className="footer-brand" href="#portfolio">VASILKA <span>VLAYKOVA</span></a>
        <span className="footer-location">LONDON, UNITED KINGDOM</span>
        <SocialLinks />
        <span className="footer-copyright">© {new Date().getFullYear()} VASILKA VLAYKOVA</span>
      </footer>
    </div>
  );
}

export default Home;
