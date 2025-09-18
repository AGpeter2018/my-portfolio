import React from "react";

import themw_pattern from "../../assets/theme_pattern.svg";
import ArrowIcon from "../.././assets/arrow_icon.svg";

// import WorkData from '../../assets/mywork_data'
import "./my-work.style.css";
import mywork_data from "../../assets/mywork_data";

const MyWork = () => {
  return (
    <div id="work" className="my-work">
      <div className="myWork-title">
        <h1>My latest work</h1>
        <img src={themw_pattern} alt="" />
      </div>
      <div className="myWork-container">
        {mywork_data.map((work, index) => {
          return <img key={index} src={work.w_img} alt="" />;
        })}
      </div>
      <div className="show-more">
        <p>Show more</p>
        <img src={ArrowIcon} alt="" />
      </div>
    </div>
  );
};

export default MyWork;
