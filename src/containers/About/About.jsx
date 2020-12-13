import React, { useEffect, useState } from "react";

import "./about.css";
import { data } from "./Data";

const About = ({ aboutRef }) => {
  const defPlace = data.filter((place) => place.id === 0);
  const [activePlace, setActivePlace] = useState(defPlace[0]);

  console.log(activePlace);

  const handleClick = (id) => {
    const place = data.filter((place) => place.id === id);
    setActivePlace(place[0]);
  };

  return (
    <div ref={aboutRef} className="about">
      <h1>Hotspots</h1>

      <div className="row">
        <div className="col">
          <div className="info">
            <img
              src={activePlace.imgUri}
              className="active-place"
              alt={activePlace.name}
            />
            <div className="img-grid">
              {data.map((place) => (
                <img
                  src={place.imgUri}
                  className="inactive-place"
                  alt={place.name}
                  onClick={() => handleClick(place.id)}
                />
              ))}
              {/* <img
                src={activePlace.imgUri}
                className="inactive-place"
                alt={activePlace.name}
              /> */}
            </div>
          </div>
        </div>
        <div className="col">
          <h2 className="place-title">{activePlace.title}</h2>
          <span className="rating darkmode-ignore">{activePlace.rating}/5</span>
          <span className="location ">
            <i class="fa fa-map-marker darkmode-ignore" aria-hidden="true"></i>
            {activePlace.location}
          </span>
          <br />
          <br />
          <h3>Overview</h3>
          <br />
          <p className="place-content">{activePlace.content}</p>

          <button
            className="place-btn"
            onClick={() => {
              window.open("https://www.webquanta.in/");
            }}
          >
            View More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
