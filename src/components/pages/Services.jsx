// import React from 'react'

import ServiceImage from "../Images/img32.png";
import ServiceImage2 from "../Images/img25.png";
import "./Services.css";

export const Services = () => {
  return (
    <div>
      <div className="Services-Section">
        <img src={ServiceImage} alt="image" className="About-image1" />
      </div>
      <div className="Service-Text">
        <h2>Payment-Solutions</h2>
        <p>Receive payments securely and effortlessly.</p>
        <ul>
          <li>Fast and reliable transactions</li>
          <li>Supports multiple payment methods</li>
          <li>Secure and compliant payment processing</li>
          <li>Easy integration for your business</li>
        </ul>
      </div>
      <div className="Service-Img2">
      <img src={ServiceImage2} alt="image" className="About-image1" />
      </div>
    </div>
  );
};
