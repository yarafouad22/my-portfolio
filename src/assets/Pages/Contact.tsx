
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
    <section
      id="Contact"
      style={{
        minHeight: "100vh",
        padding: "100px 20px 60px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        className="container"
        style={{
          maxWidth: "1100px",
        }}
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{
            textAlign: "center",
            marginBottom: "50px",
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
            GET IN TOUCH
          </p>

          <h2
            style={{
              fontSize: "42px",
              fontWeight: 800,
              marginBottom: "15px",
            }}
          >
            Contact Me
          </h2>

          <p
            style={{
              maxWidth: "650px",
              margin: "0 auto",
              color: "#777",
              lineHeight: 1.7,
            }}
          >
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
            <h3
              style={{
                fontSize: "28px",
                fontWeight: 700,
                marginBottom: "20px",
              }}
            >
              Let's talk
            </h3>

            <p
              style={{
                color: "#777",
                lineHeight: 1.8,
                marginBottom: "30px",
              }}
            >
              I'm always open to discussing new projects, creative ideas,
              or opportunities to be part of your team.
            </p>

            {/* Email */}
            <a
              href="mailto:yaraf4902email@gmail.com"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "15px",
                textDecoration: "none",
                color: "#111",
                marginBottom: "20px",
              }}
            >
              <i
                className="bi bi-envelope-fill"
                style={{ fontSize: "24px" }}
              ></i>

              <span>yaraf4902email@gmail.com</span>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/yarafouad22"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "15px",
                textDecoration: "none",
                color: "#111",
                marginBottom: "20px",
              }}
            >
              <i
                className="bi bi-github"
                style={{ fontSize: "24px" }}
              ></i>

              <span>GitHub</span>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/yaraa-fouad/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "15px",
                textDecoration: "none",
                color: "#111",
              }}
            >
              <i
                className="bi bi-linkedin"
                style={{ fontSize: "24px" }}
              ></i>

              <span>LinkedIn</span>
            </a>
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
              style={{
                background: "#f9f9f9",
                padding: "35px",
                borderRadius: "15px",
                border: "1px solid #ddd",
              }}
            >
              {/* Name */}
              <div className="mb-3">
                <label
                  htmlFor="name"
                  className="form-label"
                  style={{ fontWeight: 600 }}
                >
                  Your Name
                </label>

                <input
                  type="text"
                  id="name"
                  name="from_name"
                  className="form-control"
                  placeholder="Enter your name"
                  required
                />
              </div>

              {/* Email */}
              <div className="mb-3">
                <label
                  htmlFor="email"
                  className="form-label"
                  style={{ fontWeight: 600 }}
                >
                  Your Email
                </label>

                <input
                  type="email"
                  id="email"
                  name="from_email"
                  className="form-control"
                  placeholder="Enter your email"
                  required
                />
              </div>

              {/* Message */}
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="form-label"
                  style={{ fontWeight: 600 }}
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  className="form-control"
                  rows={6}
                  placeholder="Write your message..."
                  required
                ></textarea>
              </div>

              {/* Success */}
              {sent && (
                <p
                  style={{
                    color: "green",
                    textAlign: "center",
                    fontWeight: 600,
                  }}
                >
                  Message sent successfully! ❤️
                </p>
              )}

              {/* Send */}
              <motion.button
                type="submit"
                className="btn btn-dark w-100"
                disabled={loading}
                whileHover={!loading ? { scale: 1.02 } : {}}
                whileTap={!loading ? { scale: 0.98 } : {}}
              >
                {loading ? "Sending..." : "Send Message"}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}