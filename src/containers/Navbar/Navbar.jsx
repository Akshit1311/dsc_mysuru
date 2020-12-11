import React from "react";

import Logo from "../../assets/logo-circ.png";

// Styles
import "./navbar.css";

const Navbar = () => {
  return (
    <header className="navb darkmode-activated">
      <img src={Logo} alt="logo" className="navb-logo" />
      <div className="navb-links">
        <a href="">Home</a>
        <a href="">Home</a>
        <a href="">Home</a>
        <a href="">Home</a>
        <a href="">Home</a>
      </div>
    </header>
  );
};

export default Navbar;
