import React from "react";
import "./EducationDocumentService.css";
import Image from "next/image";
import birth from "./../../Images/features/BirthApproved.png";
import commercial from "./../../Images/features/Commercial_Docment.png";
import degree from "./../../Images/features/Degree.png";
import marriage from "./../../Images/features/Marriage.png";

const EduDocServiceComp3 = () => {
  return (
    <div className="eduDocComp3-container">
      <div className="eduDocComp3-content">
        <h2>Documents Apostilled</h2>
      </div>
      <div className="eduDocComp3-content">
        <li>
          <div className="eduDocComp3-item">
            <Image src={birth} alt="birth" />
          </div>
          <p>Birth Certificate</p>
        </li>
        <li>
          <div className="eduDocComp3-item">
            <Image src={marriage} alt="marriage" />
          </div>
          <p>Marriage Certificate</p>
        </li>
        <li>
          <div className="eduDocComp3-item">
            <Image src={degree} alt="degree" />
          </div>
          <p>Degree Certificate</p>
        </li>
        <li>
          <div className="eduDocComp3-item">
            <Image src={commercial} alt="commercial" />
          </div>
          <p>Commercial Certificate</p>
        </li>
      </div>
    </div>
  );
};

export default EduDocServiceComp3;
