"use client";

import React, { useState } from 'react';

const verticals = [
  { 
    id: 'saf', 
    name: 'SAF', 
    title: 'Sustainable Aviation Fuel (SAF)', 
    desc1: 'SAF is a renewable alternative to conventional jet fuel, produced from waste-based inputs.', 
    bullets: [
      'SAF specifications match Jet A/A-1. It is better on aromatics and sulphur content.',
      'SAF is a drop-in solution to the existing fuel supply chain and infrastructure.',
      '50% blending with kerosene Jet is permitted.'
    ],
    color: 'bg-[#1f3f49]',
    textColor: 'text-white',
    tabTop: 'top-1/4'
  },
  { 
    id: 'efw', 
    name: 'EFW', 
    title: 'Energy From Waste (EFW)', 
    desc1: 'A sustainable form of energy generated as electricity, heat, or other forms of energy through the processing of non-recyclable waste.', 
    bullets: [
      "EfW (Energy from Waste) technologies handle waste that can't be reused or recycled and would otherwise end up in landfills.",
      "By keeping waste out of landfills, it stops methane from being produced.",
      "EfW plants will capture CO2, recover useful materials, and provide more energy."
    ],
    color: 'bg-[#69c445]',
    textColor: 'text-white',
    tabTop: 'top-1/2'
  },
  { 
    id: 'rng', 
    name: 'RNG', 
    title: 'Renewable Natural Gas (RNG)', 
    desc1: 'A sustainable, methane-rich gas produced from anaerobic decomposition of biogenic wastes.', 
    bullets: [
      'Promotes the circular future that we inspire the planet to move to.',
      'Provides pricing parity with fossil fuel through cycles.',
      'Unlike wind and solar, Renewable Natural Gas is not weather dependent.'
    ],
    color: 'bg-[#1f3f49]',
    textColor: 'text-white',
    tabTop: 'top-[75%]'
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

      {/* ── Mobile layout (< md): simple tab selector + card ── */}
      <div className="md:hidden">
        {/* Tab buttons */}
        <div className="flex rounded-2xl overflow-hidden mb-6 border border-gray-200">
          {verticals.map((v, i) => (
            <button
              key={v.id}
              onClick={() => setActiveTab(i)}
              className={`flex-1 py-3 font-bold text-sm tracking-widest transition-colors ${
                i === activeTab
                  ? `${v.color} text-white`
                  : 'bg-white text-gray-500 hover:bg-gray-50'
              }`}
            >
              {v.name}
            </button>
          ))}
        </div>
        {/* Active card */}
        {verticals.map((v, i) =>
          i === activeTab ? (
            <div key={v.id} className={`${v.color} rounded-3xl p-8 ${v.textColor}`}>
              <h3 className="text-xl font-bold mb-4 tracking-tight">{v.title}</h3>
              <p className="text-[15px] mb-5 leading-relaxed font-medium">{v.desc1}</p>
              {v.bullets && (
                <ul className="space-y-3 mt-4 text-[14px]">
                  {v.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex gap-3 items-start">
                      <span className="font-bold shrink-0 mt-0.5 text-[#69c445]">•</span>
                      <span className="font-medium">{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ) : null
        )}
      </div>

      {/* ── Desktop layout (md+): original overlapping animation ── */}
      <div className="hidden md:block">
        <div className="relative w-full h-[400px] md:h-[450px] max-w-5xl mx-auto px-10">
          <div className="relative w-full h-full">
            {verticals.map((v, i) => {
              const isActive = i === activeTab;
              const isLeft = i < activeTab;
              const isRight = i > activeTab;

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
                  style={{ left: leftPos, width: width, zIndex: zIndex, borderRadius: '32px' }}
                  onClick={() => setActiveTab(i)}
                >
                  <div className="absolute inset-0 overflow-hidden rounded-[32px]">
                    <div className={`p-8 md:p-14 h-full transition-opacity duration-500 min-w-0 ${isActive ? 'opacity-100 delay-200' : 'opacity-0 pointer-events-none'}`}>
                      <h3 className="text-2xl md:text-3xl font-bold mb-8 tracking-tight">{v.title}</h3>
                      <p className="text-[15px] md:text-[17px] mb-6 leading-relaxed max-w-2xl font-medium">{v.desc1}</p>
                      {v.bullets && (
                        <ul className="space-y-4 mt-6 text-[15px] md:text-[17px] max-w-2xl">
                          {v.bullets.map((bullet, idx) => (
                            <li key={idx} className="flex gap-3 items-start font-medium">
                              <span className="font-bold shrink-0 leading-none mt-0.5">•</span>
                              <span className="leading-relaxed">{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>

                  {/* Left Tab */}
                  <div
                    className={`absolute ${v.tabTop} -translate-y-1/2 -left-8 w-8 h-24 ${v.color} rounded-l-xl shadow-[-4px_0_10px_rgba(0,0,0,0.15)] flex items-center justify-center transition-opacity duration-300 ${isLeft ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                  >
                    <span className="text-white text-[13px] font-bold tracking-widest [writing-mode:vertical-rl] rotate-180">{v.name}</span>
                  </div>

                  {/* Right Tab */}
                  <div
                    className={`absolute ${v.tabTop} -translate-y-1/2 -right-8 w-8 h-24 ${v.color} rounded-r-xl shadow-[4px_0_10px_rgba(0,0,0,0.15)] flex items-center justify-center transition-opacity duration-300 ${isActive || isRight ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                  >
                    <span className="text-white text-[13px] font-bold tracking-widest [writing-mode:vertical-rl]">{v.name}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
