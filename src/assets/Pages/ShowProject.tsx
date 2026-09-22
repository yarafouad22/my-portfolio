
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface Skill {
  name: string;
  category: string;
  icon: string;
}

const skills: Skill[] = [
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

function Skills() {
  const [activeCategory, setActiveCategory] = useState("All");

  const displayedSkills =
    activeCategory === "All"
      ? skills
      : skills.filter(
          (skill) => skill.category === activeCategory
        );

  return (
    <section
      id="Skills"
      style={{
        padding: "100px 20px",
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
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: 0.15,
          }}
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
                  border: "none",
                  background: "transparent",
                  padding: "10px 18px",
                  fontSize: "15px",
                  fontWeight: isActive ? 700 : 500,
                  color: isActive ? "#111" : "#777",
                  cursor: "pointer",
                  borderBottom: isActive
                    ? "3px solid #111"
                    : "3px solid transparent",
                  transition: "all 0.3s ease",
                }}
              >
                {category}
              </button>
            );
          })}
        </motion.div>

        {/* Skills */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{
              duration: 0.35,
            }}
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(180px, 1fr))",
              gap: "15px",
            }}
          >
            {displayedSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                  ease: "easeOut",
                }}
                whileHover={{
                  y: -6,
                  scale: 1.02,
                }}
                style={{
                  padding: "20px",
                  border: "1px solid #ddd",
                  background: "#f9f9f9",
                  borderRadius: "12px",
                  textAlign: "center",
                  cursor: "default",
                }}
              >
                <motion.i
                  className={skill.icon}
                  whileHover={{
                    scale: 1.15,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 15,
                  }}
                  style={{
                    fontSize: "28px",
                    display: "block",
                    marginBottom: "10px",
                  }}
                />

                <strong>{skill.name}</strong>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

export default Skills;
