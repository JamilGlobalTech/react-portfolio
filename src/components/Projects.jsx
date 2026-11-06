function Projects({ projects = [] }) {
  return (
    <section className="projects-section section-container" id="projects">
      <div className="section-heading">
        <span className="section-label">MY PORTFOLIO</span>
        <h2>Projects I've <span>Worked On</span></h2>
        <p>
          A selection of projects showcasing my experience in building
          websites and digital solutions.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.id}>
            <div className="project-card-top">
              <span className="project-category">
                {project.category}
              </span>
              <span className="project-number">
                {project.number}
              </span>
            </div>

            <div className="project-card-content">
              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="project-tech">
                {project.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                View Project <span>↗</span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;