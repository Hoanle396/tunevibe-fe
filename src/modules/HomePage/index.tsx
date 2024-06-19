"use client";
import AudioLive from "@/components/AudioLive/AudioLive";
import { Widget, addResponseMessage } from "react-chat-widget";
import AboutSection from "./AboutSection";
import CategorySection from "./CategorySection";
import Download from "./DownloadSection";
import HeroSection from "./HeroSection";
import IntroSection from "./IntroSection";
import SlideSection from "./SlideSection";

import { chat } from "@/apis/transcript";
import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import "react-chat-widget/lib/styles.css";

export const Home = () => {
  const [chatWindowOpen, setChatWindowOpen] = useState<boolean>(true);
  const { mutate } = useMutation({
    mutationFn: chat,
    onSuccess: ({ text }) => {
      addResponseMessage(text);
    },
    onError: () => {
      addResponseMessage("Something went wrong!");
    },
  });
  useEffect(() => {
    addResponseMessage("Welcome to tunevibe chat bot!");
  }, []);

  const handleNewUserMessage = (msg: any) => {
    mutate(msg);
  };
  const handleToggle = () => {
    setChatWindowOpen((prev) => !prev);
  };
  return (
    <div>
      <HeroSection />
      <CategorySection />
      <AboutSection />
      <IntroSection />
      <AudioLive />
      <SlideSection />
      <Download />
      <Widget
        handleToggle={handleToggle}
        launcherOpenLabel
        handleNewUserMessage={handleNewUserMessage}
        title="TuneVibe Chatbot"
        subtitle="Ask me anything!"
      />
    </div>
  );
};
