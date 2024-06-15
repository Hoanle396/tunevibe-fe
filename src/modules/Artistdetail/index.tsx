"use client";
import React from "react";
import Header from "./components/Header";
import { useAppStore } from "@/store/app-store";
import Popular from "./components/Popular";
import Albums from "./components/Albums";

const ArtistDetail = () => {
  const [music] = useAppStore((state) => [state.currentMusic]);
  return (
    <div className="pb-28">
      <Header
        artist={{
          id: 121,
          name: "Son Tung M-TP",
          avatar: "/images/music/cover-2.webp",
          musicCount: 63,
          musics: [],
          createdAt: "2020-03",
        }}
      />
      <Popular musics={[]} />
      <Albums />
    </div>
  );
};

export default ArtistDetail;
