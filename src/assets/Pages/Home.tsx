import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HexagonBackground } from "@/components/animate-ui/components/backgrounds/hexagon";
import ShowProject from "./ShowProject";

export default function Home() {
  const text = `I’m a Front-End Developer passionate about turning ideas into modern, responsive, and user-friendly web experiences. I specialize in building interactive interfaces with React.js, JavaScript, TypeScript, and modern UI libraries, with a strong focus on clean code, reusable components, responsive design, and smooth user experiences. I enjoy transforming designs into functional web applications and solving real-world problems through technology. I’m always exploring new tools and best practices to improve my skills and create digital experiences that are both visually engaging and technically reliable. My goal is simple: build interfaces that look great, feel intuitive, and make a real impact.`;

  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let index = 0;

    const typing = setInterval(() => {
      setDisplayText(text.slice(0, index));
      index++;

      if (index > text.length) {
        clearInterval(typing);
      }
    }, 2);

    return () => clearInterval(typing);
  }, []);

  return (
    <>
      {/* HERO SECTION */}
<section
  id="Home"
  className="position-relative overflow-hidden text-theme"
  style={{
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    padding: "100px 0 60px",
    background: "var(--bg-color)",
    color: "var(--text-color)",
  }}
>

        {/* Hexagon Background */}
        <HexagonBackground
          className="hay"
        />

        {/* Hero Content */}
        <div
          className="container position-relative"
          style={{
            zIndex: 3,
          }}
        >
          <div className="row align-items-center g-5">

            {/* LEFT SIDE */}
            <div className="col-md-6 text-center left-side">

              {/* Profile Image */}
              
              <div className="profile-image">
                <img
                  src="/photo_2024-11-19_00-10-57-modified.png"
                  alt="Yara Fouad"
                />
              </div>

              <div className="text-center mt-3">
                <h2>YARA FOUAD</h2>

                <p>Front-End Developer</p>
              </div>

              {/* Email Button */}
              <div className="d-flex justify-content-center w-100 mt-3">
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=yaraf4902email@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                    className="btn theme-btn"
                >
                  Email me
                </a>
              </div>

              {/* Social Links */}
              <div className="footer-socials d-flex accordion justify-content-center mt-4  gap-3 ">
            <a
              href="https://github.com/yarafouad22"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <i className="bi bi-github"></i>
            </a>

            <a
              href="https://www.linkedin.com/in/yaraa-fouad/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <i className="bi bi-linkedin"></i>
            </a>

            <a
              href="mailto:yaraf4902email@gmail.com"
              aria-label="Email"
            >
              <i className="bi bi-envelope-fill"></i>
            </a>
          </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="col-md-6 text-center right-side">

              <h2 className="text-start">
                About Me
              </h2>

              <div className="about-text">
                <p className="text-start">
                  {displayText}
                </p>
              </div>

              {/* Buttons */}
              <div className="d-flex justify-content-center align-items-center gap-3 w-100 mt-4">

                <a
                  href="/Yara-Fouad-CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn theme-btn"

                >
                  Resume
                </a>

                <Link
                  to="/Projects"
                  className="btn theme-btn"

                >
                  Portfolio
                </Link>

              </div>

            </div>
          </div>


          {/* Show Project */}
          <div className="d-flex justify-content-center mt-5">
            <ShowProject />
          </div>
        </div>
      </section>
    </>
  );
}