import { blogPosts } from "./Journal";

export default function BlogDetail({
  post,
}: {
  post: (typeof blogPosts)[number];
}) {
  return (
    <article className="page-width content-page blog-detail-page">
      <div className="breadcrumb-nav">
        <a href="/journal/" className="breadcrumb-back">
          ← Back to blog
        </a>
        <span className="breadcrumb-separator">/</span>
        <span className="breadcrumb-current">{post.tag}</span>
      </div>

      <header className="blog-detail-header">
        <div className="blog-detail-heading">
          <span className="blog-tag">{post.tag}</span>
          <h1>{post.title}</h1>
          <p className="page-lead">{post.intro}</p>
        </div>
        <div className="blog-detail-meta" aria-label="Article details">
          <span>Published</span>
          <strong>{post.date}</strong>
          <span>Reading time</span>
          <strong>{post.readTime}</strong>
        </div>
      </header>

      <div className="blog-detail-hero">
        <img src={post.image} alt={post.imageAlt} />
      </div>

      <div className="blog-detail-layout">
        <aside className="blog-detail-aside">
          <span className="blog-category">{post.category}</span>
          <p>Thoughts from the work in progress.</p>
          <a className="text-link" href="/contact/">
            Share a thought →
          </a>
        </aside>

        <div className="blog-detail-content prose">
          {post.sections.map(section => (
            <section key={section.heading}>
              <h2>{section.heading}</h2>
              {section.paragraphs.map(paragraph => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>
          ))}
          <div className="blog-detail-footer">
            <a className="action-button action-button--secondary" href="/journal/">
              ← More articles
            </a>
            <a className="action-button action-button--primary" href="/contact/">
              Start a conversation →
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
