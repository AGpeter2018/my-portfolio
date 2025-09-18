import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

import imageProfile from "../../assets/profile.jpg";

import "./hero.style.css";

function Hero() {
  return (
    <div id="home" className="hero">
      <img src={imageProfile} alt="" className="hero-img" />
      <h1>
        <span>I'm Adeniji Peter,</span>
        <br />
        frontend developer
      </h1>
      <p>I am a frontend developer from Nigeria</p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with me
          </AnchorLink>
        </div>
        <div className="hero-resume">
          <a href="/my-resume.pdf" download="my-resume.pdf">
            My resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
