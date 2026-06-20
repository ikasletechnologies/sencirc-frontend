import React from 'react';
import { Phone } from 'lucide-react';

export default function ContactForm() {
  return (
    <section className="w-full bg-[#f4f7f6] py-20 px-6">
      <div className="max-w-[1100px] mx-auto">
        <h2 className="text-center text-[#69c445] text-[38px] font-bold mb-16 tracking-tight">
          Get In Touch
        </h2>
        
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-10 items-center justify-center">
          
          {/* Left: Form Card */}
          <div className="w-full lg:w-[60%] bg-white rounded-[24px] shadow-sm border border-gray-100 p-8 md:p-12">
            <form className="flex flex-col gap-6">
              <div className="flex flex-col md:flex-row gap-6">
                <input 
                  type="text" 
                  placeholder="Name *" 
                  className="w-full border border-gray-200 rounded-[4px] p-4 text-sm text-gray-700 outline-none focus:border-[#8cc63f] transition-colors placeholder:text-gray-400"
                  required
                />
                <input 
                  type="email" 
                  placeholder="Email *" 
                  className="w-full border border-gray-200 rounded-[4px] p-4 text-sm text-gray-700 outline-none focus:border-[#8cc63f] transition-colors placeholder:text-gray-400"
                  required
                />
              </div>
              <textarea 
                placeholder="Message" 
                rows={6}
                className="w-full border border-gray-200 rounded-[4px] p-4 text-sm text-gray-700 outline-none focus:border-[#8cc63f] transition-colors resize-none placeholder:text-gray-400"
              ></textarea>
              <div className="flex justify-center mt-4">
                <button 
                  type="submit" 
                  className="bg-[#8cc63f] hover:bg-[#7ab133] text-white font-extrabold tracking-widest uppercase px-12 py-3.5 rounded-[4px] transition-colors text-[13px] shadow-sm"
                >
                  SEND MESSAGE
                </button>
              </div>
            </form>
          </div>
          
          {/* Right: Info Card */}
          <div className="w-full lg:w-[35%] pl-4 md:pl-8">
            <div className="relative bg-white rounded-[16px] shadow-sm border border-gray-100 p-10 flex flex-col items-center justify-center text-center min-h-[160px]">
              {/* Floating Icon */}
              <div className="absolute -top-10 -left-6 md:-left-10 w-[84px] h-[84px] bg-[#1f3f49] rounded-full flex items-center justify-center border-[8px] border-white shadow-[0_0_15px_rgba(0,0,0,0.08)]">
                <Phone className="text-white" strokeWidth={1.5} size={28} />
              </div>
              
              <h4 className="text-[#1f3f49] font-bold text-xl mb-3 tracking-wide">Phone Number</h4>
              <p className="text-[#8cc63f] font-semibold text-lg tracking-wide">+971 4 3332932</p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
