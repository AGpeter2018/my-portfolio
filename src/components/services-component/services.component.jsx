import React from "react";
import { motion } from "framer-motion";
import theme_pattern from "../../assets/theme_pattern.svg";
import services_data from "../../assets/services_data";
import "./services.style.css";

const Service = () => {
  return (
    <section id="services" className="services">
      <motion.div
        className="services-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h1>My Services</h1>
        <img src={theme_pattern} alt="" />
      </motion.div>
      <div className="services-container">
        {services_data.map((service, index) => {
          return (
            <motion.div
              className="services-format glass-card"
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05, borderColor: '#b923e1' }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3>{service.s_no}</h3>
              <h2 className="gradient-text">{service.s_name}</h2>
              <p>{service.s_desc}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Service;
