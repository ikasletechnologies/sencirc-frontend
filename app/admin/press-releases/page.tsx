import React from 'react';
import PressReleaseManager from './PressReleaseManager';

export const metadata = {
  title: 'Manage Press Releases | Admin',
};

export default function PressReleasesAdminPage() {
  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#1f3f49]">Press Releases</h1>
        <p className="text-gray-500 mt-2">Add, edit, or remove press releases shown on the homepage.</p>
      </div>

      <PressReleaseManager />
    </div>
  );
}
