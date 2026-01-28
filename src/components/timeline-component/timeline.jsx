import React from "react";
import { motion } from "framer-motion";
import "./timeline.style.css";

const timelineData = [
    {
        year: "2023 - Present",
        title: "Senior Frontend Developer",
        description: "Leading frontend initiatives and building high-performance web applications with React and Next.js.",
    },
    {
        year: "2021 - 2023",
        title: "Frontend Developer",
        description: "Developed interactive user interfaces and integrated complex APIs for enterprise-level projects.",
    },
    {
        year: "2019 - 2021",
        title: "UI/UX Designer & Dev",
        description: "Focused on bridging the gap between design and code, created pixel-perfect responsive layouts.",
    },
];

const Timeline = () => {
    return (
        <div className="timeline-container">
            <h2 className="timeline-main-title">My Journey</h2>
            <div className="timeline-wrapper">
                <motion.div
                    className="timeline-line"
                    initial={{ height: 0 }}
                    whileInView={{ height: "100%" }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    viewport={{ once: true }}
                />
                <div className="timeline-items">
                    {timelineData.map((item, index) => (
                        <motion.div
                            key={index}
                            className="timeline-item"
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.3 }}
                            viewport={{ once: true }}
                        >
                            <div className="timeline-dot" />
                            <div className="timeline-content glass-card">
                                <span className="year gradient-text">{item.year}</span>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Timeline;
