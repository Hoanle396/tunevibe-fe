"use client";
import { useAppStore } from "@/store/app-store";

import PlayerInfo from "./PlayerInfo";
import PlayerControl from "./PlayerControl";

import styles from "./Player.module.scss";
const Player = () => {
  const music = useAppStore((state) => state.currentMusic);

  return (
    <div className={`w-auto sm:w-[calc(100%-276px)] left-2 sm:left-auto ${styles.player} `}>
      <PlayerControl music={music} />
      <PlayerInfo
        image={music ? music.avatar : "/vercel.svg"}
        imageAlt={music ? music.name : "not found"}
        name={music ? music.name : "Not found any music selected"}
        artist={music ? music.artist : "No One..."}
        musicId={music ? music.id : undefined}
      />
    </div>
  );
};

export default Player;
