import {
FaGithub,
FaLinkedin,
FaArrowDown,
} from "react-icons/fa";

function Hero() {
return ( <section id="home" className="hero"> <div className="hero-content"> <p className="intro-text">Hello, I am</p>
    <h1>
      Piyush <span>Chowdhary</span>
    </h1>

    <h2>Aspiring Software Engineer</h2>

    <p className="hero-description">
      A passionate Computer Science student focused on building
      practical web applications, solving algorithmic problems,
      and continuously improving my software engineering skills.
    </p>

    <div className="hero-buttons">
      <a href="#projects" className="primary-button">
        View My Work
      </a>

      <a href="#contact" className="secondary-button">
        Contact Me
      </a>
    </div>

    <div className="social-links">
      <a
        href="https://github.com/piyush-2807"
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub"
      >
        <FaGithub />
      </a>

      <a
        href="https://www.linkedin.com/in/piyush-chowdhary-a91524326"
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn"
      >
        <FaLinkedin />
      </a>
    </div>
  </div>

  <a href="#about" className="scroll-down">
    <FaArrowDown />
  </a>
</section>
);
}

export default Hero;
