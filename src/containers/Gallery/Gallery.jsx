import React from "react";

import "./gallery.css";
import Feed from "react-instagram-authless-feed";

const Gallery = () => {
  return (
    <div className="gallery">
      <h1>Gallery</h1>
      <Feed
        userName="mysuru"
        className="Feed"
        classNameLoading="Loading"
        limit="10"
      />
    </div>
  );
};

export default Gallery;
