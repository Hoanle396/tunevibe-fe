import Footer from "@/layouts/Footer";
import AboutSection from "./AboutSection";
import CategorySection from "./CategorySection";
import Download from "./DownloadSection";
import HeroSection from "./HeroSection";
import IntroSection from "./IntroSection";
import SlideSection from "./SlideSection";
import AudioLive from "@/components/AudioLive/AudioLive";

export const Home = () => {
  return (
    <div>
      <HeroSection />
      <CategorySection />
      <AboutSection />
      <IntroSection />
      <AudioLive/>
      <SlideSection />
      <Download />
      <Footer />
    </div>
  );
};
