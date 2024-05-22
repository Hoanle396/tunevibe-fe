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
      <Popular
        musics={[
          {
            id: 121,
            name: "Without Me",
            src: "/musics/trends/without me.mp3",
            artist: "Halsey",
            coverImage: "/images/music/cover.webp",
            avatar: "/images/music/without-me.webp",
            playedCount: 63000000,
          },
          {
            id: 122,
            name: "7 rings",
            src: "/musics/trends/7 rings.mp3",
            artist: "Ariana Grande",
            coverImage: "/images/music/cover-2.webp",
            avatar: "/images/music/7-rings.webp",
            playedCount: 73000000,
          },
          {
            id: 123,
            name: "Only Human",
            src: "/musics/trends/only human.mp3",
            artist: "Jonas Brothers",
            coverImage: "/images/music/cover-3.webp",
            avatar: "/images/music/only-human.webp",
            playedCount: 25000000,
          },
          {
            id: 124,
            name: "Attention",
            src: "/musics/trends/attention.mp3",
            artist: "Charlie Puth",
            coverImage: "/images/music/cover-4.webp",
            avatar: "/images/music/attention.webp",
            playedCount: 110000000,
          },
        ]}
      />
      <Albums />
    </div>
  );
};

export default ArtistDetail;
