import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";
import "./faq.style.css";

const faqData = [
    {
        question: "What is your preferred tech stack?",
        answer: "I specialize in the MERN stack (MongoDB, Express, React, Node.js) with a heavy focus on Next.js and Framer Motion for high-end frontend experiences.",
    },
    {
        question: "Are you available for freelance or full-time work?",
        answer: "Yes! I am currently open to both freelance projects and full-time frontend engineering roles where I can contribute to scaling user interfaces.",
    },
    {
        question: "How do you approach a new project?",
        answer: "I start by understanding the user problem, creating a clean UI architecture in Figma, and then building it with a focus on performance, responsiveness, and accessibility.",
    },
    {
        question: "What is your typical project turnaround time?",
        answer: "A standard landing page takes 3-5 days, while complex web applications usually range from 2-4 weeks depending on the feature requirements.",
    },
];

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    return (
        <section className="faq-section">
            <div className="faq-container">
                <h2 className="section-title">Common <span>Questions</span></h2>
                <div className="faq-list">
                    {faqData.map((item, index) => (
                        <div key={index} className="faq-item glass-card">
                            <div
                                className="faq-question"
                                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                            >
                                <h3>{item.question}</h3>
                                {activeIndex === index ? <FaMinus /> : <FaPlus />}
                            </div>
                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        className="faq-answer"
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <p>{item.answer}</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
