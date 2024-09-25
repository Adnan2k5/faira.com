import React from "react";

export const About = () => {
  return (
    <div>
      <div  className="box w-full">
        <div className="circle1 absolute -z-50 m-auto blur-[70px] w-40 h-40 rounded-full bg-[#f18a8a]"></div>
        <h1 className="text-[#A9A9A9] w-fit flex flex-col tracking-[0.8rem] md:text-[2rem] text-[1rem]">
          ABOUT US
        </h1>
        <div className="mainbox flex flex-col gap-5 p-2 md:flex-row">
          <div className="side1 flex  md:w-1/2 mt-5 flex-col ">
            <h1 className="text-3xl md:mb-5 md:text-[3rem]">Who Are We</h1>
            <p className="md:text-lg mt-4">
            At Faira, we are dedicated to enhancing your beauty through high-quality, ethically made products. Our mission is to empower everyone with diverse options that cater to various skin types and preferences. With a commitment to innovation, we ensure our offerings inspire confidence and radiance every day. Join us in celebrating beauty for all!
            </p>
            <div className="items w-[70vw] md:w-[40vw] flex items-center justify-center md:mb-10 mt-16">
              <ul className="flex w-full md:w-full items-center justify-center flex-wrap gap-12">
                <li className="text-center">
                  <h1 className="text-3xl">5K+</h1>
                  <p className="md:text-xl">Satisfied Customers</p>
                </li>
                <li className="text-center">
                  <h1 className="text-3xl">100%</h1>
                  <p className="md:text-xl">Cruelty-Free</p>
                </li>
                <li className="text-center">
                  <h1 className="text-3xl">4.7 <strong className="text-xl">⭐️</strong></h1>
                  <p className="md:text-xl">Rating</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="side2  mt-5 flex flex-col gap-10 md:w-1/2 w-full">
            <div className="content1">
              <div className="circle2 absolute -z-50 m-auto blur-[70px] w-40 h-40 rounded-full bg-[#3aaabb]"></div>
              <h1 className="text-2xl w-full">The Production Process</h1>
              <p className="mt-2">
                At Perlier, we commit our time and dedication into our
                production process to ensure each and every one of our products
                embodies Perlier's mission. We begin with harvesting the plants
                and selecting the active ingredients of each.
              </p>
            </div>
            <div className="content2">
              <h1 className="text-2xl w-full">Committed To Research</h1>
              <p className="mt-2">Faira is dedicated to ongoing research and development to create innovative beauty solutions. By prioritizing research, we aim to deliver effective, safe, and high-quality cosmetics that empower every individual to shine confidently.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
