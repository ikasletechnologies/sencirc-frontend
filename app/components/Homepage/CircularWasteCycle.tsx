"use client";

import React, { useState, useEffect,  useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, ArrowUpRight, ArrowDownRight } from 'lucide-react';

const cycleData = [
  {
    id: 'feedstock',
    title: "Feedstock Sourcing",
    titleLines: ["Feedstock", "Sourcing"],
    mid: 300,
    content: "We have decades of knowledge of the waste hierarchy, working with small scale fragmented suppliers and have a deep understanding of the regulatory environment. This allows us to structure long-term agreements of approved feedstocks from local and global suppliers."
  },
  {
    id: 'offtakes',
    title: "Long Term Offtakes",
    titleLines: ["Long Term", "Offtakes"],
    mid: 0,
    content: "We have experience in structuring complex long term first of a kind commercial agreement in new industries. This allows us to structure bankable long-term offtake agreements with valuable counterparties."
  },
  {
    id: 'tech',
    title: "Technology Selection",
    titleLines: ["Technology", "Selection"],
    mid: 60,
    content: "Decades of experience in technology evaluation and ownership. Though we are technology agnostic, we also invest in technology on a selective basis and take them to maturity."
  },
  {
    id: 'epc',
    title: "EPC and O&M Contracting",
    titleLines: ["EPC and O&M", "Contracting"],
    mid: 120,
    content: "Our teams have been involved in several billion dollars of large energy capital projects. We partner with leading EPC and O&M providers on fully wrapped contracts."
  },
  {
    id: 'planning',
    title: "Planning, Permitting & Land",
    titleLines: ["Planning,", "Permitting", "& Land"],
    mid: 180,
    content: "We navigate regulatory complexities, secure strategic land assets, and streamline approvals to accelerate project timelines."
  },
  {
    id: 'finance',
    title: "Project Finance",
    titleLines: ["Project", "Finance"],
    mid: 240,
    content: "Our extensive network of financial partners allows us to structure optimal capital solutions for complex circular economy projects."
  },
];

// Petal geometry: a tapered "leaf" shape (wide rounded cap at the outer rim,
// narrow rounded cap near the center) built from two arcs joined by
// slanted sides, with the four corners filleted for smooth rounding.
const PETAL_OUTER_R = 225;
const PETAL_INNER_R = 110;
const PETAL_OUTER_HALF_ANGLE = 28;
const PETAL_INNER_HALF_ANGLE = 25.5;
const PETAL_CORNER = 18;

