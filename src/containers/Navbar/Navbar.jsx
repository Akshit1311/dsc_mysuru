import React from "react";

import Logo from "../../assets/logo-circ.png";
import Typo from "../../assets/mysore1.png";

// Styles
import "./navbar.css";

const Navbar = ({ aboutRef, galleryRef, contactRef }) => {
  return (
    <header className="navb darkmode-activated">
      <img src={Logo} alt="logo" className="navb-logo" />
      <img src={Typo} alt="mysore" height="80%" />
      <div className="navb-links">
        <span href="#">Home</span>
        <span
          onClick={() => {
            aboutRef.current.scrollIntoView();
          }}
        >
          Hotspots
        </span>
        <span
          href=""
          onClick={() => {
            galleryRef.current.scrollIntoView();
          }}
        >
          Gallery
        </span>
        <span
          href=""
          onClick={() => {
            contactRef.current.scrollIntoView();
          }}
        >
          Contact
        </span>
        <span
          href=""
          onClick={() => {
            window.open("https://www.instagram.com/mysuru/");
          }}
        >
          Instagram
        </span>
      </div>
    </header>
  );
};

export default Navbar;
