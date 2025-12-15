"use client";
import React, { useState } from "react";
import "./AboutUs.css";
import mea from "../../../Images/Mea.png";
import Swal from "sweetalert2";

import Image from "next/image";
const AboutUs = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    // ✅ Add your Web3Forms access key
    formData.append("access_key", "c724e1f7-4c15-425b-af5e-470524fd7581");

    const object = Object.fromEntries(formData.entries());
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "Mail Sent successfully",
        icon: "success",
        confirmButtonText: "OK",
      });
      form.reset();
    } else {
      Swal.fire({
        title: "Error!",
        text: "Something went wrong. Please try again later.",
        icon: "error",
      });
    }
  };

  return (
    <div className="aboutUs-container" id="contact-us">
      <div className="aboutUs-content">
        <h2>Govt-Approved Apostille Service</h2>
        <p>MEA-authorized services for personal & educational documents.</p>
        <br />
        <Image src={mea} alt="Mea Bangalore" />
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
        <form onSubmit={onSubmit} className="contact-form">
          {/* Input fields */}
          <div className="form-group">
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              placeholder="Enter first name"
              required
            />
          </div>

          <div className="form-group">
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              placeholder="Enter last name"
              required
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              required
            />
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter phone number"
              required
            />
          </div>

          <div className="form-group">
            <label>Subject</label>
            <input
              type="text"
              name="booking-subject"
              placeholder="Enter subject"
              required
            />
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea
              name="message"
              placeholder="Write your message..."
              rows="4"
              required
            ></textarea>
          </div>

          {/* ✅ Policy Agreement Checkbox */}
          <div className="policy-checkbox">
            <input type="checkbox" name="I agree to the Privacy Policy" required />
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

          <button type="submit" className="submit-btn">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default AboutUs;
