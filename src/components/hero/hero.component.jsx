import React from "react";

import imageProfile from "../../assets/profile_img.svg";

import "./hero.style.css";

function Hero() {
  return (
    <div className="hero">
      <img src={imageProfile} alt="" />
      <h1>
        <span>I'm Adeniji Peter,</span>frontend developer
      </h1>
      <p>I am a frontend developer from Nigeria</p>
      <div className="hero-action">
        <div className="hero-connect">Connect with me</div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
}

export default Hero;
