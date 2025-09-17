import "./achievement.component.css";

const achievements = [
  { value: "15+", label: "PROJECTS BUILT" },
  { value: "5", label: "TECHNOLOGIES MASTERED" },
  { value: "∞", label: "HOURS OF LEARNING" },
  { value: "20+", label: "UI COMPONENTS DESIGNED" },
];

const AboutAchievements = () => {
  return (
    <div className="about-achievements">
      {achievements.map((item, index) => (
        <>
          <div className="about-achievement" key={index}>
            <h1>{item.value}</h1>
            <p>{item.label}</p>
          </div>
          {index < achievements.length - 1 && <hr />}
        </>
      ))}
    </div>
  );
};

export default AboutAchievements;
