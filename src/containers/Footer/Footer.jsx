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
      <br />

      <div className="soc-icons">
        <i className="fa fa-instagram"></i>
        <i className="fa fa-facebook"></i>
        <i className="fa fa-youtube"></i>
      </div>

      <div className="copyright">Copyright © {date} Designed by fourTwo</div>
    </footer>
  );
};

export default Footer;
