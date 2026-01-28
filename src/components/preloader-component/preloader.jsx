import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./preloader.style.css";

const Preloader = ({ finishLoading }) => {
    const [percent, setPercent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setPercent((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(finishLoading, 500);
                    return 100;
                }
                return prev + 2;
            });
        }, 30);
        return () => clearInterval(interval);
    }, [finishLoading]);

    return (
        <motion.div
            className="preloader"
            exit={{ y: "-100%" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
            <div className="preloader-content">
                <motion.h1
                    className="gradient-text preloader-logo"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    ALPHAPETER
                </motion.h1>
                <div className="load-bar">
                    <motion.div
                        className="load-fill"
                        style={{ width: `${percent}%` }}
                    />
                </div>
                <span className="percent">{percent}%</span>
            </div>
        </motion.div>
    );
};

export default Preloader;
