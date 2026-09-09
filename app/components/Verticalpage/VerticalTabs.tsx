'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { CheckCircle2, Lightbulb, Users, Banknote, FileText, ArrowRight } from 'lucide-react';
import Link from 'next/link';

type TabType = 'saf' | 'efw' | 'rng';

const verticalsData = {
  saf: {
    id: 'saf',
    label: 'SAF',
    title: 'Sustainable Aviation Fuel (SAF)',
    description: 'SAF is a renewable alternative to conventional jet fuel, produced from waste-based inputs.',
    problemTitle: 'The Problem SAF Solves for the Aviation Industry',
    problemPoints: [
      'Aviation makes up around 2-3% of global CO2 emissions. SAF can cut these emissions by up to 80% over its lifecycle.',
      'SAF specifications match Jet A/A-1. It is better on aromatics and sulphur content.',
      'SAF is a drop-in solution to the existing fuel supply chain and infrastructure.',
      '50% blending with kerosene Jet is permitted.'
    ],
    portfolioCompany: {
      name: 'SAF One',
      description: "SAF One is a joint venture between Sencirc and Novus Aviation Capital, one of the world's leading aviation leasing and finance firms.",
      logo: '/homepage/portfolio1.png',
      subLogo: '/logo.webp',
      buttonText: 'Visit SAF One',
      buttonLink: '#'
    },
    partnershipText: 'The Sencirc – Novus Partnership Enables Pursuit Of Global SAF Project Development And Execution By Providing SAF One With',
    pillars: [
      { num: '01', title: 'Asset Management & Domain Expertise', icon: Lightbulb },
      { num: '02', title: 'Industry Access', icon: (props: any) => <Image src="/homepage/partner.png" alt="Partner" width={65} height={65} className="object-contain" /> },
      { num: '03', title: 'Institutional Capital', icon: Banknote }
    ],
    footerText: 'SAF One, As A Platform, Works With Stakeholders Across The Value Chain To Take Projects From Planning To Fuel Production.'
  },
  efw: {
    id: 'efw',
    label: 'EFW',
    title: 'Energy From Waste (EFW)',
    description: 'A sustainable form of energy generated as electricity, heat, or other forms of energy through the processing of non-recyclable waste.',
    problemTitle: 'The Problem EFW Solves',
    problemPoints: [
      "EfW (Energy from Waste) technologies handle waste that can't be reused or recycled and would otherwise end up in landfills.",
      "EfW helps reduce harmful gases: By keeping waste out of landfills, it stops methane from being produced—a gas much more powerful than CO2 over 20 years.",
      "As technology improves, EfW plants will play a bigger role in clean energy and recycling. They will capture CO2, recover useful materials, and provide more energy to help cut emissions in other areas."
    ],
    portfolioCompany: {
      name: 'ZESTE ENERGY',
      description: "ZESTE is a joint venture between Sencirc and The Brooking Plant - a leader in the EfW space, bringing in decades of experience in the development and completion of Energy from Waste projects and platforms.",
      logo: '/homepage/portfolio2.png',
      subLogo: undefined,
      buttonText: 'Visit ZESTE Energy',
      buttonLink: '#'
    },
    partnershipText: 'The Sencirc - The Brooking Plant Partnership Enables Pursuit Of Global EFW Platform Development And Execution By Providing ZESTE With',
    pillars: [
      { num: '01', title: 'Asset Management & Domain Expertise', icon: Lightbulb },
      { num: '02', title: 'Commercial Contracting And Project Finance Expertise', icon: FileText },
      { num: '03', title: 'Institutional Capital', icon: Banknote }
    ],
    footerText: 'ZESTE, As A Platform, Works With Stakeholders Across The Value Chain To Take Projects From Planning To Energy Production.'
  },
  rng: {
    id: 'rng',
    label: 'RNG',
    title: 'Renewable Natural Gas (RNG)',
    description: 'A sustainable, methane-rich gas produced from anaerobic decomposition of biogenic wastes.',
    problemTitle: 'The Problem RNG Solves',
    problemPoints: [
      'Promotes the circular future that we inspire the planet to move to.',
      'The right combination of feedstock, technology and capital provides pricing parity with fossil fuel through cycles.',
      'Unlike wind and solar, Renewable Natural Gas, also known as biogas, is not weather dependent and production can go on in an uninterrupted manner.'
    ],
    portfolioCompany: null,
    partnershipText: null,
    pillars: [],
    footerText: 'Sencirc Is Actively Evaluating Multiple Projects And Partners.'
  }
};

