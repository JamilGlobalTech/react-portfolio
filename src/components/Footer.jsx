function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-brand">
          <a href="/" className="footer-logo">
            JAMIL GLOBAL TECH
          </a>

          <p>
            Business Websites, Software &amp; Digital Solutions.
          </p>

          <p className="footer-location">
            FCT-Abuja, Nigeria | Open to Remote Opportunities
          </p>
        </div>

        <div className="footer-links" aria-label="Social and contact links">
          <a
            href="https://linkedin.com/in/jamiluabubakar"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/jamilglobaltech"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://facebook.com/jamilglobaltech"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>

          <a href="mailto:jamilglobaltech@gmail.com">
            Email
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {currentYear} Jamil Global Tech. All rights reserved.
        </p>

        <p>Designed &amp; developed by Jamilu Abubakar.</p>
      </div>
    </footer>
  );
}

export default Footer;