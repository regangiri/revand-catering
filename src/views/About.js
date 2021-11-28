import React from "react";
import logo from "../assets/static/logo.png";

function About() {
  return (
    <div className="flex flex-col">
      <h1 className="text-5xl text-center text-black font-bold m-3 pb-10">
        Tentang Kami
      </h1>
      <div className="about-container flex">
        <div className="about-us flex flex-col sm:w-1/2 w-full h-screen font-serif">
          <p className="lg:text-3xl px-3  text-base ml-2 text-justify leading-snug lg:leading-relaxed">
            CV. Revand Putra Mandiri adalah kelompok usaha yang memiliki
            beberapa unit usaha, salah satunya adalah Revand Catering. Revand
            Catering merupakan salah satu unit usaha dibawah CV. Revand Putra
            Mandiri.
          </p>
          <br />
          <br />
          <br />
          <br />
          <p className="lg:text-3xl px-3  text-base ml-2 text-justify leading-snug lg:leading-relaxed">
            Didirikan untuk melayani kebutuhan akan pengadaan fasilitas jasa
            boga, seperti pengadaan catering di instansi pemerintah dan swasta
            seperti nasi box, prasmanan, snack box, dan lain-lain, yang di olah
            dengan berkualitas, bercitarasa dan mengutamakan kesegaran makanan,
            serta kehigienisan dan sanitasi yang baik
          </p>
        </div>
        <div className="gambar sm:w-1/2 flex items-center justify-center">
          <img src={logo} alt="" />
        </div>
      </div>
    </div>
  );
}

export default About;
