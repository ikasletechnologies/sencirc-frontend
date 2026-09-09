import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function WasteToValue() {
  return (
    <section className="w-full lg:w-[75%] pt-8 pb-8 px-4 md:px-8 max-w-[1920px] mx-auto text-center font-sans bg-white overflow-hidden mt-2 mb-8">

      <h3 className="text-[#1f3f49] text-sm sm:text-base md:text-xl font-bold mb-8 mx-auto tracking-tight text-center px-2">
        Waste To Value Conversion Can Be Achieved Through Various Technology And Process Pathways
      </h3>

      {/* Top Green Arrow */}
      <div className="flex justify-center items-center mb-8 w-[85%] sm:w-[65%] md:w-[60%] lg:w-[60%] xl:w-[35%] max-w-4xl mx-auto">
        <div className="flex-1 h-[10px] bg-[#69c445] rounded-l-sm"></div>
        <div className="w-0 h-0 border-t-[18px] border-t-transparent border-b-[18px] border-b-transparent border-l-[26px] border-l-[#69c445] shrink-0"></div>
      </div>

      <div className="relative w-full max-w-[1800px] mx-auto flex flex-col lg:flex-row rounded-[40px] lg:rounded-full shadow-xl border border-gray-100 overflow-hidden min-h-[300px]">

        {/* Left Side: Waste */}
        <div className="w-full lg:w-[180px] xl:w-[220px] 2xl:w-[260px] bg-[#1f3f49] flex items-center justify-center shrink-0 z-10 py-8 lg:py-0">
          <h3 className="text-white text-2xl lg:text-3xl font-bold tracking-wide">Waste</h3>
        </div>

        {/* Middle Section: Pathways */}
        <div className="flex-1 flex flex-col relative z-0">

          {/* Row 1 */}
          <div className="flex-1 bg-[#fdfdfc] flex flex-wrap md:flex-nowrap justify-around items-center py-6 px-2 border-b-[2px] border-dashed border-[#5ca35e]/50 gap-4">
            <div className="flex flex-col items-center gap-3 w-[40%] md:w-auto">
              <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center relative">
                <Image src="/new/s1.png" alt="Waste" fill className="object-contain" priority />
              </div>
              <span className="text-[13px] md:text-[15px] font-bold text-[#1f3f49]">Waste</span>
            </div>
            <div className="flex flex-col items-center gap-3 w-[40%] md:w-auto">
              <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center relative">
                <Image src="/new/s2.png" alt="Conversion" fill className="object-contain" priority />
              </div>
              <span className="text-[13px] md:text-[15px] font-bold text-[#1f3f49]">Conversion</span>
            </div>
            <div className="flex flex-col items-center gap-3 w-[40%] md:w-auto">
              <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center relative">
                <Image src="/new/s3.png" alt="Upgrading" fill className="object-contain" priority />
              </div>
              <span className="text-[13px] md:text-[15px] font-bold text-[#1f3f49]">Upgrading</span>
            </div>
            <div className="flex flex-col items-center gap-3 w-[40%] md:w-auto">
              <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center relative">
                <Image src="/new/s4.png" alt="SAF" fill className="object-contain" priority />
              </div>
              <span className="text-[13px] md:text-[15px] font-bold text-[#1f3f49]">SAF</span>
            </div>
          </div>

          {/* Row 2 */}
          <div className="flex-1 bg-[#f0faec] flex flex-wrap md:flex-nowrap justify-around items-center py-6 px-2 border-b-[2px] border-dashed border-[#5ca35e]/50 gap-4">
            <div className="flex flex-col items-center gap-3 w-[40%] md:w-auto">
              <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center relative">
                <Image src="/new/s5.png" alt="Municipal Solid Waste" fill className="object-contain" priority />
              </div>
              <span className="text-[13px] md:text-[15px] font-bold text-[#1f3f49] text-center px-2">Municipal Solid Waste</span>
            </div>
            <div className="flex flex-col items-center gap-3 w-[40%] md:w-auto">
              <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center relative">
                <Image src="/new/s6.png" alt="Gasification" fill className="object-contain" priority />
              </div>
              <span className="text-[13px] md:text-[15px] font-bold text-[#1f3f49]">Gasification</span>
            </div>
            <div className="flex flex-col items-center gap-3 w-[40%] md:w-auto">
              <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center relative">
                <Image src="/new/s7.png" alt="Energy (EFW)" fill className="object-contain" priority />
              </div>
              <span className="text-[13px] md:text-[15px] font-bold text-[#1f3f49]">Energy (EFW)</span>
            </div>
          </div>

          {/* Row 3 */}
          <div className="flex-1 bg-[#dcf2d1] flex flex-wrap md:flex-nowrap justify-around items-center py-6 px-2 gap-4">
            <div className="flex flex-col items-center gap-3 w-[40%] md:w-auto">
              <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center relative">
                <Image src="/new/s8.png" alt="Organic Waste" fill className="object-contain" priority />
              </div>
              <span className="text-[13px] md:text-[15px] font-bold text-[#1f3f49] text-center">Organic Waste</span>
            </div>
            <div className="flex flex-col items-center gap-3 w-[40%] md:w-auto">
              <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center relative">
                <Image src="/new/s9.png" alt="Anaerobic Digestion" fill className="object-contain" priority />
              </div>
              <span className="text-[13px] md:text-[15px] font-bold text-[#1f3f49] text-center">Anaerobic<br />Digestion</span>
            </div>
            <div className="flex flex-col items-center gap-3 w-[40%] md:w-auto">
              <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center relative">
                <Image src="/new/s10.png" alt="Purification" fill className="object-contain" priority />
              </div>
              <span className="text-[13px] md:text-[15px] font-bold text-[#1f3f49]">Purification</span>
            </div>
            <div className="flex flex-col items-center gap-3 w-[40%] md:w-auto">
              <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center relative">
                <Image src="/new/s11.png" alt="RNG (CBG)" fill className="object-contain" priority />
              </div>
              <span className="text-[13px] md:text-[15px] font-bold text-[#1f3f49]">RNG (CBG)</span>
            </div>
          </div>

        </div>

        {/* Right Side: Value */}
        <div className="w-full lg:w-[180px] xl:w-[220px] 2xl:w-[260px] bg-[#5ca35e] flex items-center justify-center shrink-0 z-10 py-8 lg:py-0">
          <h3 className="text-white text-2xl lg:text-3xl font-bold tracking-wide">Value</h3>
        </div>

      </div>
    </section>
  );
}
