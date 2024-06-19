"use client";
import Pagination from "@/components/Pagination";
import React, { useState } from "react";
import AlbumCard from "./AlbumCard";
import MainCard from "@/components/ui/main-card/MainCard";

type Props = {
  albums: Album[];
};

const Albums = ({ albums }: Props) => {
  const [page, setPage] = useState(1);
 
  return (
    <MainCard title="Albums">
      <div className="w-full grid grid-flow-row xl:gap-12 gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
        {!!albums &&
          albums.map((album, index) => (
            <AlbumCard key={album.id} {...album} />
          ))}
      </div>
    </MainCard>
  );
};

export default Albums;
