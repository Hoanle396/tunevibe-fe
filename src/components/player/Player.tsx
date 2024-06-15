"use client";
import { useAppStore } from "@/store/app-store";

import PlayerControl from "./PlayerControl";
import PlayerInfo from "./PlayerInfo";

import styles from "./Player.module.scss";
import DownLoad from "../Button/DownLoad";
import Rate from "../Rate";
import { useAuthStore } from "@/store/auth-store";
import { IPFS } from "@/libs/function";

const Player = () => {
  const music = useAppStore((state) => state.currentMusic);
  const auth = useAuthStore((state) => state.token);

  return (
    <div
      className={`w-auto sm:w-[calc(100%-276px)] left-2 sm:left-auto ${styles.player} `}
    >
      <PlayerControl music={music} />
      {auth && music && <Rate music={music} />}
      {auth && music && <DownLoad music={music} />}
      <PlayerInfo
        image={music?.cover ? IPFS(music.cover) : undefined}
        imageAlt={music ? music.name : "not found"}
        name={music ? music.name : "Not found any music selected"}
        artist={music ? music.album.artist.name : "No One..."}
        musicId={music ? music.id : undefined}
      />
    </div>
  );
};

export default Player;
