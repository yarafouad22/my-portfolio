import "./Footer.css";
import { motion } from "motion/react";

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-container">

        {/* Top */}
        <motion.div
          className="footer-top"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="footer-brand">
            <h3>
              Yara<span>.</span>
            </h3>

            <p>
              Front-End Developer passionate about creating
              modern and interactive web experiences.
            </p>
          </div>

          <div className="footer-socials">
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
        </motion.div>

        {/* Divider */}
        <div className="footer-divider"></div>

        {/* Bottom */}
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Yara Fouad. All rights reserved.
          </p>

          <a href="#Home" className="footer-back-top">
            Back to top
            <i className="bi bi-arrow-up"></i>
          </a>
        </div>

      </div>
    </footer>
  );
}