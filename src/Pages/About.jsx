import React from "react";
import photo1 from "../assets/fairaprod3.png";

export const About = () => {
  return (
    <div className="bg-black">
      <div className="box w-full bg-black">
        <div className="circle1 absolute -z-50 m-auto blur-[70px] w-40 h-40 rounded-full bg-[#f18a8a]"></div>
        <div className="mainbox flex flex-col gap-5 p-2 md:flex-row">
          <div className="side1 bg-black/40 rounded-3xl  flex  md:w-1/2 mt-5 flex-col ">
            <img src={photo1} alt="product" className="w-full h-full" />
          </div>
          <div className="side2  mt-[20vh] flex flex-col gap-10 md:w-1/2 w-full">
            <div className="content1 flex-col  h-full  flex items-center justify-center">
              <div className="circle2 absolute -z-50 m-auto blur-[70px] w-40 h-40 rounded-full bg-[#3aaabb]"></div>
              <h1 className="text-5xl -mt-[20vh] text-white font-comic">
                Faira Beauty Cream
              </h1>
              <p className="text-lg mt-10 text-wrap  text-white">
                Faira Beauty Cream is
                your daily indulgence for luxuriously soft, hydrated skin.
                Enriched with the nourishing properties of pure honey, this
                lightweight lotion absorbs quickly to quench thirsty skin,
                leaving it feeling silky-smooth and deeply moisturized. Pamper
                your skin with the natural goodness of honey, renowned for its
                hydrating and soothing benefits. Say goodbye to dryness.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
