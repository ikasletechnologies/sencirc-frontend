import React from 'react';
import Image from 'next/image';

export default function WasteToValue() {
  return (
    <section className="w-full max-w-6xl mx-auto py-10 px-4 sm:px-6 lg:px-8 font-sans bg-white my-4">

      <h3 className="text-[#1f3f49] text-base sm:text-lg md:text-xl font-bold mb-8 tracking-tight text-center px-2">
        Waste To Value Conversion Can Be Achieved Through Various Techonology And Process Pathways
      </h3>

      <div className="relative w-full flex flex-col md:flex-row rounded-[30px] md:rounded-[200px] shadow-lg border border-gray-100 overflow-hidden min-h-[380px]">

        {/* Left Side: Waste */}
        <div className="w-full md:w-[220px] lg:w-[250px] bg-[#1f3f49] flex items-center justify-center shrink-0 z-10 py-8 md:py-0 md:rounded-l-[200px]">
          <h3 className="text-white text-2xl md:text-3xl font-bold tracking-wide">Waste</h3>
        </div>

        {/* Middle Section: Pathways (3 rows with 4 grid columns) */}
        <div className="flex-1 flex flex-col relative z-0">

          {/* Row 1 */}
          <div className="flex-1 bg-[#f8fcf6] grid grid-cols-2 sm:grid-cols-4 items-center py-5 px-3 border-b-2 border-dashed border-[#48a846]/60 gap-3">
            <div className="flex flex-col items-center gap-2">
              <div className="w-14 h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 flex items-center justify-center relative">
                <Image src="/new/s1.png" alt="Waste" fill className="object-contain" priority />
              </div>
              <span className="text-[13px] md:text-[14px] lg:text-[15px] font-bold text-[#1f3f49] text-center">Waste</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-14 h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 flex items-center justify-center relative">
                <Image src="/new/s2.png" alt="Conversion" fill className="object-contain" priority />
              </div>
              <span className="text-[13px] md:text-[14px] lg:text-[15px] font-bold text-[#1f3f49] text-center">Conversion</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-14 h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 flex items-center justify-center relative">
                <Image src="/new/s3.png" alt="Upgrading" fill className="object-contain" priority />
              </div>
              <span className="text-[13px] md:text-[14px] lg:text-[15px] font-bold text-[#1f3f49] text-center">Upgrading</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-14 h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 flex items-center justify-center relative">
                <Image src="/new/s4.png" alt="SAF" fill className="object-contain" priority />
              </div>
              <span className="text-[13px] md:text-[14px] lg:text-[15px] font-bold text-[#1f3f49] text-center">SAF</span>
            </div>
          </div>

          {/* Row 2 */}
          <div className="flex-1 bg-[#ebf6e7] grid grid-cols-2 sm:grid-cols-4 items-center py-5 px-3 border-b-2 border-dashed border-[#48a846]/60 gap-3">
            <div className="flex flex-col items-center gap-2">
              <div className="w-14 h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 flex items-center justify-center relative">
                <Image src="/new/s5.png" alt="Municipal Solid Waste" fill className="object-contain" priority />
              </div>
              <span className="text-[13px] md:text-[14px] lg:text-[15px] font-bold text-[#1f3f49] text-center leading-tight">Municipal Solid<br />Waste</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-14 h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 flex items-center justify-center relative">
                <Image src="/new/s6.png" alt="Gasification" fill className="object-contain" priority />
              </div>
              <span className="text-[13px] md:text-[14px] lg:text-[15px] font-bold text-[#1f3f49] text-center">Gasification</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-14 h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 flex items-center justify-center relative">
                <Image src="/new/s7.png" alt="Energy (EFW)" fill className="object-contain" priority />
              </div>
              <span className="text-[13px] md:text-[14px] lg:text-[15px] font-bold text-[#1f3f49] text-center">Energy (EFW)</span>
            </div>
            <div className="hidden sm:block"></div>
          </div>

          {/* Row 3 */}
          <div className="flex-1 bg-[#def2d8] grid grid-cols-2 sm:grid-cols-4 items-center py-5 px-3 gap-3">
            <div className="flex flex-col items-center gap-2">
              <div className="w-14 h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 flex items-center justify-center relative">
                <Image src="/new/s8.png" alt="Organic Waste" fill className="object-contain" priority />
              </div>
              <span className="text-[13px] md:text-[14px] lg:text-[15px] font-bold text-[#1f3f49] text-center leading-tight">Organic<br />Waste</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-14 h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 flex items-center justify-center relative">
                <Image src="/new/s9.png" alt="Anaerobic Digestion" fill className="object-contain" priority />
              </div>
              <span className="text-[13px] md:text-[14px] lg:text-[15px] font-bold text-[#1f3f49] text-center leading-tight">Anaerobic<br />Digestion</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-14 h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 flex items-center justify-center relative">
                <Image src="/new/s10.png" alt="Purification" fill className="object-contain" priority />
              </div>
              <span className="text-[13px] md:text-[14px] lg:text-[15px] font-bold text-[#1f3f49] text-center">Purification</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-14 h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 flex items-center justify-center relative">
                <Image src="/new/s11.png" alt="RNG (CBG)" fill className="object-contain" priority />
              </div>
              <span className="text-[13px] md:text-[14px] lg:text-[15px] font-bold text-[#1f3f49] text-center">RNG (CBG)</span>
            </div>
          </div>

        </div>

        {/* Right Side: Value */}
        <div className="w-full md:w-[220px] lg:w-[250px] bg-[#48a846] flex items-center justify-center shrink-0 z-10 py-8 md:py-0 md:rounded-r-[200px]">
          <h3 className="text-white text-2xl md:text-3xl font-bold tracking-wide">Value</h3>
        </div>

      </div>
    </section>
  );
}
