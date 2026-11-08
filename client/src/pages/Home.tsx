import { projects } from "../data/projects";

export default function Home() {
  const featured = projects[0];

  return (
    <div className="page-width home-page">
      <section className="home-hero" aria-labelledby="home-heading">
        <div className="home-copy">
          <p className="eyebrow">HELLO THERE, NICE TO MEET YOU.</p>
          <h1 id="home-heading">Vasilka<em>.</em></h1>
          <p className="home-intro">
            <strong>BSc Computing Student | Exploring Data Science &amp; Artificial Intelligence</strong>
            <br /><br />
            Turning curiosity into practical solutions through data, machine learning, and thoughtful system design.
          </p>
          <div className="text-actions">
            <a className="text-link text-link--primary" href="/projects/">Explore my projects</a>
            <a className="text-link" href="/contact/">Let’s connect</a>
          </div>
          <p className="home-location">London, United Kingdom</p>
        </div>
        <figure className="home-portrait">
          <img
            src="/manus-storage/async-images/ma7wkjDwavnnsXoN9sbyPk/image-1.webp"
            alt="AI-generated portrait of a fictional woman, not a photo of Vasilka."
            width="500"
            height="750"
            fetchPriority="high"
            decoding="async"
          />
          <figcaption>AI-generated fictional portrait · not Vasilka</figcaption>
        </figure>
      </section>

      <section className="home-feature" aria-labelledby="featured-heading">
        <div className="section-heading-line"><p className="eyebrow">FEATURED PROJECT</p><span>{featured.number}</span></div>
        <div className="feature-row">
          <div>
            <h2 id="featured-heading">{featured.title}</h2>
            <p>{featured.summary}</p>
          </div>
          <div className="feature-links">
            <a className="text-link" href={`/projects/${featured.slug}/`}>Read the project overview</a>
            <a className="text-link" href={featured.repository} target="_blank" rel="noreferrer">View on GitHub</a>
          </div>
        </div>
      </section>

      <section className="home-current" aria-labelledby="current-heading">
        <p className="eyebrow">CURRENTLY EXPLORING</p>
        <h2 id="current-heading">Data, machine learning, and how useful systems fit together.</h2>
        <a className="text-link" href="/journal/">Visit the learning journal</a>
      </section>
    </div>
  );
}
