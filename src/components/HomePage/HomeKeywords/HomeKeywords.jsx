import React from "react";
import "./HomeKeywords.css";

const keywords = [
  "MEA Apostille Services in Bangalore",

  "Apostille Services in Bangalore",
  "MEA Apostille Bangalore",
  "Apostille Certificate Bangalore",

  "Ministry of External Affairs Apostille Bangalore",
  "Apostille Attestation Bangalore",
  "Government Apostille Services Bangalore",
  "Apostille for Hague Convention Countries",
  "Educational Certificate Apostille Bangalore",
  "Degree Certificate Apostille Bangalore",
  "Birth Certificate Apostille Bangalore",
  "Marriage Certificate Apostille Bangalore",
  "Personal Document Apostille Bangalore",
  "Commercial Document Apostille Bangalore",
  "MEA Apostille for Education Certificates",
  "Apostille for Study Abroad Bangalore",
  "Apostille for Work Visa Bangalore",
  "Apostille for Immigration Bangalore",
  "Apostille Services Near Me Bangalore",
  "Fast Apostille Services Bangalore",
  "Same Day Apostille Bangalore",
  "Trusted Apostille Agency Bangalore",
  "Authorized Apostille Services Bangalore",
  "Government Approved Apostille Bangalore",
  "MEA Apostille Process Bangalore",
  "Apostille Cost in Bangalore",
  "Apostille Charges Bangalore",
  "Apostille Service Provider Bangalore",
  "Apostille Consultants Bangalore",
  "Doorstep Apostille Services Bangalore",
  "Secure Apostille Services Bangalore",
  "Apostille Tracking Services Bangalore",
  "MEA Apostille for Business Documents",
  "Apostille for Power of Attorney Bangalore",
  "Apostille Services for MNC Employees",
  "Apostille Services for Professionals Bangalore",
  "Reliable Apostille Services Bangalore",
  "Express Apostille Services Bangalore",
  "Apostille Office Bangalore",
  "Best Apostille Services in Bangalore",
];

const HomeKeywords = () => {
  return (
    <div className="keywords-container" id="">
      <ul className="keywords-list">
        {keywords.map((country, index) => (
          <li key={index} className="keywords-item">
            {country}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomeKeywords;
