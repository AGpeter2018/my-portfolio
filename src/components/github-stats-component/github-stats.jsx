import React from "react";
import { motion } from "framer-motion";
import "./github-stats.style.css";

const GitHubStats = () => {
    return (
        <section className="github-section">
            <h2 className="section-title">Coding <span>Activity</span></h2>
            <div className="github-stats-container">
                <motion.div
                    className="github-card-wrapper"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    {/* Custom Styled GitHub Stats Card using community patterns */}
                    <div className="github-card glass-card">
                        <div className="gh-header">
                            <img src="https://github-readme-stats.vercel.app/api?username=AGpeter2018&show_icons=true&theme=transparent&hide_border=true&title_color=b923e1&text_color=ffffff&icon_color=b923e1&bg_color=00000000" alt="GitHub Stats" />
                        </div>
                    </div>

                    <div className="github-card glass-card">
                        <div className="gh-header">
                            <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=AGpeter2018&layout=compact&theme=transparent&hide_border=true&title_color=b923e1&text_color=ffffff&bg_color=00000000" alt="Top Languages" />
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className="github-cta"
                    whileHover={{ scale: 1.05 }}
                >
                    <a href="https://github.com/AGpeter2018" target="_blank" rel="noopener noreferrer" className="visit-link">
                        Follow on GitHub
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default GitHubStats;
