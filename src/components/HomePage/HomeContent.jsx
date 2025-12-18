"use client";
import React, { useState } from "react";

const HomeContent = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="contentHead">
      <div className="contentHead-wrapper">
        <div className="contentHead-content">
          <h2> What is MEA Apostille & Why Is It Required? (2025 Update)</h2>
          <p>
            MEA Apostille is a single international certification issued by the
            Ministry of External Affairs (MEA) that validates Indian documents
            for use in Hague Convention countries such as:
          </p>
          <p>
            USA, UK, Germany, France, Italy, Netherlands, Spain, Australia, New
            Zealand, Japan, South Korea, and many more.
          </p>
          <h3>MEA Apostille Is Mandatory For:</h3>
          <ul>
            <li> • Overseas employment</li>
            <li>• Higher education abroad</li>
            <li>• Immigration & PR</li>
            <li>• Marriage & dependent visas</li>
            <li>• Business expansion & company registration</li>
            <li>• Legal and banking purposes</li>
          </ul>
          <h3>📊 Current Data (2025):</h3>
          <ul>
            <li>
              {" "}
              • Over 30+ countries accept MEA Apostille instead of embassy
              attestation
            </li>
            <li>
              • More than 15 lakh Indians apply for apostille services every
              year
            </li>
            <li>
              • Apostille reduces processing time by 50% compared to embassy
              attestation
            </li>
          </ul>
        </div>
        {expanded && (
          <>
            <div className="contentHead-content">
              <h2>Who Needs MEA Apostille Service in Bangalore?</h2>
              <h3>Our MEA Apostille Service in Bangalore is ideal for:</h3>
              <ul>
                <li>
                  {" "}
                  • IT professionals moving to the USA, Europe, Australia
                </li>
                <li>• Students pursuing higher education abroad</li>
                <li>• Nurses, doctors & healthcare professionals</li>
                <li>• Engineers, researchers & skilled professionals</li>
                <li>• Individuals applying for spouse / dependent visas</li>
                <li>• Entrepreneurs expanding businesses overseas</li>
              </ul>
              <p>
                Goodway Attestation understands the tight deadlines, visa
                timelines, and document compliance requirements faced by Indian
                professionals.
              </p>
            </div>
            <div className="contentHead-content">
              <h2>Documents Covered – Educational, Personal & Commercial</h2>
              <h3>Educational Certificates</h3>
              <ul>
                <li> • Degree Certificate</li>
                <li>• Diploma Certificate</li>
                <li>• MBA, B.Tech, B.Com, M.Tech, Nursing certificates</li>
                <li>• Mark Sheets & Transcripts</li>
              </ul>
              <h3>Personal Certificates</h3>
              <ul>
                <li>• Birth Certificate</li>
                <li>• Marriage Certificate</li>
                <li>• Police Clearance Certificate (PCC)</li>
                <li>• Divorce Certificate</li>
                <li>• Affidavit & Medical Certificates</li>
              </ul>
              <h3>Commercial Documents</h3>
              <ul>
                <li> • Power of Attorney</li>
                <li>• Certificate of Incorporation</li>
                <li>• Memorandum of Association (MOA)</li>
                <li>• Articles of Association (AOA)</li>
                <li>• Business agreements & invoices</li>
              </ul>
            </div>
            <div className="contentHead-content">
              <h2>MEA Apostille Process – Government Authorized Workflow</h2>
              <p>
                Goodway Attestation follows a 100% legal and MEA-authorized
                process:
              </p>
              <ul>
                <li> 1️⃣ Document Verification</li>
                <li>
                  2️⃣ State HRD / SDM Authentication (for applicable documents)
                </li>
                <li>3️⃣ MEA Apostille (India)</li>
              </ul>
              <ul>
                <li>
                  {" "}
                  ✔ Issued directly by Ministry of External Affairs, India
                </li>
                <li>✔ Accepted in all Hague Convention countries</li>
                <li>✔ No embassy attestation required</li>
              </ul>
            </div>
            <div className="content-table-container">
              <div className="content-table-heading">
                <h2>UAE Attestation Charges in Bangalore</h2>
                <h3>Price Starts from ₹3,000 to ₹12,000</h3>
              </div>
              <table className="content-table">
                <thead>
                  <tr>
                    <th>Document Type</th>
                    <th>Price Range</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Educational Certificates</td>
                    <td>₹5,000 – ₹12,000</td>
                  </tr>
                  <tr>
                    <td>Personal Certificates</td>
                    <td>₹3,000 – ₹6,000</td>
                  </tr>
                  <tr>
                    <td>Commercial Documents</td>
                    <td>₹6,000 – ₹12,000</td>
                  </tr>
                </tbody>
              </table>
              <p>
                💡 Final cost depends on document type, urgency, and state
                authentication requirements.
              </p>
            </div>
            <div className="content-table-container">
              <div className="content-table-heading">
                <h2>Price Comparison – Goodway vs Other Service Providers</h2>
              </div>
              <table className="content-table">
                <thead>
                  <tr>
                    <th>Feature</th>
                    <th>Goodway Attestation</th>
                    <th>Local Agents</th>
                    <th>Courier Services</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Govt Approved Process </td>
                    <td>✅ Yes</td>
                    <td>❌ No</td>
                    <td>⚠ Partial</td>
                  </tr>
                  <tr>
                    <td>Guaranteed Delivery</td>
                    <td>✅ Yes</td>
                    <td>❌ No</td>
                    <td>❌ No</td>
                  </tr>
                  <tr>
                    <td>Live Progress Tracking </td>
                    <td>✅ Yes</td>
                    <td>❌ No</td>
                    <td>❌ No</td>
                  </tr>
                  <tr>
                    <td>Secure Handling </td>
                    <td>✅ High</td>
                    <td>⚠ Medium</td>
                    <td>⚠ Medium</td>
                  </tr>
                  <tr>
                    <td>Experience </td>
                    <td>16 Years</td>
                    <td>2–5 Years</td>
                    <td>Varies</td>
                  </tr>
                  <tr>
                    <td>Customer Trust </td>
                    <td>12,000+ Clients</td>
                    <td>Limited</td>
                    <td>Unknown</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="contentHead-content">
              <h2> Opportunities After MEA Apostille</h2>
              <p>
                Completing MEA Apostille Service in Bangalore opens doors to:
              </p>
              <ul>
                <li> • International jobs & tax-benefit countries</li>
                <li>• Faster visa approvals</li>
                <li>• Global education opportunities</li>
                <li>• Immigration & PR pathways</li>
                <li>• Business expansion across Europe & North America</li>
              </ul>
              <p>
                MEA Apostille is the fastest and most widely accepted document
                legalization method.
              </p>
            </div>
            <div className="contentHead-content">
              <h2>
                Why Indian Working Professionals Choose Goodway Attestation
              </h2>
              <h3>We understand:</h3>
              <ul>
                <li> • Job offer & university deadlines</li>
                <li>• Immigration documentation pressure</li>
                <li>• Risk of rejection due to incorrect apostille</li>
                <li>• Need for speed, security, and transparency</li>
              </ul>
              <p>
                With Goodway Attestation, your documents are handled
                professionally, securely, and on time.
              </p>
            </div>
          </>
        )}
        <button className="readMoreBtn" onClick={() => setExpanded(!expanded)}>
          {expanded ? "Read Less ▲" : "Read More ▼"}
        </button>
      </div>
    </div>
  );
};

export default HomeContent;
