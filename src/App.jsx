import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import ProjectsPage from "./pages/ProjectsPage";

import "./App.css";

const initialProjects = [
  {
    id: 1,
    number: "01",
    title: "NorthStar Tech",
    category: "Business Website",
    description:
      "A modern business landing page designed to present services, build credibility and make it easy for customers to get in touch.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://jamilglobaltech.github.io/landing-page-project/",
  },
  {
    id: 2,
    number: "02",
    title: "BillSplit",
    category: "Web Application",
    description:
      "A practical bill-splitting application designed to help users calculate and share expenses with ease.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://jamilglobaltech.github.io/BillSplit/",
  },
  {
    id: 3,
    number: "03",
    title: "Jamil Global Tech",
    category: "Business Website",
    description:
      "The official website of Jamil Global Tech, showcasing digital services, business solutions and professional contact information.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://jamilglobaltech.com",
  },
];

function App() {
  const [projects] = useState(initialProjects);
  const [theme, setTheme] = useState("dark");

  function handleToggleTheme() {
    setTheme((currentTheme) =>
      currentTheme === "dark" ? "light" : "dark"
    );
  }

  return (
    <BrowserRouter>
      <div className={`app ${theme}-theme`}>
        <Header
          theme={theme}
          onToggleTheme={handleToggleTheme}
        />

        <Routes>
          <Route
            path="/"
            element={<Home projects={projects} />}
          />

          <Route path="/about" element={<About />} />

          <Route
            path="/projects"
            element={<ProjectsPage projects={projects} />}
          />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;