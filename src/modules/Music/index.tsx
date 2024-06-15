"use client";

import { GET_MUSIC } from "@/@apollo/queries/music";
import Index from "@/components/index/Index";
import { useQuery } from "@apollo/client";
import { useState } from "react";
const Music = ({}) => {
  const [data, setData] = useState<MusicList | undefined>();
  const { refetch } = useQuery(GET_MUSIC, {
    onCompleted: (data) => {
      setData(data.getMusics);
    },
    variables: {
      page: 1,
      limit: 10,
    },
  });
  return (
    <Index
      trends={data?.data || []}
      topMusics={data?.data || []}
    />
  );
};

export default Music;
