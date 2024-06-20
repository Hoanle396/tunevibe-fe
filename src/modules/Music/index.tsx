"use client";

import { GET_MUSIC } from "@/@apollo/queries/music";
import { useRecommend } from "@/apis/transcript";
import Index from "@/components/index/Index";
import { useAuthStore } from "@/store/auth-store";
import { useQuery as useApollo } from "@apollo/client";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
const Music = ({}) => {
  const [data, setData] = useState<MusicList | undefined>();
  const { id } = useAuthStore();
  const { get } = useSearchParams();

  const { data: recommend } = useRecommend(String(id), {
    queryKey: ["recommend", String(id)],
  });

  const { refetch } = useApollo(GET_MUSIC, {
    onCompleted: (data) => {
      setData(data.getMusics);
    },
    variables: {
      page: 1,
      limit: 10,
      search: get("search") != null ? get("search") : undefined,
    },
  });

  return (
    <Index
      trends={data?.data || []}
      topMusics={data?.data || []}
      recommend={recommend}
    />
  );
};

export default Music;
