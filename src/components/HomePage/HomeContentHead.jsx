import React from "react";

const HomeContentHead = () => {
  return (
    <div className="contentHead">
      <div className="contentHead-wrapper">
        <div className="contentHead-content">
          <h1>
            MEA Apostille Service in Bangalore – Government Approved &
            Guaranteed Delivery
          </h1>
          <p>
            {" "}
            If you are planning to work, pursue higher education, migrate, get
            married, or expand your business abroad, completing the{" "}
            <a href="https://meaapostilleservice.com/">
              MEA Apostille Service in Bangalore
            </a>{" "}
            is a mandatory legal requirement for countries that are members of
            the Hague Apostille Convention. Apostille certification
            authenticates Indian-issued documents so they are legally recognized
            and accepted in participating foreign countries, eliminating the
            need for further embassy attestation.
          </p>
          <p>
            Goodway Attestation is a government-approved{" "}
            <a href="https://meaapostilleservice.com/">
              MEA Apostille service provider in Bangalore
            </a>
            , backed by over 16 years of proven process expertise. We specialize
            in delivering fast, secure, and guaranteed apostille services with
            complete transparency and reliability. Over the years, we have
            successfully assisted 12,000+ satisfied customers and serve as an
            exclusive documentation partner for more than 28 leading Indian MNCs
            in Bangalore, supporting both individual and corporate documentation
            requirements.
          </p>
          <p>
            With extensive knowledge of apostille procedures and continuous
            monitoring of regulatory updates, Goodway Attestation ensures every
            document is processed accurately and in compliance with official
            guidelines. Our team understands the critical importance of
            timelines, document safety, and error-free processing, especially
            for professionals and families preparing for international
            opportunities.
          </p>
          <p>
            We provide end-to-end{" "}
            <a href="https://meaapostilleservice.com/">
              MEA Apostille Service in Bangalore
            </a>{" "}
            for a wide range of documents, including Educational Certificates
            (degree certificates, diplomas, mark sheets), Personal Certificates
            (birth certificates, marriage certificates, police clearance
            certificates, affidavits), and Commercial Certificates (power of
            attorney, company incorporation documents, invoices, and legal
            business papers). Each document is handled with strict
            confidentiality and secure protocols to ensure complete safety
            throughout the process.
          </p>
          <p>
            All apostille services are strictly authorized and issued by the
            Ministry of External Affairs (MEA), Government of India, making the
            apostille legally valid for use in all Hague Convention countries.
            Our structured workflow minimizes errors, reduces processing time,
            and ensures smooth acceptance of your documents overseas.
          </p>
          <p>
            Goodway Attestation follows a streamlined and transparent approach,
            providing clear guidance at every step, real-time status updates,
            and dedicated customer support. From document verification to final
            apostille stamping, we manage the entire process on your behalf,
            allowing you to focus on your international plans without
            unnecessary stress.
          </p>
          <p>
            Whether you are an individual professional, student, family
            applicant, or corporate client, Goodway Attestation remains your
            trusted partner for MEA Apostille Service in Bangalore. Our
            commitment to quality, security, and timely delivery makes us one of
            the most reliable apostille service providers in the region.
          </p>
        </div>
        <div className="highlight-section">
          {/* Duration Highlight */}
          <div className="highlight-card">
            <h3>🚀Duration – MEA Apostille in Just 5 Days</h3>
            <ul>
              <li>
                <strong>Standard Processing Time:</strong>3 to 5 Working Days
              </li>
              <li className="note">
                (Duration may vary depending on document type & issuing
                authority)
              </li>
            </ul>
            <p>
              With 16 years of experience, we ensure quick turnaround with
              guaranteed delivery.
            </p>
          </div>

          {/* Pickup Highlight */}
          <div className="highlight-card">
            <h3>⚡ 1-Hour Document Collection across Bangalore</h3>
            <p>
              We offer express document pickup within <strong>1 hour</strong>{" "}
              from 60+ localities, including:
            </p>
            <p className="locations">
              Whitefield, Electronic City, Marathahalli, Bellandur, Indiranagar,
              Jayanagar, Yelahanka, Rajajinagar, Hebbal, Malleshwaram, BTM, HSR,
              Banashankari, KR Puram, and more.
            </p>
            <p className="highlight-text">
              No travel. No waiting. Complete convenience.
            </p>
          </div>
        </div>
        <div className="usp-section">
          <h2 className="usp-heading">
            Our USPs – Why Goodway Attestation Is #1 in Bangalore
          </h2>

          <div className="usp-column">
            {[
              "16 Years of Process Expertise",
              "Government Approved Attestation Agency",
              "Authorized by MEA & UAE Authorities",
              "Trusted by 12,000+ Happy Customers",
              "Exclusive Partner of 28+ Top Indian MNCs in Bangalore",
              "Secure Document Handling & Confidentiality",
              "Live Progress Tracking & Regular Updates",
              "Guaranteed Delivery Commitment",
              "1-Hour Document Collection from 60+ Bangalore Localities",
              "Dedicated Relationship Manager for Every Case",
            ].map((item, index) => (
              <div key={index} className="usp-card">
                <span className="usp-icon">✔</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeContentHead;
