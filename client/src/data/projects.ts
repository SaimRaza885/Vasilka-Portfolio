export type Project = {
  slug: string;
  number: string;
  title: string;
  summary: string;
  category: string;
  technologies: string[];
  repository: string;
  overview: string;
  details: string[];
  statusNote?: string;
};

export const projects: Project[] = [
  {
    slug: "scamlens",
    number: "01",
    title: "ScamLens",
    summary: "A machine-learning web platform concept for identifying suspicious SMS messages, phishing emails, and malicious URLs.",
    category: "Machine learning · Streamlit",
    technologies: ["Python", "Machine Learning", "NLP", "Streamlit"],
    repository: "https://github.com/VasilkaVlaykova/ScamLens-Web-Browser-Application-for-Detecting-Spam-Contents",
    overview: "ScamLens explores how machine-learning and natural-language-processing techniques can help classify suspicious messages and links, with security awareness guidance alongside the prototype interface.",
    details: [
      "The repository documents dataset exploration and preprocessing, experimentation with machine-learning approaches, and a Streamlit-based prototype.",
      "The project also documents research into Unicode spoofing and homograph detection. The repository describes it as a research and practical cybersecurity project in development.",
    ],
    statusNote: "Prototype and research project in development.",
  },
  {
    slug: "kompas",
    number: "02",
    title: "Online Book Store — Kompas",
    summary: "A hypothetical online bookstore used to explore database requirements, design, and MySQL implementation.",
    category: "Database design · MySQL",
    technologies: ["MySQL", "SQL", "Database Design"],
    repository: "https://github.com/VasilkaVlaykova/Online-Book-Store-Kompas",
    overview: "Kompas is a database design and implementation assignment built around a hypothetical online bookstore. The repository documents the scenario, its data and transaction requirements, conceptual and logical design, and MySQL implementation work.",
    details: [
      "The documented scenario includes books, customers, orders, payments, reviews, staff, managers, and branches.",
      "The repository describes schema design and implementation; it is a database project rather than a deployed online retail website.",
    ],
    statusNote: "University assignment based on a hypothetical bookstore scenario.",
  },
  {
    slug: "lima",
    number: "03",
    title: "LIMA",
    summary: "A solution-architecture portfolio project exploring a multimodal AI learning and media platform.",
    category: "System design · AI concept",
    technologies: ["Solution Architecture", "Cloud Concepts", "Multimodal AI"],
    repository: "https://github.com/VasilkaVlaykova/LIMA-Library-Intelligence-Managemant-Assistant",
    overview: "LIMA stands for Library Intelligence Management Assistant. Its repository presents a system-design and prototype concept for a multimodal interactive learning and media platform, spanning libraries, bookstores, education, and home learning.",
    details: [
      "The repository outlines a concept that combines text, image, audio, video, and touch-based interactions, with cloud and multi-tenant architecture ideas.",
      "The repository identifies the current status as system design and prototype. Described capabilities should be understood as a solution concept, not claims of a fully deployed service.",
    ],
    statusNote: "Solution architecture and prototype concept.",
  },
  {
    slug: "git-learning",
    number: "04",
    title: "Git Learning",
    summary: "A personal repository for practicing Git basics and commands with VS Code.",
    category: "Learning · Version control",
    technologies: ["Git", "GitHub", "VS Code"],
    repository: "https://github.com/VasilkaVlaykova/git-learning",
    overview: "Git Learning is a small practice repository used to explore Git basics and commands in VS Code.",
    details: [
      "The public repository contains practice notes and test changes related to learning version control.",
      "It is a learning repository rather than a finished software product.",
    ],
  },
];
