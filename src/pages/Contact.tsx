import { FormEvent, useState } from "react";

const contactLinks = [
  {
    label: "Email",
    title: "vasilkavlaykova@yahoo.com",
    description:
      "For job inquiries, technical discussions, or project proposals.",
    href: "mailto:vasilkavlaykova@yahoo.com",
    action: "Send an email",
    icon: (
      <>
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </>
    ),
  },
  {
    label: "LinkedIn",
    title: "Professional profile",
    description: "Connect and view the professional timeline.",
    href: "https://www.linkedin.com/in/vasilka-vlaykova-a0ba792b9/",
    action: "View LinkedIn profile",
    icon: (
      <>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </>
    ),
  },
  {
    label: "GitHub",
    title: "Open-source work",
    description: "Browse projects, code, and technical experiments.",
    href: "https://github.com/VasilkaVlaykova",
    action: "Browse GitHub",
    icon: (
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    ),
  },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const topic = String(form.get("topic") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();
    const subject = topic ? `${topic} — message from ${name}` : `Message from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;

    window.location.href = `mailto:vasilkavlaykova@yahoo.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  }

  return (
    <div className="page-width content-page contact-page">
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
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
          Get in Touch
        </span>
        <h1>
          Let’s build
          <br />
          <span className="text-gradient">Something Impactful.</span>
        </h1>
        <p className="page-lead">
          I am actively exploring graduate roles, internships, and freelance
          projects in data analysis, software engineering, and systems
          architecture.
        </p>
      </header>

      <section className="home-contact-section contact-page-form-section" aria-labelledby="contact-form-heading">
        <div className="contact-section-split">
          <div className="contact-lead-side">
            <span className="eyebrow">START A CONVERSATION</span>
            <h2 id="contact-form-heading">Have an idea or opportunity?</h2>
            <p className="contact-lead-desc">
              Tell me a little about what you are working on, what you need help with, or the role you would like to discuss.
              I will get back to you by email.
            </p>
            <div className="contact-social-links" aria-label="Social links">
              <a
                className="contact-social-link"
                href="mailto:vasilkavlaykova@yahoo.com"
                aria-label="Send an email"
                title="Send an email"
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </a>
              <a
                className="contact-social-link"
                href="https://www.linkedin.com/in/vasilka-vlaykova-a0ba792b9/"
                target="_blank"
                rel="noreferrer"
                aria-label="Open LinkedIn profile"
                title="LinkedIn"
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M6.5 8.5H3V21h3.5V8.5ZM4.75 3A2.05 2.05 0 1 0 4.75 7.1 2.05 2.05 0 0 0 4.75 3ZM21 13.85c0-3.77-2-5.52-4.67-5.52-2.15 0-3.11 1.18-3.65 2.01V8.5H9.18V21h3.5v-6.19c0-1.63.31-3.2 2.33-3.2 1.99 0 2.02 1.86 2.02 3.31V21H21v-7.15Z" />
                </svg>
              </a>
              <a
                className="contact-social-link"
                href="https://github.com/VasilkaVlaykova"
                target="_blank"
                rel="noreferrer"
                aria-label="Open GitHub profile"
                title="GitHub"
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12 2.5a9.5 9.5 0 0 0-3 18.51c.48.09.65-.2.65-.46v-1.63c-2.65.58-3.21-1.13-3.21-1.13-.44-1.1-1.06-1.39-1.06-1.39-.87-.59.07-.58.07-.58.96.07 1.47.99 1.47.99.86 1.47 2.26 1.05 2.81.8.09-.62.34-1.05.61-1.29-2.12-.24-4.35-1.06-4.35-4.71 0-1.04.37-1.89.99-2.56-.1-.24-.43-1.21.09-2.52 0 0 .81-.26 2.63.98A9.2 9.2 0 0 1 12 7.2c.82 0 1.65.11 2.42.33 1.82-1.24 2.63-.98 2.63-.98.52 1.31.19 2.28.09 2.52.62.67.99 1.52.99 2.56 0 3.66-2.23 4.47-4.36 4.71.35.3.65.88.65 1.78v2.64c0 .26.17.56.66.46A9.5 9.5 0 0 0 12 2.5Z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="contact-form-card">
            {submitted ? (
              <div className="form-success-state" role="status">
                <div className="success-icon" aria-hidden="true">✓</div>
                <h3>Your email draft is ready.</h3>
                <p>
                  Your email app should now be open with the message prepared. If it did not open, email Vasilka directly at{" "}
                  <a className="text-link" href="mailto:vasilkavlaykova@yahoo.com">vasilkavlaykova@yahoo.com</a>.
                </p>
                <button className="text-link" type="button" onClick={() => setSubmitted(false)}>Write another message</button>
              </div>
            ) : (
              <>
                <div className="contact-form-header">
                  <span className="card-badge">CONTACT FORM</span>
                  {/* <h3>Send a message</h3> */}
                  {/* <p>This will open your email app with your message ready to send.</p> */}
                </div>
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-grid">
                    <div className="form-field">
                      <label htmlFor="contact-name">Your name</label>
                      <input id="contact-name" name="name" type="text" autoComplete="name" placeholder="Your name" required />
                    </div>
                    <div className="form-field">
                      <label htmlFor="contact-email">Email address</label>
                      <input id="contact-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required />
                    </div>
                  </div>
                  <div className="form-field">
                    <label htmlFor="contact-topic">What would you like to discuss?</label>
                    <select id="contact-topic" name="topic" defaultValue="">
                      <option value="" disabled>Select a topic</option>
                      <option value="Graduate opportunity">Graduate opportunity</option>
                      <option value="Internship">Internship</option>
                      <option value="Freelance project">Freelance project</option>
                      <option value="Collaboration">Collaboration</option>
                      <option value="Something else">Something else</option>
                    </select>
                  </div>
                  <div className="form-field">
                    <label htmlFor="contact-message">Your message</label>
                    <textarea id="contact-message" name="message" rows={6} placeholder="message..." required />
                  </div>
                  <div className="form-footer">
                    <button className="form-submit-btn action-button action-button--primary" type="submit">Send email →</button>

                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

    </div>
  );
}
