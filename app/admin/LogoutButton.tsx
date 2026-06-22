'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' });
    router.push('/admin/login');
    router.refresh();
  };

  return (
    <button 
      onClick={handleLogout}
      className="block w-full text-left px-4 py-3 text-red-500 hover:bg-red-50 hover:text-red-600 rounded-lg transition-colors font-medium"
    >
      Logout
    </button>
  );
}
