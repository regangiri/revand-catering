import React from "react";
import { useState, useEffect } from "react";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import * as Scroll from "react-scroll";
import Icon from "react-hero-icon";

function Header() {
  const [navbar, setNavbar] = useState(false);
  const [isActive, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!isActive);

    console.log(isActive);
  };

  const changeBackground = () => {
    if (window.scrollY >= 66) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  // const changeIcon = () =>{
  //   if(screen)
  // }

  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);
  });

  if (navbar) {
    return (
      <header className="block sm:flex justify-center sm:justify-between sticky duration-500 top-0 z-50 items-center bg-red-700 pb-2 sm:py-5">
        <div className="title text-sm sm:text-3xl">
          <Icon
            className="flex sm:hidden"
            icon="menu"
            type="solid"
            onClick={handleToggle}
          />

          <h1 className="text-white">Revand Catering</h1>
        </div>
        <div
          className={
            isActive
              ? "nav-items text-xs sm:flex block "
              : "nav-items text-xs sm:flex hidden "
          }
        >
          <Link to="beranda-container" spy={true} smooth={true} duration={500}>
            <div className="nav-links mx-2 sm:text-xl text-white hover:text-black ">
              Beranda
            </div>
          </Link>

          <Link to="paket-container" spy={true} smooth={true} duration={500}>
            {" "}
            <div className="nav-links mx-2 sm:text-xl text-white hover:text-black ">
              Paket&Harga
            </div>
          </Link>
          <Link to="porto-container" spy={true} smooth={true} duration={500}>
            <div className="nav-links mx-2 sm:text-xl text-white hover:text-black ">
              Portofolio
            </div>
          </Link>
          <Link to="about-container" spy={true} smooth={true} duration={500}>
            {" "}
            <div className="nav-links mx-2 sm:text-xl text-white hover:text-black ">
              Tentang Kami
            </div>
          </Link>
        </div>
      </header>
    );
  } else {
    return (
      <header className="block sm:flex justify-center sm:justify-between  duration-1000 top-0 z-50 items-center  pb-2 sm:py-5">
        <div className="title text-sm sm:text-3xl">
          <Icon
            className="flex sm:hidden"
            icon="menu"
            type="solid"
            onClick={handleToggle}
          />
          <h1 className="text-black">Revand Catering</h1>
        </div>
        <div
          className={
            isActive
              ? "nav-items text-xs sm:flex block "
              : "nav-items text-xs sm:flex hidden "
          }
        >
          <Link to="beranda-container" spy={true} smooth={true} duration={500}>
            {" "}
            <div className="nav-links mx-2 sm:text-xl text-black hover:text-red-600 ">
              Beranda
            </div>
          </Link>
          <Link to="paket-container" spy={true} smooth={true} duration={500}>
            {" "}
            <div className="nav-links mx-2 sm:text-xl text-black hover:text-red-600 ">
              Paket&Harga
            </div>
          </Link>
          <Link to="porto-container" spy={true} smooth={true} duration={500}>
            {" "}
            <div className="nav-links mx-2 sm:text-xl text-black hover:text-red-600 ">
              Portofolio
            </div>
          </Link>
          <Link to="about-container" spy={true} smooth={true} duration={500}>
            {" "}
            <div className="nav-links mx-2 sm:text-xl text-black hover:text-red-600 ">
              Tentang Kami
            </div>
          </Link>
        </div>
      </header>
    );
  }
  return <></>;
}

export default Header;
