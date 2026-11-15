export type Project = {
  slug: string;
  number: string;
  title: string;
  summary: string;
  category: string;
  technologies: string[];
  repository: string;
  liveDemo?: string;
  image?: string;
  logo?: string;
  imageFit?: "cover" | "contain";
  overview: string;
  details: string[];
  statusNote?: string;
  outcome?: string;
  problem?: string;
  role?: string;
  isFeatured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "scamlens",
    number: "01",
    title: "ScamLens",
    summary:
      "A deployed Streamlit machine-learning web application for identifying suspicious SMS messages, phishing emails, and malicious URLs.",
    category: "Machine learning · Streamlit",
    technologies: [
      "Python",
      "Machine Learning",
      "NLP",
      "Streamlit",
      "Cybersecurity",
    ],
    repository:
      "https://github.com/VasilkaVlaykova/ScamLens-Web-Browser-Application-for-Detecting-Spam-Contents",
    liveDemo:
      "https://scamlens-web-browser-application-for-detecting-spam-contents-e.streamlit.app/",
    image: "/scamlens-logo.jpg",
    overview:
      "ScamLens is a deployed Streamlit web application that uses machine-learning and natural-language-processing techniques to classify suspicious messages and links, assess potential risks, and provide security awareness guidance before users interact with potentially harmful content.",
    problem:
      "Rising cyber threats such as phishing emails, SMS scams (smishing), and Unicode homograph domain spoofing trick users into sharing credentials and financial information.",
    role: "Lead researcher and developer — built the data pipeline, explored and preprocessed datasets, applied NLP text processing and feature engineering, experimented with detection models, and created the Streamlit interface.",
    outcome:
      "A live machine-learning web application that detects spam and phishing indicators, investigates suspicious URLs with Unicode homograph awareness, and provides clear threat explanations for non-technical users.",
    details: [
      "The repository documents dataset exploration and preprocessing, experimentation with machine-learning approaches, detection models, testing, and the deployed Streamlit application.",
      "The project also documents research into Unicode spoofing and homograph detection, alongside user-focused security awareness guidance.",
    ],
    statusNote: "Deployed Streamlit application with ongoing research and development.",
    isFeatured: true,
  },
  {
    slug: "kompas",
    number: "02",
    title: "Online Book Store — Kompas",
    summary:
      "A relational database architecture and implementation project modeling multi-branch bookstore inventory, transactions, and customer relationships.",
    category: "Database design · MySQL",
    technologies: [
      "MySQL",
      "SQL",
      "Database Design",
      "Relational Modeling",
      "ERD",
    ],
    repository: "https://github.com/VasilkaVlaykova/Online-Book-Store-Kompas",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1400&q=85",
    overview:
      "Kompas is an end-to-end database design and implementation assignment built around a multi-entity online bookstore. It covers requirements analysis, conceptual entity-relationship modeling, relational normalization, and SQL implementation.",
    problem:
      "Organizing complex retail transactions across multiple branches, catalog editions, order statuses, inventory updates, and customer feedback without redundancy or data anomalies.",
    role: "Database Designer & SQL Developer — designed normalization schemas (3NF), relational ER diagrams, constraints, and operational SQL queries.",
    outcome:
      "Robust, normalized MySQL schema handling books, branches, staff, orders, customer accounts, reviews, and secure transaction workflows.",
    details: [
      "The documented scenario includes books, customers, orders, payments, reviews, staff, managers, and branches.",
      "The repository describes schema design, constraints, and implementation queries; it provides a comprehensive foundation for enterprise data modeling.",
    ],
    statusNote:
      "University assignment based on a multi-entity bookstore scenario.",
    isFeatured: true,
  },
  {
    slug: "lima",
    number: "03",
    title: "LIMA",
    summary:
      "A cloud-native multimodal AI platform concept helping libraries and bookstores make book discovery more interactive through AI recommendations, book trailers, and connected devices.",
    category: "System design · Cloud AI",
    technologies: [
      "Multimodal AI",
      "Google Cloud Platform",
      "Anthos & Kubernetes",
      "REST APIs",
      "Multi-Tenant Architecture",
      "Figma",
    ],
    repository:
      "https://github.com/VasilkaVlaykova/LIMA-Library-Intelligence-Managemant-Assistant",
    image: "/lima-logo.png",
    logo: "/lima-logo.png",
    overview:
      "LIMA (Library Intelligence Management Assistant) is a conceptual multimodal AI interactive learning and media platform for libraries, bookstores, schools, publishers, families, and readers. It is designed to make book discovery and learning more engaging by combining book metadata, recommendations, AI-generated trailers, reading support, and interactive media in one connected ecosystem.",
    problem:
      "Libraries and bookstores need more engaging ways to help people discover books, while schools and families need accessible reading experiences that connect physical books with digital learning. Separate devices, content systems, and services can make this experience fragmented and difficult to manage.",
    role: "Systems Architect & Concept Designer — translated the product vision into business requirements, user journeys, device concepts, REST API boundaries, cloud architecture, multi-tenant services, database structures, security considerations, and high-fidelity prototypes.",
    outcome:
      "A complete solution-architecture portfolio concept showing how libraries, bookstores, publishers, educators, and readers could connect through a secure, scalable platform. The design supports B2B and B2C services alongside SaaS, HaaS, and GaaS offerings.",
    details: [
      "A customer can scan a book at an interactive library or bookstore kiosk and watch an AI-generated trailer based on the book summary, helping them decide whether to explore or purchase it.",
      "The wider device ecosystem includes a website portal for organisations, interactive kiosks, children's AI reading displays, and the LIMA AI Tablet. These devices support text, images, audio, video, and touch-based interactions.",
      "The proposed platform connects clients and devices through secure REST APIs and an API Gateway. Its services include authentication, device management, content delivery, recommendations, analytics, subscriptions, and publisher metadata exchange.",
      "The cloud design uses Google Cloud Platform services including Google Kubernetes Engine, Anthos Service Mesh, Cloud SQL, Firestore, Cloud Storage, IAM, Cloud Armor, and Vertex AI, with a hybrid-cloud approach for sensitive tenant and user data.",
      "The repository presents LIMA as a system design and prototype portfolio project, not a production-ready deployed platform. The architecture demonstrates how a multi-tenant AI ecosystem could scale across libraries, bookstores, education, and home learning.",
    ],
    statusNote: "Conceptual solution architecture and prototype design; not a production deployment.",
    isFeatured: true,
  },
  {
    slug: "git-learning",
    number: "04",
    title: "Git Learning",
    summary:
      "A personal repository for practicing Git basics and commands with VS Code.",
    category: "Learning · Version control",
    technologies: ["Git", "GitHub", "VS Code"],
    repository: "https://github.com/VasilkaVlaykova/git-learning",
    image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?auto=format&fit=crop&w=1400&q=85",
    overview:
      "Git Learning is a small practice repository used to explore Git basics, branching, and commands in VS Code.",
    details: [
      "The public repository contains practice notes and test changes related to learning version control.",
      "It is a learning repository rather than a finished software product.",
    ],
    isFeatured: false,
  },
];
