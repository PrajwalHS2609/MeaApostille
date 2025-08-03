"use client"
import React from "react";
import "./Reviews.css";
const Reviews = () => {
//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src = "https://apps.elfsight.com/p/platform.js";
//     script.async = true;
//     document.body.appendChild(script);

//     return () => {
//       document.body.removeChild(script);
//     };
//   }, []);
  return (
    <>
      <div className="reviewsHeading">
        <h2>What Our Customers Say</h2>
        <div className="reviewUnderline"></div>
      </div>
      <div className="reviewsContainer">
        <div className="reviewsContent">
          <iframe
            src="https://widgets.sociablekit.com/google-reviews/iframe/25569316"
            frameBorder="0"
            width="100%"
            height="1000"
            title="review"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Reviews;
