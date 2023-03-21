import React from "react";
import "./Portfolio.css";

import img1 from "./images/cabin.png";
import img2 from "./images/cake.png";
import img3 from "./images/circus.png";
import img4 from "./images/game.png";
import img5 from "./images/safe.png";
import img6 from "./images/submarine.png";

import PortfolioCard from "./../PortfolioCard/PortfolioCard";

export default function Portfolio() {
  return (
    <>
      <div className="container-fluid w-100 h-100 p-4">
        <h2 className="text-uppercase section-header text-center fw-bolder">
          Portfolio
        </h2>
        <div className="d-flex justify-content-center align-items-center">
          <div className="line"></div>
          <i className="fa-solid fa-star fa-2x p-star"></i>
          <div className="line"></div>
        </div>
        <div className="row g-5 p-4">
          <div className="col-md-6 col-lg-4 mb-5">
            <PortfolioCard image={img1} imgTitle={"Log Cabin"} />
          </div>
          <div className="col-md-6 col-lg-4 mb-5">
            <PortfolioCard image={img2} imgTitle={"Tasty Cake"} />
          </div>
          <div className="col-md-6 col-lg-4 mb-5">
            <PortfolioCard image={img3} imgTitle={"Circus Tent"} />
          </div>
          <div className="col-md-6 col-lg-4 mb-5">
            <PortfolioCard image={img4} imgTitle={"Controller"} />
          </div>
          <div className="col-md-6 col-lg-4 mb-5">
            <PortfolioCard image={img5} imgTitle={"Locked Safe"} />
          </div>
          <div className="col-md-6 col-lg-4 mb-5">
            <PortfolioCard image={img6} imgTitle={"Submarine"} />
          </div>
        </div>
      </div>
    </>
  );
}
