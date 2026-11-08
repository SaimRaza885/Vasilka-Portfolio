export default function NotFound() {
  return (
    <div className="page-width content-page not-found-page">
      <p className="eyebrow">PAGE NOT FOUND</p>
      <h1>This page<br /><em>isn’t here.</em></h1>
      <p className="page-lead">The address may have changed. Head back to the homepage or browse the projects.</p>
      <div className="detail-actions">
        <a className="text-link text-link--primary" href="/">Go to Home</a>
        <a className="text-link" href="/projects/">Browse Projects</a>
      </div>
    </div>
  );
}
