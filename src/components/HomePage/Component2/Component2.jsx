import React from "react";
import "./Component2.css";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Image from "next/image";
import govtApp from "../../../Images/whyChoose/govtAppov.png";
import support from "../../../Images/whyChoose/24X7.png";
import efficiency from "../../../Images/whyChoose/efficiency.png";
import expertise from "../../../Images/whyChoose/expertise.png";
import international from "../../../Images/whyChoose/international.png";
import legal from "../../../Images/whyChoose/legal.png";
import pricing from "../../../Images/whyChoose/pricing.png";
import secure from "../../../Images/whyChoose/secure.png";
import timeDelivery from "../../../Images/whyChoose/timeDelivery.png";
import tracking from "../../../Images/whyChoose/tracking.png";
import transparency from "../../../Images/whyChoose/transparency.png";
import trusted from "../../../Images/whyChoose/trusted.png";

const Component2 = () => {
  return (
    <div className="component2-container">
      <h2>The Trusted Choice: <br />Why People Rely on Goodway Attestation</h2>
      <div className="component2-content1">
        <div className="component2-card">
          <Image src={govtApp} alt="govtApp" />
          <p>Government Approved</p>
        </div>
        <div className="component2-card">
          <Image src={support} alt="support" />
          <p>24x7 Customer Support</p>
        </div>
        <div className="component2-card">
          <Image src={efficiency} alt="efficiency" />
          <p>Efficiency</p>
        </div>
        <div className="component2-card">
          <Image src={expertise} alt="expertise" />
          <p>Expertise</p>
        </div>
        <div className="component2-card">
          <Image src={international} alt="international" />
          <p>International Reach</p>
        </div>
        <div className="component2-card">
          <Image src={legal} alt="legal" />
          <p>Legal Compliance</p>
        </div>
        <div className="component2-card">
          <Image src={pricing} alt="pricing" />
          <p>Competitive Pricing</p>
        </div>
        <div className="component2-card">
          <Image src={secure} alt="secure" />
          <p>Secure Handling</p>
        </div>
        <div className="component2-card">
          <Image src={timeDelivery} alt="timeDelivery" />
          <p>Free Home Pickup and Timely Delivery</p>
        </div>
        <div className="component2-card">
          <Image src={tracking} alt="tracking" />
          <p>Online Tracking</p>
        </div>
        <div className="component2-card">
          <Image src={transparency} alt="transparency" />
          <p>Transparency</p>
        </div>
        <div className="component2-card">
          <Image src={trusted} alt="trusted" />
          <p>Trusted by Clients</p>
        </div>
      </div>
      {/* <div className="component2-content1">
        <img
          src="https://techtoday.lenovo.com/sites/default/files/styles/original/public/2024-12/img-thinkpad-carbon-x-13%402x.jpg.webp?itok=Bp6RVp2a"
          alt=""
        />
      </div> */}
    </div>
  );
};

export default Component2;
