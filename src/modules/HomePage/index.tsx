import AboutSection from "./AboutSection";
import CategorySection from "./CategorySection";
import Download from "./DownloadSection";
import HeroSection from "./HeroSection";
import IntroSection from "./IntroSection";
import SlideSection from "./SlideSection";

export const Home = () => {
  return (
    <>
      <HeroSection />
      <CategorySection />
      <AboutSection />
      <IntroSection />
      <SlideSection />
      <Download />
    </>
  );
};
