import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  name: string;
  url?: string;
}

interface PageBannerProps {
  title?: string;
  breadcrumbs?: BreadcrumbItem[];
  bgImage?: string;
}

export default function PageBanner({ title, breadcrumbs, bgImage = "/breadcrumb/breadcrumb1.jpg" }: PageBannerProps) {
  const hasContent = title || (breadcrumbs && breadcrumbs.length > 0);

  return (
    <div className={`relative w-full bg-black overflow-hidden ${hasContent ? 'h-[280px] md:h-[300px] flex flex-col justify-center pt-16 md:pt-20' : 'h-16 md:h-20'}`}>
      {/* Background Image */}
      <div className="absolute inset-0 z-0 bg-black overflow-hidden">
        <Image 
          src={bgImage} 
          alt={title || "Header Banner"} 
          fill
          priority
          className="object-cover object-center brightness-[0.4] scale-105"
        />
        <div className="absolute inset-0 bg-[#1f3f49]/50 z-20 pointer-events-none"></div>
      </div>

      {/* Content: Title & Breadcrumbs */}
      {hasContent && (
        <div className="relative z-30 px-6 md:px-16 lg:px-24 w-full max-w-[1400px] mx-auto">
          {title && (
            <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight drop-shadow-md mb-2">
              {title}
            </h1>
          )}
          
          {breadcrumbs && breadcrumbs.length > 0 && (
            <div className="flex items-center text-white/90 text-xs md:text-sm font-medium flex-wrap gap-y-1">
              {breadcrumbs.map((crumb, index) => (
                <React.Fragment key={index}>
                  {crumb.url ? (
                    <Link href={crumb.url} className="hover:text-[#8cc63f] transition-colors font-semibold">
                      {crumb.name}
                    </Link>
                  ) : (
                    <span className="text-white font-bold">{crumb.name}</span>
                  )}
                  
                  {index < breadcrumbs.length - 1 && (
                    <ChevronRight size={14} className="mx-1.5 md:mx-2 text-[#8cc63f]" strokeWidth={3} />
                  )}
                </React.Fragment>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
