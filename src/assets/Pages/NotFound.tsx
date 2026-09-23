
import { motion } from "motion/react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="not-found-section">
      <motion.div
        className="not-found-content"
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="not-found-number"
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          404
        </motion.div>

        <h1>Oops! Page Not Found</h1>

        <p>
          The page you're looking for doesn't exist or may have been moved.
        </p>

        <Link to="/" className="theme-btn not-found-btn">
          <i className="bi bi-house-fill"></i>
          Back to Home
        </Link>
      </motion.div>
    </section>
  );
}
