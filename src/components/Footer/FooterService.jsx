import React from "react";
import "./Footer.css";
import Link from "next/link";

const FooterService = () => {
  return (
    <div className="footerLink-container">
      <h5>Our Services</h5>
      <ul>
        <li>
          <Link href="/">Education Document Apostille </Link>
        </li>
        <li>
          <Link href="/">Personal Document Apostille</Link>
        </li>
        <li>
          <Link href="/">Commercial Document Apostille</Link>
        </li>
      </ul>
    </div>
  );
};

export default FooterService;
