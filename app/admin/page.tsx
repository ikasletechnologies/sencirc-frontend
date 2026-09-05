import React from 'react';
import { prisma } from '@/lib/prisma';
import Link from 'next/link';

export default async function AdminDashboard() {
  let messagesCount = 0;
  let portfolioCount = 0;

  try {
    messagesCount = await prisma.contactMessage.count();
    portfolioCount = await prisma.portfolioItem.count();
  } catch (error) {
    console.error('Failed to fetch admin dashboard counts from database:', error);
  }

  return (
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-[#1f3f49] mb-8">Dashboard Overview</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link href="/admin/messages">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <h3 className="text-lg font-semibold text-gray-600 mb-2">Total Contact Messages</h3>
            <p className="text-4xl font-bold text-[#8cc63f]">{messagesCount}</p>
          </div>
        </Link>
        
        <Link href="/admin/portfolio">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <h3 className="text-lg font-semibold text-gray-600 mb-2">Portfolio Items</h3>
            <p className="text-4xl font-bold text-[#8cc63f]">{portfolioCount}</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