function polar(cx: number, cy: number, r: number, angleDeg: number) {
  const rad = (angleDeg - 90) * Math.PI / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

function pointAtDistanceFrom(p1: { x: number; y: number }, p2: { x: number; y: number }, dist: number) {
  const dx = p2.x - p1.x;
  const dy = p2.y - p1.y;
  const len = Math.hypot(dx, dy) || 1;
  const t = dist / len;
  return { x: p1.x + dx * t, y: p1.y + dy * t };
}

function describePetal(cx: number, cy: number, midAngle: number) {
  const rOuter = PETAL_OUTER_R;
  const rInner = PETAL_INNER_R;
  const outerHalf = PETAL_OUTER_HALF_ANGLE;
  const innerHalf = PETAL_INNER_HALF_ANGLE;
  const corner = PETAL_CORNER;

  const oPad = (corner / rOuter) * (180 / Math.PI);

  const outerStartAngle = midAngle - outerHalf;
  const outerEndAngle = midAngle + outerHalf;
  const innerStartAngle = midAngle - innerHalf;
  const innerEndAngle = midAngle + innerHalf;

  const C1 = polar(cx, cy, rOuter, outerStartAngle);
  const C2 = polar(cx, cy, rOuter, outerEndAngle);
  const C3 = polar(cx, cy, rInner, innerEndAngle);
  const C4 = polar(cx, cy, rInner, innerStartAngle);

  const A1 = pointAtDistanceFrom(C1, C4, corner);
  const B1 = polar(cx, cy, rOuter, outerStartAngle + oPad);
  const A2 = polar(cx, cy, rOuter, outerEndAngle - oPad);
  const B2 = pointAtDistanceFrom(C2, C3, corner);
  const A3 = pointAtDistanceFrom(C3, C2, corner);
  const B3 = pointAtDistanceFrom(C3, C4, corner);
  const A4 = pointAtDistanceFrom(C4, C3, corner);
  const B4 = pointAtDistanceFrom(C4, C1, corner);

  const f = (n: number) => n.toFixed(3);

  return [
    `M ${f(B4.x)} ${f(B4.y)}`,
    `L ${f(A1.x)} ${f(A1.y)}`,
    `Q ${f(C1.x)} ${f(C1.y)} ${f(B1.x)} ${f(B1.y)}`,
    `A ${rOuter} ${rOuter} 0 0 1 ${f(A2.x)} ${f(A2.y)}`,
    `Q ${f(C2.x)} ${f(C2.y)} ${f(B2.x)} ${f(B2.y)}`,
    `L ${f(A3.x)} ${f(A3.y)}`,
    `Q ${f(C3.x)} ${f(C3.y)} ${f(B3.x)} ${f(B3.y)}`,
    `L ${f(A4.x)} ${f(A4.y)}`,
    `Q ${f(C4.x)} ${f(C4.y)} ${f(B4.x)} ${f(B4.y)}`,
    'Z',
  ].join(' ');
}

export default function CircularWasteCycle() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredSlice, setHoveredSlice] = useState<number | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isManualPause, setIsManualPause] = useState(false);

  const wrapperRef = useRef<HTMLDivElement>(null);
  const rotationRef = useRef(60);

  // Smooth continuous spin
  useEffect(() => {
    if (isHovered || isManualPause) return;

    let animationFrameId: number;
    let lastTime = performance.now();

    const animate = (time: number) => {
      const deltaTime = time - lastTime;
      lastTime = time;
      
      // Speed: ~360 degrees in 40 seconds = 0.009 deg/ms
      rotationRef.current -= 0.009 * deltaTime;
      
      if (wrapperRef.current) {
        wrapperRef.current.style.transform = `rotate(${rotationRef.current}deg)`;
        wrapperRef.current.style.transition = 'none'; // Ensure no CSS transition during rAF
      }

      // Determine the active slice based on current rotation
      const normalizedRotation = ((60 - rotationRef.current) % 360 + 360) % 360;
      const newIndex = Math.round(normalizedRotation / 60) % 6;
      setActiveIndex(prev => prev !== newIndex ? newIndex : prev);

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovered, isManualPause]);

  // Resume auto-spin after 5 seconds of no manual interaction
  useEffect(() => {
    if (isManualPause) {
      const timeout = setTimeout(() => setIsManualPause(false), 5000);
      return () => clearTimeout(timeout);
    }
  }, [isManualPause]);

  const smoothTransitionTo = (targetRotation: number) => {
    rotationRef.current = targetRotation;
    if (wrapperRef.current) {
      wrapperRef.current.style.transition = 'transform 800ms ease-in-out';
      wrapperRef.current.style.transform = `rotate(${targetRotation}deg)`;
    }
    
    const normalizedRotation = ((60 - targetRotation) % 360 + 360) % 360;
    const newIndex = Math.round(normalizedRotation / 60) % 6;
    setActiveIndex(newIndex);
  };

  const prevSlide = () => {
    setIsManualPause(true);
    const target = Math.round(rotationRef.current / 60) * 60 + 60;
    smoothTransitionTo(target);
  };

  const nextSlide = () => {
    setIsManualPause(true);
    const target = Math.round(rotationRef.current / 60) * 60 - 60;
    smoothTransitionTo(target);
  };

  const goToSlide = (i: number) => {
    setIsManualPause(true);
    
    const currentNorm = ((60 - rotationRef.current) % 360 + 360) % 360;
    const targetNorm = i * 60;
    
    let diff = targetNorm - currentNorm;
    if (diff > 180) diff -= 360;
    if (diff < -180) diff += 360;
    
    const target = rotationRef.current - diff;
    smoothTransitionTo(target);
  };

  const displayedIndex = hoveredSlice !== null ? hoveredSlice : activeIndex;
  const activeItem = cycleData[displayedIndex];

  return (
    <section 
      className="w-full bg-white pt-4 lg:pt-8 pb-24 px-6 md:px-12 overflow-hidden"
    >
      {/* Header Section */}
      <div className="text-center mb-16 md:mb-24 w-full">
        <h2 className="text-[#1f3f49] text-2xl md:text-3xl lg:text-[32px] xl:text-[36px] leading-[1.4] font-bold w-full max-w-[1200px] mx-auto tracking-tight">
          Sencirc Has Developed Innovative Ways To Solve Challenges In The<br className="hidden lg:block" /> Waste To Value Ecosystem.
        </h2>
      </div>

      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-16">
        
        {/* Left: Circular Diagram */}
        <div 
          className="relative w-full max-w-[600px] aspect-square flex-shrink-0"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          
          {/* Rotating Wrapper */}
          <div 
            ref={wrapperRef}
            className="w-full h-full"
            style={{ transform: `rotate(60deg)` }}
          >
            <svg width="100%" height="100%" viewBox="0 0 500 500" className="overflow-visible">
              <defs>
                <linearGradient id="sliceGradient" gradientUnits="userSpaceOnUse" x1="60" y1="40" x2="440" y2="460">
                  <stop offset="0%" stopColor="#9bdb6e" />
                  <stop offset="100%" stopColor="#4a9c2e" />
                </linearGradient>
                <linearGradient id="sliceGradientActive" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3d5a68" />
                  <stop offset="100%" stopColor="#1f3f49" />
                </linearGradient>
              </defs>

              {cycleData.map((item, index) => {
                const isActive = index === activeIndex;
                const isThisHovered = index === hoveredSlice;
                const isHighlighted = isThisHovered || (isActive && hoveredSlice === null);
                const midAngle = item.mid;
                const pathData = describePetal(250, 250, midAngle);

                const textRadius = (PETAL_OUTER_R + PETAL_INNER_R) / 2;
                const midRad = (midAngle - 90) * Math.PI / 180;

                const textRot = midAngle;

                // Place text exactly at the middle radius
                const textX = 250 + textRadius * Math.cos(midRad);
                const textY = 250 + textRadius * Math.sin(midRad);

                const lineHeight = 18;

                return (
                  <g
                    key={item.id}
                    className="cursor-default transition-all duration-300"
                    style={{
                      transformOrigin: '250px 250px',
                      transform: isHighlighted ? 'scale(1.03)' : 'scale(1)'
                    }}
                    onMouseEnter={() => setHoveredSlice(index)}
                    onMouseLeave={() => setHoveredSlice(null)}
                  >
                    <path
                      d={pathData}
                      fill={isHighlighted ? "url(#sliceGradientActive)" : "url(#sliceGradient)"}
                      className="transition-all duration-300"
                    />
                    <g transform={`translate(${textX}, ${textY}) rotate(${textRot})`}>
                      {item.titleLines.map((line, i) => (
                        <text
                          key={i}
                          y={(i - (item.titleLines.length - 1) / 2) * lineHeight}
                          fontSize={14}
                          textAnchor="middle"
                          alignmentBaseline="middle"
                          fill="white"
                          className={`font-bold tracking-wide pointer-events-none select-none transition-opacity duration-300 ${isHighlighted ? 'opacity-100' : 'opacity-80'}`}
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
          <div className="absolute inset-0 m-auto w-[190px] h-[190px] bg-white rounded-full shadow-[0_4px_30px_rgba(0,0,0,0.08)] flex items-center justify-center pointer-events-none z-10 border-[1.5px] border-gray-400/70">
            <div className="flex items-center gap-3">
              <span className="font-black text-[#1f3f49] text-[26px] tracking-tight">Waste</span>
              <div className="flex flex-col justify-center gap-2">
                <div className="flex items-center gap-1.5">
                  <ArrowUpRight size={16} className="text-[#69c445]" strokeWidth={3}/>
                  <span className="text-[#1f3f49] font-semibold text-[14px] tracking-wide">SAF</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <ArrowRight size={16} className="text-[#69c445]" strokeWidth={3}/>
                  <span className="text-[#1f3f49] font-semibold text-[14px] tracking-wide">EFW</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <ArrowDownRight size={16} className="text-[#69c445]" strokeWidth={3}/>
                  <span className="text-[#1f3f49] font-semibold text-[14px] tracking-wide">RNG</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Content Card */}
        <div className="flex-1 w-full max-w-xl">
          <div className="bg-white rounded-[20px] shadow-[0_8px_30px_rgba(0,0,0,0.06)] p-7 md:p-9 relative border-[2px] border-gray-100">
            <h3 className="text-[#69c445] text-[22px] font-bold mb-3 tracking-tight">
              {activeItem.title}
            </h3>
            <p className="text-[#6b7280] leading-relaxed text-[15px] min-h-[100px] font-medium transition-all duration-300">
              {activeItem.content}
            </p>

            <div className="flex justify-end gap-2.5 mt-5">
              <button
                onClick={prevSlide}
                className="w-[38px] h-[38px] rounded-full bg-[#69c445] text-white flex items-center justify-center hover:bg-[#5ca35e] transition-colors shadow-sm focus:outline-none"
                aria-label="Previous slice"
              >
                <ChevronLeft strokeWidth={2.5} size={20} className="-ml-0.5" />
              </button>
              <button
                onClick={nextSlide}
                className="w-[38px] h-[38px] rounded-full bg-[#69c445] text-white flex items-center justify-center hover:bg-[#5ca35e] transition-colors shadow-sm focus:outline-none"
                aria-label="Next slice"
              >
                <ChevronRight strokeWidth={2.5} size={20} className="-mr-0.5" />
              </button>
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2.5 mt-6">
            {cycleData.map((_, i) => (
              <button 
                key={i} 
                onClick={() => goToSlide(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  i === displayedIndex 
                    ? 'bg-[#69c445] w-6 shadow-sm' 
                    : 'bg-gray-200 hover:bg-gray-300'
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
