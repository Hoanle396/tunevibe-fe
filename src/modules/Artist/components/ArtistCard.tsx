"use client";
import Avatar from "@/components/Avatar";
import { FCC } from "@/types";
import dayjs from "dayjs";
import { minidenticon } from "minidenticons";
import Link from "next/link";
import { useMemo } from "react";

type Props = {
  id: number;
  name: string;
  createdAt: string;
};

const ArtistCard: FCC<Props> = ({ createdAt, name, id }) => {
  const svgURI = useMemo(
    () => "data:image/svg+xml;utf8," + encodeURIComponent(minidenticon(name)),
    [name]
  );

  return (
    <Link href={"/artists/" + id}>
      <div className="bg-transparent ring-2 hover:ring-4 cursor-pointer ring-purple-500 hover:bg-[#34344499] shadow-lg hover:shadow-purple-400 hover:shadow-xl h-fit p-4 text-white flex flex-col gap-4 rounded-2xl">
        <div className="relative w-full h-fit">
          <img
            className="w-full rounded-xl aspect-square"
            src={svgURI}
            alt="anh"
          />
        </div>
        <p className="flex justify-between items-center text-xs md:text-lg font-semibold">
          {name}
        </p>
        <div className="w-full flex flex-row justify-between items-center">
          <div className="flex justify-start flex-row items-center gap-4 ">
            <Avatar username={name} className="w-10 h-10 rounded-xl border" />
            <div className="flex flex-col items-start">
              <p className="text-[#8A8AA0] font-medium">Artist</p>
              <p className="font-semibold">{name}</p>
            </div>
          </div>
          <div className="flex flex-col items-end">
            <p className="text-[#8A8AA0] font-medium">Joined At</p>
            <p className="font-semibold">
              {dayjs(createdAt).locale("vn_VN").format("MM/YYYY")}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ArtistCard;
