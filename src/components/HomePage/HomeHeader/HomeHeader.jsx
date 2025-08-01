import React from "react";
import "./HomeHeader.css";
import Link from "next/link";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const HomeHeader = () => {
  return (
    <div className="homeHeader-container">
      <div className="homeHeader-cover">
        <img
          src="https://techtoday.lenovo.com/sites/default/files/styles/solutions_logo/public/2024-12/logo-aura-edition%402x.png.webp?itok=fcJOtXON"
          alt=""
        />
        <div className="homeHeader-coverContent">
          <h2>Elevating the AI PC Experience</h2>
          <p>
            Lenovo Aura Edition Copilot+ PCs offer personalized, productive, and
            protected AI with the latest Intel® Core™ Ultra processors.
          </p>
          <Link href={"/"}>
            Discover Aura Edition{" "}
            <MdOutlineKeyboardArrowRight className="homeHeader-coverIco" />
          </Link>
        </div>
      </div>
      <div className="homeHeader-coverFooterImg">
        <img src="https://techtoday.lenovo.com/sites/default/files/styles/compliance_logo/public/2024-12/badge-core-ultra-7-vpro%402x.png.webp?itok=NRT_83s-" />
      </div>
      {/* <img
        src="https://img.freepik.com/free-vector/abstract-blank-gradient-blurry-banner-your-website-app_1017-43270.jpg?t=st=1753954571~exp=1753958171~hmac=14d918edf8e4c25a127f20a2b3a27d1754c56073c4817c00cad84a56dbbac532&w=1800"
        alt=""
      /> */}
    </div>
  );
};

export default HomeHeader;
