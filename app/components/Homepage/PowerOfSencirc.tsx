import React from 'react';
import { Handshake, TrendingUp, Users } from 'lucide-react';

export default function PowerOfSencirc() {
  return (
    <section className="py-24 px-6 max-w-[1300px] mx-auto font-sans bg-white overflow-hidden">
      {/* Header Section */}
      <div className="text-center mb-20 md:mb-24">
        <h3 className="text-[#72c23a] font-bold text-sm tracking-widest uppercase mb-4">
          POWER OF SENCIRC
        </h3>
        <h2 className="text-[#1f3f49] text-xl md:text-2xl lg:text-3xl leading-snug font-bold max-w-4xl mx-auto tracking-tight">
          We Form Sustainable Partnerships To Invest In, And Build Businesses Turning Various Waste Streams Into Useful, Valuable Outputs.
        </h2>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 relative">
        
        {/* Step 1 */}
        <div className="group flex flex-col items-center relative text-center pt-8 md:pt-10">
          
          <div className="w-[90px] h-[90px] md:w-[100px] md:h-[100px] rounded-xl flex items-center justify-center mb-6 z-10 shadow-sm border border-gray-100 relative bg-white transition-all duration-300 ease-out group-hover:scale-110 group-hover:-translate-y-2 group-hover:shadow-xl group-hover:shadow-[#72c23a]/20 group-hover:border-[#72c23a]/50">
            <Handshake className="w-10 h-10 md:w-12 md:h-12 text-[#72c23a] transition-transform duration-300 group-hover:scale-110" strokeWidth={1.5} />
          </div>
          
          <h4 className="text-[#1f3f49] text-[22px] md:text-[26px] font-bold mb-6 md:mb-8 z-10 tracking-tight transition-colors duration-300 group-hover:text-[#72c23a]">Partner</h4>
          
          <div className="bg-[#eefadc] p-6 md:p-8 lg:p-10 rounded-xl w-full z-10 h-full shadow-sm transition-all duration-300 group-hover:shadow-md">
            <p className="text-[#1f3f49] text-[15px] md:text-[16px] leading-[1.8] font-medium text-left">
              We evaluate and establish shareholder partnerships with companies that have relevant domain expertise, investment background and a passion for sustainability.
            </p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="group flex flex-col items-center relative text-center pt-8 md:pt-10">
          
          <div className="w-[90px] h-[90px] md:w-[100px] md:h-[100px] rounded-xl flex items-center justify-center mb-6 z-10 shadow-sm border border-gray-100 relative bg-white transition-all duration-300 ease-out group-hover:scale-110 group-hover:-translate-y-2 group-hover:shadow-xl group-hover:shadow-[#72c23a]/20 group-hover:border-[#72c23a]/50">
            <TrendingUp className="w-10 h-10 md:w-12 md:h-12 text-[#72c23a] transition-transform duration-300 group-hover:scale-110" strokeWidth={1.5} />
          </div>
          
          <h4 className="text-[#1f3f49] text-[22px] md:text-[26px] font-bold mb-6 md:mb-8 z-10 tracking-tight transition-colors duration-300 group-hover:text-[#72c23a]">Invest</h4>
          
          <div className="bg-[#eefadc] p-6 md:p-8 lg:p-10 rounded-xl w-full z-10 h-full shadow-sm transition-all duration-300 group-hover:shadow-md">
            <p className="text-[#1f3f49] text-[15px] md:text-[16px] leading-[1.8] font-medium text-left">
              We invest alongside partners to found the businesses, develop, own and operate circular economy assets with an objective to create value for the investments.
            </p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="group flex flex-col items-center relative text-center pt-8 md:pt-10">
          
          <div className="w-[90px] h-[90px] md:w-[100px] md:h-[100px] rounded-xl flex items-center justify-center mb-6 z-10 shadow-sm border border-gray-100 relative bg-white transition-all duration-300 ease-out group-hover:scale-110 group-hover:-translate-y-2 group-hover:shadow-xl group-hover:shadow-[#72c23a]/20 group-hover:border-[#72c23a]/50">
            <Users className="w-10 h-10 md:w-12 md:h-12 text-[#72c23a] transition-transform duration-300 group-hover:scale-110" strokeWidth={1.5} />
          </div>
          
          <h4 className="text-[#1f3f49] text-[22px] md:text-[26px] font-bold mb-6 md:mb-8 z-10 tracking-tight transition-colors duration-300 group-hover:text-[#72c23a]">Involve</h4>
          
          <div className="bg-[#eefadc] p-6 md:p-8 lg:p-10 rounded-xl w-full z-10 h-full shadow-sm transition-all duration-300 group-hover:shadow-md">
            <p className="text-[#1f3f49] text-[15px] md:text-[16px] leading-[1.8] font-medium text-left">
              We actively involve ourselves in the company as shareholders and board members, and offer regular management support by being a visible part in the journey of the company.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
