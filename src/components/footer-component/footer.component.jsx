import React from "react";

import FooterLogo from "../../assets/peter_logo.png";
import UserIcon from "../../assets/user_icon.svg";
import SocialIcon from "../social-icon-component/social-icon.component";
import "./footer.style.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top_left">
          <img src={FooterLogo} alt="" className="logo" />
          <p>
            Showcasing my skills, projects, and experiences in web development
            and design. Open to collaborations and opportunities.
          </p>
        </div>
        <form
          action="https://formspree.io/f/movnookg" // your endpoint URL
          method="POST"
          className="footer-top_right"
        >
          <div className="footer-email_input">
            <img src={UserIcon} alt="" />
            <input type="email" placeholder="Enter your email" name="email" />
          </div>
          <button type="submit" className="footer-sub">
            Subscribe
          </button>
        </form>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom_left">
          © 2025 Adeniji Peter Oluwasegun. All rights reserved.
        </p>
        <div className="footer-bottom_right">
          <SocialIcon className="footer-icon" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
