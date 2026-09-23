
import { motion } from "motion/react";
import type { Variants } from "motion/react";

interface Skill {
  name: string;
  icon: string;
}

interface SkillCategory {
  name: string;
  icon: string;
  hueA: number;
  hueB: number;
  skills: Skill[];
}

const categories: SkillCategory[] = [
  {
    name: "Frontend",
    icon: "bi bi-code-slash",
    hueA: 210,
    hueB: 260,
    skills: [
      { name: "React.js", icon: "bi bi-react" },
      { name: "JavaScript", icon: "bi bi-filetype-js" },
      { name: "TypeScript", icon: "bi bi-filetype-tsx" },
      { name: "Redux", icon: "bi bi-arrow-repeat" },
      { name: "React Router", icon: "bi bi-signpost-2" },
      { name: "Context API", icon: "bi bi-diagram-3" },
    ],
  },
  {
    name: "UI & Styling",
    icon: "bi bi-palette",
    hueA: 300,
    hueB: 340,
    skills: [
      { name: "HTML5", icon: "bi bi-filetype-html" },
      { name: "CSS3", icon: "bi bi-filetype-css" },
      { name: "Bootstrap", icon: "bi bi-bootstrap" },
      { name: "Tailwind CSS", icon: "bi bi-wind" },
      { name: "Material UI", icon: "bi bi-grid-3x3-gap" },
      { name: "Responsive Design", icon: "bi bi-phone" },
      { name: "Framer Motion", icon: "bi bi-stars" },
    ],
  },
  {
    name: "Tools & APIs",
    icon: "bi bi-tools",
    hueA: 40,
    hueB: 80,
    skills: [
      { name: "REST API", icon: "bi bi-cloud-arrow-down" },
      { name: "RTK Query", icon: "bi bi-arrow-repeat" },
      { name: "Socket.IO", icon: "bi bi-broadcast" },
      { name: "Formik / Yup", icon: "bi bi-ui-checks" },
      { name: "Git", icon: "bi bi-git" },
      { name: "GitHub", icon: "bi bi-github" },
      { name: "Postman", icon: "bi bi-send" },
    ],
  },
];

const cardVariants: Variants = {
  offscreen: {
    y: 200,
    opacity: 0,
  },

  onscreen: {
    y: 30,
    opacity: 1,
    rotate: -5,

    transition: {
      type: "spring",
      bounce: 0.35,
      duration: 0.8,
    },
  },
};

const hue = (h: number) => `hsl(${h}, 100%, 50%)`;

export default function Skills() {
  return (
    <section
      id="Skills"
      className="skills-section"
    >
      {/* TITLE */}
      <div className="skills-header">
        <p className="skills-label">MY SKILLS</p>

        <h2 className="skills-title">
          Technologies I Work With
        </h2>

        <p className="skills-description">
          A collection of technologies and tools I use to build modern,
          responsive, and interactive web applications.
        </p>
      </div>

      {/* CARDS */}
      <div className="skills-container">
        {categories.map((category, index) => (
          <SkillCard
            key={category.name}
            category={category}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}

function SkillCard({
  category,
}: {
  category: SkillCategory;
  index: number;
}) {
  const background = `linear-gradient(
    135deg,
    ${hue(category.hueA)},
    ${hue(category.hueB)}
  )`;

  return (
    <motion.div
      className="skill-card-container"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{
        amount: 0.35,
        once: true,
      }}
    >
      {/* GRADIENT BACKGROUND */}
      <motion.div
        className="skill-splash"
        style={{ background }}
        animate={{
          scale: [1, 1.04, 1],
          rotate: [-8, -5, -8],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* CARD */}
      <motion.div
        variants={cardVariants}
        className="skill-card"
        whileHover={{
          y: -8,
          rotate: -2,
          boxShadow:
            "0 25px 60px rgba(108, 99, 255, 0.22)",
        }}
      >
        {/* CATEGORY ICON */}
        <motion.div
          className="skill-category-icon"
          whileHover={{
            scale: 1.1,
            rotate: 8,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
          }}
        >
          <i className={category.icon} />
        </motion.div>

        {/* CATEGORY NAME */}
        <h3 className="skill-category-name">
          {category.name}
        </h3>

        {/* SKILLS */}
        <div className="skills-grid">
          {category.skills.map((skill) => (
            <motion.div
              key={skill.name}
              className="skill-item"
              whileHover={{
                scale: 1.06,
                y: -4,
              }}
            >
              <i className={skill.icon} />

              <span>{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
