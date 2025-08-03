"use client";
import React, { useState } from "react";
import "./AboutUs.css";
import mea from "../../../Images/Mea.png"
import Image from "next/image";
const AboutUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Form submitted successfully!");
    // API submission logic goes here
  };

  return (
    <div className="aboutUs-container">
      <div className="aboutUs-content">
        <h2>Govt-Approved Apostille Service</h2>
        <p>MEA-authorized services for personal & educational documents.</p>
        <br />
        <Image
          src={mea}
          alt="Mea Bangalore"
        />
      </div>
      <div className="aboutUs-content">
        <p>
          Goodway Apostille Services in Bangalore will verify, validate and
          legalize the Karnataka State Government issued documents as well as
          other state issued documents. If your documents are of different state
          but you live in Karnataka you can submit the documents for apostille
          in Bangalore, But the documents will be verified from the state branch
          where the documents are issued.
        </p>
        <br />
        <form onSubmit={handleSubmit} className="contact-form">
          {/* Input fields */}
          <div className="form-group">
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              placeholder="Enter first name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              placeholder="Enter last name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter phone number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Subject</label>
            <input
              type="text"
              name="subject"
              placeholder="Enter subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea
              name="message"
              placeholder="Write your message..."
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          {/* ✅ Policy Agreement Checkbox */}
          <div className="policy-checkbox">
            <input
              type="checkbox"
              name="agree"
              checked={formData.agree}
              onChange={handleChange}
              required
            />
            <label>
              I agree to the{" "}
              <a
                href="/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy Policy
              </a>{" "}
              &{" "}
              <a href="/terms" target="_blank" rel="noopener noreferrer">
                Terms of Service
              </a>
            </label>
          </div>

          <button
            type="submit"
            className="submit-btn"
            disabled={!formData.agree} // disable if unchecked
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default AboutUs;
