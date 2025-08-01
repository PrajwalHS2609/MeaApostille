"use client";
import React, { useState } from "react";
import "./AboutUs.css";
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
        <h2>A reimagined ThinkPad® experience</h2>
        <p>
          While 91% of employees use GenAI at work, only 13% report that their
          companies have fully implemented AI.
        </p>
        <br />
        <img
          src="https://techtoday.lenovo.com/sites/default/files/styles/original/public/2024-12/img-thinkpad-copilot%402x.png.webp?itok=XT55NUNf"
          alt=""
        />
      </div>
      <div className="aboutUs-content">
        <p>
          {" "}
          The Lenovo ThinkPad® X9 Aura Edition Series, imagined with Intel,
          redefines productivity with next-gen AI, best-in-class battery life,
          and innovations from Lenovo AI Now and Copilot+, exclusively on
          Windows 11. The best part? It's all wrapped in a sleek, quiet, and
          cool design. Ready to elevate your workforce's productivity?{" "}
          <strong>
            Download our solution guide now to see the X9 performance boost.
          </strong>
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
