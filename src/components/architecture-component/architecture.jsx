import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { SiReact, SiNodedotjs, SiMongodb, SiFirebase } from "react-icons/si";
import "./architecture.style.css";

const Architecture = () => {
    const layers = [
        { name: "Frontend", icon: <SiReact />, list: ["React.js", "Tailwind CSS", "Framer Motion"], color: "#61DAFB" },
        { name: "API Layer", icon: <SiNodedotjs />, list: ["Node.js", "Express API", "RESTful Design"], color: "#339933" },
        { name: "Cloud Engine", icon: <SiFirebase />, list: ["Firebase Auth", "Firestore DB", "Cloudinary Media"], color: "#FFCA28" },
    ];

    return (
        <section className="arch-section">
            <div className="arch-container">
                <h2 className="section-title">System <span>Architecture</span></h2>
                <div className="arch-flow">
                    {layers.map((layer, index) => (
                        <React.Fragment key={index}>
                            <motion.div
                                className="arch-card glass-card"
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.2 }}
                                viewport={{ once: true }}
                            >
                                <div className="arch-icon" style={{ color: layer.color }}>{layer.icon}</div>
                                <h3>{layer.name}</h3>
                                <ul>
                                    {layer.list.map((item, i) => <li key={i}>{item}</li>)}
                                </ul>
                            </motion.div>
                            {index < layers.length - 1 && (
                                <motion.div
                                    className="arch-arrow"
                                    initial={{ opacity: 0, scale: 0 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: index * 0.2 + 0.1 }}
                                >
                                    <FaArrowRight />
                                </motion.div>
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Architecture;
