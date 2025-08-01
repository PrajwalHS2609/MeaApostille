import React from "react";
import "./Footer.css";
import FooterLinks from "./FooterLinks";
import FooterService from "./FooterService";
import FooterAddress from "./FooterAddress";
import FooterCountries from "./FooterCountries";
const FooterTop = () => {
  return (
    <div className="footerTop-container">
      <FooterLinks />
      <FooterService />
      <FooterCountries />
      <FooterAddress />
    </div>
  );
};

export default FooterTop;