export default function VerticalTabs() {
  const [activeTab, setActiveTab] = useState<TabType>('saf');

  const activeData = verticalsData[activeTab];

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-16 ">
      <h2 className="text-center text-[#1f3f49] text-xl sm:text-2xl md:text-3xl font-bold mb-8">
        Sencirc Currently Operates Across Three Business Verticals
      </h2>

      {/* Tabs */}
      <div className="flex gap-2 w-full max-w-4xl mx-auto">
        {(Object.keys(verticalsData) as TabType[]).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`py-3 sm:py-4 text-sm font-bold tracking-wider transition-all duration-300 rounded-t-xl ${
              activeTab === tab 
                ? 'bg-[#69c445] text-white flex-[4]' 
                : 'bg-[#f4f7f6] text-[#1f3f49] flex-1 hover:bg-[#e9eceb]'
            }`}
          >
            {verticalsData[tab].label}
          </button>
        ))}
      </div>

      {/* Main Content Card */}
      <div className="bg-[#f9faf9] rounded-b-xl p-8 md:p-12 mb-8 shadow-sm w-full max-w-4xl mx-auto">
        <h3 className="text-center text-[#1f3f49] text-2xl font-bold mb-4">
          {activeData.title}
        </h3>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto text-[15px]">
          {activeData.description}
        </p>
        
        {/* Process Diagram Placeholder */}
        <div className="w-full max-w-2xl mx-auto flex items-center justify-center mb-5">
          {activeTab === 'saf' ? (
             <div className="flex items-start gap-6 -translate-x-10">
               <div className="flex flex-col items-center gap-3">
                 <img src="/new/s1.png" alt="SAF Process Flow 1" className="w-full max-w-[100px] h-auto object-contain" />
                 <span className="text-[13px] md:text-[15px] font-bold text-[#1f3f49]">Waste</span>
               </div>
               
               <div className="flex items-center justify-center h-[100px]">
                 <ArrowRight className="text-[#6fc238] w-6 h-6 md:w-8 md:h-8" />
               </div>

               <div className="flex flex-col items-center gap-3">
                 <img src="/new/s2.png" alt="SAF Process Flow 2" className="w-full max-w-[100px] h-auto object-contain" />
                 <span className="text-[13px] md:text-[15px] font-bold text-[#1f3f49]">Conversion</span>
               </div>

               <div className="flex items-center justify-center h-[100px]">
                 <ArrowRight className="text-[#6fc238] w-6 h-6 md:w-8 md:h-8" />
               </div>

               <div className="flex flex-col items-center gap-3">
                 <img src="/new/s3.png" alt="SAF Process Flow 3" className="w-full max-w-[100px] h-auto object-contain" />
                 <span className="text-[13px] md:text-[15px] font-bold text-[#1f3f49]">Upgrading</span>
               </div>

               <div className="flex items-center justify-center h-[100px]">
                 <ArrowRight className="text-[#6fc238] w-6 h-6 md:w-8 md:h-8" />
               </div>

               <div className="flex flex-col items-center gap-3">
                 <img src="/new/s4.png" alt="SAF Process Flow 4" className="w-full max-w-[100px] h-auto object-contain" />
                 <span className="text-[13px] md:text-[15px] font-bold text-[#1f3f49]">SAF</span>
               </div>
             </div>
          ) : (
            <div className="w-[30px] h-[30px] flex items-center justify-center">
               <p className="text-gray-400 font-medium">Process Flow Image goes here ({activeTab.toUpperCase()})</p>
            </div>
          )}
        </div>
      </div>

      {/* Problem Section */}
      <div className="bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] p-8 md:p-12 mb-12 border border-gray-50 w-full max-w-4xl mx-auto">
        <h3 className="text-[#1f3f49] text-xl font-bold mb-8">
          {activeData.problemTitle}
        </h3>
        <ul className="space-y-6">
          {activeData.problemPoints.map((point, idx) => (
            <li key={idx} className="flex gap-4 items-start">
              <CheckCircle2 className="text-[#69c445] w-6 h-6 shrink-0 mt-0.5" />
              <p className="text-gray-600 leading-relaxed text-[15px]">{point}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Portfolio Company Section */}
      {activeData.portfolioCompany && (
        <div className="mb-16 w-full max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12 mb-8">
            <div className="w-full md:w-1/2">
              <h3 className="text-[#1f3f49] text-xl font-bold mb-4">
                Our Portfolio Company
              </h3>
              <p className="text-gray-600 leading-relaxed text-[15px]">
                {activeData.portfolioCompany.description}
              </p>
            </div>
            <div className="w-full md:w-1/2 flex flex-col items-center justify-center gap-6">
              <Image 
                src={activeData.portfolioCompany.logo} 
                alt={activeData.portfolioCompany.name} 
                width={250} 
                height={120} 
                className="object-contain"
              />
              {activeData.portfolioCompany.subLogo && (
                <Image 
                  src={activeData.portfolioCompany.subLogo} 
                  alt="Partner Logo" 
                  width={100} 
                  height={50} 
                  className="object-contain opacity-90 -translate-x-24"
                />
              )}
            </div>
          </div>
          <div className="flex justify-center">
            <Link 
              href={activeData.portfolioCompany.buttonLink}
              className="bg-[#69c445] hover:bg-[#5ca35e] text-white font-bold py-3 px-8 rounded-md transition-colors text-sm"
            >
              {activeData.portfolioCompany.buttonText}
            </Link>
          </div>
        </div>
      )}

      {/* Partnership Pillars */}
      {activeData.partnershipText && (
        <div className="mb-12 w-full max-w-4xl mx-auto">
          <h3 className="text-center text-[#1f3f49] text-lg font-bold mb-12 max-w-3xl mx-auto leading-relaxed">
            {activeData.partnershipText}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {activeData.pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div key={idx} className="flex flex-col items-center group cursor-pointer">
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <div className="w-20 h-20 rounded-md flex items-center justify-center bg-[#f0f4ef]">
                      <Icon className="text-[#69c445] w-10 h-10" strokeWidth={1.5} />
                    </div>
                    <span className="text-[80px] font-bold text-[#f0f4ef] group-hover:text-[#1f3f49] transition-colors duration-300 select-none leading-none tracking-tighter">
                      {pillar.num}
                    </span>
                  </div>
                  <div className="bg-[#f0f4ef] rounded-md py-5 px-4 w-full text-center flex-1 flex items-center justify-center">
                    <p className="text-[#1f3f49] font-bold text-[15px]">
                      {pillar.title}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Footer Banner */}
      <div className="bg-[#104b36] rounded-none py-8 px-6 text-center w-full max-w-4xl mx-auto mb-16">
        <p className="text-white font-bold text-[17px] md:text-lg max-w-3xl mx-auto">
          {activeData.footerText}
        </p>
      </div>
    </div>
  );
}
