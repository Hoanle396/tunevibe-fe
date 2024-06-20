"use client";
import { useAppStore } from "@/store/app-store";

import MainCard from "@/components/ui/main-card/MainCard";
import IndexTopChartItem from "./IndexTopChartItem";

import styles from "./IndexTopChart.module.scss";
import { Result } from "@/apis/transcript";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "@/constants/constanst";

const PLAY_LIST_ID = "recommend-musics-playlist";

const Recommend = ({ musics }: { musics: Result }) => {
  const [data, setData] = useState<Music[]>([]);
  const [setMusic, setPlayList, playlistId] = useAppStore((state) => [
    state.setMusic,
    state.setPlaylist,
    state.playListId,
  ]);

  useEffect(() => {
    const getData = async () => {
      const res = await Promise.all(
        musics.data.map(async (music) => {
          const { data } = await axios.get(`${API_URL}music/${music.musicId}`);
          return data;
        })
      );
      setData(res);
    };
    getData();
  }, [musics.data]);

  const playMusicClickHandler = (
    type: "play" | "remove" = "play",
    music: Music
  ) => {
    setMusic(music);
    if (playlistId !== PLAY_LIST_ID) {
      setPlayList(PLAY_LIST_ID, data);
    }
  };

  return (
    <MainCard title="Recommend for you" link="/market" text="See all">
      <ul className={styles.list}>
        {data.map((music, index) => (
          <IndexTopChartItem
            key={music.id}
            musicData={music}
            index={index + 1}
            onMusicClick={playMusicClickHandler}
          />
        ))}
      </ul>
    </MainCard>
  );
};

export default Recommend;
