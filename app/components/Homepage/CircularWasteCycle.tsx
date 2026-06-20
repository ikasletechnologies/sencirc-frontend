"use client";

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, ArrowUpRight, ArrowDownRight } from 'lucide-react';

const cycleData = [
  { 
    id: 'feedstock', 
    title: "Feedstock Sourcing", 
    titleLines: ["Feedstock", "Sourcing"],
    start: 272, end: 328, 
    content: "We have decades of knowledge of the waste hierarchy, working with small scale fragmented suppliers and have a deep understanding of the regulatory environment. This allows us to structure long-term agreements of approved feedstocks from local and global suppliers." 
  },
  { 
    id: 'offtakes', 
    title: "Long Term Offtakes", 
    titleLines: ["Long Term", "Offtakes"],
    start: 332, end: 388, 
    content: "We have experience in structuring complex long term first of a kind commercial agreement in new industries. This allows us to structure bankable long-term offtake agreements with valuable counterparties." 
  },
  { 
    id: 'tech', 
    title: "Technology Selection", 
    titleLines: ["Technology", "Selection"],
    start: 32, end: 88, 
    content: "Decades of experience in technology evaluation and ownership. Though we are technology agnostic, we also invest in technology on a selective basis and take them to maturity." 
  },
  { 
    id: 'epc', 
    title: "EPC and O&M Contracting", 
    titleLines: ["EPC and O&M", "Contracting"],
    start: 92, end: 148, 
    content: "Our teams have been involved in several billion dollars of large energy capital projects. We partner with leading EPC and O&M providers on fully wrapped contracts." 
  },
  { 
    id: 'planning', 
    title: "Planning, Permitting & Land", 
    titleLines: ["Planning, Permitting", "& Land"],
    start: 152, end: 208, 
    content: "We navigate regulatory complexities, secure strategic land assets, and streamline approvals to accelerate project timelines." 
  },
  { 
    id: 'finance', 
    title: "Project Finance", 
    titleLines: ["Project", "Finance"],
    start: 212, end: 268, 
    content: "Our extensive network of financial partners allows us to structure optimal capital solutions for complex circular economy projects." 
  },
];

function describeArc(x: number, y: number, innerRadius: number, outerRadius: number, startAngle: number, endAngle: number) {
  const startRad = (startAngle - 90) * Math.PI / 180;
  const endRad = (endAngle - 90) * Math.PI / 180;

  const x1In = x + innerRadius * Math.cos(startRad);
  const y1In = y + innerRadius * Math.sin(startRad);
  const x1Out = x + outerRadius * Math.cos(startRad);
  const y1Out = y + outerRadius * Math.sin(startRad);

  const x2In = x + innerRadius * Math.cos(endRad);
  const y2In = y + innerRadius * Math.sin(endRad);
  const x2Out = x + outerRadius * Math.cos(endRad);
  const y2Out = y + outerRadius * Math.sin(endRad);

  const largeArc = endAngle - startAngle > 180 ? 1 : 0;

  return `
    M ${x1In} ${y1In}
    L ${x1Out} ${y1Out}
    A ${outerRadius} ${outerRadius} 0 ${largeArc} 1 ${x2Out} ${y2Out}
    L ${x2In} ${y2In}
    A ${innerRadius} ${innerRadius} 0 ${largeArc} 0 ${x1In} ${y1In}
    Z
  `;
}

