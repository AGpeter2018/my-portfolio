import React from "react";
import toast from "react-hot-toast";
import mail from "../../assets/mail_icon.svg";
import location from "../../assets/location_icon.svg";
import call from "../../assets/call_icon.svg";
import SocialIcon from "../social-icon-component/social-icon.component";
import "./content.style.css";

const contentDetails = [
  { img: mail, info: "adenijipeter2018@gmail.com", copy: true },
  { img: call, info: "+2348148915457, +2349036550687", copy: false },
  { img: location, info: "Anambra, Anambra state, Nigeria", copy: false },
];

const ContentDetail = () => {
  const copyEmail = (email) => {
    navigator.clipboard.writeText(email);
    toast.success("Email copied to clipboard!", {
      style: { background: "#1f1f1f", color: "#fff", border: "1px solid rgba(255, 255, 255, 0.1)" },
      iconTheme: { primary: "#b923e1", secondary: "#fff" },
    });
  };

  return (
    <div className="content-details">
      {contentDetails.map((detail, index) => (
        <div
          className={`content-detail ${detail.copy ? "clickable" : ""}`}
          key={index}
          onClick={detail.copy ? () => copyEmail(detail.info) : undefined}
        >
          <img src={detail.img} alt="" />
          <p>{detail.info}</p>
        </div>
      ))}
      <SocialIcon />
    </div>
  );
};

export default ContentDetail;
