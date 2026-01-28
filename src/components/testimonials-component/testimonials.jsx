import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";
import "./testimonials.style.css";

const testimonials = [
    {
        name: "Samuel Johnson",
        role: "Senior Project Manager",
        text: "Peter's ability to transform complex requirements into seamless, high-performance interfaces is truly impressive. A top-tier dev.",
    },
    {
        name: "Elena Rodriguez",
        role: "UX Lead at TechFlow",
        text: "Highly creative and technically proficient. The interactive features he built for our platform significantly improved user engagement.",
    },
    {
        name: "Dr. Ahmed Khan",
        role: "Founder, ScaleUp AI",
        text: "Reliable, fast, and pays incredible attention to detail. His work with glassmorphism and animations elevated our entire product.",
    },
];

const Testimonials = () => {
    return (
        <section className="testimonials-section">
            <h2 className="section-title">What <span>People Say</span></h2>
            <div className="testimonials-grid">
                {testimonials.map((item, index) => (
                    <motion.div
                        key={index}
                        className="testimonial-card glass-card"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.2 }}
                        viewport={{ once: true }}
                    >
                        <FaQuoteLeft className="quote-icon" />
                        <p className="testimonial-text">{item.text}</p>
                        <div className="testimonial-author">
                            <h4>{item.name}</h4>
                            <span>{item.role}</span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
