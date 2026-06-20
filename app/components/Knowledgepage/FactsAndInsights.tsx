"use client";

import React, { useState } from 'react';
import { Minus, Plus } from 'lucide-react';

const safData = [
  {
    title: "SAF Is Being Actively Promoted By Regulatory Frameworks",
    bullets: [
      "Over 30 countries have implemented or announced SAF mandates, targets, or incentives, with several others actively exploring a shift from voluntary adoption to compliance-driven frameworks.",
      "EU: ReFuelEU mandates 2% SAF by 2025, rising to 6% in 2030, and 70% by 2050, with sub-targets for synthetic fuels of 1.2% of total SAF by 2030, 35% by 2050.",
      "UK: SAF mandate requires 2% in 2025, rising to 10% SAF by 2030, increasing to 22% by 2040, including a synthetic fuel (PtL) sub-target of 0.2% of total SAF in 2028, rising to 0.5% by 2030 and 3.5% by 2040. Has a HEFA cap set at 71% of total SAF by 2030, decreasing to 35% by 2040.",
      "Singapore: SAF requirement starts at 1% in 2026, scaling to 3-5% by 2030, funded via a passenger levy.",
      "U.S.: The SAF Grand Challenge targets 3 billion gallons/year (11.4 billion liters) by 2030, supported by tax credits under the Inflation Reduction Act.",
      "ICAO / CORSIA: SAF is recognized under CORSIA as a core emissions reduction pathway for international aviation."
    ]
  },
  {
    title: "Technological Advancements And Approved Pathways",
    bullets: [
      "There are 11 ASTM-approved conversion pathways for SAF production under the D7566 standard, and 11 other processes are currently under evaluation.",
      "Currently, HEFA is the only pathway with a Technology Readiness Level (TRL) of 9, indicating full commercial deployment. Most operational facilities still rely on HEFA, which makes up >90% of global SAF production due to lower capex and proven performance.",
      "HEFA can achieve around 60-80% GHG emissions savings compared to fossil jet fuel."
    ]
  },
  {
    title: "Corporate Buyers Driving Voluntary Demand",
    bullets: [
      "Corporate buyers like Microsoft are increasingly committing to SAF as part of Scope 3 emissions reduction strategies, especially for business travel and air freight.",
      "This demand is voluntary but growing rapidly, often facilitated through Book & Claim systems that allow emissions reductions to be decoupled and credited to buyers without requiring physical delivery of SAF."
    ]
  },
  {
    title: "Highlights",
    bullets: [
      "ReFuelEU Mandate",
      "UK SAF Mandate Compliance guidance",
      "ASTM approved pathways",
      "Singapore SAF levy launch",
      "UAE SAF policy",
      "Aviation Sustainability Lexicon 2025 by Simpliflying",
      "Net Zero 2050 : sustainable aviation fuels (SAF)"
    ]
  }
];

const efwData = [
  {
    title: "EFW Supports Circular Economy And Landfill Diversion",
    bullets: [
      "EFW technologies convert non-recyclable municipal solid waste, biomass, sewage, etc. into power and different forms of energy, reducing landfill use and methane emissions.",
      "Depending on the technology pathway, outputs can include electricity, heat, steam, syngas, hydrogen, and other high value bioproducts, each with distinct commercial offtake markets in power, chemicals, transport, and industrial sectors."
    ]
  },
  {
    title: "Policy Drivers",
    bullets: [
      "More than 30 countries have implemented landfill taxes or bans on untreated waste (e.g., EU Landfill Directive: <10% landfill by 2035).",
      "UK: High landfill tax creates strong economic pressure on waste producers to divert waste to EfW or recycling, especially when EfW gate fees are competitive.",
      "Scotland: Scotland will ban landfill of biodegradable municipal waste (BMW) from December 2025."
    ]
  }
];

const rngData = [
  {
    title: "Organic Waste Converted To Gaseous Fuel",
    bullets: [
      "RNG is produced by anaerobic digestion (AD) of biomass such as agricultural residues, animal manure, food waste, and sewage sludge, followed by biogas upgrading to remove CO₂ and impurities.",
      "The final product (~>95% methane) is chemically similar to compressed natural gas (CNG) and can be used as transport fuel, for industrial heating, or injected into gas grids.",
      "By converting waste to fuel, RNG reduces landfill methane emissions and enhances circularity in agriculture and municipal systems."
    ]
  },
  {
    title: "India Ecosystem",
    subcategories: [
      {
        title: "SATAT Scheme",
        bullets: [
          "Launched: October 2018 by the Ministry of Petroleum & Natural Gas (MoPNG).",
          "In India, the SATAT scheme targets 5,000 Compressed Biogas (CBG) plants and 15 MMT/year production in the near term, with guaranteed offtake by OMCs. CBG is the compressed form of RNG/Biogas."
        ]
      },
      {
        title: "CBG Blending Mandate",
        bullets: [
          "CBG is officially allowed to be blended with fossil gas in City Gas Distribution (CGD) networks under PNGRB Guidelines.",
          "City Gas Distribution (CGD) entities will be subject to a CBG blending obligation. It will be voluntary in FY 2024–25, and become mandatory from FY 2025–26, starting at 2.5% and rising to 5% by FY 2028–29."
        ]
      }
    ]
  }
];

