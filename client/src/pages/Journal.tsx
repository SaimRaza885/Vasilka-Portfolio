export default function Journal() {
  return (
    <div className="page-width content-page">
      <header className="page-intro">
        <p className="eyebrow">LEARNING JOURNAL</p>
        <h1>Notes from<br /><em>the process.</em></h1>
        <p className="page-lead">A place for short reflections on computing, data, AI, and learning through projects.</p>
      </header>
      <section className="journal-empty content-section">
        <h2>New notes will appear here.</h2>
        <p>I’m shaping this space for useful ideas and lessons learned. There are no published entries yet.</p>
        <a className="text-link" href="/projects/">Explore the projects in the meantime</a>
      </section>
    </div>
  );
}
