import React from "react";

import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/about_profile.svg";
import AboutSkills from "../skills-component/skill.component";
import AboutAchievements from "../achievement-component/achievement.component";

import "./about.style.css";

const AboutMe = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-info">
            <p>
              "I’m a Frontend Developer passionate about building simple,
              secure, and user-friendly interfaces while continuously growing my
              skills."
            </p>
            <p>
              Through hands-on projects, I’ve gained practical experience in
              building interactive features, improving performance, and
              enhancing user experience. I’m always exploring new tools and best
              practices to grow as a developer and deliver clean, modern
              solutions.
            </p>
          </div>
          <AboutSkills />
        </div>
      </div>
      <AboutAchievements />
    </div>
  );
};

export default AboutMe;
