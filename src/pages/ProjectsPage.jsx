import Projects from "../components/Projects";

function ProjectsPage({ projects }) {
  return (
    <main className="projects-page">
      <section className="projects-page-intro section-container">
        <span className="section-label">MY WORK</span>

        <h1>
          Featured <span>Projects</span>
        </h1>

        <p>
          Explore selected projects that demonstrate my
          approach to software development, web design
          and practical digital solutions.
        </p>
      </section>

      <Projects projects={projects} />
    </main>
  );
}

export default ProjectsPage;