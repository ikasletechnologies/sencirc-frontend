import React from 'react';
import Link from 'next/link';
import { API_URL, PressRelease } from '@/lib/api';

export default async function PressReleases() {
  // Fetch items from the backend API with error handling fallback
  let pressReleases: PressRelease[] = [];
  try {
    const res = await fetch(`${API_URL}/api/press-releases`, { cache: 'no-store' });
    if (res.ok) {
      pressReleases = await res.json();
    }
  } catch (error) {
    console.error('Failed to fetch press releases from backend:', error);
  }

  // Fallback if database is empty or unreachable (for demo purposes)
  if (pressReleases.length === 0) {
    pressReleases = [
      {
        id: 'dhl-saf-agreement',
        title: 'DHL Express signs Bahrain SAF offtake-agreement with SAF One',
        content: 'First SAF offtake agreement for DHL Express in the Middle East, securing long term supply from SAF One\'s Bahrain plant.\n\nDHL Express, the world\'s leading international express logistics provider, today announced the signing of a landmark offtake agreement, bringing the first sustainable aviation fuel (SAF) production facility in the Middle East into DHL\'s global SAF supply network.',
        date: '2026-05-12T00:00:00Z',
        createdAt: new Date().toISOString(),
      },
      {
        id: 'tata-projects-saf',
        title: 'Tata Projects Selected as EPC Partner for SAF One\'s Sustainable Aviation Fuel Project',
        content: 'Tata Projects has been selected as the Engineering, Procurement, and Construction (EPC) partner for SAF One\'s pioneering Sustainable Aviation Fuel project.\n\nThis marks a significant milestone in developing renewable fuels capacity in the region.',
        date: '2026-01-20T00:00:00Z',
        createdAt: new Date().toISOString(),
      },
      {
        id: 'saffa-invests',
        title: 'SAFFA Invests up to $30 Million in SAF One Project Starting Construction in 2026',
        content: 'SAFFA announces a strategic investment of up to $30 million to accelerate the construction of SAF One\'s flagship sustainable aviation fuel facility.\n\nConstruction is set to begin in early 2026, delivering crucial clean energy infrastructure.',
        date: '2026-01-15T00:00:00Z',
        createdAt: new Date().toISOString(),
      }
    ];
  }

  // Format date correctly e.g. "May 12, 2026"
  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section id="press-releases" className="py-8 px-6 max-w-[1200px] mx-auto font-sans bg-white">
      {/* Header Section */}
      <div className="text-center mb-6">
        <h3 className="text-[#69c445] font-semibold text-lg md:text-xl tracking-widest uppercase mb-2">
          PRESS RELEASE
        </h3>
      </div>

      {/* Cards Section */}
      <div className="flex flex-col gap-6 max-w-4xl mx-auto">
        {pressReleases.map((item) => (
          <Link
            key={item.id}
            href={`/press-releases/${item.id}`}
            className="block bg-white rounded-lg p-6 md:p-8 border border-gray-200 hover:shadow-md hover:border-gray-300 transition-all duration-200"
          >
            <h4 className="text-[#1f3f49] text-xl font-bold mb-3">
              {item.title}
            </h4>
            <p className="text-gray-400 text-sm font-medium">
              {formatDate(item.date)}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
