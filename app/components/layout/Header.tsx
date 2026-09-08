"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Early return moved after hooks
  const isAdminPage = pathname?.startsWith('/admin');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'VERTICALS & PORTFOLIO', href: '/vertical-portfolio#content' },
    { name: 'KNOWLEDGE HUB', href: '/knowledge-hub#content' },
    { name: 'OUR TEAM', href: '/our-team#content' },
    { name: 'CONTACT US', href: '/contact-us#content' },
  ];

  if (isAdminPage) {
    return null;
  }

  return (
    <header className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${isScrolled || isMobileMenuOpen ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="flex items-center h-16 md:h-20 max-w-[1920px] mx-auto relative w-full">
        {/* Logo Section - Curve and shadow removed on scroll */}
        <div className={`h-full pl-6 md:pl-16 pr-8 md:pr-16 flex items-center z-20 relative transition-all duration-300 ${isScrolled || isMobileMenuOpen ? 'bg-transparent shadow-none rounded-none' : 'bg-white rounded-br-[40px] md:rounded-br-[80px] shadow-[4px_0_15px_-3px_rgba(0,0,0,0.1)]'}`}>
          <Link href="/" className="flex items-center gap-2 md:gap-3">
            <Image 
              src="/logo.webp" 
              alt="Sencirc Logo" 
              width={240} 
              height={70} 
              className="object-contain h-10 md:h-12 w-auto transition-all duration-300" 
              priority
            />
          </Link>
        </div>

        {/* Desktop Navigation - centered across the full header width */}
        <div className="hidden lg:flex absolute inset-0 items-center justify-center pointer-events-none z-10">
          <nav className="flex items-center gap-5 xl:gap-10 pointer-events-auto">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`font-bold text-[13px] xl:text-sm tracking-wide transition-colors whitespace-nowrap hover:text-[#8cc63f] ${isScrolled || isMobileMenuOpen ? 'text-[#104b36]' : 'text-white'}`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
        
        {/* Spacer to push mobile button to the right (only needed on mobile now) */}
        <div className="flex-1 lg:hidden"></div>

        {/* Mobile Menu Button */}
        <button 
          className={`lg:hidden p-4 mr-4 focus:outline-none rounded-lg transition-colors z-20 relative ${isScrolled || isMobileMenuOpen ? 'text-[#104b36] hover:bg-gray-100' : 'text-white hover:bg-white/10'}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 z-50">
          <nav className="flex flex-col px-6 py-2">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="text-[#104b36] font-bold text-sm tracking-wide py-4 border-b border-gray-100 last:border-0 hover:text-[#5ca35e] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
