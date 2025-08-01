import React from "react";
import "./Component2.css";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
const Component2 = () => {
  return (
    <div className="component2-container">
      <div className="component2-content1">
        <h2>Engineered for AI</h2>
        <p>
          Master the most intensive workloads more than 100 system TOPS (45 NPU
          TOPS) from the latest Intel® Core™ Ultra processors. More productive.
          More creative. More secure.
        </p>
        <img
          src="https://techtoday.lenovo.com/sites/default/files/styles/original/public/2024-12/badge-core-ultra-7-vpro-s%402x.png.webp?itok=vPzwDfmy"
          alt=""
        />
      </div>
      <div className="component2-content1">
        <img
          src="https://techtoday.lenovo.com/sites/default/files/styles/original/public/2024-12/img-thinkpad-carbon-x-13%402x.jpg.webp?itok=Bp6RVp2a"
          alt=""
        />
      </div>
    </div>
  );
};

export default Component2;
