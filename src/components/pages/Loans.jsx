// import React from 'react'

import LoansImages from "../Images/img31.png";
import "./Loans.css";

export const Loans = () => {
  return (
    <div>
      <div className="Loans-Section">
        <img src={LoansImages} alt="image" className="About-image1" />
      </div>
      <div className="loans-container">
        <h2>Flexible Loan Options</h2>
        <p>
          At <strong>Classic Credit</strong>, we’re committed to helping you
          achieve your dreams. Whether it’s for personal needs, starting a
          business, or making a major purchase, our loan options are designed
          with flexibility, affordability, and transparency in mind.F
        </p>
        <ul className="loans-list">
          <li>
            <strong>Personal Loans:</strong> Manage your finances with ease.
          </li>
          <li>
            <strong>Business Loans:</strong> Empower your entrepreneurial
            journey.
          </li>
          <li>
            <strong>Mortgage Loans:</strong> Make your dream home a reality.
          </li>
          <li>
            <strong>Student Loans:</strong> Invest in your education and future.
          </li>
        </ul>
      </div>
    </div>
  );
};
