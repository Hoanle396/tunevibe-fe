"use client";
import AudioLive from "@/components/AudioLive/AudioLive";
import { useContract } from "@/hooks/use-contract";
import { useContractFunction } from "@usedapp/core";
import { useEffect } from "react";
import AboutSection from "./AboutSection";
import CategorySection from "./CategorySection";
import Download from "./DownloadSection";
import HeroSection from "./HeroSection";
import IntroSection from "./IntroSection";
import SlideSection from "./SlideSection";

export const Home = () => {
  const { contract } = useContract();
  const { state, send } = useContractFunction(contract, "getListingFee");

  useEffect(() => {
    const get = async () => {
      try {
        const data = await contract?.getListingFee();
        console.log({ data });
      } catch (error) {
        console.log({ error });
      }
    };
    get();
  }, [contract]);
  // console.log({ state, contract });

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
