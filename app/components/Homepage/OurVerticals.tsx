"use client";

import React, { useState } from 'react';

const verticals = [
  { 
    id: 'saf', 
    name: 'SAF', 
    title: 'Sustainable Aviation Fuel (SAF)', 
    desc1: 'SAF is a renewable alternative to conventional jet fuel, produced from waste-based inputs.', 
    desc2: 'SAF One, one of our portfolio companies, will develop and deliver pathway agnostic SAF solutions to the global aviation industry and be a leading contributor to its net zero targets.', 
    color: 'bg-[#1f3f49]',
    textColor: 'text-white'
  },
  { 
    id: 'efw', 
    name: 'EFW', 
    title: 'Energy From Waste (EFW)', 
    desc1: 'A sustainable form of energy generated as electricity, heat, or other forms of energy through the processing of non-recyclable waste.', 
    desc2: 'At Zeste, which is one of our portfolio companies, our vision is zero waste to landfill. Our mission is to target a 1% reduction in waste going to landfill globally, which equates to ~10 million tons per annum.', 
    color: 'bg-[#5ca35e]',
    textColor: 'text-white'
  },
  { 
    id: 'rng', 
    name: 'RNG', 
    title: 'Renewable Natural Gas (RNG)', 
    desc1: 'A sustainable, methane-rich gas produced from anaerobic decomposition of biogenic wastes.', 
    desc2: '', 
    color: 'bg-[#1f3f49]',
    textColor: 'text-white'
  },
];

export default function OurVerticals() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-20 px-4 md:px-6 max-w-[1200px] mx-auto font-sans bg-[#f7f9f8] overflow-hidden">
      <div className="text-center mb-16">
        <h3 className="text-[#5ca35e] font-bold text-sm tracking-widest uppercase mb-4">
          OUR VERTICALS
        </h3>
        <h2 className="text-[#1f3f49] text-2xl md:text-3xl lg:text-[34px] font-bold tracking-tight">
          Sencirc Currently Operates Across Three Business Verticals
        </h2>
      </div>

      <div className="relative w-full h-[400px] md:h-[450px] max-w-5xl mx-auto px-10">
        <div className="relative w-full h-full">
          {verticals.map((v, i) => {
            const isActive = i === activeTab;
            const isLeft = i < activeTab;
            const isRight = i > activeTab;

            // Positioning logic for overlapping stacked cards
            let leftPos = '0px';
            let width = '100%';
            let zIndex = 10;

            if (isActive) {
              leftPos = `${i * 50}px`;
              width = `calc(100% - ${2 * 50}px)`; 
              zIndex = 30;
            } else if (isLeft) {
              leftPos = `${i * 50}px`;
              width = `80px`; 
              zIndex = i;
            } else if (isRight) {
              leftPos = `calc(100% - ${(3 - i) * 50}px - 30px)`; 
              width = `80px`;
              zIndex = 20 - i;
            }

            return (
              <div 
                key={v.id}
                className={`absolute top-0 bottom-0 ${v.color} ${v.textColor} transition-all duration-500 ease-in-out cursor-pointer`}
                style={{
                  left: leftPos,
                  width: width,
                  zIndex: zIndex,
                  borderRadius: '32px'
                }}
                onClick={() => setActiveTab(i)}
              >
                {/* Inner container to clip the text content */}
                <div className="absolute inset-0 overflow-hidden rounded-[32px]">
                  <div className={`p-8 md:p-14 h-full transition-opacity duration-500 min-w-[500px] md:min-w-[700px] ${isActive ? 'opacity-100 delay-200' : 'opacity-0 pointer-events-none'}`}>
                    <h3 className="text-2xl md:text-3xl font-bold mb-8 tracking-tight">{v.title}</h3>
                    <p className="text-[15px] md:text-[17px] mb-6 leading-relaxed max-w-2xl font-medium">{v.desc1}</p>
                    {v.desc2 && <p className="text-[15px] md:text-[17px] leading-relaxed max-w-2xl font-medium">{v.desc2}</p>}
                  </div>
                </div>

                {/* Left Tab */}
                <div 
                  className={`absolute top-1/2 -translate-y-1/2 -left-8 w-8 h-24 ${v.color} rounded-l-xl shadow-[-4px_0_10px_rgba(0,0,0,0.15)] flex items-center justify-center transition-opacity duration-300 ${isLeft ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                >
                  <span className="text-white text-[13px] font-bold tracking-widest [writing-mode:vertical-rl] rotate-180">{v.name}</span>
                </div>

                {/* Right Tab */}
                <div 
                  className={`absolute top-1/2 -translate-y-1/2 -right-8 w-8 h-24 ${v.color} rounded-r-xl shadow-[4px_0_10px_rgba(0,0,0,0.15)] flex items-center justify-center transition-opacity duration-300 ${isActive || isRight ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                >
                  <span className="text-white text-[13px] font-bold tracking-widest [writing-mode:vertical-rl]">{v.name}</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
