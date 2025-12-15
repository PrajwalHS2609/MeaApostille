import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";

const FooterAddress = () => {
  return (
    <div className="footerAddress-container">
      <h5>Contact Us</h5>
      <ul>
        <li>
          <FaLocationDot className="footerAddress-icon" />
          <a href="">
            {" "}
            #134 (Shop No. 2), 1st Floor, K.N Complex, 11th Cross, Temple
            Street, Opp. Canara Bank, Malleshwaram, Bengaluru - 560003{" "}
          </a>
        </li>
        <li>
          <FaPhoneAlt className="footerAddress-icon" />
          <a href="tel:9148889666">+91 9148889666</a> ,{" "}
          <a href="tel:9148889444">+91 9148889444</a>
        </li>
        <li>
          <IoIosMail className="footerAddress-icon" />
          <a href="mailto:info@goodwayattestation.com">info@goodwayattestation.com</a>
        </li>
      </ul>
      <br />
      <div className="footerAddress-social">
        <li>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <FaInstagram className="footerAddress-socialIco" />
          </a>
        </li>
        <li>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <FaFacebookF className="footerAddress-socialIco" />
          </a>
        </li>
        <li>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <FaXTwitter className="footerAddress-socialIco" />
          </a>
        </li>
        <li>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <FaLinkedinIn className="footerAddress-socialIco" />
          </a>
        </li>
      </div>
    </div>
  );
};

export default FooterAddress;
