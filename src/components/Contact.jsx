import {
FaGithub,
FaLinkedin,
} from "react-icons/fa";

function Contact() {
return ( <section
   id="contact"
   className="section contact-section"
 > <div className="section-heading"> <p>GET IN TOUCH</p>
    <h2>Let's Connect</h2>
  </div>

  <p className="contact-description">
    I am always interested in learning
    opportunities, internships, collaborative
    projects, and meaningful software
    development work.
  </p>

  <a
    className="email-link"
    href="mailto:piyushchowdhary5151@gmail.com"
  >
    piyushchowdhary5151@gmail.com
  </a>

  <div className="contact-socials">
    <a
      href="https://github.com/piyush-2807"
      target="_blank"
      rel="noreferrer"
    >
      <FaGithub />

      GitHub
    </a>

    <a
      href="https://www.linkedin.com/in/piyush-chowdhary-a91524326"
      target="_blank"
      rel="noreferrer"
    >
      <FaLinkedin />

      LinkedIn
    </a>
  </div>
</section>
);
}

export default Contact;
