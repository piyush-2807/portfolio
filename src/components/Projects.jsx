import {
FaLaptopCode,
FaExternalLinkAlt,
} from "react-icons/fa";

function Projects() {
return ( <section
   id="projects"
   className="section alternate-section"
 > <div className="section-heading"> <p>FEATURED WORK</p>
    <h2>My Project</h2>
  </div>

  <article className="project-card">
    <div className="project-visual">
      <div className="project-symbol">
        <FaLaptopCode />
      </div>

      <p>
        AI-Powered Fitness Technology
      </p>
    </div>

    <div className="project-content">
      <div className="project-title-row">
        <h3>RepRight</h3>

        <a
          href="https://piyush-2807.github.io/REP-RIGHT/"
          target="_blank"
          rel="noreferrer"
          aria-label="Open RepRight"
        >
          <FaExternalLinkAlt />
        </a>
      </div>

      <p>
        RepRight is an AI-powered real-time
        exercise posture correction system that
        helps users perform workouts with proper
        form.
      </p>

      <p>
        It uses TensorFlow.js and MoveNet pose
        estimation to analyze human body
        movements through live webcam input.
        The system tracks body landmarks,
        calculates joint angles, detects movement
        patterns, provides instant posture
        feedback, counts repetitions, and
        evaluates exercise accuracy.
      </p>

      <div className="project-tech">
        <span>HTML</span>
        <span>CSS</span>
        <span>JavaScript</span>
        <span>TensorFlow.js</span>
        <span>MoveNet</span>
        <span>MediaDevices API</span>
      </div>

      <a
        className="primary-button project-button"
        href="https://piyush-2807.github.io/REP-RIGHT/"
        target="_blank"
        rel="noreferrer"
      >
        View Live Project

        <FaExternalLinkAlt />
      </a>
    </div>
  </article>
</section>
);
}

export default Projects;
