import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import image1 from "../assets/hero/image1.png"
import image2 from "../assets/hero/image2.png"
import image3 from "../assets/hero/image3.png"
import image4 from "../assets/hero/image4.png"
import image5 from "../assets/hero/image5.png"
import image6 from "../assets/hero/image6.png"
import image7 from "../assets/hero/image7.png"


export default function Hero() {
    const images = [image1, image2, image3, image4, image5, image6, image7];
    return (
        <div className="bg-black min-h-screen text-white">
            <div className="max-w-7xl mx-auto px-8 pt-32 pb-16">
                <div className="text-center mb-16 font-extralight">
                    <p className="text-teal-400 text-xl mb-4 font-light italic">Hello,</p>
                    <p className="text-teal-400 text-xl mb-8 font-light italic">I'm Nandhan k's</p>

                    <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
                        Crafting Interfaces<br />
                        That Feel Just Right.
                    </h1>

                    <p className="text-gray-400 text-lg mb-4">Creative thinker. Pixel perfectionist. Problem solver.</p>
                    <p className="text-gray-400 text-lg mb-12">Blending creativity with functionality to craft meaningful user experiences.</p>

                    <button className="bg-transparent border border-gray-600 text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors">
                        Specialize in UI/UX Design & Branding
                    </button>
                </div>
            </div>
            <div className='flex justify-between bg-amber-700 items-end'>
                <div>
                    <img className='w-[209px] h-[176.75px]' src={image1} alt="" />
                </div>

                <div>
                    <img className='w-[289px] h-[216.75px]' src={image2} alt="" />
                </div>

                <div>
                    <img className='w-[470px] h-[290.75px]' src={image3} alt="" />
                </div>

                <div>
                    <img className='w-[289px] h-[216.75px]' src={image4} alt="" />
                </div>

                <div>
                    <img className='w-[209px] h-[176.75px]' src={image5} alt="" />
                </div>
            </div>
        </div>
    )
}