import { Navbar } from "@/components/Navbar";
import React from "react";
import faira from "@/assets/fairabanner.png";
import { About } from "./About";
import { Pitch } from "./Pitch";
import { Magic } from "./Magic";
import prod3 from "../assets/fairaprod3.png";
import { Contact } from "./Contact";
import { Gallery } from "./Gallery";

//#FEF7F7  #f5a9a9  #F9F9F9

export const Home = () => {
  return (
    <div>
      <Navbar />
      <div id="home" className="main mt-24 bg-[#F9F9F9]  m-auto h-screen p-5">
        <div className="hero m-auto flex justify-center w-[90vw] h-[60vh]">
          <img src={prod3} alt="product" className="md:w-1/2 w-full h-full" />
        </div>
        <div className="product gap-8 mt-10 p-2 h-[40vh] md:h-[30vh]  text-[#444444] flex flex-col md:flex-row lg:flex-row xl:flex-row justify-between items-center m-auto  w-[90%]">
          <div className="title flex justify-center">
            <p className="absolute   -mt-3">The Production</p>
            <h1 className="text-[1.6rem]  lg:text-[2.5rem] text-center text-[#444444]">
              Process
            </h1>
          </div>
          <p className="text-center md:text-lg lg:text-xl text-sm">
            At Perlier, we commit our time and dedication into our production
            process to ensure each and every one of our products embodies
            Perlier's mission. We begin with harvesting the plants and selecting
            the active ingredients of each.
          </p>
          <div id="about" className="users flex flex-col ga-2 justify-center items-center">
            <h1 className="text-[2rem] text-red-500">10K+</h1>
            <p className="text-[1rem]">Orders</p>
          </div>
        </div>
      </div>
      <div id="abouts" className="about mt-24 w-[90vw] m-auto p-5">
        <About />
      </div>
      <div className="pitch mt-18 w-[90vw] m-auto p-5">
        <Pitch/>
      </div>
      <div className="magic mt-24 w-[90vw] m-auto p-5">
        <Magic/>
      </div>
      <div className="gallery mt-24 w-[90vw] m-auto p-5">
        <Gallery/>
      </div>
      <div className="contact mt-32">
        <Contact/>
      </div>
    </div>
  );
};
