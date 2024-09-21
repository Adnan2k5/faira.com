import React from "react";

export const About = () => {
  return (
    <div>
      <div id="about" className="box w-full">
        <h1 className="text-[#A9A9A9] w-fit flex flex-col tracking-[0.8rem] md:text-[2rem] text-[1rem]">
          ABOUT US
        </h1>
        <div className="mainbox flex flex-col gap-5 p-2 md:flex-row">
          <div className="side1 flex  md:w-1/2 mt-5 flex-col ">
            <h1 className="text-3xl md:mb-5 md:text-[3rem]">Who Are We</h1>
            <p className="md:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              animi natus sequi beatae sapiente illo, officiis quae cupiditate
              aspernatur cumque.
            </p>
            <div className="items md:mb-10 mt-16">
              <ul className="flex md:justify-around justify-between ">
                <li>
                  <h1 className="text-3xl">42+</h1>
                  <p>lorem</p>
                </li>
                <li>
                  <h1 className="text-3xl">730</h1>
                  <p>lorem</p>
                </li>
                <li>
                  <h1 className="text-3xl">99%</h1>
                  <p>lorem</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="side2  mt-5 flex flex-col gap-10 md:w-1/2 w-full">
            <div className="content1">
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
              <p className="mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum rerum doloribus quibusdam quasi voluptatum magni at veritatis? Voluptates, architecto excepturi!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
