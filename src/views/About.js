import React from "react";
import logo from "../assets/static/logo.png";

function About() {
  return (
    <div className="about-container flex flex-col">
      <h1 className="font-alfa text-5xl text-center text-black font-bold m-3 pb-4">
        Tentang Kami
      </h1>
      <div className=" flex pb-10">
        <div className="about-us flex flex-col lg:w-1/2 w-full h-auto pb-10 font-serif">
          <p className="sm:text-3xl px-3  text-base ml-2 text-justify leading-snug lg:leading-relaxed">
            CV. Revand Putra Mandiri adalah kelompok usaha yang memiliki
            beberapa unit usaha, salah satunya adalah Revand Catering. Revand
            Catering merupakan salah satu unit usaha dibawah CV. Revand Putra
            Mandiri.
          </p>
          <br />
          <br />
          <br />
          <br />
          <p className="sm:text-3xl px-3  text-base ml-2 text-justify leading-snug lg:leading-relaxed">
            Didirikan untuk melayani kebutuhan akan pengadaan fasilitas jasa
            boga, seperti pengadaan catering di instansi pemerintah dan swasta
            seperti nasi box, prasmanan, snack box, dan lain-lain, yang di olah
            dengan berkualitas, bercitarasa dan mengutamakan kesegaran makanan,
            serta kehigienisan dan sanitasi yang baik
          </p>
        </div>
        <div className="hidden gambar lg:w-1/2 lg:flex items-center justify-center">
          <img src={logo} alt="" />
        </div>
      </div>
    </div>
  );
}

export default About;
