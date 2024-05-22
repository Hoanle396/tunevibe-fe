import Avatar from "@/components/Avatar";
import { FCC } from "@/types";
import React from "react";

type Props = {
  name: string;
  thumbnail: string;
  createdAt: string;
  description: string;
};

const AlbumCard: FCC<Props> = ({ createdAt, description, name, thumbnail }) => {
  return (
    <div className="bg-transparent ring-2 hover:ring-4 cursor-pointer ring-purple-500 hover:bg-[#34344499] shadow-lg hover:shadow-purple-400 hover:shadow-xl h-fit p-4 text-white flex flex-col gap-4 rounded-2xl">
      <div className="relative w-full h-fit">
        <img
          className="w-full rounded-xl aspect-square"
          src={thumbnail}
          alt="anh"
        />
      </div>
      <p className="flex justify-between items-center text-xs md:text-lg font-semibold">
        <span>{name}</span> <span>{createdAt}</span>
      </p>
    </div>
  );
};

export default AlbumCard;
