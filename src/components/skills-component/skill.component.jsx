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
      {/* {skills.map((skill, index) => (
        <div className="about-skill" key={index}>
            <p>{skill.name}</p>
            <hr style={{ width: skill.level }} />       
        </div>
      ))} */}
      <div className="about-skill">
        <p>HTML & CSS</p>
        <hr className="html-class" />
      </div>
      <div className="about-skill">
        <p>JavaScript</p>
        <hr className="JavaScript-class" />
      </div>
      <div className="about-skill">
        <p>React JS</p>
        <hr className="JS-class" />
      </div>
      <div className="about-skill">
        <p>Next JS</p>
        <hr className="Next-class" />
      </div>
    </div>
  );
};

export default AboutSkills;
