"use client";
import Pagination from "@/components/Pagination";
import React, { useState } from "react";
import AlbumCard from "./AlbumCard";
import MainCard from "@/components/ui/main-card/MainCard";

type Props = {};

const Albums = (props: Props) => {
  const [page, setPage] = useState(1);
  const album: any[] = [
    {
      name: "Artist",
      thumbnail: "/images/artist/ahmad-solo.webp",
      createdAt: "2024",
      description: "The artist of k-pop",
    },
    {
      name: "Artist",
      thumbnail: "/images/artist/ahmad-solo.webp",
      createdAt: "2024",
      description: "The artist of k-pop",
    },
    {
      name: "Artist",
      thumbnail: "/images/artist/ahmad-solo.webp",
      createdAt: "2024",
      description: "The artist of k-pop",
    },
    {
      name: "Artist",
      thumbnail: "/images/artist/ahmad-solo.webp",
      createdAt: "2024",
      description: "The artist of k-pop",
    },
  ];
  return (
    <MainCard title="Albums">
      <div className="w-full grid grid-flow-row xl:gap-12 gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
        {!!album &&
          [...album].map((music, index) => (
            <AlbumCard key={music.id} {...music} />
          ))}
      </div>
    </MainCard>
  );
};

export default Albums;
