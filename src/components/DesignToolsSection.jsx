import React from 'react';
import image1 from ".././assets/uidesighnsection/image1.png"
import pencil from ".././assets/uidesighnsection/pencil.png"
import ui from ".././assets/uidesighnsection/ui.png"
import image4 from ".././assets/uidesighnsection/image4.png"
import image5 from ".././assets/uidesighnsection/image5.png"
import ps from ".././assets/uidesighnsection/ps.png"
import ai from ".././assets/uidesighnsection/ai.png"


export default function DesignToolsSection() {
  return (
    <div className="bg-black min-h-screen text-white py-16 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <p className="text-teal-400 text-sm mb-4 tracking-wide">Tools I Work With</p>
          <h1 className="text-3xl font-bold leading-tight max-w-4xl">
            Creating Smooth User Experiences With Figma's Sharp Tools, Framer's Flow, Adobe XD's Creative Power, And Notion's Clear Structure.
          </h1>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* UX Design Card */}
          <div className="bg-zinc-900 col-span-3 flex  justify-center rounded-3xl p-10 relative overflow-hidden">
            <div className="relative w-  z-10">
              <h2 className="text-4xl font-bold mb-4">UX Design</h2>
              <p className="text-gray-400 text-lg mb-8 max-w-md">
                Designing seamless user experiences through research, strategy, and creative interaction.
              </p>
            </div>
            
            {/* Illustration placeholder */}
            <div className="absolute bottom-0 left-0 w-50 h-40">
                <img className="w-full h-full" src={image1} alt="" />
              {/* <svg viewBox="0 0 320 256" className="w-full h-full">
                Paper with lightbulb illustration
                <path d="M40 80 L280 80 L320 140 L280 200 L40 200 Z" fill="white" />
                <circle cx="160" cy="110" r="25" fill="#FCD34D" />
                <path d="M145 110 L150 95 M175 110 L170 95 M160 85 L160 70" stroke="#FCD34D" strokeWidth="3" />
                <rect x="150" y="135" width="20" height="15" fill="#FCD34D" />
                <path d="M145 135 L145 120 Q145 100 160 100 Q175 100 175 120 L175 135" stroke="#1F2937" strokeWidth="2" fill="none" />
              </svg> */}
            </div>
          </div>

          {/* UI Design Card */}
          <div className="bg-zinc-900 col-span-2 rounded-3xl p-10 relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-4xl font-bold mb-4">UI Design</h2>
              <p className="text-gray-400 text-lg mb-8 max-w-md pr-5">
                Designing smooth, modern, and responsive layouts that make interaction effortless.
              </p>
              
              {/* Tool Icons */}
              <div className="flex gap-3 mb-8">
                <img className="w-40 h-full" src={ui} alt="" />
                {/* <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">F</span>
                </div>
                <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #FF4785 0%, #1ABCFE 50%, #0ACF83 100%)' }}>
                  <span className="text-white font-bold text-xl">F</span>
                </div>
                <div className="w-12 h-12 bg-pink-700 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">Xd</span>
                </div> */}
              </div>
            </div>
            
            {/* Pen illustration placeholder */}
            <div className="absolute  top-0 right-5 w-20 h-40">
                <img className="w-full h-full" src={pencil} alt="" />
            </div>
          </div>

          {/* Product Design Card */}
          <div className="bg-zinc-900 col-span-2 rounded-3xl p-10 relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-4xl font-bold mb-4">Product Design</h2>
              <p className="text-gray-400 text-lg mb-8 pr-25 max-w-md">
                Clean and modern interfaces that delight users.
              </p>
            </div>
            
            {/* 3D shape illustration placeholder */}
            <div className="absolute bottom-0 left-0 w-50 ">
                <img className="w-full h-full" src={image4} alt="" />
             
            </div>
          </div>

          {/* Graphic Design Card */}
          <div className="bg-zinc-900 col-span-3 rounded-3xl p-10 relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-4xl font-bold mb-4">Graphic Design</h2>
              <p className="text-gray-400 text-lg mb-8 max-w-md">
                Designing seamless user experiences through research, strategy, and creative interaction.
              </p>
              
              {/* Adobe Icons */}
              <div className="flex gap-3 mb-8">
                <img className="w-12 h-12" src={ps} alt="" />
                <img className="w-12 h-12" src={ai} alt="" />
              </div>
            </div>
            
            {/* Browser window illustration placeholder */}
            <div className="absolute bottom-0 right-0 w-42 ">
              <img src={image5} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}