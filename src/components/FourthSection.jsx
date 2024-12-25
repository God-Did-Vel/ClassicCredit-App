// import React from 'react'

import "./FourthSection.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandHoldingDollar } from "@fortawesome/free-solid-svg-icons";

export const FourthSection = () => {
  return (
    <div className="box-container">
      <div className="icon-text">
        <FontAwesomeIcon icon={faHandHoldingDollar} className="icon" />
        <p className="icon-text"> Grow your Finance.</p>
      </div>
    </div>
  );
};
