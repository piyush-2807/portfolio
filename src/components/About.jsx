function About() {
return ( <section id="about" className="section"> <div className="section-heading"> <p>GET TO KNOW ME</p> <h2>About Me</h2> </div>
  <div className="about-container">
    <div className="about-avatar">
      <div className="avatar-circle">PC</div>
    </div>

    <div className="about-content">
      <h3>Building solutions through code.</h3>

      <p>
        I am a third-year Computer Science and Engineering student
        at Gokaraju Rangaraju Institute of Engineering and
        Technology (GRIET). I am interested in software
        development, full-stack web technologies, data structures,
        and problem solving.
      </p>

      <p>
        I enjoy transforming ideas into useful applications and
        learning how modern software systems are designed. I am
        currently improving my React, Node.js, backend development,
        and algorithmic problem-solving skills.
      </p>

      <div className="education-box">
        <strong>Education</strong>

        <span>
          B.Tech — Computer Science and Engineering
          <br />
          Gokaraju Rangaraju Institute of Engineering and
          Technology
        </span>
      </div>
    </div>
  </div>
</section>
);
}

export default About;
