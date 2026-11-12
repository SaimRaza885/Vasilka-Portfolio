import { useInView } from "../hooks/useInView";

export const blogPosts = [
  {
    slug: "what-i-am-learning-about-ai",
    tag: "AI & Learning",
    date: "November 2026",
    readTime: "4 min read",
    title: "What I Am Learning About Building Useful AI Products",
    summary:
      "A practical reflection on turning machine-learning ideas into clear, helpful experiences that people can actually understand and trust.",
    category: "Featured post",
    image: "/tech-cloud.jpg",
    imageAlt: "Cloud technology illustration for an article about useful AI products",
    intro:
      "AI becomes more valuable when it helps people make better decisions without making the experience feel mysterious.",
    sections: [
      {
        heading: "Start with the person, not the model",
        paragraphs: [
          "The most interesting part of an AI product is rarely the model in isolation. It is the moment where a person uses the result to understand a problem, make a decision, or move their work forward.",
          "That means the first design question should be what the user needs to accomplish. A technically impressive output is not useful if it is difficult to interpret or impossible to act on.",
        ],
      },
      {
        heading: "Make the result explain itself",
        paragraphs: [
          "Clear labels, useful context, and honest uncertainty make machine-learning features feel more trustworthy. I have found that a short explanation often creates more confidence than adding another visual effect.",
          "The goal is not to expose every internal detail. It is to give people enough information to understand what happened and what they can do next.",
        ],
      },
      {
        heading: "The lesson I am taking forward",
        paragraphs: [
          "I want to keep building AI experiences that are practical, transparent, and grounded in real user needs. Good technology should feel empowering rather than intimidating.",
        ],
      },
    ],
  },
  {
    slug: "lessons-from-building-projects",
    tag: "Projects",
    date: "October 2026",
    readTime: "5 min read",
    title: "Lessons I Keep Learning from Building Portfolio Projects",
    summary:
      "The habits, design decisions, and small iterations that make personal software projects more useful than a polished screenshot alone.",
    category: "Behind the build",
    image: "/tech-security.jpg",
    imageAlt: "Technology illustration for an article about building portfolio projects",
    intro:
      "Personal projects are where ideas become evidence. They are also where the most useful engineering lessons usually appear.",
    sections: [
      {
        heading: "Small scope creates better decisions",
        paragraphs: [
          "A portfolio project does not need to solve every possible problem. Giving an idea a clear boundary makes it easier to choose the right data, architecture, and user experience.",
          "A focused first version also leaves room to test the important assumption before investing in features that may not matter.",
        ],
      },
      {
        heading: "Show the thinking behind the interface",
        paragraphs: [
          "A finished screen only tells part of the story. Explaining the problem, trade-offs, and next steps makes a project more useful to someone reviewing it.",
          "Documentation is not separate from the product. It is part of how the product communicates its value.",
        ],
      },
      {
        heading: "Build, review, improve",
        paragraphs: [
          "The strongest projects are rarely perfect on the first attempt. Iterating on structure, copy, accessibility, and responsive behaviour is part of the actual engineering work.",
        ],
      },
    ],
  },
  {
    slug: "making-data-easier-to-understand",
    tag: "Data",
    date: "September 2026",
    readTime: "4 min read",
    title: "Making Data Easier to Understand",
    summary:
      "Thoughts on choosing the right visual, explaining the context, and designing analysis so the insight is not buried under the numbers.",
    category: "Working with data",
    image: "/tech-data.jpg",
    imageAlt: "Data visualisation illustration for an article about making data clearer",
    intro:
      "Good analysis is not just about finding a pattern. It is about helping another person see why that pattern matters.",
    sections: [
      {
        heading: "Context comes before charts",
        paragraphs: [
          "Before choosing a visual, I try to understand the question the data needs to answer. The same dataset can support very different stories depending on the decision behind it.",
          "Without context, even a beautiful chart can create more questions than it answers.",
        ],
      },
      {
        heading: "Reduce the distance to the insight",
        paragraphs: [
          "Labels, comparisons, and a clear visual hierarchy help readers move from raw numbers to a useful conclusion. Small choices such as sensible units and descriptive headings can make a large difference.",
          "The best data experience gives the reader a starting point, then lets them explore without getting lost.",
        ],
      },
      {
        heading: "Design for the next question",
        paragraphs: [
          "A good analysis should naturally lead to the next useful question. That is why I prefer interfaces that combine a concise summary with enough detail to investigate further.",
        ],
      },
    ],
  },
];

export default function Journal() {
  const blogReveal = useInView<HTMLDivElement>();

  return (
    <div className="page-width content-page">
      <header className="page-intro">
        <span className="badge-pill">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
          </svg>
          Blog &amp; Reflections
        </span>
        <h1>
          Ideas from
          <br />
          <span className="text-gradient">The Work in Progress.</span>
        </h1>
        <p className="page-lead">
          A collection of practical thoughts, project lessons, and ideas about
          data, AI, software, and the process of building in public.
        </p>
      </header>

      <div
        ref={blogReveal.ref}
        className={`blog-grid${blogReveal.isVisible ? " is-visible" : ""}`}
      >
        {blogPosts.map(post => (
          <article className="blog-card" key={post.slug}>
            <a className="blog-card-image" href={`/journal/${post.slug}/`}>
              <img src={post.image} alt={post.imageAlt} loading="lazy" />
              <span className="blog-card-image-label">Read article</span>
            </a>
            <div className="blog-card-body">
              <h2 className="blog-card-title">{post.title}</h2>
              <p className="blog-card-summary">{post.summary}</p>
            </div>

            <div className="blog-card-footer">
              <a className="text-link text-link--primary" href={`/journal/${post.slug}/`}>
              Read full article →
              </a>
            </div>
          </article>
        ))}
      </div>

      <div className="blog-cta-box">
        <h3>Have a topic you would like me to explore?</h3>
        <p>
          I am using this space to share practical lessons as I learn, build,
          and grow across data, AI, and software engineering.
        </p>
        <div className="text-actions">
          <a className="action-button action-button--primary" href="/contact/">
            Start a Conversation →
          </a>
          <a
            className="action-button action-button--secondary"
            href="https://www.linkedin.com/in/vasilka-vlaykova-a0ba792b9/"
            target="_blank"
            rel="noreferrer"
          >
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}
