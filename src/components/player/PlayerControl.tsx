import useFormatSecond from "@/hooks/use-format-second";
import { useAppStore } from "@/store/app-store";
import type { MenuProps } from "antd";
import { Dropdown, Slider, message } from "antd";
import { useEffect, useRef, useState } from "react";

import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import { BsRepeat, BsRepeat1 } from "react-icons/bs";
import {
  CiShuffle,
  CiVolume,
  CiVolumeHigh,
  CiVolumeMute,
} from "react-icons/ci";
import { MdPauseCircle, MdPlayCircle } from "react-icons/md";
import styles from "./PlayerControl.module.scss";

const PlayerControl = ({ music }: { music: Music | null }) => {
  const [
    currentTime,
    setCurrentTime,
    isPlaying,
    setIsPlaying,
    volume,
    setVolume,
    changeMusic,
    repeatType,
    setRepeat,
    disableKeydown,
  ] = useAppStore((state) => [
    state.currentMusicTime,
    state.setCurrentMusicTime,
    state.isPlaying,
    state.setPlayingState,
    state.volume,
    state.setVolume,
    state.changeMusic,
    state.repeatType,
    state.setRepeatType,
    state.disableKeyDown,
  ]);
  const [duration, setDuration] = useState<number>(0);
  const [repeatOnce, setRepeatOnce] = useState<boolean>(false);
  const ref = useRef<HTMLAudioElement>(null);

  const [messageApi, contextHolder] = message.useMessage();

  const changeVolumeHandler = (volumeValue: number) => {
    setVolume(volumeValue);
    if (ref.current) ref.current.volume = volumeValue;
  };

  const menuItems: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <div style={{ height: "150px", padding: "10px 0" }}>
          <Slider
            vertical
            min={0}
            value={volume}
            max={1}
            tipFormatter={(value) => `${value ?? 1 * 100}`}
            step={0.05}
            onChange={changeVolumeHandler}
          />
        </div>
      ),
    },
  ];

  const formatedDuration = useFormatSecond(duration);

  useEffect(() => {
    const handler = (e: KeyboardEventInit) => {
      const keyPressedCode: string = e.code ? e.code.toLowerCase() : "";

      const event = e as any;
      if (!["f5", "keyr", "keyj"].includes(keyPressedCode))
        event.preventDefault();

      if (keyPressedCode === "space") {
        if (isPlaying) {
          setIsPlaying(false);
        } else {
          setIsPlaying(true);
        }
      } else if (keyPressedCode === "arrowleft") {
        const newCurrentTime = currentTime - 5;

        if (newCurrentTime < 0) {
          changeMusic("prev");
        } else {
          if (ref.current) ref.current.currentTime = newCurrentTime;
          setCurrentTime(newCurrentTime);
        }
      } else if (keyPressedCode === "arrowright") {
        const newCurrentTime = currentTime + 5;

        if (newCurrentTime > duration) {
          changeMusic("next", true);
        } else {
          if (ref.current) ref.current.currentTime = newCurrentTime;
          setCurrentTime(newCurrentTime);
        }
      } else if (keyPressedCode === "arrowup") {
        const newVal = volume + 0.2 > 1 ? 1 : volume + 0.2;
        if (ref.current) ref.current.volume = newVal;
        setVolume(newVal);
      } else if (keyPressedCode === "arrowdown") {
        const newVal = volume - 0.2 < 0 ? 0 : volume - 0.2;
        if (ref.current) ref.current.volume = newVal;
        setVolume(newVal);
      }
    };

    if (!disableKeydown) {
      document.addEventListener("keydown", handler);
    }

    return () => {
      document.removeEventListener("keydown", handler);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPlaying, currentTime, volume, disableKeydown]);

  useEffect(() => {
    if (music) {
      if (ref.current) {
        ref.current.src = music.src;
        ref.current.currentTime = currentTime;
        ref.current.volume = volume;

        if (!isPlaying) {
          ref.current.pause();
        } else {
          ref.current.play();
        }
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [music, isPlaying, volume]);

  const musicTimeUpdateHandler = () => {
    if (ref.current && ref.current.currentTime === duration)
      changeMusic("next", true);
    else setCurrentTime(ref.current ? ref.current.currentTime : 0);
  };

  const playClickHandler = () => {
    if (music) {
      if (!isPlaying) setIsPlaying(true);
      else setIsPlaying(false);
    }
  };

  const musicTimeChangeHandler = (time: number) => {
    if (ref.current) ref.current.currentTime = time;
  };

  const metadataLoadHandler = () => {
    if (ref.current) setDuration(ref.current.duration);
  };

  const repeatClickHandler = () => {
    if (repeatType === "shuffle") {
      messageApi.open({
        type: "error",
        content: "You must turn off shuffle repeat",
      });
      return;
    }

    let content: string = "Repeat Musics turned off";
    if (repeatOnce === null) {
      setRepeat("all");
      setRepeatOnce(false);
      content = "Repeat all Musics turned on";
    } else if (repeatOnce) {
      setRepeat("off");
      setRepeatOnce(false);
    } else {
      setRepeat("once");
      setRepeatOnce(true);
      content = "Repeat one Music turned on";
    }

    messageApi.open({
      type: "success",
      content,
    });
  };

  const shuffleRepeatClickHandler = () => {
    let content: string = "Suffle repeat truned on";
    if (repeatType === "shuffle") {
      if (repeatOnce === null) {
        setRepeat("off");
        content = "Repeat Musics turned off";
      } else if (repeatOnce) {
        setRepeat("once");
        content = "Repeat one Music turned on";
      } else {
        setRepeat("all");
        content = "Repeat all Musics turned on";
      }
    } else {
      setRepeat("shuffle");
    }

    messageApi.open({
      type: "success",
      content,
    });
  };

  const previousMusicClickHandler = () => {
    if (currentTime < 3) {
      changeMusic("prev");
    } else {
      if (ref.current) ref.current.currentTime = 0;
      setCurrentTime(0);
    }
  };

  const nextMusicClickHandler = () => changeMusic("next", false);

  return (
    <div className={styles["control-wrapper"]}>
      <div className={styles.control}>
        <div className={styles.button} onClick={repeatClickHandler}>
          {repeatOnce !== null && repeatOnce ? (
            <BsRepeat1
              className={`${styles.icon} ${
                repeatType !== "shuffle" && repeatType !== "off"
                  ? styles.active
                  : ""
              }`}
            />
          ) : (
            <BsRepeat
              className={`${styles.icon} ${
                repeatType !== "shuffle" && repeatType !== "off"
                  ? styles.active
                  : ""
              }`}
            />
          )}
        </div>
        <div className={styles.button} onClick={previousMusicClickHandler}>
          <BiLeftArrow className={styles.icon} />
        </div>
        <div
          className={`${styles.button} ${styles.main}`}
          onClick={playClickHandler}
        >
          {!isPlaying ? (
            <MdPlayCircle className={styles.icon} />
          ) : (
            <MdPauseCircle className={styles.icon} />
          )}
        </div>
        <div className={styles.button} onClick={nextMusicClickHandler}>
          <BiRightArrow className={styles.icon} />
        </div>
        <div className={styles.button} onClick={shuffleRepeatClickHandler}>
          <CiShuffle
            className={`${styles.icon} ${
              repeatType === "shuffle" ? styles.active : ""
            }`}
          />
        </div>
      </div>

      <div className={styles.audio}>
        {music && (
          <audio
            ref={ref}
            onTimeUpdate={musicTimeUpdateHandler}
            onLoadedMetadata={metadataLoadHandler}
          >
            <source src={music.src} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        )}
        <div className={styles["slider-wrapper"]}>
          <span className={`${styles.time} ${styles.current}`}>
            {useFormatSecond(currentTime)}
          </span>
          <Slider
            value={currentTime}
            onChange={musicTimeChangeHandler}
            max={duration}
            tooltip={{ open: false }}
          />
          <span className={styles.time}>
            {formatedDuration ? formatedDuration : "00:00"}
          </span>

          <Dropdown placement="top" menu={{ items: menuItems }}>
            <span className={styles.button}>
              {volume === 0 ? (
                <CiVolumeMute className={styles.icon} />
              ) : volume <= 0.65 ? (
                <CiVolume className={styles.icon} />
              ) : (
                <CiVolumeHigh className={styles.icon} />
              )}
            </span>
          </Dropdown>
        </div>
      </div>
      {contextHolder}
    </div>
  );
};

export default PlayerControl;
