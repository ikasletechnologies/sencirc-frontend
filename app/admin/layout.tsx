'use client';

import React from 'react';
import Link from 'next/link';
import LogoutButton from './LogoutButton';
import { usePathname } from 'next/navigation';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // If on the login page, don't show the sidebar
  if (pathname === '/admin/login') {
    return <>{children}</>;
  }

  return (
    <div className="flex h-screen bg-gray-50 font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 shadow-sm flex flex-col">
        <div className="p-6 border-b border-gray-100">
          <Link href="/admin">
            <h1 className="text-2xl font-bold text-[#1f3f49]">Sencirc <span className="text-[#8cc63f]">Admin</span></h1>
          </Link>
        </div>
        <nav className="flex-1 p-4 flex flex-col">
          <div className="space-y-2 flex-1">
            <Link 
              href="/admin" 
              className="block px-4 py-3 text-gray-600 hover:bg-[#f1fbe8] hover:text-[#8cc63f] rounded-lg transition-colors font-medium"
            >
              Dashboard
            </Link>
            <Link 
              href="/admin/messages" 
              className="block px-4 py-3 text-gray-600 hover:bg-[#f1fbe8] hover:text-[#8cc63f] rounded-lg transition-colors font-medium"
            >
              Contact Messages
            </Link>
            <Link 
              href="/admin/press-releases" 
              className="block px-4 py-3 text-gray-600 hover:bg-[#f1fbe8] hover:text-[#8cc63f] rounded-lg transition-colors font-medium"
            >
              Press Releases
            </Link>
          </div>
          
          <div className="space-y-2 mt-8 pt-4 border-t border-gray-100">
            <LogoutButton />
            <Link 
              href="/" 
              className="block px-4 py-3 text-gray-400 hover:text-gray-600 rounded-lg transition-colors font-medium"
            >
              &larr; Back to Website
            </Link>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-8">
        {children}
      </main>
    </div>
  );
}
