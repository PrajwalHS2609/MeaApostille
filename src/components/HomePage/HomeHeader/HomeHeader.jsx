import React from "react";
import "./HomeHeader.css";
import Link from "next/link";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import img1 from "../../../Images/Indian Embassy.png";
import iso from "../../../Images/ISO.png";
import govtApp from "../../../Images/govtApp.png";
import support from "../../../Images/24X7.png";
import expertise from "../../../Images/expertise.png";
import HeaderImg from "../../../Images/headerImg.png";

import Image from "next/image";
const HomeHeader = () => {
  return (
    <div className="homeHeader-container">
      <div className="homeHeader-cover">
        <Image src={img1} alt="img1" />
        <div className="homeHeader-coverContent">
          <h2>MEA Apostille Services in Bangalore</h2>
          <p>
            We offer an easy, secure, and hassle-free apostille process for all
            your documents. With over 25,000 happy customers, we’re a trusted
            name in document legalization services.
          </p>
          <Link href={"/"}>
            Talk to an Expert
            <MdOutlineKeyboardArrowRight className="homeHeader-coverIco" />
          </Link>
        </div>
      </div>
      <div className="homeHeader-coverFooterImg">
        <Image src={iso} alt="iso" />
        <Image src={govtApp} alt="iso" />
        <Image src={support} alt="iso" />
        <Image src={expertise} alt="iso" />
      </div>
      <Image src={HeaderImg} alt="" />
    </div>
  );
};

export default HomeHeader;
