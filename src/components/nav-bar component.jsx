import { React, useState } from "react";

import logo from "../assets/logo.svg";
import underline from "../assets/nav_underline.svg";

import "./nav-bar.style.css";

const NavBar = () => {
  const [menu, setMenu] = useState("home");
  return (
    <div className="nav-bar">
      <img src={logo} alt="" />
      <ul className="nav-menu">
        <li>
          <p onClick={() => setMenu("home")}>Home</p>
          {menu === "home" ? <img src={underline} alt="" /> : ""}
        </li>
        <li>
          <p onClick={() => setMenu("contact")}>About Me</p>
          {menu === "about " ? <img src={underline} alt="" /> : ""}
        </li>
        <li>
          <p onClick={() => setMenu("services")}>Services</p>
          {menu === "services" ? <img src={underline} alt="" /> : ""}
        </li>
        <li>
          <p onClick={() => setMenu("portfolio")}>Portfolio</p>
          {menu === "portfolio" ? <img src={underline} alt="" /> : ""}
        </li>
        <li>
          <p onClick={() => setMenu("contact")}>Contact</p>
          {menu === "contact" ? <img src={underline} alt="" /> : ""}
        </li>
      </ul>
      <div className="nav-connect">Connect with me</div>
    </div>
  );
};

export default NavBar;
