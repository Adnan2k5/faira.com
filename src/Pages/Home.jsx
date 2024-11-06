import { Navbar } from "@/components/Navbar";
import React from "react";
import Ripple from "../components/ui/ripple";
import { About } from "./About";
import { Pitch } from "./Pitch";
import { Magic } from "./Magic";
import prod3 from "../assets/fairaprod3.png";
import { Contact } from "./Contact";

import { cn } from "@/lib/utils";
import AnimatedGradientText from "../components/ui/animated-gradient-text";
import { Gallery } from "./Gallery";

//#FEF7F7  #f5a9a9  #F9F9F9

export const Home = () => {
  return (
    <div>
      <Navbar />
      <div id="home" className="main mt-24 bg-[#F9F9F9]  m-auto h-screen p-5">
        <div className="hero rounded-2xl m-auto flex flex-col border-b  justify-center items-center w-[90vw] h-[60vh]">
          <img src={prod3} alt="product" className="md:w-1/2 w-full h-full" />
          <p className="-mt-[10vh] text-3xl font-brown">Faira Beauty Cream</p>
        </div>
        <div className="product gap-8 p-2 h-[40vh] md:h-[30vh]  text-[#444444] flex flex-col md:flex-row lg:flex-row xl:flex-row justify-center items-center m-auto  w-[90%]">
          <div className="title">
          <AnimatedGradientText>
        🎉 <hr className="mx-2 h-4 w-px shrink-0 bg-gray-300" />{" "}
        <span
          className={cn(
            `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
          )}
        >
          Scroll Down to Learn More
        </span>
      </AnimatedGradientText>
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
