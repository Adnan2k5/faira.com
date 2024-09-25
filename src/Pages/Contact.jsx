import React from 'react'
import { GoDotFill } from "react-icons/go";
import { Link } from 'react-scroll';
export const Contact = () => {
  return (
    <div>
        <div className="box bg-[#130E1D] flex flex-col gap-20 items-center p-5 w-screen h-[80vh]">
            <div className="side flex fle-col w-full h-[50vh]">
                <div className="title p-5 flex flex-col justify-center text-white">
                    <h1 className="text-[4rem] font-brown">Faira</h1>
                    <p className="text-[1rem] md:text-[1.2rem]">Faira offers premium beauty cosmetics crafted with high-quality, natural ingredients. Our products are designed to enhance your natural glow, delivering radiant, long-lasting results for all skin types. Feel confident, beautiful, and refreshed with Faira's nourishing skincare and makeup essentials.</p>
                </div>
            </div>
            <div className="footer text-white flex flex-col gap-5 justify-around items-center border-t-2  w-full border-white/30">
                <footer>&copy; Copyright 2024. All rights reserved</footer>
                <footer className="">
                    <ul className="flex justify-around items-center gap-1 w-full">
                        <li>
                            <Link to="about" smooth={true} duration={1000} className="cursor-pointer">About</Link>
                        </li>
                        <li className="flex items-center"><GoDotFill /></li>
                        <li>Instagram</li>
                        <li className="flex items-center"><GoDotFill /></li>
                        <li>Facebook</li>
                    </ul>
                </footer>
            </div>
        </div>
    </div>
  )
}