'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { CheckCircle2, Lightbulb, Users, Banknote, FileText } from 'lucide-react';
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
      buttonText: 'Visit SAF One',
      buttonLink: '#'
    },
    partnershipText: 'The Sencirc – Novus Partnership Enables Pursuit Of Global SAF Project Development And Execution By Providing SAF One With',
    pillars: [
      { num: '01', title: 'Asset Management & Domain Expertise', icon: Lightbulb },
      { num: '02', title: 'Industry Access', icon: Users },
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
      <h2 className="text-center text-[#1f3f49] text-2xl md:text-3xl font-bold mb-8">
        Sencirc Currently Operates Across Three Business Verticals
      </h2>

      {/* Tabs */}
      <div className="flex bg-[#f3f4f6] rounded-t-xl overflow-hidden w-full max-w-2xl mx-auto">
        {(Object.keys(verticalsData) as TabType[]).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 py-4 text-sm font-bold tracking-wider transition-colors duration-300 ${
              activeTab === tab 
                ? 'bg-[#69c445] text-white' 
                : 'bg-transparent text-gray-500 hover:bg-gray-200'
            }`}
          >
            {verticalsData[tab].label}
          </button>
        ))}
      </div>

      {/* Main Content Card */}
      <div className="bg-[#f9faf9] rounded-b-xl rounded-t-none lg:rounded-tr-xl p-8 md:p-12 mb-8 shadow-sm">
        <h3 className="text-center text-[#1f3f49] text-2xl font-bold mb-4">
          {activeData.title}
        </h3>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto text-[15px]">
          {activeData.description}
        </p>
        
        {/* Process Diagram Placeholder - User can replace with actual image later */}
        <div className="w-full h-[200px] bg-white border-2 border-dashed border-gray-200 rounded-xl flex items-center justify-center mb-8">
          <p className="text-gray-400 font-medium">Process Flow Image goes here ({activeTab.toUpperCase()})</p>
        </div>
      </div>

      {/* Problem Section */}
      <div className="bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] p-8 md:p-12 mb-8 border border-gray-50">
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
        <div className="mb-16">
          <div className="flex flex-col md:flex-row items-center gap-12 mb-8">
            <div className="w-full md:w-1/2">
              <h3 className="text-[#1f3f49] text-xl font-bold mb-4">
                Our Portfolio Company
              </h3>
              <p className="text-gray-600 leading-relaxed text-[15px]">
                {activeData.portfolioCompany.description}
              </p>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
              <Image 
                src={activeData.portfolioCompany.logo} 
                alt={activeData.portfolioCompany.name} 
                width={250} 
                height={120} 
                className="object-contain"
              />
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
        <div className="mb-12">
          <h3 className="text-center text-[#1f3f49] text-lg font-bold mb-12 max-w-3xl mx-auto leading-relaxed">
            {activeData.partnershipText}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {activeData.pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div key={idx} className="flex flex-col items-center">
                  <div className="relative mb-6">
                    <span className="text-6xl font-bold text-gray-100 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 -z-10 select-none">
                      {pillar.num}
                    </span>
                    <div className="w-16 h-16 rounded-full border-2 border-[#e8f5df] flex items-center justify-center bg-white">
                      <Icon className="text-[#69c445] w-8 h-8" />
                    </div>
                  </div>
                  <div className="bg-[#f0f4ef] rounded-md py-6 px-4 w-full text-center h-full flex items-center justify-center">
                    <p className="text-[#1f3f49] font-bold text-sm">
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
      <div className="bg-[#104b36] rounded-md py-8 px-6 text-center shadow-lg">
        <p className="text-white font-bold text-lg max-w-3xl mx-auto">
          {activeData.footerText}
        </p>
      </div>
    </div>
  );
}
