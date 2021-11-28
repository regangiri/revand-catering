import React from "react";
import porto1 from "../assets/static/porto1.png";
import porto2 from "../assets/static/porto2.png";
import porto3 from "../assets/static/porto3.png";

function Portofolio() {
  return (
    <div className="porto-container flex flex-col justify-center items-center">
      <h1 className="text-center text-5xl sm:text-7xl lg:text-9xl font-alfa text-black  md:text-9xl pt-7">
        Rekan Kami
      </h1>
      <div className="portofolio-container flex flex-col justify-center items-center md:flex-row">
        <div>
          <img className="my-5 mx-9 rounded-lg" src={porto1} alt="" />
        </div>
        <div className="portofolio-container">
          <img className="my-5 mx-9 rounded-lg" src={porto2} alt="" />
        </div>
        <div className="portofolio-container">
          <img className="my-5 mx-9 rounded-lg" src={porto3} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Portofolio;
