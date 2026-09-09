import React from 'react';
import { Handshake, TrendingUp, Users } from 'lucide-react';

export default function PowerOfSencirc() {
  return (
    <section className="pt-8 pb-8 lg:pb-12 px-6 max-w-[1300px] mx-auto font-sans bg-white overflow-hidden">
      {/* Header Section */}
      <div className="text-center mb-12 md:mb-20">
        <h3 className="text-[#72c23a] font-bold text-sm tracking-widest uppercase mb-4">
          POWER OF SENCIRC
        </h3>
        <h2 className="text-[#1f3f49] text-xl sm:text-2xl md:text-3xl lg:text-[32px] xl:text-[36px] leading-[1.4] font-bold w-full max-w-[1200px] mx-auto tracking-tight">
          We Form Sustainable Partnerships To Invest In, And Build Businesses<br className="hidden xl:block" />
          Turning Various Waste Streams Into Useful, Valuable Outputs.
        </h2>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative">
        
        {/* Step 1 */}
        <div className="group flex flex-col relative w-full">
          <div className="flex flex-row items-start gap-4 lg:gap-6 mb-8">
            <div className="flex flex-col items-center">
              <div className="w-[100px] h-[100px] md:w-[110px] md:h-[110px] bg-[#f8f9fa] flex items-center justify-center rounded-md border border-gray-100">
                <Handshake className="w-14 h-14 md:w-16 md:h-16 text-[#72c23a]" strokeWidth={1} />
              </div>
              <h4 className="text-[#1f3f49] text-xl md:text-[22px] font-bold mt-4">Partner</h4>
            </div>
            <div className="text-[60px] sm:text-[80px] lg:text-[100px] font-black text-gray-100 leading-none -mt-4 transition-colors duration-300 group-hover:text-[#1f3f49]">
              01.
            </div>
          </div>
          
          <div className="bg-[#eefadc] p-6 lg:p-8 rounded-xl w-full h-full shadow-sm transition-all duration-300 group-hover:shadow-md">
            <p className="text-[#1f3f49] text-[15px] md:text-[16px] leading-[1.8] font-medium">
              We evaluate and establish shareholder partnerships with companies that have relevant domain expertise, investment background and a passion for sustainability.
            </p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="group flex flex-col relative w-full">
          <div className="flex flex-row items-start gap-4 lg:gap-6 mb-8">
            <div className="flex flex-col items-center">
              <div className="w-[100px] h-[100px] md:w-[110px] md:h-[110px] bg-[#f8f9fa] flex items-center justify-center rounded-md border border-gray-100">
                <TrendingUp className="w-14 h-14 md:w-16 md:h-16 text-[#72c23a]" strokeWidth={1} />
              </div>
              <h4 className="text-[#1f3f49] text-xl md:text-[22px] font-bold mt-4">Invest</h4>
            </div>
            <div className="text-[60px] sm:text-[80px] lg:text-[100px] font-black text-gray-100 leading-none -mt-4 transition-colors duration-300 group-hover:text-[#1f3f49]">
              02.
            </div>
          </div>
          
          <div className="bg-[#eefadc] p-6 lg:p-8 rounded-xl w-full h-full shadow-sm transition-all duration-300 group-hover:shadow-md">
            <p className="text-[#1f3f49] text-[15px] md:text-[16px] leading-[1.8] font-medium">
              We invest alongside partners to found the businesses, develop, own and operate circular economy assets with an objective to create value for the investments.
            </p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="group flex flex-col relative w-full">
          <div className="flex flex-row items-start gap-4 lg:gap-6 mb-8">
            <div className="flex flex-col items-center">
              <div className="w-[100px] h-[100px] md:w-[110px] md:h-[110px] bg-[#f8f9fa] flex items-center justify-center rounded-md border border-gray-100">
                <Users className="w-14 h-14 md:w-16 md:h-16 text-[#72c23a]" strokeWidth={1} />
              </div>
              <h4 className="text-[#1f3f49] text-xl md:text-[22px] font-bold mt-4">Involve</h4>
            </div>
            <div className="text-[60px] sm:text-[80px] lg:text-[100px] font-black text-gray-100 leading-none -mt-4 transition-colors duration-300 group-hover:text-[#1f3f49]">
              03.
            </div>
          </div>
          
          <div className="bg-[#eefadc] p-6 lg:p-8 rounded-xl w-full h-full shadow-sm transition-all duration-300 group-hover:shadow-md">
            <p className="text-[#1f3f49] text-[15px] md:text-[16px] leading-[1.8] font-medium">
              We actively involve ourselves in the company as shareholders and board members, and offer regular management support by being a visible part in the journey of the company.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
