
import { useEffect, useState } from "react";


export default function Home() {
    const text = `I’m a Front-End Developer passionate about turning ideas into modern, responsive, and user-friendly web experiences. I specialize in building interactive interfaces with React.js, JavaScript, TypeScript, and modern UI libraries, with a strong focus on clean code, reusable components, responsive design, and smooth user experiences. I enjoy transforming designs into functional web applications and solving real-world problems through technology. I’m always exploring new tools and best practices to improve my skills and create digital experiences that are both visually engaging and technically reliable. My goal is simple: build interfaces that look great, feel intuitive, and make a real impact.`;
 
    const [displayText, setDisplayText] = useState("");
  
  useEffect(() => { 
    let index = 0; 
    const typing = setInterval(() => { setDisplayText(text.slice(0, index));
         index++;
          if (index > text.length) { 
            clearInterval(typing); } }, 10);
             return () => clearInterval(typing); }, []);
  return (
<div className="container mt-5">
<div className="row align-items-center">

  {/* Left side */}
  <div className="col-md-6 text-center">

    {/* Profile Image */}
    <div className="profile-image">
      <img
        src="\photo_2024-11-19_00-10-57-modified.png"
        alt="Yara Fouad"
      />
    </div>
     <div className="text-center">

    <h2>YARA FOUAD</h2>

    <p>Front-End Developer</p>
     </div>

    {/* Email Button */}
   <div className="d-flex justify-content-center w-100">
    <a
      href="https://mail.google.com/mail/?view=cm&fs=1&to=yaraf4902email@gmail.com"
      target="_blank"
      rel="noopener noreferrer"
      className="btn btn-dark"
    >
      Email me
    </a>
    </div>

    {/* Social Links */}
    <div className="social-links">

      {/* Email */}
      <a
        href="https://mail.google.com/mail/?view=cm&fs=1&to=yaraf4902email@gmail.com"
         target="_blank"
      rel="noopener noreferrer"
      >
        <i className="bi bi-envelope-fill"></i>
      </a>

      {/* GitHub */}
      <a
        href="https://github.com/yarafouad22"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <i className="bi bi-github"></i>
      </a>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/yaraa-fouad/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <i className="bi bi-linkedin"></i>
      </a>

    </div>

  </div>


  {/* Right side */}
  <div className="col-md-6 text-center">
    <h2 className="text-start">About Me</h2>
    <div className="about-text">
    <p className="text-start" >{displayText}</p>
    </div>
   <div className="d-flex justify-content-center align-items-center gap-4 w-100">
   <a
  href="/Yara-Fouad-CV.pdf"
  target="_blank"
  className="btn btn-dark"
>
  Resume
</a>
    <a
      href="/Projects"
      className="btn btn-dark"
    >
      Portfolio
    </a>
    </div>

  </div>

</div>
</div>


  )
}
