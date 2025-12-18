"use client";
import React from "react";
import "./HomeFaq.css";
import Accordion from "react-bootstrap/Accordion";
import faq from "@/Images/faq.png";
import Image from "next/image";
const HomeFaq = () => {
  return (
    <div className="homeFaq-container">
      <div className="homeFaq-wrapper">
        <div className="homeFaq-content">
          <h2>Frequently Asked Questions</h2>
          <Accordion defaultActiveKey="0">
            <Accordion.Item className="homeFaq-accItem" eventKey="0">
              <Accordion.Header className="homeFaq-accHeader">
                <h5>1. What is MEA Apostille and why is it required?</h5>
              </Accordion.Header>
              <Accordion.Body className="homeFaq-body">
                <p>
                  MEA Apostille is an official certification issued by the
                  Ministry of External Affairs (MEA), Government of India, to
                  make Indian documents legally valid in Hague Convention
                  countries.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="homeFaq-accItem" eventKey="1">
              <Accordion.Header className="homeFaq-accHeader">
                <h5>2. Which countries accept MEA Apostille?</h5>
              </Accordion.Header>
              <Accordion.Body className="homeFaq-body">
                <p>
                  MEA Apostille is accepted by all member countries of the Hague
                  Apostille Convention, including the USA, UK, Germany, France,
                  Australia, Netherlands, Italy, Spain, and many others.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="homeFaq-accItem" eventKey="2">
              <Accordion.Header className="homeFaq-accHeader">
                <h5>3. Which documents can be apostilled by MEA?</h5>
              </Accordion.Header>
              <Accordion.Body className="homeFaq-body">
                <p>
                  Educational certificates, personal documents such as birth and
                  marriage certificates, and commercial documents like power of
                  attorney, MOA, and business agreements can be apostilled by
                  MEA.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="homeFaq-accItem" eventKey="3">
              <Accordion.Header className="homeFaq-accHeader">
                <h5>4. How long does MEA Apostille take in Bangalore?</h5>
              </Accordion.Header>
              <Accordion.Body className="homeFaq-body">
                <p>
                  MEA Apostille usually takes 3 to 5 working days, depending on
                  the document type and state authentication requirements.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="homeFaq-accItem" eventKey="4">
              <Accordion.Header className="homeFaq-accHeader">
                <h5>5. What is the cost of MEA Apostille in Bangalore?</h5>
              </Accordion.Header>
              <Accordion.Body className="homeFaq-body">
                <p>
                  The cost generally ranges from ₹3,000 to ₹12,000, based on the
                  type of document and processing involved.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="homeFaq-accItem" eventKey="5">
              <Accordion.Header className="homeFaq-accHeader">
                <h5>6. Is embassy attestation required after MEA Apostille?</h5>
              </Accordion.Header>
              <Accordion.Body className="homeFaq-body">
                <p>
                  No. Once a document is apostilled by MEA, embassy attestation
                  is not required for Hague Convention countries.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="homeFaq-accItem" eventKey="6">
              <Accordion.Header className="homeFaq-accHeader">
                <h5>
                  7. Can MEA Apostille be done without visiting government
                  offices?
                </h5>
              </Accordion.Header>
              <Accordion.Body className="homeFaq-body">
                <p>
                  Yes. Government-approved agencies like Goodway Attestation
                  provide complete doorstep services, including document pickup,
                  apostille processing, and delivery.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="homeFaq-accItem" eventKey="7">
              <Accordion.Header className="homeFaq-accHeader">
                <h5>
                  8. What happens if documents are not apostilled correctly?
                </h5>
              </Accordion.Header>
              <Accordion.Body className="homeFaq-body">
                <p>
                  Incorrect or incomplete apostille may result in visa
                  rejection, admission delays, or legal complications in the
                  destination country.
                </p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
        <div className="homeFaq-content">
          <Image src={faq} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HomeFaq;
