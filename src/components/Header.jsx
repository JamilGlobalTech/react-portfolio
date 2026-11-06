import { NavLink } from "react-router-dom";

function Header({ theme, onToggleTheme }) {
  return (
    <header className="site-header">
      <div className="header-container">
        <NavLink to="/" className="brand">
          <span className="brand-name">JAMIL GLOBAL TECH</span>
          <span className="brand-tagline">
            Business Websites, Software & Digital Solutions
          </span>
        </NavLink>

        <nav className="main-nav">
          <NavLink to="/" end>
            Home
          </NavLink>

          <NavLink to="/about">
            About
          </NavLink>

          <NavLink to="/projects">
            Projects
          </NavLink>

          <a href="/#contact">Contact</a>
        </nav>

        <button
          className="theme-toggle"
          onClick={onToggleTheme}
          aria-label="Toggle colour theme"
          title="Toggle dark and light mode"
        >
          {theme === "dark" ? "☀️" : "🌙"}
        </button>
      </div>
    </header>
  );
}

export default Header;