const skillCategories = [
  {
    title: "Software Development",
    icon: "💻",
    description: "Building modern, responsive and functional digital solutions.",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React.js",
      "Frontend Development",
      "Responsive Web Design",
      "Component-Based Development",
      "React Router",
    ],
  },
  {
    title: "UI/UX & Creative Design",
    icon: "🎨",
    description: "Combining creativity, usability and visual communication.",
    skills: [
      "UI/UX Design",
      "User Interface Design",
      "Graphic Design",
      "Web Design",
      "Visual Communication",
    ],
  },
  {
    title: "Professional & Business Skills",
    icon: "🚀",
    description: "Delivering value through technology and problem-solving.",
    skills: [
      "Problem Solving",
      "Project Coordination",
      "Business Operations",
      "Communication",
      "Creative Thinking",
      "Customer Relations",
    ],
  },
];

const qualifications = [
  {
    title: "Certified Software Developer",
    institution: "3MTT Nigeria",
    detail: "Software Development Programme",
  },
  {
    title: "UI/UX Design Programme",
    institution: "CcHUB Mastercard Foundation",
    detail: "GATEWAY Programme",
  },
  {
    title: "Bachelor of Science (B.Sc.) Economics",
    institution: "University of Abuja",
    detail: "2015 – 2019",
  },
];

function Skills() {
  return (
    <section className="skills-section section-container" id="skills">
      <div className="section-heading">
        <span className="section-label">MY CAPABILITIES</span>

        <h2>
          Skills &amp; <span>Expertise</span>
        </h2>

        <p>
          Combining software development, creative design and
          practical business experience to build meaningful
          digital solutions. Committed to continuous improvement
          through hands-on projects and professional development.
        </p>
      </div>

      <div className="skills-grid">
        {skillCategories.map((category) => (
          <article className="skill-card" key={category.title}>
            <div className="skill-icon">{category.icon}</div>

            <h3>{category.title}</h3>

            <p className="skill-description">
              {category.description}
            </p>

            <div className="skill-list">
              {category.skills.map((skill) => (
                <span className="skill-tag" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>

      <div className="qualifications-section">
        <div className="qualifications-heading">
          <span className="section-label">
            MY ACADEMIC &amp; PROFESSIONAL BACKGROUND
          </span>

          <h3>
            Education &amp; <span>Certifications</span>
          </h3>
        </div>

        <div className="qualifications-grid">
          {qualifications.map((qualification) => (
            <article
              className="qualification-card"
              key={qualification.title}
            >
              <span className="qualification-icon">✦</span>

              <div>
                <h4>{qualification.title}</h4>

                <p className="qualification-institution">
                  {qualification.institution}
                </p>

                <p className="qualification-detail">
                  {qualification.detail}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;