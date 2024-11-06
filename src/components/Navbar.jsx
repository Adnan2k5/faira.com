import React, { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../assets/logo-2.png"
import { Link } from "react-scroll";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);





  return (
    <div>
      <div
        className={`flex fixed top-0 transition-all duration-200 ${scrolled ? `bg-[#f7dada] backdrop-blur-md` : `bg-transparent`} left-0 z-50 p-2 items-center justify-center w-[100vw] h-[20vh] backdrop-blur-xl bg-transparent`}>
        <div className="nav w-[90vw] justify-between  flex  m-auto">
          <div className="nav-logo flex items-center p-2 justify-center">
            <h1 className="font-brown text-4xl">Faira</h1>
          </div>
          <div className="flex components items-center justify-center text-[#f5a9a9]">
            <ul className="hidden items-center   transition-all duration-300 md:flex lg:flex gap-5">
              <li className="hover:text-[#3a3d3c] duration-300 cursor-pointer">
                <Link to="prod" className="text-lg " smooth={true} duration={500}> Beauty Products</Link> 
              </li>
              <li className="hover:text-[#484643] duration-300 cursor-pointer">
               <Link to="about" className="text-lg" smooth={true} duration={500}>About Us</Link> 
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        className={`fixed top-0 z-40 right-0 h-full w-1/2 bg-[#f5a9a9] text-white flex flex-col items-center justify-center space-y-5 transform transition-transform duration-500 ${open ? "translate-x-0" : "translate-x-full"} md:hidden`}>
        <ul className="flex flex-col items-center gap-5 text-lg">
          <li className="hover:text-gray-300 cursor-pointer">
            <Link to="home" smooth={true} duration={500}>Home</Link> 
          </li>
          <li className="hover:text-gray-300 cursor-pointer">
            <Link to="about" smooth={true} duration={500}>About</Link> 
          </li>
          <li className="hover:text-gray-300 cursor-pointer">
             <Link to="services" smooth={true} duration={500}>Products</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
