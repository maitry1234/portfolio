import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact">
      <div className="contact-noise" />
      <div className="contact-glow" />

      <div className="contact-container">
        <p className="contact-label">Get in touch</p>

        <h2 className="contact-title">
          <span className="ct-normal">Let's</span>
          <span className="ct-cursive">connect</span>
        </h2>

        <div className="contact-links">
          {/* Gmail */}
          <a href="mailto:maitrybajra123@gmail.com" className="contact-link">
            <span className="contact-link-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="4" width="20" height="16" rx="3" />
                <path d="M2 7l10 7 10-7" />
              </svg>
            </span>
            <span className="contact-link-text">
              <span className="contact-link-platform">Email</span>
              <span className="contact-link-value">
                maitrybajra123@gmail.com
              </span>
            </span>
            <svg
              className="contact-link-arrow"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/maitry-bajracharya-004144326/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <span className="contact-link-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="4" />
                <path d="M7 10v7M7 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 10v7" />
              </svg>
            </span>
            <span className="contact-link-text">
              <span className="contact-link-platform">LinkedIn</span>
              <span className="contact-link-value">maitry-bajracharya</span>
            </span>
            <svg
              className="contact-link-arrow"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/maitry1234"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <span className="contact-link-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
            </span>
            <span className="contact-link-text">
              <span className="contact-link-platform">GitHub</span>
              <span className="contact-link-value">maitry1234</span>
            </span>
            <svg
              className="contact-link-arrow"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </a>
        </div>

        <div className="contact-footer">
          <div className="contact-footer-line" />
          <span className="contact-footer-text">Maitry Bajracharya © 2025</span>
          <div className="contact-footer-line" />
        </div>
      </div>
    </section>
  );
}
