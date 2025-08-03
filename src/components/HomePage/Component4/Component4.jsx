import Link from "next/link";
import React from "react";
import "./Component4.css";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import service1 from "../../../Images/Services/Education Certificate Apostille.png";
import service2 from "../../../Images/Services/Personal Certificate Apostille.png";
import service3 from "../../../Images/Services/Commercial Document Apostille.png";
import Image from "next/image";

const Component4 = () => {
  const card = [
    {
      id: 1,
      sup: "Education",
      img: service1,
      title: "Educational Certificate Apostille",
      para: "Authenticate your academic documents like degrees, diplomas, and transcripts—for global recognition in Hague Convention countries through a trusted and hassle-free apostille process. Open doors to study or work abroad!",
      link: "/",
    },
    {
      id: 2,
      sup: "Personal",
      img: service2,
      title: "Personal Certificate Apostille",
      para: "Easily legalize your personal documents like birth, marriage, or death certificates—for hassle-free acceptance in Hague Convention countries. A quick, official way to make your documents globally valid.",
      link: "/",
    },
    {
      id: 3,
      sup: "Commercial",
      img: service3,
      title: "Commercial Documents Apostille",
      para: "Easily legalize your business documents like invoices, power of attorney, and incorporation certificates—for smooth and official use in any Hague Convention country. Fast, reliable, and globally accepted.",
      link: "/",
    },
  ];
  return (
    <div className="component4-container">
      <div className="component4-content">
        <h2>
          Approved MEA Apostille Services <br /> You Can Trust{" "}
        </h2>
      </div>
      <div className="component4-content">
        {card.map((x) => (
          <div className="component4-card" key={x.id}>
            <div className="component4-cardContent">
              <Image src={x.img} alt={x.title} />
            </div>
            <div className="component4-cardContent">
              {/* <h6>{x.sup}</h6> */}
              <h3>{x.title}</h3>
              <p>{x.para}</p>
              <Link href={x.link}>
                Learn more{" "}
                <MdOutlineKeyboardArrowRight className="component4-cardIco" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Component4;
