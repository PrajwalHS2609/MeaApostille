import React from "react";
import "./Footer.css";
import Link from "next/link";

const FooterCountries = () => {
  return (
    <div className="footerLink-container">
      <h5>Countries List</h5>
      <ul>
        <li>
          <Link to={"/oman-apostille-services-bangalore"}>Oman</Link>
        </li>
        <li>
          <Link to={"/italy-apostille-services-bangalore"}>Italy</Link>
        </li>
        <li>
          <Link to={"/germany-apostille-services-bangalore"}>Germany</Link>
        </li>
        <li>
          <Link to={"/australia-apostille-services-bangalore"}>
            Australia
          </Link>
        </li>
        <li>
          <Link to={"/austria-apostille-services-bangalore"}>Austria</Link>
        </li>
        <li>
          <Link to={"/france-apostille-services-bangalore"}>France</Link>
        </li>
        <li>
          <Link to={"/lithuania-apostille-services-bangalore"}>
            Lithuania
          </Link>
        </li>
        <li>
          <Link to={"/mexico-apostille-services-bangalore"}>Mexico</Link>
        </li>
        <li>
          <Link to={"/netherland-apostille-services-bangalore"}>
            Netherlands
          </Link>
        </li>
        <li>
          <Link to={"/uk-apostille-services-bangalore"}>UK</Link>
        </li>
        <li>
          <Link to={"/usa-apostille-services-bangalore"}>USA</Link>
        </li>
      </ul>
    </div>
  );
};

export default FooterCountries;
