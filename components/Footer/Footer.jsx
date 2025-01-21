import React, { useState } from "react";
import {
  FaTwitter,
  FaTelegram,
  FaDiscord,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import Pikachu from "../../assets/Niggachu.png";
const Navbar = ({ scrollToSection, aboutRef, buyRef }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="footer-cover">
      <div className="footer">
        {/* Logo Section */}
        <div className="nav-logo">
          <img src={Pikachu} alt="Logo" className="logo-img" />
          <span className="logo-text">$NIGGACHU</span>
        </div>

        {/* Social Links */}
        <div className="nav-socials">
          <a href="#twitter" className="social-icon">
            <FaTwitter />
          </a>
          <a href="#telegram" className="social-icon">
            <FaTelegram />
          </a>
          <a href="#discord" className="social-icon">
            <FaDiscord />
          </a>
        </div>
      </div>
      <br />
      <div className="rights">
        <p>© All Rights Reserved by NIGGACHU</p>
      </div>
    </div>
  );
};

export default Navbar;
