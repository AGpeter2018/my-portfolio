import React from "react";
import toast from "react-hot-toast";
import FooterLogo from "../../assets/peter_logo.png";
import UserIcon from "../../assets/user_icon.svg";
import SocialIcon from "../social-icon-component/social-icon.component";
import "./footer.style.css";

const Footer = () => {
  const handleSubscribe = (e) => {
    e.preventDefault();
    toast.success("Thanks for subscribing!", {
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
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-top_left">
          <img src={FooterLogo} alt="Logo" className="logo" />
          <p>
            Showcasing innovative web solutions and interactive experiences.
            Available for collaboration.
          </p>
        </div>
        <form className="footer-top_right" onSubmit={handleSubscribe}>
          <div className="footer-email_input">
            <img src={UserIcon} alt="User" />
            <input type="email" placeholder="Enter your email" required />
          </div>
          <button type="submit" className="footer-sub">
            Subscribe
          </button>
        </form>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom_left">
          © 2025 Adeniji Peter. Crafting digital excellence.
        </p>
        <div className="footer-bottom_right">
          <SocialIcon />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
