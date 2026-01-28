import React from "react";
import {
    SiFigma, SiSlack, SiSpotify,
    SiTailwindcss, SiMongodb, SiExpress, SiNodedotjs, SiCloudinary, SiFirebase
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { FaTerminal, FaChrome, FaReact } from "react-icons/fa";
import { motion } from "framer-motion";
import "./tools.style.css";

const toolsData = [
    { group: "Frontend", name: "React", icon: <FaReact />, desc: "Library & Logic" },
    { group: "Frontend", name: "Tailwind", icon: <SiTailwindcss />, desc: "Modern CSS" },
    { group: "Backend", name: "Node.js", icon: <SiNodedotjs />, desc: "Server Logic" },
    { group: "Database", name: "MongoDB", icon: <SiMongodb />, desc: "NoSQL Data" },
    { group: "Cloud", name: "Firebase", icon: <SiFirebase />, desc: "Real-time & Auth" },
    { group: "Cloud", name: "Cloudinary", icon: <SiCloudinary />, desc: "Digital Assets" },
];

const ToolsShowcase = () => {
    return (
        <section className="tools-section">
            <h2 className="section-title">High-End <span>Tech Stack</span></h2>
            <div className="tools-grid">
                {toolsData.map((tool, index) => (
                    <motion.div
                        key={index}
                        className="tool-card glass-card"
                        whileHover={{ y: -10, scale: 1.05 }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <span className="tool-group">{tool.group}</span>
                        <div className="tool-icon">{tool.icon}</div>
                        <h3>{tool.name}</h3>
                        <p>{tool.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default ToolsShowcase;
