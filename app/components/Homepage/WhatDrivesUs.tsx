import React from 'react';
import Image from 'next/image';

export default function WhatDrivesUs() {
  return (
    <section id="what-drives" className="py-24 px-6 max-w-[1200px] mx-auto text-center font-sans bg-white">
      <h3 className="text-[#6fc238] font-bold text-sm tracking-widest uppercase mb-2">
        What Drives Us
      </h3>
      
      <h2 className="text-[#104b36] text-3xl md:text-4xl lg:text-[42px] font-bold mb-10 tracking-tight">
        Turning Today's Waste To Tomorrow's Value
      </h2>
      
      <p className="text-[#104b36] font-bold text-base md:text-lg lg:text-[20px] leading-relaxed max-w-[1100px] mx-auto mb-2">
        Both Fossil Fuels And Waste-Derived Fuels Emit CO2 When Combusted; But The Latter Recycles The Carbon Quickly, Thus Preventing Buildup In The Atmosphere That Causes Climate Crisis.
      </p>
      
      <div className="relative w-full h-auto aspect-[4/3] lg:aspect-[1.5/1] max-w-5xl mx-auto -mt-4">
        <Image 
          src="/homepage/What-drives.jpg" 
          alt="Carbon Cycle: Fossil vs Waste-to-Value"
          fill
          className="object-contain object-bottom"
        />
      </div>
      
      {/* Highlight Cards Section */}
      <div className="bg-[#baeb9c] w-full max-w-5xl mx-auto rounded-b-xl md:rounded-b-2xl p-4 md:p-6 mb-16 shadow-inner" style={{ backgroundImage: 'radial-gradient(#ffffff33 1px, transparent 1px)', backgroundSize: '10px 10px' }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {/* Left Card */}
          <div className="bg-white rounded-xl p-8 flex flex-col items-center justify-center text-center shadow-sm h-full">
            <h3 className="text-[#1f3f49] text-5xl md:text-6xl font-black mb-4 tracking-tighter">80%</h3>
            <p className="text-gray-500 font-medium text-[17px]">
              of global energy comes from fossil carbon (C-H)
            </p>
          </div>
          
          {/* Right Card */}
          <div className="bg-white rounded-xl p-8 flex flex-col justify-center text-left shadow-sm h-full">
            <p className="text-gray-500 font-medium text-[17px] mb-6 leading-relaxed">
              Carbon from waste & residues converted into usable energy
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="mt-1 flex items-center justify-center w-[20px] h-[20px] rounded-full border-[5px] border-[#5ca35e] bg-white shrink-0"></span>
                <span className="text-gray-500 font-medium text-[17px]">Reduces demand for rapid fossil fuel usage</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 flex items-center justify-center w-[20px] h-[20px] rounded-full border-[5px] border-[#5ca35e] bg-white shrink-0"></span>
                <span className="text-gray-500 font-medium text-[17px]">Reduces landfill stress</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      
    </section>
  );
}
