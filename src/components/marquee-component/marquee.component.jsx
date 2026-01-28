import React from "react";
import "./marquee.style.css";
import {
    FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs,
    FaGitAlt, FaChrome, FaFigma
} from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiVite } from "react-icons/si";

const techStack = [
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "CSS3", icon: <FaCss3Alt /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "React", icon: <FaReact /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "Tailwind", icon: <SiTailwindcss /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Git", icon: <FaGitAlt /> },
    { name: "Vite", icon: <SiVite /> },
    { name: "Chrome", icon: <FaChrome /> },
    { name: "Figma", icon: <FaFigma /> },
];

const TechMarquee = () => {
    return (
        <div className="tech-marquee-container">
            <div className="marquee-content">
                {[...techStack, ...techStack].map((tech, index) => (
                    <div key={index} className="tech-item">
                        <span className="tech-icon">{tech.icon}</span>
                        <span className="tech-name">{tech.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TechMarquee;
