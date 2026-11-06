import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";

function Home({ projects }) {
  return (
    <main>
      <Hero />
      <Projects projects={projects} />
      <Skills />
      <Contact />
    </main>
  );
}

export default Home;