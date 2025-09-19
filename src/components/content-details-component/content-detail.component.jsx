import React from "react";

import mail from "../../assets/mail_icon.svg";
import location from "../../assets/location_icon.svg";
import call from "../../assets/call_icon.svg";

import SocialIcon from "../social-icon-component/social-icon.component";

import "./content.style.css";

const contentDetails = [
  { img: mail, info: "adenijipeter2018@gmail.com" },
  { img: call, info: "+2348148915457, +2349036550687" },
  { img: location, info: "Anambra, Anambra state, Nigeria" },
];

const ContentDetail = () => {
  return (
    <div className="content-details">
      {contentDetails.map((detail, index) => {
        return (
          <div className="content-detail" key={index}>
            <img src={detail.img} alt="" />
            <p>{detail.info}</p>
          </div>
        );
      })}
      <SocialIcon />
    </div>
  );
};

export default ContentDetail;
