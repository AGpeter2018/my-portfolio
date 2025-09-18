import React from "react";
import { useState } from "react";

import theme_pattern from "../../assets/theme_pattern.svg";
import ContentDetail from "../content-details-component/content-detail.component";
import ContentRight from "../content-detail-form-comp/content-right.component";
import "./content.style.css";

const Content = () => {
  return (
    <div id="contact" className="content">
      <div className="content-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-session">
        <div className="content-left">
          <h1>Let's talk</h1>
          <p>
            I'm available to take on new project, so feel free to get in touch
          </p>
          <ContentDetail />
        </div>
        <ContentRight />
      </div>
    </div>
  );
};

export default Content;
