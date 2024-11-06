import React from "react";
import lab1 from "../assets/lab1.jpeg";
import lab2 from "../assets/lab2.jpeg";
import lab3 from "../assets/lab3.jpeg";
import lab4 from "../assets/lab4.jpeg";
import fairaprod1 from "../assets/fairaprod1.jpeg"
import fairaprod2 from "../assets/fairaprod2.jpeg"
import fairaprod3 from "../assets/fairaprod3.jpeg"

export const Gallery = () => {
  return (
    <div className="md:flex">
      <div className="pics">
      <div  className="title flex  justify-center">
        <h1 className="text-3xl md:text-4xl text-center border-b-[2px] w-fit font-rubik font-semibold">
          Product Gallery
        </h1>
      </div>
      <div className="collage flex flex-col md:flex-wrap md:flex-row w-full items-start justify-center gap-10 mt-5">
      <img
            src={fairaprod1}
            alt="lab1"
            className="hover:scale-110 duration-500 h-[30vh] rounded-xl border-2 border-[#F2F2F2]"
          />
          <img
            src={fairaprod2}
            alt="lab2"
            className="hover:scale-110 duration-500 h-[30vh] rounded-xl border-2 border-[#F2F2F2]"
          />
          <img
            src={fairaprod3}
            alt="lab3"
            className="hover:scale-110 duration-500 w-[40vh] h-[30vh] rounded-xl border-2 border-[#F2F2F2]"
          />
      </div>
      </div>
      <div className="lab">
        <div className="title flex justify-center">
          <h1 className="text-3xl md:text-4xl text-center border-b-[2px] w-fit font-rubik font-semibold">Our Lab</h1>
        </div>
        <div className="collage flex flex-col md:flex-wrap md:flex-row w-full items-start justify-center gap-10 mt-5">
          <img
            src={lab1}
            alt="lab1"
            className="hover:scale-110 duration-500 h-[30vh] rounded-xl border-2 border-[#F2F2F2]"
          />
          <img
            src={lab2}
            alt="lab2"
            className="hover:scale-110 duration-500 h-[30vh] rounded-xl border-2 border-[#F2F2F2]"
          />
          <img
            src={lab3}
            alt="lab3"
            className="hover:scale-110 duration-500 w-[40vh] h-[30vh] rounded-xl border-2 border-[#F2F2F2]"
          />
          <img
            src={lab4}
            alt="lab4"
            className="hover:scale-110 duration-500 h-[30vh] rounded-xl border-2 border-[#F2F2F2]"
          />
        </div>
      </div>
    </div>
  );
};
