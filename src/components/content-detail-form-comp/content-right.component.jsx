import React from "react";
import toast from "react-hot-toast";
import "./content-right.style.css";

const ContentRight = () => {
  const handleSubmit = (e) => {
    // We let formspree handle the submission but also show a toast
    // Note: If you want to prevent refresh, you would use e.preventDefault() 
    // and manual fetch, but for now we just show toast on click/submit.
    toast.success("Message sent! I'll get back to you soon.", {
      style: {
        background: "#1f1f1f",
        color: "#fff",
        border: "1px solid rgba(255, 255, 255, 0.1)",
      },
      iconTheme: {
        primary: "#b923e1",
        secondary: "#fff",
      },
    });
  };

  return (
    <div className="content-right-block">
      <form
        className="content-right"
        action="https://formspree.io/f/movnookg"
        method="POST"
        onSubmit={handleSubmit}
      >
        <label htmlFor="name">Your Name</label>
        <input type="text" placeholder="Enter your name" name="name" required />
        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          name="email"
          required
        />
        <label htmlFor="message">Write your message here</label>
        <textarea
          name="message"
          rows="8"
          placeholder="Enter your message"
          required
        ></textarea>
        <button type="submit" className="contact-submit">
          Submit now
        </button>
      </form>
    </div>
  );
};

export default ContentRight;
