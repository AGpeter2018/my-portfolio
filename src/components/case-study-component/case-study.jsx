import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";
import caseStudyImg from "../../assets/project_1.svg";
import "./case-study.style.css";

const FeaturedCaseStudy = () => {
    return (
        <section className="case-study-section">
            <div className="case-study-container glass-card">
                <div className="case-study-content">
                    <motion.span
                        className="badge"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                    >
                        Featured Case Study
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        Revolutionizing <span>Digital Banking</span> Experience
                    </motion.h2>
                    <p className="case-desc">
                        I led the frontend architecture for a modern fintech platform, focusing on
                        security tokens, real-time data visualization, and sub-second load times.
                    </p>

                    <div className="key-results">
                        <div className="result-item">
                            <FaCheckCircle /> <span>40% Faster Load Times</span>
                        </div>
                        <div className="result-item">
                            <FaCheckCircle /> <span>High-End Accessibility</span>
                        </div>
                        <div className="result-item">
                            <FaCheckCircle /> <span>Real-time Dashboarding</span>
                        </div>
                    </div>

                    <motion.a
                        href="#"
                        className="case-cta visit-link"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Read Full Case Study <FaArrowRight />
                    </motion.a>
                </div>

                <motion.div
                    className="case-study-img"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <img src={caseStudyImg} alt="Case Study" />
                </motion.div>
            </div>
        </section>
    );
};

export default FeaturedCaseStudy;
