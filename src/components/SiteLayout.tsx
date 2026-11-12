import { useRef, useState } from "react";
import { useTheme } from "../contexts/ThemeContext";

const navigation = [
  { label: "Home", href: "/", section: "home" },
  { label: "About", href: "/about/", section: "about" },
  { label: "Projects", href: "/projects/", section: "projects" },
  { label: "Blog", href: "/journal/", section: "journal" },
  { label: "Contact", href: "/contact/", section: "contact" },
];

function activeSection(path: string) {
  if (path.startsWith("/projects")) return "projects";
  if (path === "/about/") return "about";
  if (path === "/journal/") return "journal";
  if (path === "/contact/") return "contact";
  return "home";
}

export default function SiteLayout({
  children,
  path,
}: {
  children: React.ReactNode;
  path: string;
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const { theme, toggleTheme } = useTheme();
  const current = activeSection(path);

  function handleNavigationKey(event: React.KeyboardEvent<HTMLElement>) {
    if (event.key === "Escape" && menuOpen) {
      setMenuOpen(false);
      menuButton.current?.focus();
    }
  }

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <div className="nav-wrap">
          <a
            className="wordmark"
            href="/"
            aria-label="Vasilka Vlaykova home"
            onClick={() => setMenuOpen(false)}
          >
            <div className="wordmark-symbol" aria-hidden="true">
              VV
            </div>
            <div className="wordmark-text">
              <span className="wordmark-name">VASILKA</span>
              <span className="wordmark-surname">VLAYKOVA</span>
            </div>
          </a>

          <button
            ref={menuButton}
            className="menu-toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            onClick={() => setMenuOpen(open => !open)}
          >
            {menuOpen ? "Close ✕" : "Menu ☰"}
          </button>

          <nav
            id="primary-navigation"
            className={`primary-navigation${menuOpen ? " primary-navigation--open" : ""}`}
            aria-label="Main navigation"
            onKeyDown={handleNavigationKey}
          >
            <div className="nav-links">
              {navigation.map(item => (
                <a
                  key={item.section}
                  href={item.href}
                  className={
                    current === item.section ? "nav-link is-active" : "nav-link"
                  }
                  aria-current={current === item.section ? "page" : undefined}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div style={{ display: "flex", alignItems: "center" }}>
              <button
                className="theme-toggle"
                type="button"
                onClick={toggleTheme}
                aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
                title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              >
                {theme === "dark" ? (
                  /* Sun icon for Dark Mode (click to switch to light) */
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="5" />
                    <line x1="12" y1="1" x2="12" y2="3" />
                    <line x1="12" y1="21" x2="12" y2="23" />
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                    <line x1="1" y1="12" x2="3" y2="12" />
                    <line x1="21" y1="12" x2="23" y2="12" />
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                  </svg>
                ) : (
                  /* Moon icon for Light Mode (click to switch to dark) */
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                  </svg>
                )}
              </button>
            </div>
          </nav>
        </div>
      </header>

      <main id="main" className="page-main">
        {children}
      </main>

      <footer className="site-footer">
        <a className="footer-brand" href="/">
          VASILKA VLAYKOVA
        </a>
        <span>London, United Kingdom</span>
        <div className="footer-links">
          <a href="/Vasilka_Vlaykova_CV.pdf" download="Vasilka_Vlaykova_CV.pdf">
            Curriculum Vitae (PDF)
          </a>
          <a
            href="https://github.com/VasilkaVlaykova"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/vasilka-vlaykova-a0ba792b9/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a href="/contact/">Get in touch</a>
        </div>
        <span>© {new Date().getFullYear()} Vasilka Vlaykova</span>
      </footer>
    </div>
  );
}
