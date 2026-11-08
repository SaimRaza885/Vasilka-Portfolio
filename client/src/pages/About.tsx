export default function About() {
  return (
    <div className="page-width content-page">
      <header className="page-intro">
        <p className="eyebrow">ABOUT</p>
        <h1>A little<br /><em>about me.</em></h1>
        <p className="page-lead">I’m Vasilka, a BSc Computing student based in London. I’m interested in data science, artificial intelligence, and system design.</p>
      </header>

      <section className="content-section prose">
        <h2>Learning by doing</h2>
        <p>My studies have introduced me to computing foundations and new ways to think about data, software, and systems. I enjoy exploring technologies and turning what I learn into practical project work.</p>
        <p>“I genuinely enjoy learning new tools and improving my technical skills step by step.”</p>
      </section>

      <section className="content-section">
        <h2>Areas I’m exploring</h2>
        <ul className="plain-list two-column-list">
          <li>Programming: Python and SQL</li>
          <li>Tools: Git, GitHub, MySQL, Streamlit</li>
          <li>Data and AI: data analysis, machine learning, deep learning, and natural language processing</li>
          <li>Computing: system design, database design, and software development</li>
        </ul>
      </section>

      <section className="content-section education-line">
        <div><p className="eyebrow">EDUCATION</p><h2>BSc Computing</h2></div>
        <p>Currently studying in London, building a foundation in computer science while exploring data science and AI through practical projects.</p>
      </section>
      <div className="page-end-link"><a className="text-link" href="/contact/">Get in touch</a></div>
    </div>
  );
}
