import {
FaCode,
FaLaptopCode,
FaDatabase,
FaServer,
} from "react-icons/fa";

function Skills() {
const skills = [
{
title: "Programming Languages",
icon: <FaCode />,
items: ["C", "Java", "JavaScript", "Python"],
},
{
  title: "Frontend Development",
  icon: <FaLaptopCode />,
  items: ["HTML", "CSS", "React"],
},

{
  title: "Backend Development",
  icon: <FaServer />,
  items: ["Node.js", "Express.js", "REST APIs"],
},

{
  title: "Databases",
  icon: <FaDatabase />,
  items: ["MongoDB", "SQL"],
},

{
  title: "Core Computer Science",
  icon: <FaCode />,
  items: ["OS", "DBMS", "OOPs", "DSA"],
},

{
  title: "Problem Solving",
  icon: <FaLaptopCode />,
  items: [
    "Algorithms",
    "Logical Thinking",
    "Debugging",
  ],
},
];

return ( <section
   id="skills"
   className="section alternate-section"
 > <div className="section-heading"> <p>WHAT I WORK WITH</p> <h2>Technical Skills</h2> </div>
  <div className="skills-grid">
    {skills.map((skill) => (
      <article
        className="skill-card"
        key={skill.title}
      >
        <div className="skill-icon">
          {skill.icon}
        </div>

        <h3>{skill.title}</h3>

        <div className="skill-tags">
          {skill.items.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </article>
    ))}
  </div>
</section>
);
}

export default Skills;
