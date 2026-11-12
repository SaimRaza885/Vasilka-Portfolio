import React, { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Full-time Role Inquiry",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    // Simulating instant professional feedback + mailto fallback capability
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  }

  return (
    <div className="contact-form-card">
      <div className="contact-form-header">
        {/* <span className="badge-pill">
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
          Direct Message
        </span>
        {/* <h3>Send a Direct Inquiry</h3> */}
        {/* <p>
          Drop a note regarding career opportunities, technical questions, or
          project collaborations.
        </p> */}
      </div>

      {submitted ? (
        <div className="form-success-state" role="alert">
          <div className="success-icon" aria-hidden="true">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
          </div>
          <h4>Thank you, {formData.name || "friend"}!</h4>
          <p>
            Your inquiry has been prepared. You can also reach out directly via{" "}
            <a
              href={`mailto:vasilkavlaykova@yahoo.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(formData.message)}`}
            >
              vasilkavlaykova@yahoo.com
            </a>
            .
          </p>
          <button
            type="button"
            className="action-button action-button--secondary"
            onClick={() => {
              setSubmitted(false);
              setFormData({
                name: "",
                email: "",
                subject: "Full-time Role Inquiry",
                message: "",
              });
            }}
          >
            Send Another Note
          </button>
        </div>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="form-grid">
            <div className="form-field">
              <label htmlFor="contact-name">Your Full Name *</label>
              <input
                id="contact-name"
                name="name"
                type="text"
                required
                placeholder="e.g. Alex Morgan"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="form-field">
              <label htmlFor="contact-email">Email Address *</label>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                placeholder="alex@company.com"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-field">
            <label htmlFor="contact-subject">Inquiry Type</label>
            <select
              id="contact-subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
            >
              <option value="Full-time Role Inquiry">
                Full-time Role Inquiry (Graduate / Junior)
              </option>
              <option value="Internship Opportunity">
                Internship Opportunity
              </option>
              <option value="Freelance / Consultancy">
                Freelance / System Design Project
              </option>
              <option value="General Networking">
                General Networking / Tech Chat
              </option>
            </select>
          </div>

          <div className="form-field">
            <label htmlFor="contact-message">Message *</label>
            <textarea
              id="contact-message"
              name="message"
              rows={4}
              required
              placeholder="message..."
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          <div className="form-footer">
            <button
              type="submit"
              className="action-button action-button--primary form-submit-btn"
              disabled={
                loading ||
                !formData.name ||
                !formData.email ||
                !formData.message
              }
            >
              {loading ? (
                <>Sending message...</>
              ) : (
                <>
                  Send Message
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                </>
              )}
            </button>
            {/* <span className="form-privacy-note">
              Direct delivery to Vasilka's verified London inbox.
            </span> */}
          </div>
        </form>
      )}
    </div>
  );
}
