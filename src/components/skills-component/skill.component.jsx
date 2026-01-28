import React from "react";
import { motion } from "framer-motion";
import "./skill.style.css";

const skillsData = [
  { name: "HTML & CSS", level: "80%" },
  { name: "JavaScript", level: "90%" },
  { name: "React JS", level: "85%" },
  { name: "Next JS", level: "75%" },
];

const AboutSkills = () => {
  return (
    <div className="about-skills">
      {skillsData.map((skill, index) => (
        <div className="about-skill" key={index}>
          <div className="skill-info">
            <p>{skill.name}</p>
            <span>{skill.level}</span>
          </div>
          <div className="skill-bar-container">
            <motion.div
              className="skill-bar-fill"
              initial={{ width: 0 }}
              whileInView={{ width: skill.level }}
              transition={{ duration: 1, delay: 0.2 * index, ease: "easeOut" }}
              viewport={{ once: true }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default AboutSkills;
