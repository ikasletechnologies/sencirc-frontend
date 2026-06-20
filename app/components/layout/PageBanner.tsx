import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  name: string;
  url?: string;
}

interface PageBannerProps {
  title: string;
  breadcrumbs: BreadcrumbItem[];
  bgImage?: string;
}

export default function PageBanner({ title, breadcrumbs, bgImage = "/breadcrumb/breadcrumb1.jpg" }: PageBannerProps) {
  return (
    <div className="relative w-full h-[350px] md:h-[400px] flex flex-col justify-center pt-24 md:pt-28">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 bg-black overflow-hidden">
        <Image 
          src={bgImage} 
          alt={title} 
          fill
          priority
          className="object-cover object-center blur-[4px] brightness-[0.8] scale-105"
        />
        {/* Dark gradient overlay for readability of left-aligned text */}
        <div className="absolute inset-0 bg-black/30 md:bg-gradient-to-r md:from-black/60 md:via-black/30 md:to-transparent z-10 pointer-events-none"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 md:px-16 lg:px-24 w-full max-w-[1400px] mx-auto">
        <h1 className="text-white text-4xl md:text-5xl lg:text-[54px] font-bold tracking-tight drop-shadow-md mb-4 md:mb-6">
          {title}
        </h1>
        
        <div className="flex items-center text-white/90 text-[15px] md:text-base font-medium">
          {breadcrumbs.map((crumb, index) => (
            <React.Fragment key={index}>
              {crumb.url ? (
                <Link href={crumb.url} className="hover:text-[#69c445] transition-colors font-semibold">
                  {crumb.name}
                </Link>
              ) : (
                <span className="text-white font-bold">{crumb.name}</span>
              )}
              
              {index < breadcrumbs.length - 1 && (
                <ChevronRight size={16} className="mx-2 md:mx-3 text-[#69c445]" strokeWidth={3} />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
