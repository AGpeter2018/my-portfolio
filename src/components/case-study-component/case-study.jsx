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
                        Full Stack Case Study
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        Scalable <span>Media Intelligence</span> Platform
                    </motion.h2>
                    <p className="case-desc">
                        I engineered a high-performance media management system focusing on
                        full-stack efficiency and <strong>Tailwind CSS</strong>. The platform
                        handles thousands of secure uploads via cloud infrastructure, featuring
                        on-the-fly transformations and real-time dashboarding.
                    </p>

                    <div className="key-results">
                        <div className="result-item">
                            <FaCheckCircle /> <span>Cloudinary Image Optimization</span>
                        </div>
                        <div className="result-item">
                            <FaCheckCircle /> <span>Tailwind CSS Master Layout</span>
                        </div>
                        <div className="result-item">
                            <FaCheckCircle /> <span>Secure Node/Express API</span>
                        </div>
                    </div>

                    <motion.a
                        href="#"
                        className="case-cta visit-link"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Explore MERN Architecture <FaArrowRight />
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
