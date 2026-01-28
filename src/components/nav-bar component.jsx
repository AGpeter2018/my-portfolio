import React, { useRef, useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

import logo from "../assets/peter_logo.png";
import menu_open from "../assets/menu_open.svg";
import menu_close from "../assets/menu_close.svg";

import "./nav-bar.style.css";

const NavBar = ({ openResume }) => {
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
          </li>
          <li>
            <AnchorLink className="anchor-link" offset={50} href="#about">
              <p onClick={() => setMenu("about")}>About</p>
            </AnchorLink>
          </li>
          <li>
            <AnchorLink className="anchor-link" offset={50} href="#services">
              <p onClick={() => setMenu("services")}>Services</p>
            </AnchorLink>
          </li>
          <li>
            <AnchorLink className="anchor-link" offset={50} href="#work">
              <p onClick={() => setMenu("portfolio")}>Portfolio</p>
            </AnchorLink>
          </li>
          <li>
            <AnchorLink className="anchor-link" offset={50} href="#contact">
              <p onClick={() => setMenu("contact")}>Contact</p>
            </AnchorLink>
          </li>
        </ul>
        <div className="nav-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with me
          </AnchorLink>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
