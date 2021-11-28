import React from "react";
import Icon from "react-hero-icon";

function Footer() {
  return (
    <div className="footer w-full bg-red-700 h-auto pt-6 ">
      <h1 className="text-left text-4xl">Contact Us</h1>
      <div className="border bg-white w-full h-3 pt-6"></div>
      <div className="description-container block sm:flex w-full">
        <div className="description w-1/2 mx-2 my-3">
          <p>Jalan Baron No. 53 RT 001/006 Nanggewer Mekar,</p>
          <p>Cibinong - Bogor</p>
          <p>16912</p>
        </div>
        <div className="contact w-1/2 justify-start">
          <div className="flex items-center  my-2">
            {" "}
            <Icon
              className="flex mx-3 items-center "
              icon="phone"
              type="solid"
            />{" "}
            <p>081314833518</p>
          </div>

          <br />
          <div className="flex mx-3 items-center  mt-2">
            <Icon
              className="flex mt-1 items-center "
              icon="mail"
              type="solid"
            />{" "}
            <p>revandcatering@gmail.com</p>
          </div>
          <br />
        </div>
      </div>
    </div>
  );
}

export default Footer;
