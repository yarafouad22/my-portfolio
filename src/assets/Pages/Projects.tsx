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
    <section
      id="Projects"
      style={{
        padding: "100px 20px",
        background: "#fff",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            textAlign: "center",
            marginBottom: "45px",
          }}
        >
          <p
            style={{
              fontSize: "14px",
              fontWeight: 700,
              letterSpacing: "3px",
              color: "#777",
              marginBottom: "10px",
            }}
          >
            MY WORK
          </p>

          <h2
            style={{
              fontSize: "42px",
              fontWeight: 800,
              marginBottom: "15px",
            }}
          >
            Featured Projects
          </h2>

          <p
            style={{
              maxWidth: "650px",
              margin: "0 auto",
              color: "#777",
              lineHeight: 1.7,
            }}
          >
            A collection of projects showcasing my experience in frontend
            development, responsive design, APIs, and modern web technologies.
          </p>
        </motion.div>

        {/* Categories */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            flexWrap: "wrap",
            marginBottom: "45px",
          }}
        >
          {categories.map((category) => {
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                style={{
                  position: "relative",
                  border: "none",
                  background: "transparent",
                  padding: "10px 18px",
                  fontSize: "15px",
                  fontWeight: isActive ? 700 : 500,
                  color: isActive ? "#111" : "#777",
                  cursor: "pointer",
                  transition: "0.3s",
                }}
              >
                {category}

                {isActive && (
                  <motion.div
                    layoutId="activeProjectTab"
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: "15%",
                      width: "70%",
                      height: "3px",
                      borderRadius: "10px",
                      background: "#111",
                    }}
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

        {/* Projects */}
        <motion.div
          layout
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "25px",
          }}
        >
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
                style={{
                  background: "#fff",
                  border: "1px solid #eee",
                  borderRadius: "18px",
                  overflow: "hidden",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
                }}
              >
                {/* Image */}
                <div
                  style={{
                    width: "100%",
                    height: "210px",
                    overflow: "hidden",
                    background: "#f5f5f5",
                  }}
                >
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    whileHover={{
                      scale: 1.05,
                    }}
                    transition={{
                      duration: 0.4,
                    }}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>

                {/* Content */}
                <div
                  style={{
                    padding: "22px",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "22px",
                      fontWeight: 700,
                      marginBottom: "10px",
                    }}
                  >
                    {project.title}
                  </h3>

                  <p
                    style={{
                      fontSize: "14px",
                      lineHeight: 1.7,
                      color: "#777",
                      minHeight: "70px",
                      marginBottom: "18px",
                    }}
                  >
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "7px",
                      marginBottom: "20px",
                    }}
                  >
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        style={{
                          background: "#f4f4f4",
                          color: "#333",
                          padding: "5px 10px",
                          borderRadius: "20px",
                          fontSize: "12px",
                          fontWeight: 600,
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                    }}
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-dark btn-sm"
                    >
                      <i className="bi bi-github me-1"></i>
                      GitHub
                    </a>

                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-dark btn-sm"
                    >
                      <i className="bi bi-box-arrow-up-right me-1"></i>
                      Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{
              textAlign: "center",
              color: "#777",
              marginTop: "40px",
            }}
          >
            No projects found in this category.
          </motion.p>
        )}
      </div>
    </section>
  );
}

export default Projects;