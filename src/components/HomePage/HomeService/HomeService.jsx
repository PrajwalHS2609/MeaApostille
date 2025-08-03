import Link from "next/link";
import React from "react";
import "./HomeService.css";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { link } from "fs";

const HomeService = () => {
  const serviceCard = [
    {
      id: 1,
      title: "Attestation Services",
      img: "https://techtoday.lenovo.com/sites/default/files/styles/original/public/2024-12/img-smart-modes%402x.jpg.webp?itok=d3Lr5UyS",
      para: "Activate modes for different scenarios to automate common tasks, group settings, and to optimize system performance.",
      link: "/",
    },
    {
      id: 2,
      title: "HRD Services",
      img: "https://techtoday.lenovo.com/sites/default/files/styles/original/public/2023-11/img-find-local-dealer%402x.jpg.webp?itok=yJN_mPYA",
      para: "Our extensive network of providers and partners are ready to help you find the right Think devices and supporting solutions that meet the needs of your business.",
      link: "/",
    },
    {
      id: 3,
      title: "PCC Services",
      img: "https://techtoday.lenovo.com/sites/default/files/styles/original/public/2024-12/img-smart-modes%402x.jpg.webp?itok=d3Lr5UyS",
      para: "Activate modes for different scenarios to automate common tasks, group settings, and to optimize system performance.",
      link: "/",
    },
  ];
  return (
    <div className="service-container">
      <div className="service-content">
        <h2>Other Services</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos
          consectetur exercitationem, veniam odio beatae, impedit perspiciatis
          amet tempora iste reprehenderit eum ipsum deleniti in inventore
          maxime, fugit et quisquam culpa.
        </p>
      </div>
      <div className="service-content">
        {serviceCard.map((x) => (
          <div className="service-cardContainer" key={x.id}>
            <img src={x.img} alt="" />
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
