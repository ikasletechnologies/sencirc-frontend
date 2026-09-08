import { notFound } from 'next/navigation';
import PageBanner from '@/app/components/layout/PageBanner';
import { API_URL, PressRelease } from '@/lib/api';

export default async function PressReleasePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // Await the params due to Next.js 15+ requirements
  const { id } = await params;

  // Fetch from the backend API with error handling
  let item: PressRelease | null = null;
  try {
    const res = await fetch(`${API_URL}/api/press-releases/${id}`, { cache: 'no-store' });
    if (res.ok) {
      item = await res.json();
    }
  } catch (error) {
    console.error('Failed to fetch press release by ID:', error);
  }

  // Fallback if database is empty (for demo purposes)
  let title = item?.title;
  let content = item?.content;
  let date = item ? new Date(item.date) : undefined;

  if (!item) {
    if (id === 'dhl-saf-agreement') {
      title = 'DHL Express signs Bahrain SAF offtake-agreement with SAF One';
      content = 'First SAF offtake agreement for DHL Express in the Middle East, securing long term supply from SAF One\'s Bahrain plant.\n\nDHL Express, the world\'s leading international express logistics provider, today announced the signing of a landmark offtake agreement, bringing the first sustainable aviation fuel (SAF) production facility in the Middle East into DHL\'s global SAF supply network.';
      date = new Date('2026-05-12T00:00:00Z');
    } else if (id === 'tata-projects-saf') {
      title = 'Tata Projects Selected as EPC Partner for SAF One\'s Sustainable Aviation Fuel Project';
      content = 'Tata Projects has been selected as the Engineering, Procurement, and Construction (EPC) partner for SAF One\'s pioneering Sustainable Aviation Fuel project.\n\nThis marks a significant milestone in developing renewable fuels capacity in the region.';
      date = new Date('2026-01-20T00:00:00Z');
    } else if (id === 'saffa-invests') {
      title = 'SAFFA Invests up to $30 Million in SAF One Project Starting Construction in 2026';
      content = 'SAFFA announces a strategic investment of up to $30 million to accelerate the construction of SAF One\'s flagship sustainable aviation fuel facility.\n\nConstruction is set to begin in early 2026, delivering crucial clean energy infrastructure.';
      date = new Date('2026-01-15T00:00:00Z');
    } else {
      notFound();
    }
  }

  // Split description by newlines to render as separate paragraphs
  const paragraphs = content?.split('\n').filter((p: string) => p.trim() !== '') || [];

  return (
    <div className="bg-white min-h-screen">
      <PageBanner 
        title="Press Release"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Press Releases", url: "/#press-releases" },
          { name: title || "Article" }
        ]} 
      />

      <main className="max-w-[1000px] mx-auto px-6 py-16">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h1 className="text-[#69c445] text-3xl md:text-4xl lg:text-[42px] font-bold tracking-tight mb-4">
            {title}
          </h1>
          {date && (
            <p className="text-gray-400 font-medium">
              {date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          )}
        </div>

        {/* Content Section */}
        <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
          {paragraphs.map((paragraph: string, idx: number) => (
            <p key={idx} className="leading-relaxed text-[15px] md:text-[16px] text-[#1f3f49]/80">
              {paragraph}
            </p>
          ))}
        </div>
      </main>
    </div>
  );
}
