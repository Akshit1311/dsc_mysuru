import React from "react";

import "./footer.css";
import Fort from "../../assets/animfort.png";
import Typo from "../../assets/totalmysore.png";

const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <footer>
      <img src={Typo} className="footer-logo" alt="" />
      <img src={Fort} alt="" className="fort" />
      <i className="fa fa-facebook" aria-hidden="true"></i>
      Copyright © {date} Designed by fourTwo
    </footer>
  );
};

export default Footer;
