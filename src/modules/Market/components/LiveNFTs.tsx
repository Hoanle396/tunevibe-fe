"use client";
import { FCC } from "@/types";
import NFTCard from "./NFTCard";
import { useState } from "react";
import Pagination from "@/components/Pagination";

const LiveNFTs: FCC = () => {
  const [page, setPage] = useState(1);
  const nfts = [
    {
      price: "10.0",
      tokenId: 5,
      seller: "0x40f45dB1CeDfF6b6fe739Ce88Af44EB2F4d8E201",
      owner: "0x680079234C4A96a351382f36C90d2C44037b583f",
      image:
        "https://violet-worldwide-whitefish-444.mypinata.cloud/ipfs/QmezWfQz2srbDo3z47swVaVJPWqm9oqe9oemsERChoryUx?pinataGatewayToken=-jj3tvphLChD2CBx0vVECpl5S-mb0U1JugnT8ISz0lK_PJrxz5YeW6uH5VljUpJl",
      name: "Giay",
      description: "giay dep",
      createdAt: "2023-12-10T09:46:30.731Z",
    },
    {
      price: "1.0",
      tokenId: 6,
      seller: "0x8dB84906A6B06A135b899c94d160D50c86EBb9CE",
      owner: "0x680079234C4A96a351382f36C90d2C44037b583f",
      image:
        "https://violet-worldwide-whitefish-444.mypinata.cloud/ipfs/Qmd4NoDSB5ixvBcrc12LycBFc8RkZxXoPynhickJNjZMbs?pinataGatewayToken=-jj3tvphLChD2CBx0vVECpl5S-mb0U1JugnT8ISz0lK_PJrxz5YeW6uH5VljUpJl",
      name: "quần đen1",
      description: "ád",
      createdAt: "2023-12-12T15:42:25.235Z",
    },
    {
      price: "6.0",
      tokenId: 7,
      seller: "0x40f45dB1CeDfF6b6fe739Ce88Af44EB2F4d8E201",
      owner: "0x680079234C4A96a351382f36C90d2C44037b583f",
      image:
        "https://violet-worldwide-whitefish-444.mypinata.cloud/ipfs/QmWEELxLZdUr7J4mzTk8hNawoh2BvGNL5GiCTgJ1VtfoJL?pinataGatewayToken=-jj3tvphLChD2CBx0vVECpl5S-mb0U1JugnT8ISz0lK_PJrxz5YeW6uH5VljUpJl",
      name: "huy",
      description: "sds",
      createdAt: "2023-12-13T06:05:23.429Z",
    },
    {
      price: "11.0",
      tokenId: 8,
      seller: "0x8dB84906A6B06A135b899c94d160D50c86EBb9CE",
      owner: "0x680079234C4A96a351382f36C90d2C44037b583f",
      image:
        "https://violet-worldwide-whitefish-444.mypinata.cloud/ipfs/QmNdujRzm9YNofnLYG2WaKXquXKaMtvkqH2LfJ1ZNwqPzW?pinataGatewayToken=-jj3tvphLChD2CBx0vVECpl5S-mb0U1JugnT8ISz0lK_PJrxz5YeW6uH5VljUpJl",
      name: "quần đen1",
      description: "hhhh",
      createdAt: "2023-12-13T06:12:25.184Z",
    },
    {
      price: "1.25",
      tokenId: 9,
      seller: "0x40f45dB1CeDfF6b6fe739Ce88Af44EB2F4d8E201",
      owner: "0x680079234C4A96a351382f36C90d2C44037b583f",
      image:
        "https://violet-worldwide-whitefish-444.mypinata.cloud/ipfs/QmXZNheHqVoZxu3qe9m4ji7qjwABxNLmrUJAfiBV1ackTr?pinataGatewayToken=-jj3tvphLChD2CBx0vVECpl5S-mb0U1JugnT8ISz0lK_PJrxz5YeW6uH5VljUpJl",
      name: "1000Bonk",
      description: "long bonk",
      createdAt: "2023-12-13T18:34:27.213Z",
    },
    {
      price: "0.0001",
      tokenId: 10,
      seller: "0x40f45dB1CeDfF6b6fe739Ce88Af44EB2F4d8E201",
      owner: "0x680079234C4A96a351382f36C90d2C44037b583f",
      image:
        "https://violet-worldwide-whitefish-444.mypinata.cloud/ipfs/Qmd3suEXzREoZ8m1kMV5QqK4LEvSiQf7Tqo29mqa8qSHcJ?pinataGatewayToken=-jj3tvphLChD2CBx0vVECpl5S-mb0U1JugnT8ISz0lK_PJrxz5YeW6uH5VljUpJl",
      name: "T shirt",
      description: "áo thun nam",
      createdAt: "2023-12-14T05:44:30.689Z",
    },
    {
      price: "0.001",
      tokenId: 11,
      seller: "0x40f45dB1CeDfF6b6fe739Ce88Af44EB2F4d8E201",
      owner: "0x680079234C4A96a351382f36C90d2C44037b583f",
      image:
        "https://violet-worldwide-whitefish-444.mypinata.cloud/ipfs/QmaN353S2BuhGCNbJ8GFaU5CJHMrpTE3Dg2GvqSYmDuNkU?pinataGatewayToken=-jj3tvphLChD2CBx0vVECpl5S-mb0U1JugnT8ISz0lK_PJrxz5YeW6uH5VljUpJl",
      name: "diskies",
      description: "áo thun nam nhiều loại",
      createdAt: "2023-12-14T05:48:39.029Z",
    },
    {
      price: "0.004",
      tokenId: 12,
      seller: "0x40f45dB1CeDfF6b6fe739Ce88Af44EB2F4d8E201",
      owner: "0x680079234C4A96a351382f36C90d2C44037b583f",
      image:
        "https://violet-worldwide-whitefish-444.mypinata.cloud/ipfs/QmPDz59foxXRu75SaNTkW8sTLxzCTNnHbmWSoXr28U5ykT?pinataGatewayToken=-jj3tvphLChD2CBx0vVECpl5S-mb0U1JugnT8ISz0lK_PJrxz5YeW6uH5VljUpJl",
      name: "Áo thun trắng ",
      description: "mỏng, nhẹ nhàng",
      createdAt: "2023-12-14T06:21:44.296Z",
    },
    {
      price: "0.1",
      tokenId: 13,
      seller: "0x40f45dB1CeDfF6b6fe739Ce88Af44EB2F4d8E201",
      owner: "0x680079234C4A96a351382f36C90d2C44037b583f",
      image:
        "https://violet-worldwide-whitefish-444.mypinata.cloud/ipfs/QmZrowYVAyGco44KtSSBUc5C5yjbPa3QwGXVtjxqLQCFSF?pinataGatewayToken=-jj3tvphLChD2CBx0vVECpl5S-mb0U1JugnT8ISz0lK_PJrxz5YeW6uH5VljUpJl",
      name: "ao thun nam",
      description: "màu xanh",
      createdAt: "2023-12-14T06:26:20.213Z",
    },
    {
      price: "1.0",
      tokenId: 14,
      seller: "0x40f45dB1CeDfF6b6fe739Ce88Af44EB2F4d8E201",
      owner: "0x680079234C4A96a351382f36C90d2C44037b583f",
      image:
        "https://violet-worldwide-whitefish-444.mypinata.cloud/ipfs/QmcYpZp1cVeyLm4GiVWxwLUDz8HwBLd8nyP4n3fit3G2cx?pinataGatewayToken=-jj3tvphLChD2CBx0vVECpl5S-mb0U1JugnT8ISz0lK_PJrxz5YeW6uH5VljUpJl",
      name: "ao thun nam",
      description: "ddd",
      createdAt: "2023-12-14T06:28:30.430Z",
    },
    {
      price: "10.0",
      tokenId: 15,
      seller: "0x40f45dB1CeDfF6b6fe739Ce88Af44EB2F4d8E201",
      owner: "0x680079234C4A96a351382f36C90d2C44037b583f",
      image:
        "https://violet-worldwide-whitefish-444.mypinata.cloud/ipfs/QmWEELxLZdUr7J4mzTk8hNawoh2BvGNL5GiCTgJ1VtfoJL?pinataGatewayToken=-jj3tvphLChD2CBx0vVECpl5S-mb0U1JugnT8ISz0lK_PJrxz5YeW6uH5VljUpJl",
      name: "áo thun",
      description: "áp yhun",
      createdAt: "2023-12-14T07:21:40.872Z",
    },
    {
      price: "0.001",
      tokenId: 16,
      seller: "0x8435068Abdf9f9003c9CFb790F5446b9C4C0f3A6",
      owner: "0x680079234C4A96a351382f36C90d2C44037b583f",
      image:
        "https://violet-worldwide-whitefish-444.mypinata.cloud/ipfs/Qmds8BmpFwt6dfVbxnTS7jdzNwnK6pX4Wo6EYZhASVKafN?pinataGatewayToken=-jj3tvphLChD2CBx0vVECpl5S-mb0U1JugnT8ISz0lK_PJrxz5YeW6uH5VljUpJl",
      name: "rss",
      description: "nick :1 million power 200k",
      createdAt: "2023-12-29T00:21:34.043Z",
    },
  ];

  return (
    <div className="h-full w-full flex flex-col items-center py-16 gap-16">
      <div className="flex flex-row w-full justify-between text-white">
        <p className="text-4xl font-bold">Live Auctions</p>
        <p className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#E250E5] to-[#4B50E6]">
          EXPLORE MORE
        </p>
      </div>
      <div className="w-full grid grid-flow-row xl:gap-12 gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {!!nfts && nfts.map((v, i: number) => <NFTCard {...v} key={i} />)}
      </div>

      <Pagination
        defaultCurrent={1}
        pageSize={10}
        hideOnSinglePage
        onChange={(newPage) => setPage(newPage)}
        total={nfts.length ?? 0}
        showSizeChanger={false}
      />
    </div>
  );
};

export default LiveNFTs;
