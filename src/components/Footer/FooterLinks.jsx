import React from "react";
import "./Footer.css";
import Link from "next/link";
const FooterLinks = () => {
  return (
    <div className="footerLink-container">
      <h5>Quick Links</h5>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="#about-us">About Us</Link>
        </li>
        <li>
          <Link href="#services">Services</Link>
        </li>
        <li>
          <Link href="#europeCountryList">Country List</Link>
        </li>
        <li>
          <Link href="#other-services">Other Services</Link>
        </li>
        <li>
          <Link href="#contact-us">Contact Us</Link>
        </li>
      </ul>
    </div>
  );
};

export default FooterLinks;
