import React from "react";
import { motion } from "framer-motion";
import "./achievement.component.css";

const statsData = [
  { count: "2+", label: "YEARS OF EXPERIENCE" },
  { count: "50+", label: "PROJECTS COMPLETED" },
  { count: "20+", label: "HAPPY CLIENTS" },
];

const AboutAchievements = () => {
  return (
    <div className="about-achievements">
      {statsData.map((stat, index) => (
        <React.Fragment key={index}>
          <motion.div
            className="about-achievement"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <h1 className="gradient-text">{stat.count}</h1>
            <p>{stat.label}</p>
          </motion.div>
          {index < statsData.length - 1 && <hr />}
        </React.Fragment>
      ))}
    </div>
  );
};

export default AboutAchievements;
