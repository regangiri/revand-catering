import React from "react";
import logo from "../assets/static/logo.png";
import revandText from "../assets/static/revand-text.png";
import "../index.css";
function Beranda() {
  return (
    <div className="beranda-container h-full  flex flex-col justify-center items-center ">
      {/* <h1 className="pt-10 sm:text-6xl md:text-8xl text-yellow-400 font-alfa text-4xl">
        Revand Catering
      </h1> */}
      <img className="w-96 h-52 scale-150 " src={revandText} alt="" />
      <img className="z-10" src={logo} alt="" />
      <div className="navigation-center  block  lg:flex justify-center items-center">
        <div className="navigation-link sm:mx-10 text-white hover:scale-125 sm:w-64 sm:h-24 w-36 h-16 mx-2 items-center flex justify-center text-center  text-sm sm:text-3xl border-4 rounded-xl sm:p-1 my-3 bg-gray-500 border-black ">
          Lokasi Kami
        </div>
        <div className="navigation-link sm:mx-10 text-white hover:scale-125 sm:w-64 sm:h-24 w-36 h-16 mx-2 items-center flex justify-center text-center text-sm sm:text-3xl border-4 rounded-xl sm:p-1 my-3 bg-gray-500 border-black ">
          Promosi Saat Ini
        </div>
        <div className="navigation-link sm:mx-10 text-white hover:scale-125 sm:w-64 sm:h-24 w-36 h-16 mx-2 items-center flex justify-center text-center text-sm sm:text-3xl border-4 rounded-xl sm:p-1 my-3 bg-gray-500 border-black ">
          Follow kami di sosial media
        </div>
      </div>
    </div>
  );
}

export default Beranda;
