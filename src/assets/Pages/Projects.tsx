
import * as motion from "motion/react-client";
import type { Variants } from "motion/react";

export default function Projects() {
    return (
       
        
        <div style={container}>
            <div className="text-center">
              <h4>MY WORK</h4>
              <h2>Featured Projects</h2>
              <span>
                A selection of projects I built while developing my frontend
                development skills.
              </span>
            </div>
         
            <div className="projects-grid">
                {projects.map(([title, description, image, technologies, github, demo, hueA, hueB], i) => (
                    <Card
                        i={i}
                        title={title}
                        description={description}
                        image={image}
                        technologies={technologies}
                        github={github}
                        demo={demo}
                        hueA={hueA}
                        hueB={hueB}
                        key={title}
                    />
                ))}
            </div>
        </div>
    );
}

interface CardProps {
    title: string;
    description: string;
    image: string;
    technologies: string[];
    github: string;
    demo: string;
    hueA: number;
    hueB: number;
    i: number;
}

function Card({
    title,
    description,
    image,
    technologies,
    github,
    demo,
    hueA,
    hueB,
    i,
}: CardProps) {
    const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`;

    return (
        <motion.div
            className={`card-container-${i}`}
            style={cardContainer}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ amount: 0.8 }}
        >
            <div  style={{
        ...splash,
        background,
        zIndex: 0,}}
/>

<motion.div
    style={{
        ...card,
        position: "relative",
        zIndex: 1,
    }}
    variants={cardVariants}
    className="card"
>
                <img
                    src={image}
                    alt={title}
                    className="project-image"
                />

                <div className="project-content">
                    <h2>{title}</h2>

                    <p>{description}</p>

                    <div className="project-technologies">
                        {technologies.map((technology) => (
                            <span key={technology}>
                                {technology}
                            </span>
                        ))}
                    </div>

                    <div className="project-links">
                        <a
                            href={github}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="bi bi-github" />
                            GitHub
                        </a>

                        <a
                            href={demo}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Live Demo
                            <i className="bi bi-arrow-up-right" />
                        </a>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}

const cardVariants: Variants = {
    offscreen: {
        y: 300,
    },
    onscreen: {
        y: 50,
        rotate: -10,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8,
        },
    },
};

const hue = (h: number) => `hsl(${h}, 100%, 50%)`;



const container: React.CSSProperties = {
    margin: "100px auto",
    maxWidth: 1040,
    paddingBottom: 100,
    width: "100%",
};

const cardContainer: React.CSSProperties = {
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    paddingTop: 20,
    marginBottom: -120,
};

const splash: React.CSSProperties = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    clipPath: `path("M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z")`,
};

const card: React.CSSProperties = {
    fontSize: 164,
    width: 300,
    height: 430,
    display: "flex",
    flexDirection: "column",
    borderRadius: 20,
    background: "var(--white)",
    boxShadow:
        "0 0 1px hsl(0deg 0% 0% / 0.075), 0 0 2px hsl(0deg 0% 0% / 0.075), 0 0 4px hsl(0deg 0% 0% / 0.075), 0 0 8px hsl(0deg 0% 0% / 0.075), 0 0 16px hsl(0deg 0% 0% / 0.075)",
    transformOrigin: "10% 60%",
    overflow: "hidden",
};

const projects: [
    string,
    string,
    string,
    string[],
    string,
    string,
    number,
    number
][] = [
    [
        "NutriPlan",
        "A nutrition and recipe web application for exploring recipes and managing food information.",
        "Screenshot (162).png",
        [ "API", "Bootstrap","JavaScript"],
        "https://github.com/yarafouad22/NutriPlan",
        "https://nutri-plan-coral.vercel.app/",
        240,
        380,
    ],
    [
        "The UX Review",
       "The UX Review web application for exploring articles, authors, categories, and digital culture content.",
        "Screenshot (165).png",
       ["HTML", "CSS" ,"flex"],
        "https://github.com/yarafouad22/flex-2.git",
        "https://flex-2-nu.vercel.app/",
        40,
        190,
    ],
    [
        "DJI Mavic 4 Pro",
        "A responsive landing page for the DJI Mavic 4 Pro, designed to showcase the drone, its features, and specifications.",
        "Screenshot (166).png",
       ["HTML", "CSS" ,"flex","responsive design"],
        "https://github.com/yarafouad22/flex.git",
        "https://landing-page-drone-xi.vercel.app/",
        20,
        180,
    ],
    [
        "مدبّر",
        "A modern finance dashboard designed to organize and monitor financial information.",
        "Screenshot (163).png",
        ["HTML", "CSS"],
        "https://github.com/yarafouad22/grid",
        "https://mudabbergrid.vercel.app/",
        20,
        240,
    ],
    [
        "GameArena",
        "A gaming platform interface with a responsive design and interactive user experience.",
        "Screenshot (161).png",
        ["HTML", "CSS", "Bootstrap"],
        "https://github.com/yarafouad22/bootstrap",
        "https://game-dragon-ivory.vercel.app/",
        40,
        130,
    ],
    [
        "EliteHomes",
        "A responsive real estate website designed to present properties in a modern interface.",
        "Screenshot (158).png",
        ["HTML", "CSS", "Bootstrap"],
        "https://github.com/yarafouad22/bootstrap2.git",
        "https://real-estate-website-nine-mocha.vercel.app/",
        30,
        160,
    ],
    [
        "What's For Dinner",
        "A recipe discovery application that helps users find meal ideas through an interactive interface.",
        "Screenshot (156).png",
        ["JavaScript", "API", "HTML", "CSS"],
        "https://github.com/yarafouad22/what-is-for-dinner.git",
        "https://what-is-for-dinner-rho.vercel.app/",
        320,
        50,
    ],
];
