import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import themw_pattern from "../../assets/theme_pattern.svg";
import ArrowIcon from "../../assets/arrow_icon.svg";
import "./my-work.style.css";
import mywork_data from "../../assets/mywork_data";

const MyWork = () => {
  return (
    <section id="work" className="my-work">
      <motion.div
        className="myWork-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h1>My latest work</h1>
        <img src={themw_pattern} alt="" />
      </motion.div>

      <div className="myWork-container">
        {mywork_data.map((work, index) => {
          return (
            <motion.div
              key={index}
              className="work-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <img src={work.w_img} alt={work.w_name} />
              <div className="work-info">
                <h3>{work.w_name}</h3>
                <p>Modern frontend development with high performance and interactive UI.</p>
                <div className="work-links">
                  <a href={work.w_link || "#"} className="visit-link" target="_blank" rel="noopener noreferrer">
                    Live Demo <FaExternalLinkAlt size={12} />
                  </a>
                  <a href={work.w_github || "https://github.com/AGpeter2018"} className="github-link" target="_blank" rel="noopener noreferrer">
                    <FaGithub size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        className="show-more"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <a
          href="https://github.com/AGpeter2018"
          target="_blank"
          rel="noopener noreferrer"
        >
          Show more
        </a>
        <img src={ArrowIcon} alt="" />
      </motion.div>
    </section>
  );
};

export default MyWork;
