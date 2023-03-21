import React from "react";
import "./Contact.css";
export default function Contact() {
  return (
    <div className="Contact container-fluid w-100 h-100 p-4">
      <div className="container h-100">
        <h2 className="text-uppercase section-header text-center fw-bolder">
          Contact Me
        </h2>
        <div className="d-flex justify-content-center align-items-center">
          <div className="line"></div>
          <i className="fa-solid fa-star fa-2x p-star"></i>
          <div className="line"></div>
        </div>
        <div className="inputs p-5">
          <div className="inputWrap">
            <input
              type="text"
              name="name"
              id="name"
              className="form-control"
              placeholder="Name"
            />
          </div>
          <div className="inputWrap">
            <input
              type="email"
              name="email"
              id="email"
              className="form-control"
              placeholder="Email Address"
            />
          </div>
          <div className="inputWrap">
            <input
              type="phone"
              name="phone"
              id="phone"
              className="form-control"
              placeholder="Phone Number"
            />
          </div>
          <div className="inputWrap">
            <textarea
              name="message"
              id="message"
              className="form-control"
              placeholder="Message"
              rows="3"
            ></textarea>
          </div>
        </div>

        <button className="btn btn-primary m-auto d-block">Send</button>
      </div>
    </div>
  );
}
