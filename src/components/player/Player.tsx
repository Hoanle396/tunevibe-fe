"use client";
import { useAppStore } from "@/store/app-store";

import PlayerControl from "./PlayerControl";
import PlayerInfo from "./PlayerInfo";

import { Rate } from "antd";
import styles from "./Player.module.scss";
import DownLoad from "../Button/DownLoad";

const Player = () => {
  const music = useAppStore((state) => state.currentMusic);

  return (
    <div
      className={`w-auto sm:w-[calc(100%-276px)] left-2 sm:left-auto ${styles.player} `}
    >
      <PlayerControl music={music} />
      {music && (
        <Rate
          allowHalf
          allowClear={false}
          defaultValue={2.5}
          // onChange={(value) => {}}
        />
      )}
      {music && <DownLoad music={music} />}
      <PlayerInfo
        image={music?.avatar || undefined}
        imageAlt={music ? music.name : "not found"}
        name={music ? music.name : "Not found any music selected"}
        artist={music ? music.artist : "No One..."}
        musicId={music ? music.id : undefined}
      />
    </div>
  );
};

export default Player;
