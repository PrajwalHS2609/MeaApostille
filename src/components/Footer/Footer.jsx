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

        <div className="footer-col">
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
        <div className="footer-col">
          <h5>Countries List</h5>
          <ul>
            <li>
              <Link href={"/oman-apostille-services-bangalore"}>Oman</Link>
            </li>
            <li>
              <Link href={"/italy-apostille-services-bangalore"}>Italy</Link>
            </li>
            <li>
              <Link href={"/germany-apostille-services-bangalore"}>
                Germany
              </Link>
            </li>
            <li>
              <Link href={"/australia-apostille-services-bangalore"}>
                Australia
              </Link>
            </li>
            <li>
              <Link href={"/austria-apostille-services-bangalore"}>
                Austria
              </Link>
            </li>
            <li>
              <Link href={"/france-apostille-services-bangalore"}>France</Link>
            </li>
            <li>
              <Link href={"/lithuania-apostille-services-bangalore"}>
                Lithuania
              </Link>
            </li>
            <li>
              <Link href={"/mexico-apostille-services-bangalore"}>Mexico</Link>
            </li>
            <li>
              <Link href={"/netherland-apostille-services-bangalore"}>
                Netherlands
              </Link>
            </li>
            <li>
              <Link href={"/uk-apostille-services-bangalore"}>UK</Link>
            </li>
            <li>
              <Link href={"/usa-apostille-services-bangalore"}>USA</Link>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h5>Contacts</h5>
          <ul>
            <li>
              <a href="">
                {" "}
                #134 (Shop No. 2), 1st Floor, K.N Complex, 11th Cross, Temple
                Street, Opp. Canara Bank, Malleshwaram, Bengaluru - 560003{" "}
              </a>
            </li>
            <li>
              <a href="">+91 9148889666</a> , <a href="">+91 9148889444</a>
            </li>
            <li>
              <a href="">info@goodwayattestation.com</a>
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
