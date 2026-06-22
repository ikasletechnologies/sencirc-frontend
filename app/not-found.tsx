import Link from 'next/link';
import { Home } from 'lucide-react';
import PageBanner from "./components/layout/PageBanner";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-white">
      <PageBanner 
        title="Page Not Found" 
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "404 Error" }
        ]} 
      />
      
      <section className="w-full py-24 px-6 flex justify-center">
        <div className="text-center max-w-lg">
          <h1 className="text-[100px] md:text-[140px] font-black text-transparent bg-clip-text bg-gradient-to-br from-[#69c445] to-[#1f3f49] leading-none mb-6">
            404
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold text-[#1f3f49] mb-4">
            Looks like you&apos;re lost!
          </h2>
          <p className="text-gray-500 text-lg mb-12 leading-relaxed">
            Oops! The page you are looking for doesn&apos;t exist, has been removed, or is temporarily unavailable. Let&apos;s get you back on track to building a sensible circular future.
          </p>
          <Link 
            href="/" 
            className="inline-flex items-center justify-center gap-3 bg-[#1f3f49] hover:bg-[#69c445] text-white font-bold tracking-widest uppercase px-10 py-4 rounded-[4px] transition-all shadow-md hover:shadow-lg hover:-translate-y-1"
          >
            <Home size={20} />
            <span>Return Home</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
