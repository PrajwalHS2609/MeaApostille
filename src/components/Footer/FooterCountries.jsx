import React from "react";
import "./Footer.css";
import Link from "next/link";

const FooterCountries = () => {
  return (
    <div className="footerLink-container">
      <h5>Countries List</h5>
      <ul>
        <li>
          <Link href="/">Australia</Link>
        </li>
        <li>
          <Link href="/">Austria</Link>
        </li>
        <li>
          <Link href="/">Belgium</Link>
        </li>
        <li>
          <Link href="/">France</Link>
        </li>
        <li>
          <Link href="/">Finland</Link>
        </li>
      </ul>
    </div>
  );
};

export default FooterCountries;
