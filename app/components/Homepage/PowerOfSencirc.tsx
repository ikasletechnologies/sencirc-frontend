import React from 'react';
import Image from 'next/image';
import { Handshake, TrendingUp, Users } from 'lucide-react';

export default function PowerOfSencirc() {
  return (
    <section className="pt-8 pb-16 lg:pb-24 px-6 max-w-[1350px] mx-auto font-sans bg-white overflow-hidden">
      {/* Header Section */}
      <div className="text-center mb-18 md:mb-28">
        <h3 className="text-[#72c23a] font-bold text-sm tracking-widest uppercase mb-4 text-center">
          POWER OF SENCIRC
        </h3>
        <h2 className="text-[#1f3f49] text-lg sm:text-xl md:text-2xl lg:text-[35px] xl:text-[37px] leading-[1.35] font-bold w-full max-w-[1350px] mx-auto tracking-tight text-center">
          <span className="block">We Form Sustainable Partnerships To Invest In, And Build Businesses</span>
          <span className="block mt-1">Turning Various Waste Streams Into Useful, Valuable Outputs.</span>
        </h2>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 relative max-w-[1080px] mx-auto mt-6 md:mt-10">
        
        {/* Step 1 */}
        <div className="group flex flex-col relative w-full">
          <div className="flex flex-row items-start gap-4 lg:gap-6 mb-10 lg:mb-12">
            <div className="flex flex-col items-center">
              <div className="w-[100px] h-[100px] md:w-[110px] md:h-[110px] bg-[#f8f9fa] flex items-center justify-center rounded-md border border-gray-100">
                <Image src="/homepage/partner.png" alt="Partner" width={90} height={90} className="object-contain" />
              </div>
              <h4 className="text-[#1f3f49] text-2xl md:text-[26px] font-bold mt-6">Partner</h4>
            </div>
            <div className="text-[60px] sm:text-[80px] lg:text-[100px] font-black text-gray-100 leading-none -mt-4 transition-colors duration-300 group-hover:text-[#1f3f49]">
              01.
            </div>
          </div>
          
          <div className="bg-[#e8fbe4] py-7 px-6 lg:py-8 lg:px-8 rounded-xl w-full h-full min-h-[225px] lg:min-h-[245px] shadow-sm transition-all duration-300 group-hover:shadow-md flex items-start">
            <p className="text-[#1f3f49] text-[15px] md:text-[16px] leading-[1.8] font-medium">
              We evaluate and establish shareholder partnerships with companies that have relevant domain expertise, investment background and a passion for sustainability.
            </p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="group flex flex-col relative w-full">
          <div className="flex flex-row items-start gap-4 lg:gap-6 mb-10 lg:mb-12">
            <div className="flex flex-col items-center">
              <div className="w-[100px] h-[100px] md:w-[110px] md:h-[110px] bg-[#f8f9fa] flex items-center justify-center rounded-md border border-gray-100">
                <Image src="/homepage/invest.webp" alt="Invest" width={90} height={90} className="object-contain" />
              </div>
              <h4 className="text-[#1f3f49] text-2xl md:text-[26px] font-bold mt-6">Invest</h4>
            </div>
            <div className="text-[60px] sm:text-[80px] lg:text-[100px] font-black text-gray-100 leading-none -mt-4 transition-colors duration-300 group-hover:text-[#1f3f49]">
              02.
            </div>
          </div>
          
          <div className="bg-[#e8fbe4] py-7 px-6 lg:py-8 lg:px-8 rounded-xl w-full h-full min-h-[225px] lg:min-h-[245px] shadow-sm transition-all duration-300 group-hover:shadow-md flex items-start">
            <p className="text-[#1f3f49] text-[15px] md:text-[16px] leading-[1.8] font-medium">
              We invest alongside partners to found the businesses, develop, own and operate circular economy assets with an objective to create value for the investments.
            </p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="group flex flex-col relative w-full">
          <div className="flex flex-row items-start gap-4 lg:gap-6 mb-10 lg:mb-12">
            <div className="flex flex-col items-center">
              <div className="w-[100px] h-[100px] md:w-[110px] md:h-[110px] bg-[#f8f9fa] flex items-center justify-center rounded-md border border-gray-100">
             <Image src="/homepage/involve.webp" alt="Invest" width={90} height={90} className="object-contain" />
              </div>
              <h4 className="text-[#1f3f49] text-2xl md:text-[26px] font-bold mt-6">Involve</h4>
            </div>
            <div className="text-[60px] sm:text-[80px] lg:text-[100px] font-black text-gray-100 leading-none -mt-4 transition-colors duration-300 group-hover:text-[#1f3f49]">
              03.
            </div>
          </div>
          
          <div className="bg-[#e8fbe4] py-7 px-6 lg:py-8 lg:px-8 rounded-xl w-full h-full min-h-[225px] lg:min-h-[245px] shadow-sm transition-all duration-300 group-hover:shadow-md flex items-start">
            <p className="text-[#1f3f49] text-[15px] md:text-[16px] leading-[1.8] font-medium">
              We actively involve ourselves in the company as shareholders and board members, and offer regular management support by being a visible part in the journey of the company.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
