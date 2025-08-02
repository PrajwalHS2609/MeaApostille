import Link from "next/link";
import React from "react";
import "./Component1.css";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Component1 = () => {
  return (
    <div className="component1-container">
      <div className="component1-content1">
        <h2>Certified MEA Apostille Agency in Bangalore</h2>
        <p>
          Since 2005, India has been a member of the Hague Convention of October
          5, 1961, which abolished the need for legalization of foreign public
          documents among member countries. Under this convention, Apostille is
          recognized and accepted by all member nations, including India.
        </p>
        <p>
          Apostille is typically done for personal documents such as birth,
          death, and marriage certificates, affidavits, and power of attorney,
          as well as for educational documents like degree, diploma,
          matriculation, and secondary-level certificates.
        </p>
        <p>
          As a signatory to the Hague Apostille Convention, India accepts
          apostilled documents issued by other member countries without
          requiring further attestation or legalization. In compliance with
          international obligations, an apostilled document is considered fully
          legalized and valid for use in India by all authorities.
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
