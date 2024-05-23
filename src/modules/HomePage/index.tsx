"use client";
import AudioLive from "@/components/AudioLive/AudioLive";
import useContract from "@/hooks/use-contract";
import AboutSection from "./AboutSection";
import CategorySection from "./CategorySection";
import Download from "./DownloadSection";
import HeroSection from "./HeroSection";
import IntroSection from "./IntroSection";
import SlideSection from "./SlideSection";

export const Home = () => {
  const { contract } = useContract();

  console.log({ contract });

  return (
    <div>
      <HeroSection />
      <CategorySection />
      <AboutSection />
      <IntroSection />
      <AudioLive />
      <SlideSection />
      <Download />
    </div>
  );
};
