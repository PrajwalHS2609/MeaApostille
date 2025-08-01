import Link from "next/link";
import React from "react";
import "./Component4.css";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Component4 = () => {
  const card = [
    {
      id: 1,
      img: "https://techtoday.lenovo.com/sites/default/files/styles/block_content_card/public/2024-12/img-x-9-enterprise%402x_1.jpg.webp?itok=0E2x-xsg",
      title: "How the enterprise thrives with X9",
      para: "See how enterprises are using the Lenovo ThinkPad  X9 Aura Edition Series, imagined with Intel, to provide the highest levels of AI performance, personalized experiences, military-grade durability, and executive-level support.",
      link: "/",
    },
        {
      id: 2,
      img: "https://techtoday.lenovo.com/sites/default/files/styles/block_content_card/public/2024-12/img-smb-x-9%402x.jpg.webp?itok=EXC2MeSI",
      title: "How the enterprise thrives with X9",
      para: "See how enterprises are using the Lenovo ThinkPad  X9 Aura Edition Series, imagined with Intel, to provide the highest levels of AI performance, personalized experiences, military-grade durability, and executive-level support.",
      link: "/",
    },
  ];
  return (
    <div className="component4-container">
      <div className="component4-content">
        <h2>
          A higher-performance ThinkPad® for your higher-performance users
        </h2>
      </div>
      <div className="component4-content">
        {card.map((x) => (
          <div className="component4-card" key={x.id}>
            <div className="component4-cardContent">
              <img src={x.img} alt={x.title} />
            </div>
            <div className="component4-cardContent">
              <h6>INFOGRAPHIC</h6>
              <h3>{x.title}</h3>
              <p>{x.para}</p>
              <Link href={x.link}>
                Learn more <MdOutlineKeyboardArrowRight className="component4-cardIco"/>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Component4;
