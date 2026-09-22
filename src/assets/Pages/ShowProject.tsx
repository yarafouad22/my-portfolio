import { AnimatePresence, motion, type Transition } from "motion/react";
import { useEffect, useState } from "react";

interface Skill {
  name: string;
  category: string;
  icon: string;
}

const skills: Skill[] = [
  // Frontend
  {
    name: "React.js",
    category: "Frontend",
    icon: "bi bi-react",
  },
  {
    name: "JavaScript",
    category: "Frontend",
    icon: "bi bi-filetype-js",
  },
  {
    name: "TypeScript",
    category: "Frontend",
    icon: "bi bi-filetype-tsx",
  },
  {
    name: "Redux",
    category: "Frontend",
    icon: "bi bi-arrow-repeat",
  },
  {
    name: "React Router",
    category: "Frontend",
    icon: "bi bi-signpost-2",
  },
  {
    name: "Context API",
    category: "Frontend",
    icon: "bi bi-diagram-3",
  },

  // UI & Styling
  {
    name: "HTML5",
    category: "UI & Styling",
    icon: "bi bi-filetype-html",
  },
  {
    name: "CSS3",
    category: "UI & Styling",
    icon: "bi bi-filetype-css",
  },
  {
    name: "Bootstrap",
    category: "UI & Styling",
    icon: "bi bi-bootstrap",
  },
  {
    name: "Tailwind CSS",
    category: "UI & Styling",
    icon: "bi bi-wind",
  },
  {
    name: "Material UI",
    category: "UI & Styling",
    icon: "bi bi-grid-3x3-gap",
  },
  {
    name: "Responsive Design",
    category: "UI & Styling",
    icon: "bi bi-phone",
  },
  {
    name: "Framer Motion",
    category: "UI & Styling",
    icon: "bi bi-stars",
  },

  // Tools & APIs
  {
    name: "REST API",
    category: "Tools & APIs",
    icon: "bi bi-cloud-arrow-down",
  },
  {
    name: "RTK Query",
    category: "Tools & APIs",
    icon: "bi bi-arrow-repeat",
  },
  {
    name: "Socket.IO",
    category: "Tools & APIs",
    icon: "bi bi-broadcast",
  },
  {
    name: "Formik / Yup",
    category: "Tools & APIs",
    icon: "bi bi-ui-checks",
  },
  {
    name: "Git",
    category: "Tools & APIs",
    icon: "bi bi-git",
  },
  {
    name: "GitHub",
    category: "Tools & APIs",
    icon: "bi bi-github",
  },
  {
    name: "Postman",
    category: "Tools & APIs",
    icon: "bi bi-send",
  },
];

const categories = [
  "All",
  "Frontend",
  "UI & Styling",
  "Tools & APIs",
];

const spring: Transition = {
  type: "spring",
  damping: 20,
  stiffness: 300,
};

function shuffle<T>(array: T[]): T[] {
  return [...array].sort(() => Math.random() - 0.5);
}

function Skills() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [displayedSkills, setDisplayedSkills] = useState<Skill[]>(skills);

  // Filter skills according to category
  useEffect(() => {
    const filtered =
      activeCategory === "All"
        ? skills
        : skills.filter((skill) => skill.category === activeCategory);

    setDisplayedSkills(filtered);
  }, [activeCategory]);

  // Reorder skills automatically
  useEffect(() => {
    const timeout = setTimeout(() => {
      setDisplayedSkills((current) => shuffle(current));
    }, 1200);

    return () => clearTimeout(timeout);
  }, [displayedSkills]);

  return (
    <section
      id="Skills"
      style={{
        padding: "100px 20px",
        background: "#fff",
      }}
    >
      <div
        style={{
          maxWidth: "950px",
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
            MY SKILLS
          </p>

          <h2
            style={{
              fontSize: "42px",
              fontWeight: 800,
              marginBottom: "15px",
            }}
          >
            Technologies I Work With
          </h2>

          <p
            style={{
              maxWidth: "650px",
              margin: "0 auto",
              color: "#777",
              lineHeight: 1.7,
            }}
          >
            A collection of technologies and tools I use to build modern,
            responsive, and interactive web applications.
          </p>
        </motion.div>

        {/* Categories */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "8px",
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
                    layoutId="activeSkillTab"
                    style={{
                      position: "absolute",
                      left: "15%",
                      bottom: 0,
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

        {/* Skills Container */}
        <div
          style={{
            minHeight: "330px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <motion.ul
            layout
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
              gap: "16px",
              maxWidth: "850px",
            }}
          >
            <AnimatePresence mode="popLayout">
              {displayedSkills.map((skill) => (
                <motion.li
                  key={skill.name}
                  layout
                  initial={{
                    opacity: 0,
                    scale: 0.7,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.7,
                    y: -20,
                  }}
                  transition={spring}
                  whileHover={{
                    scale: 1.06,
                    y: -5,
                  }}
                  style={{
                    width: "180px",
                    minHeight: "100px",
                    padding: "20px 15px",
                    borderRadius: "16px",
                    background: "#f8f8f8",
                    border: "1px solid #eeeeee",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "10px",
                    cursor: "default",
                    boxShadow: "0 8px 25px rgba(0,0,0,0.05)",
                  }}
                >
                  {/* Icon */}
                  <i
                    className={skill.icon}
                    style={{
                      fontSize: "30px",
                      color: "#111",
                    }}
                  />

                  {/* Skill name */}
                  <span
                    style={{
                      fontSize: "14px",
                      fontWeight: 600,
                      color: "#222",
                      textAlign: "center",
                    }}
                  >
                    {skill.name}
                  </span>
                </motion.li>
              ))}
            </AnimatePresence>
          </motion.ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;