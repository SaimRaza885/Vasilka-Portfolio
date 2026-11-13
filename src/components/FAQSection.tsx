import React, { useState } from "react";

export type FAQItem = {
  question: string;
  answer: string;
  category?: string;
};

export const defaultFAQs: FAQItem[] = [
  {
    question:
      "What types of roles or contracts are you actively available for?",
    answer:
      "I am actively seeking graduate software engineering or data analyst/scientist roles, internships, and selective freelance projects. I am based in London, UK and open to on-site, hybrid, or remote positions.",
  },
  {
    question:
      "What are your primary technical strengths and programming stack?",
    answer:
      "My primary technical strengths are Python, SQL, HTML, CSS, system design and architecture, prototype design, and Figma. I specialize in machine learning, NLP, deep learning, relational schema modeling, and software delivery through an agile SDLC approach.",
  },
  {
    question: "What was your responsibility at Regent College London?",
    answer:
      "As a Project Intern, I worked on educational technology initiatives involving programming and VR-based learning environments. My work focused on software prototyping, iterative testing, and requirements analysis in an agile team.",
  },
  {
    question: "Can I download your verified CV / Resume?",
    answer:
      "Yes! You can download my verified CV directly as a PDF from the navigation bar, hero section, or contact page via the 'Download CV' buttons.",
  },
  {
    question: "How can we start a project or schedule an interview?",
    answer:
      "You can submit a message using the interactive contact form below, email me directly at vasilkavlaykova@yahoo.com, or reach out via LinkedIn. I typically respond within 24 hours.",
  },
];

export default function FAQSection({
  items = defaultFAQs,
}: {
  items?: FAQItem[];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  function toggle(index: number) {
    setOpenIndex(prev => (prev === index ? null : index));
  }

  return (
    <section className="faq-section" aria-labelledby="faq-heading">
      <div className="section-header-centered">
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
            <circle cx="12" cy="12" r="10" />
            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
            <line x1="12" y1="17" x2="12.01" y2="17" />
          </svg>
          Quick Answers
        </span>
        <h2 id="faq-heading" className="section-title">
          Frequently Asked Questions
        </h2>
        <p className="section-subtitle">
          Everything recruiters, hiring managers, and clients commonly ask about
          my experience, availability, and technical approach.
        </p>
      </div>

      <div className="faq-accordion">
        {items.map((item, idx) => {
          const isOpen = openIndex === idx;
          const id = `faq-panel-${idx}`;
          const headerId = `faq-header-${idx}`;
          return (
            <div
              className={`faq-card ${isOpen ? "faq-card--open" : ""}`}
              key={idx}
            >
              <button
                type="button"
                className="faq-question"
                id={headerId}
                aria-expanded={isOpen}
                aria-controls={id}
                onClick={() => toggle(idx)}
              >
                <span className="faq-question-text">{item.question}</span>
                <span
                  className={`faq-toggle-icon ${isOpen ? "faq-toggle-icon--open" : ""}`}
                  aria-hidden="true"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </span>
              </button>
              <div
                id={id}
                role="region"
                aria-labelledby={headerId}
                className={`faq-collapse ${isOpen ? "faq-collapse--open" : ""}`}
              >
                <div className="faq-answer-inner">
                  <p>{item.answer}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
