import React from "react";

import "./content-right.style.css";

const ContentRight = () => {
  return (
    <div className="content-right-block">
      <form className="content-right">
        <label htmlFor="">Your Name</label>
        <input type="text" placeholder="Enter your name" name="name" />
        <label htmlFor="">Your Email</label>
        <input type="email" placeholder="Enter your email" name="email" />
        <label htmlFor="">Write your message here</label>
        <textarea name="" rows="8" placeholder="Enter your message"></textarea>
        <button type="submit" className="contact-submit">
          Submit now
        </button>
      </form>
    </div>
  );
};

export default ContentRight;
