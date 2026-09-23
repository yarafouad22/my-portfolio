
import { motion } from "motion/react";
import emailjs from "@emailjs/browser";
import { useState } from "react";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    setSent(false);

    const form = e.currentTarget;

    try {
      await emailjs.send(
        "service_3tpo8f1",
        "template_nfb1p9i",
        {
          from_name: form.from_name.value,
          from_email: form.from_email.value,
          message: form.message.value,
        },
        {
          publicKey: "TDN_Ty9VLcIhDsddn",
        }
      );

      setSent(true);
      form.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="Contact" className="contact-section">
      <div className="contact-container">

        {/* Header */}
        <motion.div
          className="contact-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="contact-label">
            GET IN TOUCH
          </p>

          <h2 className="contact-title">
            Contact Me
          </h2>

          <p className="contact-description">
            Have a project in mind or want to discuss an opportunity?
            Feel free to get in touch with me.
          </p>
        </motion.div>

        <div className="row g-5 align-items-center">

          {/* Contact Information */}
          <motion.div
            className="col-lg-5"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="contact-info">

              <h3 className="contact-subtitle">
                Let's talk
              </h3>

              <p className="contact-text">
                I'm always open to discussing new projects, creative ideas,
                or opportunities to be part of your team.
              </p>

              {/* Email */}
              <a
                href="mailto:yaraf4902email@gmail.com"
                className="contact-link"
              >
                <span className="contact-icon">
                  <i className="bi bi-envelope-fill"></i>
                </span>

                <span>
                  yaraf4902email@gmail.com
                </span>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/yarafouad22"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <span className="contact-icon">
                  <i className="bi bi-github"></i>
                </span>

                <span>GitHub</span>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/yaraa-fouad/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <span className="contact-icon">
                  <i className="bi bi-linkedin"></i>
                </span>

                <span>LinkedIn</span>
              </a>

            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="col-lg-7"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <form
              onSubmit={sendEmail}
              className="contact-form"
            >

              {/* Name */}
              <div className="mb-3">
                <label
                  htmlFor="name"
                  className="form-label contact-label-text"
                >
                  Your Name
                </label>

                <input
                  type="text"
                  id="name"
                  name="from_name"
                  className="form-control contact-input"
                  placeholder="Enter your name"
                  required
                />
              </div>

              {/* Email */}
              <div className="mb-3">
                <label
                  htmlFor="email"
                  className="form-label contact-label-text"
                >
                  Your Email
                </label>

                <input
                  type="email"
                  id="email"
                  name="from_email"
                  className="form-control contact-input"
                  placeholder="Enter your email"
                  required
                />
              </div>

              {/* Message */}
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="form-label contact-label-text"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  className="form-control contact-input contact-textarea"
                  rows={6}
                  placeholder="Write your message..."
                  required
                ></textarea>
              </div>

              {/* Success */}
              {sent && (
                <motion.p
                  className="contact-success"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  Message sent successfully! ❤️
                </motion.p>
              )}

              {/* Send */}
              <motion.button
                type="submit"
                className="theme-btn contact-submit"
                disabled={loading}
                whileHover={!loading ? { scale: 1.02 } : {}}
                whileTap={!loading ? { scale: 0.98 } : {}}
              >
                <i className="bi bi-send-fill"></i>

                {loading ? "Sending..." : "Send Message"}
              </motion.button>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
