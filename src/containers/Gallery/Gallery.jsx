import React, { useEffect } from "react";

import "./gallery.css";

import Img1 from "../../assets/gallery/1.jpg";
import Img2 from "../../assets/gallery/2.jpg";
import Img3 from "../../assets/gallery/3.jpg";
import Img4 from "../../assets/gallery/4.jpg";
import Img5 from "../../assets/gallery/5.jpg";
import Img6 from "../../assets/gallery/6.jpg";
import Img7 from "../../assets/gallery/7.jpg";
import Img8 from "../../assets/gallery/8.jpg";

const Gallery = ({ galleryRef }) => {
  return (
    <div ref={galleryRef} className="gallery">
      <h1>Gallery</h1>

      <div className="grid">
        <img src={Img1} alt="" />
        <img src={Img2} alt="" />
        <img src={Img3} alt="" />
        <img src={Img4} alt="" />
        <img src={Img5} alt="" />
        <img src={Img6} alt="" />
        <img src={Img7} alt="" />
        <img src={Img8} alt="" />
      </div>

      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/NZTlnvB7Gjo"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        className="d-block mx-auto darkmode-ignore"
      ></iframe>
    </div>
  );
};

export default Gallery;
