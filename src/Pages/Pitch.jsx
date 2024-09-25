import React from 'react'

export const Pitch = () => {
  return (
    <div className="w-full h-[80vh] flex justify-center items-center">
        <div className="circle1 md:w-40 md:h-40 w-40 h-40 bg-cyan-500 md:ml-64 mt-44 rounded-full blur-3xl absolute -z-50"></div>
        <div className="content flex">
            <div className="circle2 md:w-40 -mt-14 md:h-40 w-40 h-40 bg-[#ddfc89] rounded-full blur-3xl absolute -z-50"></div>
            <h1 className="xl:text-[6rem] font-comic text-[2rem] md:text-[3rem] lg:text-[4rem] text-center">Step into a world of beauty with our meticulously curated collection of cosmetics.</h1>
        </div>
    </div>
  )
}
