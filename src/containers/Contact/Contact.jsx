import React, { useEffect } from "react";

import "./contact.css";
const Contact = () => {
  return (
    <div className="contact">
      <h1>Contact</h1>

      <div className="contact-grid">
        <div></div>
        <div>
          <form action="">
            <input type="email" name="email" className="form-input" />
            <input type="number" name="number" className="form-input" />
            <input type="text" name="email" className="form-input" />
            <button className="btn">Contact Us</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
