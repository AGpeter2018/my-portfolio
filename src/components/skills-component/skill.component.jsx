import "./skill.style.css";

const skills = [
  { name: "HTML & CSS", level: "300px" },
  { name: "JavaScript", level: "390px" },
  { name: "React JS", level: "350px" },
  { name: "Next JS", level: "300px" },
];

const AboutSkills = () => {
  return (
    <div className="about-skills">
      {skills.map((skill, index) => (
        <div className="about-skill" key={index}>
          <div>
            <p>{skill.name}</p>
          </div>
          <div>
            <hr style={{ width: skill.level }} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default AboutSkills;
