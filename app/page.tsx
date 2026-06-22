import TeamSection from "./components/Teamspage/TeamSection";
import HeroSection from "./components/Homepage/HeroSection";
import WhatDrivesUs from "./components/Homepage/WhatDrivesUs";
import WasteToValue from "./components/Homepage/WasteToValue";
import OurVerticals from "./components/Homepage/OurVerticals";
import OurPortfolio from "./components/Homepage/OurPortfolio";
import ZesteEnergyFacility from "./components/Homepage/ZesteEnergyFacility";
import PowerOfSencirc from "./components/Homepage/PowerOfSencirc";
import CircularWasteCycle from "./components/Homepage/CircularWasteCycle";
import PressReleases from "./components/Homepage/PressReleases";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-white">
      <HeroSection />
      <PressReleases />
      <WhatDrivesUs />
      <WasteToValue />
      <PowerOfSencirc />
      <CircularWasteCycle />
      <OurVerticals />
      <OurPortfolio />
      <ZesteEnergyFacility />
      
    </main>
  );
}
