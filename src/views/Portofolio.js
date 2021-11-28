import React from "react";
import porto1 from "../assets/static/porto1.png";
import porto2 from "../assets/static/porto2.png";
import porto3 from "../assets/static/porto3.png";

function Portofolio() {
  return (
    <div className="portofolio-container flex flex-col justify-center items-center md:flex-row">
      <div>
        <img className="my-5" src={porto1} alt="" />
      </div>
      <div className="portofolio-container">
        <img className="my-5" src={porto2} alt="" />
      </div>
      <div className="portofolio-container">
        <img className="my-5" src={porto3} alt="" />
      </div>
    </div>
  );
}

export default Portofolio;
