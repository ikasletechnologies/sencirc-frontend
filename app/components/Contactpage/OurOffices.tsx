import React from 'react';
import { Building2 } from 'lucide-react';

const offices = [
  {
    name: "Sencirc Holding Ltd",
    address: "Abu Dhabi Global Market,\nAbu Dhabi, UAE"
  },
  {
    name: "Sencirc Consultants DMCC",
    address: "DMCC, Dubai,\nUAE"
  },
  {
    name: "ZESTE Energy Management Ltd",
    address: "Park Towers B, DIFC,\nUAE"
  },
  {
    name: "ZESTE Energy Ltd",
    address: "Office 201, 107-111 Fleet Street,\nLondon, EC4A 2AB"
  },
  {
    name: "SAF One Energy Management Ltd",
    address: "Emirates Financial Centre, DIFC,\nUAE"
  },
  {
    name: "ZESTE Energy Ltd",
    address: "12-18 Theobalds Road, London,\nWC1X 8PL"
  }
];

export default function OurOffices() {
  return (
    <section className="w-full bg-white py-20 px-6 md:px-12">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-center text-[#69c445] text-[38px] font-bold mb-16 tracking-tight">
          Our Offices
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 pl-6 md:pl-8">
          {offices.map((office, index) => (
            <div key={index} className="relative rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-200 bg-white flex flex-col h-full">
              
              {/* Top Dark Section */}
              <div className="bg-[#1f3f49] rounded-t-2xl px-8 flex items-center justify-center h-[90px]">
                <h3 className="text-white font-bold text-center text-[15px] leading-tight">
                  {office.name}
                </h3>
              </div>
              
              {/* Bottom White Section */}
              <div className="px-8 flex items-center justify-center h-[130px] rounded-b-2xl">
                <p className="text-gray-500 text-center text-[14px] font-medium leading-relaxed whitespace-pre-line">
                  {office.address}
                </p>
              </div>
              
              {/* Floating Building Icon */}
              <div className="absolute left-[-28px] top-[90px] -translate-y-1/2 w-[64px] h-[64px] bg-white rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(0,0,0,0.08)] border-[6px] border-[#f9faf9]">
                <Building2 className="text-[#69c445]" strokeWidth={1.5} size={26} />
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
