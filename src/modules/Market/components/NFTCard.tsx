"use client"
import Avatar from "@/components/Avatar";
import { cutString } from "@/libs/function";
import { FCC } from "@/types";
import { useRouter } from "next/navigation";
import React from "react";
import { BiHeart } from "react-icons/bi";

const NFTCard: FCC<any> = ({
  image,
  name,
  owner,
  price,
  seller,
  tokenId,
}) => {
  const { push } = useRouter();
  return (
    <div
      onClick={() => push("/market/" + tokenId)}
      className="bg-[#34344499] ring-2 hover:ring-4 cursor-pointer ring-purple-500 hover:bg-[#343444] shadow-lg shadow-purple-400 hover:shadow-2xl hover:shadow-[#E05BFF] h-fit p-4 text-white flex flex-col gap-4 rounded-xl"
    >
      <div className="relative w-full h-fit">
        <img
          className="w-full rounded-xl aspect-square"
          src={image}
          alt="anh"
        />
        <div className="flex flex-row justify-end items-center absolute right-3 top-3 font-medium bg-black rounded-lg px-2 py-1 gap-1">
          <BiHeart /> <p>100</p>
        </div>
      </div>
      <p className="flex justify-between items-center text-xs md:text-lg font-semibold">
        {name}
        <span className="px-3 bg-[#5142FC] rounded-[10px] min-w-fit text-base uppercase">
          bsc
        </span>
      </p>
      <div className="w-full flex flex-row justify-between items-center">
        <div className="flex justify-start flex-row items-center gap-4 ">
          <Avatar username={seller} className="w-10 h-10 rounded-xl border" />
          <div className="flex flex-col items-start">
            <p className="text-[#8A8AA0] font-medium">Seller</p>
            <p className="font-semibold">{cutString(seller, 5, 3)}</p>
          </div>
        </div>
        <div className="flex flex-col items-end">
          <p className="text-[#8A8AA0] font-medium">Current Price</p>
          <p className="font-semibold">{price} BNB</p>
        </div>
      </div>
    </div>
  );
};

export default NFTCard;
