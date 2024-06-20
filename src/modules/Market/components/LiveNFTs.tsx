"use client";
import { FCC } from "@/types";
import NFTCard from "./NFTCard";
import { useState } from "react";
import Pagination from "@/components/Pagination";
import { useQuery } from "@apollo/client";
import { GET_MUSIC } from "@/@apollo/queries/music";

const LiveNFTs: FCC = () => {
  const [page, setPage] = useState(1);
  const { data } = useQuery(GET_MUSIC, {
    variables: {
      page,
      limit: 10,
    },
  });

  return (
    <div className="h-full w-full flex flex-col items-center py-16 gap-16">
      <div className="flex flex-row w-full justify-between text-white">
        <p className="text-4xl font-bold">Live Auctions</p>
        <p className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#E250E5] to-[#4B50E6]">
          EXPLORE MORE
        </p>
      </div>
      <div className="w-full grid grid-flow-row xl:gap-12 gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {!!data &&
          (data?.getMusics?.data ?? []).map((v:any, i: number) => (
            <NFTCard {...v} key={i} />
          ))}
      </div>

      <Pagination
        defaultCurrent={1}
        pageSize={10}
        hideOnSinglePage
        onChange={(newPage) => setPage(newPage)}
        total={data?.getMusics?.meta.totalItems.length ?? 0}
        showSizeChanger={false}
      />
    </div>
  );
};

export default LiveNFTs;
