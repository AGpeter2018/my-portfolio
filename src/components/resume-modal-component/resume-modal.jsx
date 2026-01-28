import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaFileDownload } from "react-icons/fa";
import "./resume-modal.style.css";

const ResumeModal = ({ isOpen, onClose }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="modal-overlay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                >
                    <motion.div
                        className="resume-modal-content glass-card"
                        initial={{ scale: 0.8, opacity: 0, y: 40 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.8, opacity: 0, y: 40 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="modal-header">
                            <h2 className="gradient-text">Professional Resume</h2>
                            <button className="close-btn" onClick={onClose}><FaTimes /></button>
                        </div>

                        <div className="resume-body">
                            <div className="resume-section">
                                <h3>Executive Summary</h3>
                                <p>Results-driven Frontend Developer with a focus on React, Next.js, and modern UI/UX principles. Passionate about building highly interactive and performance-optimized web architectures.</p>
                            </div>

                            <div className="resume-section">
                                <h3>Technical Proficiencies</h3>
                                <div className="tech-pills">
                                    <span>React.js</span> <span>Next.js</span> <span>JavaScript (ES6+)</span>
                                    <span>TypeScript</span> <span>Tailwind CSS</span> <span>Framer Motion</span>
                                    <span>Node.js</span> <span>Git/GitHub</span>
                                </div>
                            </div>

                            <div className="resume-section">
                                <h3>Core Competencies</h3>
                                <ul>
                                    <li>Scalable Frontend Architecture</li>
                                    <li>Responsive Design & Glassmorphism</li>
                                    <li>Advanced CSS Animations (Framer Motion)</li>
                                    <li>API Integration & Performance Tuning</li>
                                </ul>
                            </div>
                        </div>

                        <div className="modal-footer">
                            <a href="#" className="download-btn">
                                Download PDF <FaFileDownload />
                            </a>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ResumeModal;
