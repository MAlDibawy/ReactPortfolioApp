import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="About container-fluid w-100 h-100 p-5">
      <h2 className="text-uppercase section-header text-center fw-bolder text-white">
        About
      </h2>
      <div className="d-flex justify-content-center align-items-center">
        <div className="line bg-light"></div>
        <i className="fa-solid fa-star fa-2x"></i>
        <div className="line bg-light"></div>
      </div>
      <div className="about-content row text-white my-5 d-flex justify-content-evenly">
        <div className="col-lg-4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam odio
            debitis cumque blanditiis praesentium libero accusantium aliquid vel
            deleniti
          </p>
        </div>
        <div className="col-lg-4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam odio
            debitis cumque blanditiis praesentium libero accusantium aliquid vel
            deleniti
          </p>
        </div>
      </div>
    </div>
  );
}
