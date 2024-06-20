"use client";
import { useAppStore } from "@/store/app-store";

import MainCard from "@/components/ui/main-card/MainCard";

import Item from "./Item";
import styles from "./Mylib.module.scss";
import { Button } from "antd";
import { RiRefreshLine } from "react-icons/ri";

const PLAY_LIST_ID = "my-library";

const Mylib = ({
  musics,
  refetch,
}: {
  musics: Music[];
  refetch: () => void;
}) => {
  const [setMusic, setPlayList, playlistId] = useAppStore((state) => [
    state.setMusic,
    state.setPlaylist,
    state.playListId,
  ]);

  const playMusicClickHandler = (
    type: "play" | "remove" = "play",
    music: Music
  ) => {
    setMusic(music);
    if (playlistId !== PLAY_LIST_ID) {
      setPlayList(PLAY_LIST_ID, musics);
    }
  };

  return (
    <MainCard
      title="My library"
      header={
        <Button icon={<RiRefreshLine />} onClick={() => refetch()}></Button>
      }
    >
      <ul className={styles.list}>
        {musics.map((music, index) => (
          <Item
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

export default Mylib;
