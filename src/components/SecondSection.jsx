// import React from 'react'

import "./SecondSection.css";
import secondImage1 from "./Images/img4.png";


export const SecondSection = () => {
  return (
    <div>
      <div className="second-section">
        <img src={secondImage1} alt="image" className="second-image" />
        <div className="animated-background background1"></div>
        <div className="animated-background background2"></div>


      </div>
    </div>
  );
};
