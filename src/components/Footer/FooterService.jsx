import React from "react";
import "./Footer.css";
import Link from "next/link";

const FooterService = () => {
  return (
    <div className="footerLink-container">
      <h5>Our Services</h5>
      <ul>
        <li>
          <Link href="/education-document-apostille">Education Document Apostille </Link>
        </li>
        <li>
          <Link href="/personal-document-apostille">Personal Document Apostille</Link>
        </li>
        <li>
          <Link href="/commercial-document-apostille">Commercial Document Apostille</Link>
        </li>
      </ul>
    </div>
  );
};

export default FooterService;
