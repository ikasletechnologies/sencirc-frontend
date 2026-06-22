'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Footer() {
  const pathname = usePathname();

  if (pathname?.startsWith('/admin')) {
    return null;
  }

  return (
    <footer className="bg-[#093323] text-white pt-16 pb-8 relative mt-auto">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
          {/* Column 1 */}
          <div className="md:col-span-5">
            <div className="bg-white rounded-2xl px-6 py-4 inline-flex items-center mb-6 shadow-sm">
              <Link href="/">
                <Image 
                  src="/logo.webp" 
                  alt="Sencirc Logo" 
                  width={220} 
                  height={60} 
                  className="object-contain h-10 w-auto" 
                />
              </Link>
            </div>
            
            <p className="text-sm text-gray-200 mb-8 leading-relaxed max-w-md">
              We invest in, build, and own companies that convert Waste to Energy, Fuels & Valuable Products.
            </p>
            
            <div className="border-t border-white/20 pt-6 flex gap-12">
              <div>
                <h4 className="text-[#9cc442] font-semibold mb-2">Get In Touch</h4>
                <p className="text-white font-medium text-sm">+971 4 3332932</p>
              </div>
              <div>
                <h4 className="text-[#9cc442] font-semibold mb-2">Our Location</h4>
                <p className="text-white font-medium text-sm">UAE, UK</p>
              </div>
            </div>
          </div>

          {/* Column 2 */}
          <div className="md:col-span-3">
            <h3 className="text-xl font-bold mb-6">Quicklinks</h3>
            <ul className="space-y-4">
              {[
                { name: 'Verticals & Portfolio', href: '/vertical-portfolio#content' },
                { name: 'Knowledge Hub', href: '/knowledge-hub#content' },
                { name: 'Our Team', href: '/our-team#content' }
              ].map((link) => (
                <li key={link.name} className="flex items-center gap-2 text-gray-200 hover:text-white transition-colors">
                  <span className="text-[#9cc442] text-sm font-bold">&gt;</span>
                  <Link href={link.href} className="text-sm">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 */}
          <div className="md:col-span-4">
            <h3 className="text-xl font-bold mb-6">Our Web Design Team&apos;s Story</h3>
            <p className="text-sm text-gray-200 leading-relaxed">
              Ikaslé is a digital solutions company that partners with students and graduates to deliver real-world projects under expert guidance. Students earn fair compensation which support their education, help gain valuable experience, and become strong job market candidates.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-16 pt-8 flex items-center justify-center text-xs md:text-sm text-gray-300 relative">
          <p className="text-center w-full px-12">
            &copy; {new Date().getFullYear()} Sencirc Holding Limited. All Rights Reserved. Website Developed by <span className="text-[#9cc442] font-medium">Ikaslé Business Group</span>
          </p>
          
          {/*  */}
        </div>
      </div>
    </footer>
  );
}