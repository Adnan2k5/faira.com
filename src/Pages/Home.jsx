import { Navbar } from "@/components/Navbar";
import React from "react";
import faira from "@/assets/faira3.jpeg";
import { About } from "./About";
import { Pitch } from "./Pitch";
import { Magic } from "./Magic";
import whatsapp from "@/assets/whatsapp.png";
import { Contact } from "./Contact";
import { Gallery } from "./Gallery";

//#FEF7F7  #f5a9a9  #F9F9F9

export const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="whatsapp fixed left-1 bottom-5">
        <a href="#">
          <img src={whatsapp} alt="whatsapp" className="w-10 h-10" />
        </a>
      </div>
      <div id="home" className="main mt-24 bg-[#F9F9F9]  m-auto h-screen p-5">
        <div className="mainbox m-auto flex w-[90vw]  md:h-[60vh]  lg:h-[60vh] h-[40vh]">
          <div className="image w-[90vw]">  
            <img
              src={faira}
              alt="faira" 
              className="w-full h-full"
            />
          </div>
          <div className="text md:ml-16 lg:ml-16 xl:ml-16 w-[50vw] text-[#f18a8a] flex flex-col  mt-12 ml-5 absolute">
            <h1 className="text-[30px] -mt-4 md:text-[4rem] lg:text-[6rem] font-brush xl:text-[8rem]">
              Faira Beauty Cream
            </h1>
            <p className="text-[15px] text-[#444444] font-comic md:text-[25px] lg:text-[30px] xl:text-[32px] tracking-[0.2rem] font-extrabold mt-5 md:mt-0  md:flex lg:flex xl:flex md:text-lg lg:text-2xl xl:text-xl xl:-mt-8">
              Unveiling Your Natural Beauty With Our Product
            </p>
          </div>
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
          <div className="users flex flex-col ga-2 justify-center items-center">
            <h1 className="text-[2rem] text-red-500">10K+</h1>
            <p className="text-[1rem]">Orders</p>
          </div>
        </div>
      </div>
      <div id="about" className="about mt-24 w-[90vw] m-auto p-5">
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
