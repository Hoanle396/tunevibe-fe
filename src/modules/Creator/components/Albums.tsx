"use client";
import { GET_ALBUMS } from "@/@apollo/queries/albums";
import { FCC } from "@/types";
import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import AlbumCard from "./AlbumCard";

type Props = {};

const Albums: FCC<Props> = (props: Props) => {
  const [albums, setAlbums] = useState<Album[]>([]);
  useQuery(GET_ALBUMS, {
    onCompleted: (data) => {
      setAlbums(data?.getAlbums?.data ?? []);
    },
    variables: {
      pagination: {
        page: 1,
        limit: 5,
      },
    },
  });
  return (
    <div className="flex w-full justify-start gap-3 p-2 overflow-x-auto">
      {albums &&
        albums.map((album) => (
          <AlbumCard
            key={album.cover}
            name={album.name}
            cover={album.cover}
            artist={album.artist}
            id={album.id}
          />
        ))}
    </div>
  );
};

export default Albums;
