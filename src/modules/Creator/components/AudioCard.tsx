"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import { TbPlayerPause, TbPlayerPlay } from "react-icons/tb";

import Style from "./AudioCard.module.scss";
import { FCC } from "@/types";

type Props = {
  src: string;
};

const AudioCard: FCC<Props> = ({ children, src }) => {
  const [play, setPlay] = useState(false);
  const ref = useRef<HTMLAudioElement>(null);

  const playMusic = () => {
    if (play) {
      setPlay(false);
      ref?.current?.pause();
    } else {
      setPlay(true);
      ref?.current?.play();
    }
  };
  return (
    <div className="w-full h-fit">
      <div className={Style.audioCard_box}>
        <div className={Style.audioCard_box_player}>
          <Image
            src={"/images/musicwave.png"}
            alt="musice"
            width={200}
            height={100}
          />
          <audio ref={ref} className="hidden">
            <source src={src} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
          <div
            className={Style.audioCard_box_musicPlayer}
            onClick={() => playMusic()}
          >
            {play ? (
              <div className={Style.audioCard_box_musicPlayer_icon}>
                <TbPlayerPause />
              </div>
            ) : (
              <div className={Style.audioCard_box_musicPlayer_icon}>
                <TbPlayerPlay />
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center">{children}</div>
    </div>
  );
};

export default AudioCard;
