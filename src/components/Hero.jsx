function Hero() {
  return (
    <section className="hero section-container" id="home">
      <div className="hero-content">
        <span className="hero-badge">
          <span className="status-dot"></span>
          OPEN TO REMOTE OPPORTUNITIES
        </span>

        <p className="hero-greeting">HELLO, I'M</p>

        <h1>
          Jamilu <span>Abubakar.</span>
        </h1>

        <h2>
          Certified Software Developer &amp; Founder of Jamil Global Tech
        </h2>

        <p className="hero-description">
          I build modern, responsive websites and digital solutions
          that help businesses establish their online presence,
          connect with customers and grow. I combine technology,
          creativity and problem-solving to deliver meaningful
          digital experiences.
        </p>

        <div className="hero-actions">
          <a href="/#projects" className="btn btn-primary">
            Explore My Work <span>↗</span>
          </a>

          <a href="/#contact" className="btn btn-outline">
            Let's Talk
          </a>
        </div>

        <div className="hero-location">
          <span>📍</span> FCT-Abuja, Nigeria
          <span className="location-divider">|</span>
          Available for Remote Work
        </div>
      </div>

      <div className="hero-visual">
        <div className="hero-orbit orbit-one"></div>
        <div className="hero-orbit orbit-two"></div>

        <div className="hero-card">
          <div className="hero-card-top">
            <div className="code-window-controls">
              <span className="code-dot"></span>
              <span className="code-dot"></span>
              <span className="code-dot"></span>
            </div>

            <span className="code-label">developer.js</span>

            <span className="code-live">
              <span></span> AVAILABLE
            </span>
          </div>

          <div className="hero-editor-tabs">
            <span className="hero-editor-tab active">
              <span className="tab-file-icon">JS</span>
              developer.js
              <span className="tab-close">×</span>
            </span>

            <span className="hero-editor-tab-secondary">
              portfolio
            </span>
          </div>

          <div className="hero-code">
            <div className="hero-code-line">
              <span className="code-line-number">01</span>
              <span className="code-comment">
                // Turning ideas into digital solutions.
              </span>
            </div>

            <div className="hero-code-line">
              <span className="code-line-number">02</span>
              <span>
                <span className="code-purple">const</span>{" "}
                <span className="code-blue">developer</span> = {"{"}
              </span>
            </div>

            <div className="hero-code-line">
              <span className="code-line-number">03</span>
              <span className="code-indent">
                <span className="code-key">name</span>:{" "}
                <span className="code-green">'Jamilu Abubakar'</span>,
              </span>
            </div>

            <div className="hero-code-line">
              <span className="code-line-number">04</span>
              <span className="code-indent">
                <span className="code-key">role</span>:{" "}
                <span className="code-green">'Software Developer'</span>,
              </span>
            </div>

            <div className="hero-code-line">
              <span className="code-line-number">05</span>
              <span className="code-indent">
                <span className="code-key">company</span>:{" "}
                <span className="code-green">'Jamil Global Tech'</span>,
              </span>
            </div>

            <div className="hero-code-line">
              <span className="code-line-number">06</span>
              <span className="code-indent">
                <span className="code-key">location</span>:{" "}
                <span className="code-green">'FCT-Abuja, Nigeria'</span>,
              </span>
            </div>

            <div className="hero-code-line">
              <span className="code-line-number">07</span>
              <span className="code-indent">
                <span className="code-key">specialties</span>: [
              </span>
            </div>

            <div className="hero-code-line">
              <span className="code-line-number">08</span>
              <span className="code-indent code-extra-indent">
                <span className="code-green">'Web Development'</span>,
              </span>
            </div>

            <div className="hero-code-line">
              <span className="code-line-number">09</span>
              <span className="code-indent code-extra-indent">
                <span className="code-green">'Digital Solutions'</span>
              </span>
            </div>

            <div className="hero-code-line">
              <span className="code-line-number">10</span>
              <span className="code-indent">],</span>
            </div>

            <div className="hero-code-line">
              <span className="code-line-number">11</span>
              <span className="code-indent">
                <span className="code-key">availability</span>:{" "}
                <span className="code-orange">'Open to Work'</span>
              </span>
            </div>

            <div className="hero-code-line">
              <span className="code-line-number">12</span>
              <span>{"};"}</span>
            </div>

            <div className="hero-code-line hero-code-export">
              <span className="code-line-number">13</span>
              <span>
                <span className="code-purple">export default</span>{" "}
                developer;
              </span>
            </div>
          </div>

          <div className="hero-card-footer">
            <span>
              <span className="footer-status-dot"></span>
              PROFILE ACTIVE
            </span>
            <span>JGT / DEVELOPER 001</span>
          </div>
        </div>

        <div className="floating-badge badge-top">
          <span>✦</span> Creative Thinking
        </div>

        <div className="floating-badge badge-bottom">
          <span>⌘</span> Building Digital Solutions
        </div>
      </div>
    </section>
  );
}

export default Hero;