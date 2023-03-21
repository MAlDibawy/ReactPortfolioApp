import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <>
      <div className="container-fluid text-white py-4 footer">
        <div className="row">
          <div className="col-md-4 text-center">
            <h4 className="fw-bolder text-uppercase">Location</h4>
            <p className="pt-3">
              2215 John Daniel Drive
              <br />
              Clark, MO 65243
            </p>
          </div>
          <div className="col-md-4 text-center text-uppercase">
            <h4 className="fw-bolder">Around the Web</h4>
            <div className="pt-2">
              <button className="btn btn-outline-light rounded-icon mx-1">
                <i className="fa-brands fa-facebook-f"></i>
              </button>
              <button className="btn btn-outline-light rounded-icon mx-1">
                <i className="fa-brands fa-twitter"></i>
              </button>
              <button className="btn btn-outline-light rounded-icon mx-1">
                <i className="fa-brands fa-linkedin-in"></i>
              </button>
              <button className="btn btn-outline-light rounded-icon mx-1">
                <i className="fa-brands fa-dribbble"></i>
              </button>
            </div>
          </div>
          <div className="col-md-4 text-center text-uppercase">
            <h4 className="fw-bolder">About Developer</h4>
            <p className="pt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
              aspernatur!
            </p>
          </div>
        </div>
      </div>
      <div className="copyrights text-center py-3 text-white">
        <span>Copyright © Your Website 2023</span>
      </div>
    </>
  );
}
