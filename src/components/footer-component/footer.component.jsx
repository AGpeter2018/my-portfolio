import React from "react";

import FooterLogo from "../../assets/peter_logo.png";
import UserIcon from "../../assets/user_icon.svg";
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
        <div className="footer-top_right">
          <div className="footer-email_input">
            <img src={UserIcon} alt="" />
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="footer-sub">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom_left">
          © 2025 Adeniji Peter Oluwasegun. All rights reserved.
        </p>
        <div className="footer-bottom_right">
          <p>Term of Services</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
