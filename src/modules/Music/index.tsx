"use client";

import { GET_MUSIC } from "@/@apollo/queries/music";
import { useRecommend } from "@/apis/transcript";
import Index from "@/components/index/Index";
import { useAuthStore } from "@/store/auth-store";
import { useQuery as useApollo } from "@apollo/client";
import { useEffect, useState } from "react";
const Music = ({}) => {
  const [data, setData] = useState<MusicList | undefined>();
  const { id } = useAuthStore();

  const {data:recommend} = useRecommend(String(id), {
    queryKey: ["recommend", String(id)],
  });

  useEffect(() => {
    if (!recommend) return;
    (async () => {
      await Promise.allSettled(recommend?.data.map((item) => { }))
    })()
  },[recommend])

  const { refetch } = useApollo(GET_MUSIC, {
    onCompleted: (data) => {
      setData(data.getMusics);
    },
    variables: {
      page: 1,
      limit: 10,
    },
  });

  return <Index trends={data?.data || []} topMusics={data?.data || []} />;
};

export default Music;
