import Avatar from "@/components/Avatar";
import { IPFS, cutString } from "@/libs/function";
import { FCC } from "@/types";
import dayjs from "dayjs";
import React from "react";

const AlbumCard: FCC<Album> = ({ cover, name, createdAt }) => {
  return (
    <div className="bg-transparent ring-2 hover:ring-4 cursor-pointer ring-purple-500 hover:bg-[#34344499] shadow-lg hover:shadow-purple-400 hover:shadow-xl h-fit p-4 text-white flex flex-col gap-4 rounded-2xl">
      <div className="relative w-full h-fit">
        <img
          className="w-full rounded-xl aspect-square"
          src={IPFS(cover)}
          alt="anh"
        />
      </div>
      <p className="flex justify-between items-center text-xs md:text-lg font-semibold">
        <span>{cutString(name, 7, 7, true)}</span>
        <span>{dayjs(createdAt).locale("vn_VN").format("MM/YYYY")}</span>
      </p>
    </div>
  );
};

export default AlbumCard;
