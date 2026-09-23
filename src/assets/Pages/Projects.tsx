
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  demo: string;
}

const projects: Project[] = [
  {
    title: "NutriPlan",
    description:
      "A nutrition and recipe web application for exploring recipes and managing food information.",
    image: "/Screenshot (162).png",
    technologies: ["API", "Bootstrap", "JavaScript"],
    github: "https://github.com/yarafouad22/NutriPlan",
    demo: "https://nutri-plan-coral.vercel.app/",
  },
  {
    title: "The UX Review",
    description:
      "A UX Review web application for exploring articles, authors, categories, and digital culture content.",
    image: "/Screenshot (165).png",
    technologies: ["HTML", "CSS", "Flex"],
    github: "https://github.com/yarafouad22/flex-2.git",
    demo: "https://flex-2-nu.vercel.app/",
  },
  {
    title: "DJI Mavic 4 Pro",
    description:
      "A responsive landing page for the DJI Mavic 4 Pro, designed to showcase the drone, its features, and specifications.",
    image: "/Screenshot (166).png",
    technologies: ["HTML", "CSS", "Flex", "Responsive Design"],
    github: "https://github.com/yarafouad22/flex.git",
    demo: "https://landing-page-drone-xi.vercel.app/",
  },
  {
    title: "مدبّر",
    description:
      "A modern finance dashboard designed to organize and monitor financial information.",
    image: "/Screenshot (163).png",
    technologies: ["HTML", "CSS"],
    github: "https://github.com/yarafouad22/grid",
    demo: "https://mudabbergrid.vercel.app/",
  },
  {
    title: "GameArena",
    description:
      "A gaming platform interface with a responsive design and interactive user experience.",
    image: "/Screenshot (161).png",
    technologies: ["HTML", "CSS", "Bootstrap"],
    github: "https://github.com/yarafouad22/bootstrap",
    demo: "https://game-dragon-ivory.vercel.app/",
  },
  {
    title: "EliteHomes",
    description:
      "A responsive real estate website designed to present properties in a modern interface.",
    image: "/Screenshot (158).png",
    technologies: ["HTML", "CSS", "Bootstrap"],
    github: "https://github.com/yarafouad22/bootstrap2.git",
    demo: "https://real-estate-website-nine-mocha.vercel.app/",
  },
  {
    title: "What's For Dinner",
    description:
      "A recipe discovery application that helps users find meal ideas through an interactive interface.",
    image: "/Screenshot (156).png",
    technologies: ["JavaScript", "API", "HTML", "CSS"],
    github: "https://github.com/yarafouad22/what-is-for-dinner.git",
    demo: "https://what-is-for-dinner-rho.vercel.app/",
  },
];

const categories = [
  "All",
  "React",
  "JavaScript",
  "API",
  "Bootstrap",
  "HTML & CSS",
];

function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => {
          if (activeCategory === "React") {
            return project.technologies.includes("React");
          }

          if (activeCategory === "JavaScript") {
            return project.technologies.includes("JavaScript");
          }

          if (activeCategory === "API") {
            return project.technologies.includes("API");
          }

          if (activeCategory === "Bootstrap") {
            return project.technologies.includes("Bootstrap");
          }

          if (activeCategory === "HTML & CSS") {
            return (
              project.technologies.includes("HTML") &&
              project.technologies.includes("CSS")
            );
          }

          return true;
        });

  return (
    <section id="Projects" className="projects-section">
      <div className="projects-container">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="projects-header"
        >
          <p className="projects-label">
            MY WORK
          </p>

          <h2 className="projects-title">
            Featured Projects
          </h2>

          <p className="projects-description">
            A collection of projects showcasing my experience in frontend
            development, responsive design, APIs, and modern web technologies.
          </p>
        </motion.div>

        {/* CATEGORIES */}
        <div className="projects-categories">
          {categories.map((category) => {
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`project-category ${
                  isActive ? "active" : ""
                }`}
              >
                {category}

                {isActive && (
                  <motion.div
                    layoutId="activeProjectTab"
                    className="category-indicator"
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 30,
                    }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* PROJECTS GRID */}
        <motion.div layout className="projects-grid">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{
                  opacity: 0,
                  y: 30,
                  scale: 0.95,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  y: 20,
                  scale: 0.95,
                }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                }}
                whileHover={{
                  y: -8,
                }}
                className="project-card"
              >
                {/* IMAGE */}
                <div className="project-image-wrapper">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    whileHover={{
                      scale: 1.06,
                    }}
                    transition={{
                      duration: 0.45,
                    }}
                    className="project-image"
                  />

                  <div className="project-image-overlay" />
                </div>

                {/* CONTENT */}
                <div className="project-content">
                  <h3 className="project-title">
                    {project.title}
                  </h3>

                  <p className="project-description">
                    {project.description}
                  </p>

                  {/* TECHNOLOGIES */}
                  <div className="project-technologies">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="project-tech"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* BUTTONS */}
                  <div className="project-links">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="theme-btn project-btn"
                    >
                      <i className="bi bi-github" />
                      GitHub
                    </a>

                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="theme-btn project-btn"
                    >
                      <i className="bi bi-box-arrow-up-right" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* EMPTY STATE */}
        {filteredProjects.length === 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="projects-empty"
          >
            No projects found in this category.
          </motion.p>
        )}
      </div>
    </section>
  );
}

export default Projects;
