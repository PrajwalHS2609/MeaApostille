import React from "react";
import "./Component3.css";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Link from "next/link";
import onTime from "./../../../Images/onTime.png";
import Image from "next/image";
const Component3 = () => {
  return (
    <div className="component3-container">
      <div className="component3-content1">
        <h2>We’re On Time, So You Don’t Have to Wait!</h2>
        <p>
          Enjoy hassle-free service with our on-time pick-up and drop—no delays,
          no stress. We value your time, so you can count on us to be
          punctual, every time!
        </p>
        <Link href={"/"}>
          Learn more
          <MdOutlineKeyboardArrowRight className="component3-content1Icon" />
        </Link>
      </div>
      <div className="component3-content1">
        <Image src={onTime} alt="On Time" />
      </div>
    </div>
  );
};

export default Component3;