const TargetIcon = () => (
  <svg className="w-[22px] h-[22px] text-[#69c445] shrink-0 mt-[2px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <circle cx="12" cy="12" r="8" />
    <circle cx="12" cy="12" r="3" fill="currentColor" />
  </svg>
);

const CircleIcon = () => (
  <svg className="w-[18px] h-[18px] text-[#69c445] shrink-0 mt-[3px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
    <circle cx="12" cy="12" r="7" />
  </svg>
);

const AccordionItemComponent = ({ item, isOpen, onClick }: { item: any, isOpen: boolean, onClick: () => void }) => {
  return (
    <div className="mb-2">
      <button 
        onClick={onClick}
        className="flex items-start gap-5 w-full text-left focus:outline-none group py-2"
      >
        <div className="text-[#1f3f49] font-bold mt-0.5 shrink-0 transition-transform group-hover:scale-110">
          {isOpen ? <Minus size={20} strokeWidth={3} /> : <Plus size={20} strokeWidth={3} />}
        </div>
        <h3 className={`text-[17px] font-bold capitalize leading-snug tracking-wide transition-colors ${isOpen ? 'text-[#69c445]' : 'text-[#1f3f49] group-hover:text-[#69c445]'}`}>
          {item.title}
        </h3>
      </button>

      <div 
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <div className="pl-10 mt-4 mb-6 flex flex-col gap-6">
            {item.bullets && item.bullets.map((bullet: string, i: number) => (
              <div key={i} className="flex items-start gap-5">
                <TargetIcon />
                <p className="text-gray-500 text-[15px] font-medium leading-[1.8]">
                  {bullet}
                </p>
              </div>
            ))}

            {item.subcategories && item.subcategories.map((sub: any, i: number) => (
              <div key={i} className="flex flex-col gap-5">
                <div className="flex items-start gap-5">
                  <TargetIcon />
                  <h4 className="text-gray-500 font-bold text-[15px] leading-[1.8]">{sub.title}</h4>
                </div>
                <div className="pl-[42px] flex flex-col gap-5">
                  {sub.bullets.map((bullet: string, j: number) => (
                    <div key={j} className="flex items-start gap-4">
                      <CircleIcon />
                      <p className="text-gray-500 text-[15px] font-medium leading-[1.8]">
                        {bullet}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function FactsAndInsights() {
  const [activeTab, setActiveTab] = useState('SAF');
  const [openIndex, setOpenIndex] = useState<number>(0);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setOpenIndex(0); // Reset to open the first item when switching tabs
  };

  const currentData = activeTab === 'SAF' ? safData : activeTab === 'EFW' ? efwData : rngData;

  return (
    <section className="w-full bg-white py-24 px-6 md:px-12">
      <div className="max-w-[1000px] mx-auto">
        
        {/* Sticky Tabs */}
        <div className="sticky top-[64px] md:top-[80px] z-30 bg-white/95 backdrop-blur-sm py-4 mb-16 flex justify-center gap-3 md:gap-4 -mx-6 px-6 md:-mx-12 md:px-12 shadow-[0_8px_30px_-15px_rgba(0,0,0,0.08)]">
          {['SAF', 'EFW', 'RNG'].map(tab => (
            <button 
              key={tab}
              onClick={() => handleTabChange(tab)}
              className={`px-8 md:px-12 py-3.5 font-bold text-[15px] md:text-[16px] tracking-wide rounded-[4px] transition-all shadow-sm ${
                activeTab === tab 
                  ? 'bg-[#69c445] text-white shadow-md scale-105' 
                  : 'bg-[#f4f7f6] text-[#1f3f49] hover:bg-[#e9eceb]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <h2 className="text-center text-[#69c445] text-[34px] font-bold mb-16 tracking-tight">
          Fact & Insights
        </h2>

        {/* Accordion Container */}
        <div className="flex flex-col gap-1">
          {currentData.map((item, idx) => (
            <AccordionItemComponent 
              key={`${activeTab}-${idx}`} 
              item={item} 
              isOpen={openIndex === idx} 
              onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
            />
          ))}
        </div>
        
      </div>
    </section>
  );
}
