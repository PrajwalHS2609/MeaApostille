import React from "react";
import "./Component3.css";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Link from "next/link";

const Component3 = () => {
  return (
    <div className="component3-container">
      <div className="component3-content1">
        <h2>Unlocking productivity superpowers with Smart Care</h2>
        <p>
          Lenovo Smart Care enables uninterrupted productivity with real-time,
          on-device troubleshooting.** Then, enjoy the option to take
          productivity up a notch with Lenovo Premier Support Plus, featuring
          convenient one-click call and live chat support with experts.
        </p>
        <Link href={"/"}>
          Learn more
          <MdOutlineKeyboardArrowRight className="component3-content1Icon" />
        </Link>
      </div>
      <div className="component3-content1">
        <img
          src="https://techtoday.lenovo.com/sites/default/files/styles/original/public/2024-12/img-smart-care%402x.jpg.webp?itok=eWsWnUPr"
          alt=""
        />
      </div>
    </div>
  );
};

export default Component3;
