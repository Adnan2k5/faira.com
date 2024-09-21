import { Navbar } from "@/components/Navbar";
import React from "react";
import faira from "@/assets/faira2.jpeg";
import { About } from "./About";
import { Feedback } from "./Feedback";

//#FEF7F7  #f5a9a9

export const Home = () => {
  return (
    <div>
      <Navbar />
      <div id="home" className="main mt-24 w-[90vw] m-auto h-screen p-5">
        <div className="mainbox m-auto flex  md:h-[60vh] rounded-[3rem] lg:h-[60vh] h-[40vh]">
          <div className="image w-[90vw]">
            <img
              src={faira}
              alt="faira"
              className="w-full rounded-[3rem] h-full"
            />
          </div>
          <div className="text md:ml-16 lg:ml-16 xl:ml-16 w-[50vw] text-[#f18a8a] flex flex-col  mt-12 ml-5 absolute">
            <h1 className="text-[40px]  -mt-4 md:text-[4rem] lg:text-[6rem] font-brush xl:text-[8rem]">
              Faira Beauty Cream
            </h1>
            <p className="text-xs mt-5 md:mt-0 hidden md:flex lg:flex xl:flex md:text-lg lg:text-2xl xl:text-xl xl:-mt-8">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non
              distinctio iusto quibusdam a saepe quae commodi, minus illum!
              Nostrum, perspiciatis?
            </p>
          </div>
        </div>
        <div className="product gap-8 mt-10 p-2 h-[40vh] md:h-[30vh]  text-[#f18a8a] flex flex-col md:flex-row lg:flex-row xl:flex-row justify-between items-center  w-full">
          <div className="title">
            <p className="absolute -ml-3  -mt-3">The Production</p>
            <h1 className="text-[1.8rem] lg:text-[2.5rem] text-center text-[#f18a8a]">
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
            <h1 className="text-[2rem] text-[#444444]">100K</h1>
            <p className="text-[1.3rem]">Consumers</p>
          </div>
        </div>
      </div>
      <div className="about mt-24 w-[90vw] m-auto p-5">
        <About />
      </div>
      <div className="feedback mt-24 w-[90vw] m-auto p-5">
        <Feedback/>
      </div>
    </div>
  );
};
