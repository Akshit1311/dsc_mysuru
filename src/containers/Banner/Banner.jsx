import React from "react";

import "./banner.css";

import Fort from "../../assets/animfort.png";
// import Typo from "../../assets/mysore1.png";
import Typo from "../../assets/totalmysore.png";

const Banner = () => {
  return (
    <div className="banner darkmode-ignore">
      <img src={Typo} alt="typo" className="typo" />
    </div>
  );
};

export default Banner;
