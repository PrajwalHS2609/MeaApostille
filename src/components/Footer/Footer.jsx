import React from "react";
import Link from "next/link";
import "./Footer.css";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer-columns">
        <div className="footer-col">
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

        <div className="footer-col">
          <h5>Our Services</h5>
          <ul>
            <li>
              <Link href="#services">Education Document Apostille </Link>
            </li>
            <li>
              <Link href="#services">Personal Document Apostille</Link>
            </li>
            <li>
              <Link href="#services">Commercial Document Apostille</Link>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h5>Countries List</h5>
          <ul>
            <li>
              <Link href={"#europeCountryList"}>Oman</Link>
            </li>
            <li>
              <Link href={"#europeCountryList"}>Italy</Link>
            </li>
            <li>
              <Link href={"#europeCountryList"}>
                Germany
              </Link>
            </li>
            <li>
              <Link href={"#europeCountryList"}>
                Australia
              </Link>
            </li>
            <li>
              <Link href={"#europeCountryList"}>
                Austria
              </Link>
            </li>
            <li>
              <Link href={"#europeCountryList"}>France</Link>
            </li>
            <li>
              <Link href={"#europeCountryList"}>
                Lithuania
              </Link>
            </li>
            <li>
              <Link href={"#europeCountryList"}>Mexico</Link>
            </li>
            <li>
              <Link href={"#europeCountryList"}>
                Netherlands
              </Link>
            </li>
            <li>
              <Link href={"#europeCountryList"}>UK</Link>
            </li>
            <li>
              <Link href={"#europeCountryList"}>USA</Link>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h5>Contacts</h5>
          <ul>
            <li>
              <a href="https://maps.app.goo.gl/okguJ4S99UCCdu99A">
                {" "}
                #134 (Shop No. 2), 1st Floor, K.N Complex, 11th Cross, Temple
                Street, Opp. Canara Bank, Malleshwaram, Bengaluru - 560003{" "}
              </a>
            </li>
            <li>
              <a href="tel:9148889666">+91 9148889666</a> , <a href="tel:9148889444">+91 9148889444</a>
            </li>
            <li>
              <a href="mailto:info@goodwayattestation.com">info@goodwayattestation.com</a>
            </li>
          </ul>
          <br />
          <div className="footerAddress-social">
            <li>
              <a
                href="https://www.instagram.com/goodwayattestation.india/"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram className="footerAddress-socialIco" />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/goodwayattestation"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebookF className="footerAddress-socialIco" />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/Goodway_India"
                target="_blank"
                rel="noreferrer"
              >
                <FaXTwitter className="footerAddress-socialIco" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/goodway-attestation/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedinIn className="footerAddress-socialIco" />
              </a>
            </li>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 GoodwayAttestation. All rights reserved.</p>
        <ul>
          <li>Privacy</li>
          <li>Terms of Use</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
