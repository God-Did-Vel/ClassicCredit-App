// import React from 'react'

import "./ThirdSection.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";

export const ThirdSection = () => {
  return (
    <div className="box-container1">
      <div className="icon-text1">
        <FontAwesomeIcon icon={faChartLine} className="icon1" />
        <p className="icon-text1">
        Invest your Future.
        </p>
      </div>
    </div>
  );
};
