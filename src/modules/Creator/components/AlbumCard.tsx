import { IPFS } from "@/libs/function";
import { FCC } from "@/types";
import React from "react";

const AlbumCard: FCC<Album> = ({ artist, cover, id, name }) => {
  return (
    <article className="relative flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-28 max-w-xs w-full ">
      <img
        src={IPFS(cover)}
        alt="University of Southern California"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
      <h3 className="z-10 mt-3 text-3xl font-bold text-white">{name ?? ""}</h3>
      <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
        {artist.name ?? ""}
      </div>
    </article>
  );
};

export default AlbumCard;
