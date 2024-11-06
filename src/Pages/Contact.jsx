import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
export const Contact = () => {
  return (
    <div>
      <div className="box bg-[#130E1D] flex flex-col gap-20 items-center p-5 w-screen h-[80vh]">
        <div className="side flex fle-col w-full h-[50vh]">
          <div className="title p-5 flex flex-col justify-center text-white">
            <h1 className="text-[4rem] font-brown text-center">Faira</h1>
            <p className="text-[1rem] text-center md:w-1/2 md:items-center md:justify-center flex md:m-auto md:text-[1.2rem]">
              Faira offers premium beauty cosmetics crafted with high-quality,
              natural ingredients. Our products are designed to enhance your
              natural glow, delivering radiant, long-lasting results for all
              skin types. Feel confident, beautiful, and refreshed with Faira's
              nourishing skincare and makeup essentials.
            </p>
          </div>
        </div>
        <div className="footer text-white flex flex-col gap-5 justify-around items-center   w-full border-white/30">
          <div className="social flex gap-5">
            <a href="" target="_blank">
              <FaInstagram className="text-4xl" />
            </a>
            <a href="" target="_blank">
              <FaYoutube className="text-4xl" />
            </a>
            <a href="" target="_blank">
              <FaFacebookF className="text-4xl" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
