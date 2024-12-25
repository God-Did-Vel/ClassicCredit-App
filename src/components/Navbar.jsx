import { useState } from "react";

import { NavLink, Link } from "react-router-dom";
import logo2 from "./Images/logo2.jpg";
import logo3 from "./Images/logo3.png";
import "./Navbar.css";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <div className="logo-title">
        <Link to="/" className="logo2">
          <img src={logo2} alt="ClassicCredit Logo" className="logo2" />
        </Link>
        <Link to="/" className="logo3">
          <img src={logo3} alt="Second logo" className="logo3" />
        </Link>
        <Link to="/" className="title">
          ClassicCredit
        </Link>
      </div>
      <div
        className="menu"
        onClick={() => {
          setMenuOpen(!menuOpen);
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="about">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li>
          <NavLink to="services">Services</NavLink>
        </li>
        <li>
          <NavLink to="loans">Loans</NavLink>
        </li>
        <li>
          <NavLink to="business">Business</NavLink>
        </li>
      </ul>
    </nav>
  );
};
