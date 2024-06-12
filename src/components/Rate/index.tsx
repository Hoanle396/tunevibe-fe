"use client";
import { FCC } from "@/types";
import React from "react";
import { Rate as RateAntd } from "antd";
import { useMutation, useQuery } from "@apollo/client";
import { GET_VOTE, VOTE } from "@/@apollo/queries/vote";
type Props = {
  music: Music;
};

const Rate: FCC<Props> = ({ music }) => {
  const { data, refetch } = useQuery(GET_VOTE, {
    variables: {
      input: {
        musicId: music.id,
      },
    },
    skip: !music.id,
  });

  const [execute] = useMutation(VOTE, { onCompleted: () => refetch() });

  return (
    <RateAntd
      allowHalf
      allowClear={false}
      value={data?.getVote?.rate ?? 0}
      onChange={(value) =>
        execute({
          variables: {
            input: {
              musicId: music.id,
              rate: value ?? 0,
            },
          },
        })
      }
    />
  );
};

export default Rate;
