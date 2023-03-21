import React from "react";
import "./Home.css";
import Svg from "./images/avataaars.svg";

export default function Home() {
  return (
    <>
      <div className="Home container-fluid w-100 h-100 p-4">
        <div className="container d-flex justify-content-center align-items-center flex-column text-white mt-4">
          <img src={Svg} alt="personal" />
          <h1 className="text-uppercase home-header fw-bolder">start react</h1>
          <div className="d-flex justify-content-center align-items-center">
            <div className="line home-line"></div>
            <i className="fa-solid fa-star fa-2x"></i>
            <div className="line home-line"></div>
          </div>
          <p className="subheader my-4">
            Graphic Artist - Web Designer - Illustrator
          </p>
        </div>
      </div>
    </>
  );
}
