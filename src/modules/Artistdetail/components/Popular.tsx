"use client";
import { useAppStore } from "@/store/app-store";

import MainCard from "@/components/ui/main-card/MainCard";

import Item from "./Item";
import styles from "./Popular.module.scss";

const PLAY_LIST_ID = "popular";

const Popular = ({ musics }: { musics: Music[] }) => {
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
    <MainCard title="Popular">
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

export default Popular;
