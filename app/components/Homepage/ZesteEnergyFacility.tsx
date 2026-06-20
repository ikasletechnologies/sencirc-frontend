"use client";

import React, { useRef, useState } from 'react';
import { Play, Pause } from 'lucide-react';

export default function ZesteEnergyFacility() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="w-full bg-[#f1fbe8] py-20 px-6 md:px-8">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-16">
        
        {/* Left Content */}
        <div className="w-full md:w-[45%] flex flex-col justify-center md:pl-6 lg:pl-12">
          <h2 className="text-[#1f3f49] text-2xl md:text-3xl lg:text-[34px] leading-snug font-bold mb-6 tracking-tight">
            ZESTE Energy is managing the largest unsubsidized gasification plant in Europe.
          </h2>
          
          <p className="text-[#5b7a6b] text-[16px] md:text-[18px] leading-relaxed mb-6 font-medium">
            We offer asset management services for a plant our ZESTE team had developed and achieved financial close in 2018.
          </p>
          
          <p className="text-[#5b7a6b] text-[16px] md:text-[18px] leading-relaxed italic">
            24 MWe Residual Waste Facility in the UK.
          </p>
        </div>

        {/* Right Video */}
        <div className="w-full md:w-[55%] relative min-h-[300px] md:min-h-[450px]">
          <div className="relative w-full h-full min-h-[300px] md:min-h-[450px] bg-[#eef8e5] overflow-hidden shadow-xl rounded-2xl group">
            <video 
              ref={videoRef}
              src="/homepage/video/Hooton-50-1.mp4" 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="absolute inset-0 w-full h-full object-cover"
            />
            
            {/* Play/Pause Button Overlay */}
            <button 
              onClick={togglePlay}
              className="absolute bottom-4 right-4 bg-white/80 hover:bg-white text-[#1f3f49] p-3 rounded-full shadow-lg backdrop-blur-sm transition-all duration-300 opacity-0 group-hover:opacity-100 focus:opacity-100 flex items-center justify-center z-10 cursor-pointer"
              aria-label={isPlaying ? "Pause video" : "Play video"}
            >
              {isPlaying ? (
                <Pause size={20} fill="currentColor" />
              ) : (
                <Play size={20} fill="currentColor" className="ml-0.5" />
              )}
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
