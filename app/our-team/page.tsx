import OurPortfolio from "../components/Homepage/OurPortfolio";
import TeamSection from "../components/Teamspage/TeamSection";
import PageBanner from "../components/layout/PageBanner";

export default function OurTeam() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-white">
      <PageBanner 
        title="Our Team" 
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Our Team" }
        ]} 
      />
      <div id="content" className="w-full scroll-mt-16 md:scroll-mt-20">
        <TeamSection />
        <OurPortfolio />
      </div>
    </main>
  );
}