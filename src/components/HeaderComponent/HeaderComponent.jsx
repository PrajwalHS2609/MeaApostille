import React from "react";
import "./HeaderComponent.css";
const HeaderComponent = (props) => {
  return (
    <div className="headerComponent-container">
      <div className="headerComponent-content">
        <h2>{props.title}</h2>
        <p>{props.para}</p>
      </div>
      <div className="headerComponent-content">
        <img src={props.img} alt="header banner" />
      </div>
    </div>
  );
};

export default HeaderComponent;
