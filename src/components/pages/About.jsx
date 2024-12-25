// import React from 'react'

import "./About.css";
import AboutImage1 from "../Images/img22.png";
import AboutImage2 from "../Images/img19.png";
import AboutImage3 from "../Images/img20.png";
import AboutImage4 from "../Images/img21.png";

export const About = () => {
  return (
    <div className=".About-Section">
    <div>
      <img src={AboutImage1} alt="image" className="About-image1" />
    </div>
    <div>
    <img src={AboutImage2} alt="image" className="About-image2" />
    </div>
    <div>
    <img src={AboutImage3} alt="image" className="About-image3" />
    </div>
    <div>
    <img src={AboutImage4 } alt="image" className="About-image4" />
    </div>
    </div>
  )
}
