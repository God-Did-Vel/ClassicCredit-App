// import React from 'react'

import ContactImage1 from "../Images/img23.png";
import "./Contact.css";

export const Contact = () => {
  return (
    <div className="Contact-Section">
      <div className="Contact-Images">
        <img src={ContactImage1} alt="Image" className="About-image1" />
      </div>


      <div className="Contact-Text">
        <h2>We Are at Your Service</h2>
        <p>
          Our service operatives are available to assist you anytime. Just fill
          the form below.
        </p>
      </div>


      <div className="Contact-Form">
        <form>
          <input type="email" placeholder="Email or Phone Number" required />
          <input type="text" placeholder="First Name" required />
          <input type="text" placeholder="Last Name" required />
          <input type="tel" placeholder="Phone Number" required />
          <input type="text" placeholder="Occupation" required />
          <input type="text" placeholder="Existing Customer" required />
          <input type="text" placeholder="Location" required />
          <input type="text" placeholder="Contact Category" required />
          <textarea placeholder="Your Message" rows="10" required></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};
