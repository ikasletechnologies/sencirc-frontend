import React from 'react';
import { prisma } from '@/lib/prisma';
import { ContactMessage } from '@prisma/client';

export default async function AdminMessages() {
  const messages: ContactMessage[] = await prisma.contactMessage.findMany({
    orderBy: { createdAt: 'desc' },
  });

  return (
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-[#1f3f49] mb-8">Contact Messages</h2>
      
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        {messages.length === 0 ? (
          <div className="p-8 text-center text-gray-500">No messages yet.</div>
        ) : (
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                <th className="py-4 px-6 font-semibold text-gray-600">Date</th>
                <th className="py-4 px-6 font-semibold text-gray-600">Name</th>
                <th className="py-4 px-6 font-semibold text-gray-600">Email</th>
                <th className="py-4 px-6 font-semibold text-gray-600">Message</th>
              </tr>
            </thead>
            <tbody>
              {messages.map((msg) => (
                <tr key={msg.id} className="border-b border-gray-50 hover:bg-gray-50/50">
                  <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap">
                    {msg.createdAt.toLocaleDateString()}
                  </td>
                  <td className="py-4 px-6 font-medium text-gray-800">{msg.name}</td>
                  <td className="py-4 px-6 text-gray-600">
                    <a href={`mailto:${msg.email}`} className="text-[#8cc63f] hover:underline">
                      {msg.email}
                    </a>
                  </td>
                  <td className="py-4 px-6 text-gray-600 text-sm max-w-xs truncate" title={msg.message}>
                    {msg.message}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
