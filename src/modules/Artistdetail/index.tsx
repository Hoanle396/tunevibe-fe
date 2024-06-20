"use client";
import React, { useMemo } from "react";
import Header from "./components/Header";
import { useAppStore } from "@/store/app-store";
import Popular from "./components/Popular";
import Albums from "./components/Albums";
import { minidenticon } from "minidenticons";
import { useQuery } from "@apollo/client";
import { GET_ARTIST, GET_MUSIC_BY_ARTIST } from "@/@apollo/queries/artist";
import { useParams } from "next/navigation";
import dayjs from "dayjs";

const ArtistDetail = () => {
  const { id } = useParams();

  const { data } = useQuery(GET_ARTIST, {
    variables: { id },
  });

  const { data: musics } = useQuery(GET_MUSIC_BY_ARTIST, {
    variables: { id },
  });
  const svgURI = useMemo(
    () =>
      "data:image/svg+xml;utf8," +
      encodeURIComponent(minidenticon(String(data?.getArtist.name))),
    [data?.getArtist.name]
  );

  return (
    <div className="pb-28">
      {data?.getArtist && (
        <Header
          artist={{
            id: Number(id),
            name: data?.getArtist?.name ?? "",
            avatar: svgURI,
            musicCount: 63,
            musics: [],
            createdAt: dayjs(data?.getArtist?.createdAt)
              .locale("vn_VN")
              .format("MM/YYYY"),
          }}
        />
      )}
      {musics?.getMusicByArtist && <Popular musics={musics?.getMusicByArtist ?? []} />}
      {data?.getArtist && <Albums albums={data?.getArtist?.albums ?? []} />}
    </div>
  );
};

export default ArtistDetail;
