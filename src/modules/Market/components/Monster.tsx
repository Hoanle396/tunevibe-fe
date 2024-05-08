import Button from "@/components/Button";
import { FCC } from "@/types";
import Link from "next/link";
import React from "react";
import { BiPencil } from "react-icons/bi";
import { FaLightbulb } from "react-icons/fa";

type Props = {};

const Monster: FCC = (props: Props) => {
  return (
    <div>
      <div className="h-full w-full min-h-[calc(100vh-128px)] items-center pt-16 flex justify-between">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 xl:col-span-5 items-center lg:items-start">
            <div className="flex flex-col w-full xl:w-fit items-center gap-6">
              <div className="text-white text-center font-bold text-[42px] xl:text-[71px] uppercase">
                Discover, find, <br className="hidden xl:block" />
                <div
                  className="text-transparent bg-[linear-gradient(180deg,rgba(226,80,229,0.86)0%,#4B50E6),linear-gradient(0deg,#FFFFFF,#FFFFFF)] text-[#3D054A]"
                  style={{
                    WebkitTextStroke: "1px transparent",
                    WebkitBackgroundClip: "text",
                  }}
                >
                  Sell extraordinary
                </div>
                Monster NFTs
              </div>
              <p className="text-[23px] text-white text-center uppercase">
                Marketplace for monster character cllections non fungible token
                NFTs
              </p>
              <div className="flex flex-col gap-6">
                <div className="flex flex-row items-center gap-4">
                  <Link href="/nfts">
                    <Button className="text-lg px-4">
                      <div className="flex gap-2 justify-center items-center">
                        <FaLightbulb width={28} height={28} />
                        Explore
                      </div>
                    </Button>
                  </Link>
                  <Link href="/creator">
                    <Button className="text-lg px-4">
                      <div className="flex gap-2 justify-center items-center">
                        <BiPencil width={28} height={28} />
                        Create
                      </div>
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className=" flex col-span-12 xl:col-span-7 items-center justify-center relative">
            <img
              src="/assets/hero/nft.png"
              className="animate-bounce-img z-50"
              alt="bear"
            />
            <div className="absolute top-60 right-4 animate-bounce2 rounded-full w-10 h-10  bg-[linear-gradient(180deg,rgba(226,80,229,0.86)0%,#4B50E6),linear-gradient(0deg,#FFFFFF,#FFFFFF)]"></div>
            <div className="absolute top-10 right-80 animate-bounce3 rounded-full w-10 h-10  bg-[linear-gradient(180deg,rgba(226,80,229,0.86)0%,#4B50E6),linear-gradient(0deg,#FFFFFF,#FFFFFF)]"></div>
            <div className="absolute top-40 left-28 animate-bounce3 rounded-full w-20 h-20  bg-[linear-gradient(180deg,rgba(226,80,229,0.86)0%,#4B50E6),linear-gradient(0deg,#FFFFFF,#FFFFFF)]"></div>
            <div className="absolute top-100 right-80 animate-bounce3 rounded-full w-10 h-10  bg-[linear-gradient(180deg,rgba(226,80,229,0.86)0%,#4B50E6),linear-gradient(0deg,#FFFFFF,#FFFFFF)]"></div>
            <div className="absolute -top-20 left-80 animate-bounce4 rounded-full w-24 h-24 bg-[linear-gradient(180deg,rgba(226,80,229,0.86)0%,#4B50E6),linear-gradient(0deg,#FFFFFF,#FFFFFF)]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Monster;