import { useRef, useState } from "react";
import { useTheme } from "../contexts/ThemeContext";

const navigation = [
  { label: "Home", href: "/", section: "home" },
  { label: "About", href: "/about/", section: "about" },
  { label: "Projects", href: "/projects/", section: "projects" },
  { label: "Learning journal", href: "/journal/", section: "journal" },
  { label: "Contact", href: "/contact/", section: "contact" },
];

function activeSection(path: string) {
  if (path.startsWith("/projects")) return "projects";
  if (path === "/about/") return "about";
  if (path === "/journal/") return "journal";
  if (path === "/contact/") return "contact";
  return "home";
}

export default function SiteLayout({ children, path }: { children: React.ReactNode; path: string }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const { toggleTheme } = useTheme();
  const current = activeSection(path);

  function handleNavigationKey(event: React.KeyboardEvent<HTMLElement>) {
    if (event.key === "Escape" && menuOpen) {
      setMenuOpen(false);
      menuButton.current?.focus();
    }
  }

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <div className="nav-wrap">
          <a className="wordmark" href="/" aria-label="Vasilka Vlaykova home" onClick={() => setMenuOpen(false)}>
            <span className="wordmark-name">VASILKA</span>
            <span className="wordmark-surname">VLAYKOVA</span>
          </a>
          <button
            ref={menuButton}
            className="menu-toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
          <nav id="primary-navigation" className={`primary-navigation${menuOpen ? " primary-navigation--open" : ""}`} aria-label="Main navigation" onKeyDown={handleNavigationKey}>
            <div className="nav-links">
              {navigation.map((item) => (
                <a
                  key={item.section}
                  href={item.href}
                  className={current === item.section ? "nav-link is-active" : "nav-link"}
                  aria-current={current === item.section ? "page" : undefined}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
            <button className="theme-toggle" type="button" onClick={toggleTheme} aria-label="Switch light or dark theme" title="Switch light or dark theme">
              Light / dark
            </button>
          </nav>
        </div>
      </header>
      <main id="main" className="page-main">{children}</main>
      <footer className="site-footer">
        <a className="footer-brand" href="/">VASILKA VLAYKOVA</a>
        <span>London, United Kingdom</span>
        <div className="footer-links">
          <a href="https://github.com/VasilkaVlaykova" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/vasilka-vlaykova-a0ba792b9/" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
        <span>© {new Date().getFullYear()} Vasilka Vlaykova</span>
      </footer>
    </div>
  );
}
