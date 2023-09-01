import React from 'react'
import Image from "next/image"
import { VscArrowSmallRight } from "react-icons/vsc"
import class1 from "../../../public/assets/class-1.jpg"
import class2 from "../../../public/assets/class-2.jpg"
import class3 from "../../../public/assets/class-3.jpg"

const Classes = () => {
  return (
    <section id="classes" className="min-h-screen w-full">
        <div className="max-w-[1440px] mx-auto px-10 py-16">
            <div className="flex flex-col justify-center items-center gap-5 text-center mb-10">
                <h2 className="text-4xl md:text-5xl uppercase tracking-wide text-[#29282D] w-full">Try our classes</h2>
                <p className="text-xl w-full md:w-[50%] text-[#808080]">Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
                <div className="bg-white w-full max-w-[400px] shadow-xl mx-auto">
                    <Image 
                        src={class2}
                        alt="Class using rowing machines in a circuit training class"
                        className="w-full h-[260px]"
                    />
                    <div className="p-6">
                        <p className="text-sm uppercase">March 4, 2023</p>
                        <h3 className="text-[#29282D] text-2xl uppercase tracking-wider hover:text-accent cursor-pointer py-3">30 minute circuits</h3>
                        <p className="text-[#808080] leading-7 mb-4">Lorem Ipsn gravida nibh vel velit auctor aliqunean sollicitudinlorem quis bibendum auci elit consequat ipsutis sem...</p>
                        <div className="flex items-center">
                            <p className="peer text-accent uppercase text-xs font-semibold tracking-widest cursor-pointer">Read More</p>
                            <span className="peer-hover:translate-x-1 hover:translate-x-1 duration-300 text-accent cursor-pointer">
                                    <VscArrowSmallRight size={25} />
                            </span> 
                        </div>
                    </div>
                </div>

                <div className="bg-white max-w-[400px] shadow-xl mx-auto">
                    <Image 
                        src={class1}
                        alt="Class performing dumbbell snatches in a high intensity interval training class"
                        className="w-full h-[260px]"
                    />
                    <div className="p-6">
                        <p className="text-sm uppercase">March 4, 2023</p>
                        <h3 className="text-[#29282D] text-2xl uppercase tracking-wider hover:text-accent cursor-pointer py-3">One-hour HIIT!</h3>
                        <p className="text-[#808080] leading-7 mb-4">Lorem Ipsn gravida nibh vel velit auctor aliqunean sollicitudinlorem quis bibendum auci elit consequat ipsutis sem...</p>
                        <div className="flex items-center">
                            <p className="peer text-accent uppercase text-xs font-semibold tracking-widest cursor-pointer">Read More</p>
                            <span className="peer-hover:translate-x-1 hover:translate-x-1 duration-300 text-accent cursor-pointer">
                                    <VscArrowSmallRight size={25} />
                            </span> 
                        </div>
                    </div>
                </div>

                <div className="bg-white max-w-[400px] shadow-xl mx-auto">
                    <Image 
                        src={class3}
                        alt="Class holding a plank in combat training class"
                        className="w-full h-[260px]"
                    />
                    <div className="p-6">
                        <p className="text-sm uppercase">March 4, 2023</p>
                        <h3 className="text-[#29282D] text-2xl uppercase tracking-wider hover:text-accent cursor-pointer py-3">Bootcamp</h3>
                        <p className="text-[#808080] leading-7 mb-4">Lorem Ipsn gravida nibh vel velit auctor aliqunean sollicitudinlorem quis bibendum auci elit consequat ipsutis sem...</p>
                        <div className="flex items-center">
                            <p className="peer text-accent uppercase text-xs font-semibold tracking-widest cursor-pointer">Read More</p>
                            <span className="peer-hover:translate-x-1 hover:translate-x-1 duration-300 text-accent cursor-pointer">
                                    <VscArrowSmallRight size={25} />
                            </span> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Classes