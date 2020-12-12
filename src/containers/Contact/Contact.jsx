import React, { useEffect } from "react";

import "./contact.css";
const Contact = ({ contactRef }) => {
  return (
    <div ref={contactRef} className="contact">
      <h1>Contact</h1>

      <div className="row">
        <div className="col">
          <div className="mapouter">
            <div className="gmap_canvas">
              <iframe
                width="600"
                height="500"
                id="gmap_canvas"
                src="https://maps.google.com/maps?q=mysuru&t=&z=13&ie=UTF8&iwloc=&output=embed"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
              ></iframe>
              <a href="https://sites.google.com/view/maps-api-v2/mapv2"></a>
            </div>
          </div>
        </div>
        <div className="col">
          <h2 className="contact-heading">
            Feel Free to <span>Ping Us</span>
          </h2>
          <br />
          <form action="">
            <div className="form-group">
              <input
                autocomplete="off"
                type="text"
                placeholder="Enter First Name"
                id="fname"
              />
              <input
                autocomplete="off"
                type="text"
                placeholder="Enter Last Name"
                id="lname"
              />
            </div>
            <br />
            <div className="form-group">
              <input
                autocomplete="off"
                type="email"
                placeholder="Enter Email ID"
                id="email"
              />
              <input
                autocomplete="off"
                type="tel"
                placeholder="Enter Phone Number"
                id="phone"
                data-validation="number"
              />
            </div>
            <button className="place-btn d-block mx-auto">Contact Us</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
