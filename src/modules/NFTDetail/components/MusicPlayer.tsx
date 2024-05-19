"use client";
import { FCC } from "@/types";
import React, { useRef, useState } from "react";
import {
  TbPlayerPause,
  TbPlayerPlay,
  TbRewindBackward10,
  TbRewindForward10,
} from "react-icons/tb";
import styles from "./MusicPlayer.module.scss";
type Props = {
  src: string;
};

const MusicPlayer: FCC<Props> = ({ src }) => {
  const [play, setPlay] = useState(false);
  const ref = useRef<HTMLAudioElement>(null);

  const playMusic = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (play) {
      setPlay(false);
      ref?.current?.pause();
    } else {
      setPlay(true);
      ref?.current?.play();
    }
  };
  const onUpdateTime = (e: any) => {
    if (ref.current?.currentTime === ref.current?.duration) {
      setPlay(false);
    }
  };

  const onNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (ref.current?.currentTime) ref.current.currentTime += 10;
  };
  const onPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (ref.current?.currentTime) ref.current.currentTime -= 10;
  };
  return (
    <div
      className={`absolute z-10 bottom-0 w-full flex justify-center items-center gap-4 ${styles.player}`}
    >
      <audio ref={ref} className="hidden" onTimeUpdateCapture={onUpdateTime}>
        <source src={src} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <div
        onClick={onPrev}
        className="p-2 h-fit flex items-center rounded-full text-white  text-xl cursor-pointer hover:text-primary  hover:bg-slate-300"
      >
        <TbRewindBackward10 />
      </div>
      <div className="p-2 items-center" onClick={(e) => playMusic(e)}>
        {play ? (
          <div className="p-4 flex items-center rounded-full text-primary bg-slate-300 text-3xl cursor-pointer">
            <TbPlayerPause />
          </div>
        ) : (
          <div className="p-4 flex items-center rounded-full text-primary bg-slate-300 text-3xl cursor-pointer">
            <TbPlayerPlay />
          </div>
        )}
      </div>
      <div
        onClick={onNext}
        className="p-2 h-fit flex items-center rounded-full text-white  text-xl cursor-pointer hover:text-primary hover:bg-slate-300"
      >
        <TbRewindForward10 />
      </div>
    </div>
  );
};

export default MusicPlayer;
