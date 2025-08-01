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
          <Link href="/">About Us</Link>
        </li>
        <li>
          <Link href="/">Services</Link>
        </li>
        <li>
          <Link href="/">Country List</Link>
        </li>
        <li>
          <Link href="/">Blogs</Link>
        </li>
        <li>
          <Link href="/">Contact Us</Link>
        </li>
      </ul>
    </div>
  );
};

export default FooterLinks;