export default function CircularWasteCycle() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [rotation, setRotation] = useState(60);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % cycleData.length);
    setRotation((prev) => prev - 60);
  };
  
  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + cycleData.length) % cycleData.length);
    setRotation((prev) => prev + 60);
  };

  const goToSlide = (i: number) => {
    const diff = i - activeIndex;
    let shortestDiff = diff;
    if (diff > 3) shortestDiff -= 6;
    if (diff < -3) shortestDiff += 6;
    
    setActiveIndex(i);
    setRotation((prev) => prev - shortestDiff * 60);
  };

  const activeItem = cycleData[activeIndex];

  return (
    <section className="w-full bg-[#f9faf9] py-24 px-6 md:px-12 overflow-hidden">
      <div className="max-w-[1250px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-12">
        
        {/* Left: Circular Diagram */}
        <div className="relative w-full max-w-[500px] aspect-square flex-shrink-0">
          
          {/* Rotating Wrapper */}
          <div 
            className="w-full h-full transition-transform duration-[800ms] ease-in-out"
            style={{ transform: `rotate(${rotation}deg)` }}
          >
            <svg width="100%" height="100%" viewBox="0 0 500 500" className="overflow-visible">
              <defs>
                <linearGradient id="sliceGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#8cd363" />
                  <stop offset="100%" stopColor="#67b841" />
                </linearGradient>
                <linearGradient id="sliceGradientActive" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#75de47" />
                  <stop offset="100%" stopColor="#519e2c" />
                </linearGradient>
              </defs>

              {cycleData.map((item, index) => {
                const isActive = index === activeIndex;
                const pathData = describeArc(250, 250, 110, 240, item.start, item.end);
                
                const midAngle = (item.start + item.end) / 2;
                const midRad = (midAngle - 90) * Math.PI / 180;
                const textR = 175;
                const textX = 250 + textR * Math.cos(midRad);
                const textY = 250 + textR * Math.sin(midRad);

                return (
                  <g 
                    key={item.id} 
                    className="cursor-pointer transition-all duration-300"
                    style={{ 
                      transformOrigin: '250px 250px',
                      transform: isActive ? 'scale(1.05)' : 'scale(1)' 
                    }}
                    onClick={() => goToSlide(index)}
                  >
                    <path 
                      d={pathData} 
                      fill={isActive ? "url(#sliceGradientActive)" : "url(#sliceGradient)"} 
                      className="transition-colors duration-300"
                    />
                    <g transform={`translate(${textX}, ${textY}) rotate(${midAngle})`}>
                      {item.titleLines.map((line, i) => (
                        <text 
                          key={i} 
                          y={(i - (item.titleLines.length - 1) / 2) * 20} 
                          textAnchor="middle" 
                          alignmentBaseline="middle" 
                          fill="white" 
                          className={`font-bold text-[14.5px] tracking-wide pointer-events-none select-none transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-80'}`}
                        >
                          {line}
                        </text>
                      ))}
                    </g>
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Inner Core Circle (Static Overlay) */}
          <div className="absolute inset-0 m-auto w-[190px] h-[190px] bg-white rounded-full shadow-[0_0_25px_rgba(0,0,0,0.15)] flex items-center justify-center pointer-events-none z-10 border-[5px] border-[#e8f5df]">
            <div className="flex items-center gap-1">
              <span className="font-extrabold text-[#1f3f49] text-lg mr-1">Waste</span>
              <div className="flex flex-col justify-center gap-2">
                <div className="flex items-center gap-1">
                  <ArrowUpRight size={16} className="text-[#69c445]" strokeWidth={4}/>
                  <span className="text-[#1f3f49] font-bold text-[13px]">SAF</span>
                </div>
                <div className="flex items-center gap-1">
                  <ArrowRight size={16} className="text-[#69c445]" strokeWidth={4}/>
                  <span className="text-[#1f3f49] font-bold text-[13px]">EFW</span>
                </div>
                <div className="flex items-center gap-1">
                  <ArrowDownRight size={16} className="text-[#69c445]" strokeWidth={4}/>
                  <span className="text-[#1f3f49] font-bold text-[13px]">RNG</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Content Card */}
        <div className="flex-1 w-full max-w-xl">
          <div className="bg-white rounded-[24px] shadow-[0_12px_40px_-10px_rgba(0,0,0,0.12)] p-8 md:p-12 relative border border-gray-50">
            <h3 className="text-[#69c445] text-[26px] font-bold mb-6 tracking-tight">
              {activeItem.title}
            </h3>
            <p className="text-[#4a5f54] leading-loose text-[17px] min-h-[160px] font-medium transition-all duration-300">
              {activeItem.content}
            </p>
            
            <div className="flex justify-end gap-3 mt-10">
              <button 
                onClick={prevSlide} 
                className="w-[46px] h-[46px] rounded-full bg-[#69c445] text-white flex items-center justify-center hover:bg-[#5ca35e] transition-colors shadow-md focus:outline-none"
                aria-label="Previous slice"
              >
                <ChevronLeft strokeWidth={2.5} size={24} className="-ml-0.5" />
              </button>
              <button 
                onClick={nextSlide} 
                className="w-[46px] h-[46px] rounded-full bg-[#69c445] text-white flex items-center justify-center hover:bg-[#5ca35e] transition-colors shadow-md focus:outline-none"
                aria-label="Next slice"
              >
                <ChevronRight strokeWidth={2.5} size={24} className="-mr-0.5" />
              </button>
            </div>
          </div>
          
          {/* Pagination Dots */}
          <div className="flex justify-center gap-4 mt-10">
            {cycleData.map((_, i) => (
              <button 
                key={i} 
                onClick={() => goToSlide(i)}
                className={`w-3.5 h-3.5 rounded-full transition-all duration-300 ${
                  i === activeIndex 
                    ? 'bg-[#69c445] scale-110 shadow-sm' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
