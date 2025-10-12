import React, { useRef, useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

import logo from "../assets/peter_logo.png";
import underline from "../assets/nav_underline.svg";
import menu_open from "../assets/menu_open.svg";
import menu_close from "../assets/menu_close.svg";

import SocialIcon from "./social-icon-component/social-icon.component";

import "./nav-bar.style.css";

const NavBar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };
  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };

  return (
    <div className="nav-bar">
      <div className="wrap">
      <img src={logo} alt="" className="logo" />
      <img
        src={menu_open}
        alt=""
        onClick={openMenu}
        className="menu-nav-open"
      />
      <ul ref={menuRef} className="nav-menu">
        <img
          src={menu_close}
          alt=""
          onClick={closeMenu}
          className="nav-close"
        />
        <li>
          <AnchorLink className="anchor-link" href="#home">
            <p onClick={() => setMenu("home")}>Home</p>
          </AnchorLink>
          {menu === "home" ? <img src={underline} alt="" /> : ""}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#about">
            <p onClick={() => setMenu("about")}>About Me</p>
          </AnchorLink>
          {menu === "about" ? <img src={underline} alt="" /> : ""}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#services">
            <p onClick={() => setMenu("services")}>Services</p>
          </AnchorLink>
          {menu === "services" ? <img src={underline} alt="" /> : ""}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#work">
            <p onClick={() => setMenu("portfolio")}>Portfolio</p>
          </AnchorLink>
          {menu === "portfolio" ? <img src={underline} alt="" /> : ""}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            {" "}
            <p onClick={() => setMenu("contact")}>Contact</p>
          </AnchorLink>
          {menu === "contact" ? <img src={underline} alt="" /> : ""}
        </li>
        <div className="nav-social">
          <SocialIcon />
        </div>
      </ul>
      <div className="nav-connect">
        {" "}
        <AnchorLink className="anchor-link" offset={50} href="#contact">
          Connect with me
        </AnchorLink>
      </div>
      </div>
    </div>
  );
};

export default NavBar;
