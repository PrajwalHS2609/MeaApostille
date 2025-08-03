import Link from "next/link";
import React from "react";
import "./HomeService.css";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import attestation from "./../../../Images/otherServices/Attestation.png";
import pcc from "./../../../Images/otherServices/Pcc.png";
import hrd from "./../../../Images/otherServices/HRD.png";
import Image from "next/image";

const HomeService = () => {
  const serviceCard = [
    {
      id: 1,
      title: "Attestation Services",
      img: attestation,
      para: "Goodway Attestation offers fast, reliable, and government-approved Attestation Services for personal, educational, and commercial documents. We simplify the process, ensuring hassle-free legalization for use abroad.",
      link: "/",
    },
    {
      id: 2,
      title: "HRD Services",
      img: pcc,
      para: "Goodway Attestation provides trusted and efficient HRD Attestation Services for educational documents issued in India. We ensure smooth verification from the respective State HRD departments for use abroad.",
      link: "/",
    },
    {
      id: 3,
      title: "PCC Services",
      img: hrd,
      para: "Goodway Attestation offers fast and reliable PCC Verification Services to help you obtain your Police Clearance Certificate smoothly. Ideal for visa, job, or immigration purposes abroad, with full support.",
      link: "/",
    },
  ];
  return (
    <div className="service-container">
      <div className="service-content">
        <h2>Embassy Services Made Easy for You</h2>
        <p>
          Say goodbye to long waits and confusing processes! With Embassy
          Services Made Easy for You, we handle all your document attestation
          and embassy-related needs quickly, securely, and stress-free
        </p>
      </div>
      <div className="service-content">
        {serviceCard.map((x) => (
          <div className="service-cardContainer" key={x.id}>
            <Image src={x.img} alt={x.title} />
            <div className="service-cardContent">
              <h3>{x.title}</h3>
              <p>{x.para}</p>
              <Link href={x.link}>
                Explore Our Service
                <MdOutlineKeyboardArrowRight className="service-cardContentIco" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeService;
