// import React from 'react'

import "./FivethSection.css";
import FivethImage from "./Images/img7.png";

export const FivethSection = () => {
  return (
    <div className="Paragraph-container">
      <div className="Paragraph-content">
      <h3>YOUR GATEWAY BANK, YOUR WINDOW TO THE WORLD.</h3>
        <p>
          Classic Credit Bank serves as your gateway to seamless global finance. From
          wealth management and transparent cross-border payments to real-time
          remittances and access to capital markets worldwide, we leverage
          technology to keep you connected to the financial world. Our reach is
          diverse and expansive, offering exclusive services while remaining
          welcoming and inclusive to all.
        </p>
        <br></br>
        <p>
          We understand that one size does not fit all, and we take pride in our
          24-year track record of providing highly personalized service. At
          Classic Credit Bank, we harness the power of technology to eliminate barriers and
          unlock a world of opportunities.
        </p>
        <br></br>
        <p>
          We view you not simply as a customer but as an integral part of the
          global financial community – a world without borders. Our commitment
          to you is boundless, offering a personalized service that transcends
          the conventions of traditional banking.
        </p>
      </div>
      <div className="Paragraph-right">
        <img src={FivethImage} alt="Image Seven" className="Image7" />
        <button type="button" className="submit-button1">Learn More!!</button>
      </div>
    </div>
  );
};
