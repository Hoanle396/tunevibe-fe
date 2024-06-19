"use client";
import { GET_ARTISTS } from "@/@apollo/queries/artist";
import Pagination from "@/components/Pagination";
import { useQuery } from "@apollo/client";
import ArtistCard from "./components/ArtistCard";

type Props = {};

const Artists = (props: Props) => {
  const { data } = useQuery(GET_ARTISTS);

  return (
    <div className="h-full w-full flex flex-col items-center gap-10 pb-32">
      <div className="flex flex-row w-full justify-between text-white">
        <p className="text-4xl font-bold">Top Artist</p>
      </div>
      <div className=" container w-full grid grid-flow-row xl:gap-12 gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {!!data &&
          data?.getArtists.data.map((v: any, i: number) => (
            <ArtistCard {...v} key={i} />
          ))}
      </div>
      <Pagination
        defaultCurrent={1}
        pageSize={10}
        hideOnSinglePage
        total={12}
        showSizeChanger={false}
      />
    </div>
  );
};

export default Artists;
