import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const portfolioItems = [
  {
    id: 'saf-one',
    image: '/homepage/portfolio1.png',
    title: 'SAF One',
    description: 'Producer of pathway-agnostic Sustainable Aviation Fuel (SAF), a...',
    link: '#',
  },
  {
    id: 'zeste-energy',
    image: '/homepage/portfolio2.png',
    title: 'ZESTE Energy',
    description: 'ZESTE Energy is managing Europe and UK\'s largest...',
    link: '#',
  }
];

export default function OurPortfolio() {
  return (
    <section className="py-24 px-6 max-w-[1200px] mx-auto font-sans bg-white">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h3 className="text-[#69c445] font-bold text-sm tracking-widest uppercase mb-4">
          OUR PORTFOLIO
        </h3>
        <h2 className="text-[#1f3f49] text-2xl md:text-3xl lg:text-[34px] font-bold tracking-tight">
          Our Portfolio Companies Develop, Build, Own, And Manage Assets
        </h2>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
        {portfolioItems.map((item) => (
          <div 
            key={item.id} 
            className="bg-white rounded-[24px] shadow-[0_12px_40px_-10px_rgba(0,0,0,0.1)] p-8 md:p-10 flex flex-col md:flex-row items-center gap-8 border border-gray-50 hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.15)] transition-shadow duration-300"
          >
            {/* Logo side */}
            <div className="w-full md:w-1/2 flex items-center justify-center min-h-[120px] relative">
              <Image 
                src={item.image} 
                alt={`${item.title} logo`} 
                width={200} 
                height={100} 
                className="object-contain w-auto h-auto max-h-[80px]"
              />
            </div>
            
            {/* Content side */}
            <div className="w-full md:w-1/2 flex flex-col text-center md:text-left">
              <h4 className="text-[#1f3f49] text-2xl font-bold mb-3">
                {item.title}
              </h4>
              <p className="text-gray-500 text-[15px] leading-relaxed mb-6">
                {item.description}
              </p>
              <Link 
                href={item.link} 
                className="text-[#69c445] font-semibold text-[15px] hover:text-[#5ca35e] transition-colors inline-flex items-center justify-center md:justify-start"
              >
                Visit Website
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
