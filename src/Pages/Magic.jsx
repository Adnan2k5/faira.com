import React from "react";
import { GrLike } from "react-icons/gr";
import { IoPricetagOutline } from "react-icons/io5";
import { TbTruckDelivery } from "react-icons/tb";
export const Magic = () => {
  return (
    <div id="magic" className="w-full">
      <div className="container gap-12 flex flex-col justify-center items-center">
        <div className="title md:text-4xl text-3xl mt-5">
          <h1 className="font-rubik font-semibold border-b-[2px]">
            Embrace the Magic of Faira
          </h1>
        </div>
        <div className="contents">
          <ul className="flex flex-col md:flex-wrap justify-center md:flex-row xl:flex-nowrap   gap-4 mt-12">
            <li>
              <div className="card md:w-[30vw] xl:w-[20vw] w-[70vw] h-[40vh] rounded-xl border-2 border-[#F2F2F2]">
                <div className="content flex flex-col gap-5 justify-center p-5">
                  <div className="icon mt-5 ml-5 text-4xl">
                    <GrLike />
                  </div>
                  <div className="text flex flex-col gap-2 mt-2 ">
                    <h1 className="text-xl">Quality Product</h1>
                    <p className="text-sm">
                    Our commitment to excellence ensures that each product is designed to provide effective, safe, and radiant results you can trust.
                    </p>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="card md:w-[30vw] xl:w-[20vw] w-[70vw] h-[40vh] rounded-xl border-2 border-[#F2F2F2]">
                <div className="content flex flex-col gap-5 justify-center p-5">
                  <div className="icon mt-5 ml-5 text-4xl">
                    <IoPricetagOutline />
                  </div>
                  <div className="text flex flex-col gap-2 mt-2">
                    <h1 className="text-xl">Affordable Price</h1>
                    <p className="text-sm lg:text-sm">
                    Faira is committed to making premium beauty accessible to everyone, offering high-quality cosmetics at affordable prices.
                    </p>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="card md:w-[30vw] xl:w-[20vw] w-[70vw] h-[40vh] rounded-xl border-2 border-[#F2F2F2]">
                <div className="content flex flex-col gap-5 justify-center p-5">
                  <div className="icon mt-5 ml-5 text-4xl">
                    <TbTruckDelivery />
                  </div>
                  <div className="text flex flex-col gap-2 mt-2">
                    <h1 className="text-xl">Pan India Delivery</h1>
                    <p className="text-sm">
                    Faira offers seamless Pan-India delivery, ensuring our premium beauty products reach every corner of the country.
                    </p>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div  className="card md:w-[30vw] xl:w-[20vw] w-[70vw]  h-[40vh] rounded-xl border-2 border-[#F2F2F2]">
                <div className="content flex flex-col gap-5 justify-center p-5">
                  <div className="icon mt-5 ml-5 text-4xl">
                    <h1>5K+</h1>
                  </div>
                  <div id="prod" className="text flex flex-col gap-2 mt-2">
                    <h1 className="text-lg">Satisfied Customers</h1>
                    <p className="text-sm">
                    With over 5,000 satisfied customers, Faira is trusted for delivering beauty products that truly make a difference.
                    </p>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
