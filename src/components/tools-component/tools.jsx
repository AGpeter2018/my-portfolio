import React from "react";
import {
    SiPostman, SiFigma,
    SiSlack, SiSpotify
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { FaTerminal, FaChrome } from "react-icons/fa";
import { motion } from "framer-motion";
import "./tools.style.css";

const toolsData = [
    { name: "VS Code", icon: <VscVscode />, desc: "Primary IDE" },
    { name: "Terminal", icon: <FaTerminal />, desc: "Power Shell/Bash" },
    { name: "Figma", icon: <SiFigma />, desc: "Design & UX" },
    { name: "Postman", icon: <SiPostman />, desc: "API Testing" },
    { name: "Chrome", icon: <FaChrome />, desc: "Debug tool" },
    { name: "Slack", icon: <SiSlack />, desc: "Team Comms" },
];

const ToolsShowcase = () => {
    return (
        <section className="tools-section">
            <h2 className="section-title">My <span>Workflow</span></h2>
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
