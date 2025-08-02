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
      </div>

      <div className="footer-bottom">
        <p>© 2025 GoodwayApostille. All rights reserved.</p>
        <ul>
          <li>Privacy</li>
          <li>Terms of Use</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
