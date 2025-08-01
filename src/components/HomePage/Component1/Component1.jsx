import Link from "next/link";
import React from "react";
import "./Component1.css";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Component1 = () => {
  return (
    <div className="component1-container">
      <div className="component1-content1">
        <h2>Unleash the potential of every user</h2>
        <p>
          The new Lenovo ThinkPad® X1 Carbon Gen 13 Aura Edition, imagined with
          Intel, is the lightest, thinnest, and most powerful ThinkPad® X1
          Carbon yet—now optimized for peak performance with Windows 11.
          Discover how it can revolutionize your workflow with AI-driven
          features and enterprise-ready security.​
        </p>
        <Link href={"/"}>
          See The Advantage{" "}
          <MdOutlineKeyboardArrowRight className="component1-content1Icon" />
        </Link>
      </div>
      <div className="component1-content1">
        <img
          src="https://techtoday.lenovo.com/sites/default/files/styles/original/public/2025-01/img-thinkpad-x-1%402x.png.webp?itok=LytoAD_Y"
          alt=""
        />
      </div>
    </div>
  );
};

export default Component1;
