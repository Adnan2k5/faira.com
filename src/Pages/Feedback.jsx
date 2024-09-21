import React from 'react'
import face from '@/assets/face.jpeg'
export const Feedback = () => {
  return (
    <div>
        <div className="box flex gap-10 ">
            <div className="box1 w-1/2">
                <div className="title flex flex-col gap-5">
                    <h1 className="text-3xl text-[#444444] md:text-[3rem] tracking-[0.2rem]">Feedback</h1>
                    <p className="mt-10 w-[70vw] md:w-fit  md:text-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus reprehenderit alias quo sed? Ut eum eveniet hic ratione distinctio iusto! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit, nemo.</p>
                    <p className="text-sm font-semibold md:text-lg">~Maria Jeff</p>
                    <p className="-mt-5 md:text-lg">⭐️⭐️⭐️⭐️⭐️</p>
                </div>
            </div>
            <div className="box2 md:flex w-1/2 object-cover hidden justify-center items-center">
                <img className="h-[60vh]   justify-center" src={face} alt='photo'/>
            </div>
        </div>
    </div>
  )
}
