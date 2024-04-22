"use client";

import Index from "@/components/index/Index";
const Music = ({}) => {
  return (
    <Index
      trends={[
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
      topMusics={[
        {
          id: 101,
          name: "Eshge Bi Gharare Man",
          src: "/musics/Amir Hafez - Eshghe Bi Gharare Man.mp3",
          artist: "Amir Hafez",
          coverImage: "/images/music/eshghe-bi-gharare-man.webp",
          avatar: "/images/music/eshghe-bi-gharare-man.webp",
          playedCount: 12000,
        },
        {
          id: 120,
          name: "Ghaf",
          src: "/musics/Alireza Talischi - Ghaf.mp3",
          artist: "Alireza Talischi",
          coverImage: "/images/music/ghaf.webp",
          avatar: "/images/music/ghaf.webp",
          playedCount: 6500,
        },
        {
          id: 114,
          name: "Jang",
          src: "/musics/Ali Yasini - Jang.mp3",
          artist: "Ali Yasini",
          coverImage: "/images/music/jang.webp",
          avatar: "/images/music/jang.webp",
          playedCount: 12500,
        },
        {
          id: 115,
          name: "Neghab",
          src: "/musics/Ali Yasini - Neghab.mp3",
          artist: "Ali Yasini",
          coverImage: "/images/music/neghab.webp",
          avatar: "/images/music/neghab.webp",
          playedCount: 32500,
        },
        {
          id: 109,
          name: "Mahi",
          src: "/musics/Ali Montazeri - Mahi.mp3",
          artist: "Ali Montazeri",
          coverImage: "/images/music/mahi.webp",
          avatar: "/images/music/mahi.webp",
          playedCount: 34500,
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
          id: 110,
          name: "Mehrabanam",
          src: "/musics/Ali Montazeri - Mehrabanam.mp3",
          artist: "Ali Montazeri",
          coverImage: "/images/music/mehrabanam.webp",
          avatar: "/images/music/mehrabanam.webp",
          playedCount: 2000,
        },
      ]}
    />
  );
};

export default Music;
