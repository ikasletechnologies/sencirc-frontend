"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
    { name: 'VERTICALS & PORTFOLIO', href: '/vertical-portfolio' },
    { name: 'KNOWLEDGE HUB', href: '/knowledge-hub' },
    { name: 'OUR TEAM', href: '/our-team' },
    { name: 'CONTACT US', href: '/contact-us' },
  ];

  if (isAdminPage) {
    return null;
  }

  return (
    <header
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen ? 'bg-white' : 'bg-transparent'
      }`}
      style={{ paddingTop: 'env(safe-area-inset-top, 0px)' }}
    >
      <div className="flex items-center justify-between lg:justify-start h-16 md:h-20 max-w-[1920px] mx-auto relative w-full">
        {/* Mobile Menu Button - Left side on mobile */}
        <button 
          className="lg:hidden p-4 ml-4 focus:outline-none rounded-lg text-black hover:bg-gray-100 transition-colors z-20 relative"
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

        {/* Logo Section - Right side on mobile, Left side on desktop */}
        <div
          className={`h-full pr-6 md:pr-16 pl-8 md:pl-16 flex items-center z-20 relative ml-auto lg:ml-0 transition-all duration-300 ${
            isScrolled || isMobileMenuOpen
              ? 'bg-transparent shadow-none rounded-none'
              : 'bg-white rounded-bl-[40px] md:rounded-bl-[80px] lg:rounded-bl-none lg:rounded-br-[80px]'
          }`}
        >
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

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center justify-start flex-1 pl-12 lg:pl-16 xl:pl-24 z-20">
          <nav className="flex items-center gap-6 xl:gap-12">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`font-bold text-[14px] xl:text-base tracking-wider transition-colors whitespace-nowrap hover:text-[#8cc63f] ${
                  isScrolled || isMobileMenuOpen ? 'text-black' : 'text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-t border-gray-100 z-50">
          <nav className="flex flex-col px-6 py-2">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="text-black font-bold text-sm tracking-wider py-4 border-b border-gray-100 last:border-0 hover:text-[#8cc63f] transition-colors"
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
