import React from "react";
import { motion } from "framer-motion";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/large.jpg";
import AboutSkills from "../skills-component/skill.component";
import AboutAchievements from "../achievement-component/achievement.component";
import TechMarquee from "../marquee-component/marquee.component";
import Timeline from "../timeline-component/timeline";
import "./about.style.css";

const AboutMe = () => {
  return (
    <section id="about" className="about">
      <motion.div
        className="about-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </motion.div>

      <div className="about-section">
        <motion.div
          className="about-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img src={profile_img} alt="" />
        </motion.div>

        <motion.div
          className="about-right"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="about-info">
            <p>
              "I am a Software Engineer focused on designing scalable,
              efficient, and secure digital architectures. I bridge the gap between
              complex backend logic and intuitive frontend interactions."
            </p>
            <p>
              My approach goes beyond writing code; I engineer robust end-to-end solutions
              using the latest cloud-native technologies. From optimizing database queries
              to perfecting liquid-smooth UI animations, I ensure every system I build is
              performant, accessible, and ready for scale.
            </p>
          </div>
          <AboutSkills />
        </motion.div>
      </div>

      <AboutAchievements />
      <TechMarquee />
      <Timeline />
    </section>
  );
};

export default AboutMe;
