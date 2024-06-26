import Image from "next/image";
import Link from "next/link";

import AddToPlayList from "@/components/helper/AddToPlayList";
import FavoriteProvider from "@/components/providers/FavoriteProvider";
import useAudioDuration from "@/hooks/use-audio-duration";
import { useAppStore } from "@/store/app-store";

import { CiCircleMinus } from "react-icons/ci";
import { MdPauseCircle, MdPlayCircle } from "react-icons/md";
import styles from "./Item.module.scss";
import { IPFS } from "@/libs/function";

const Item = ({
  musicData,
  index,
  isDragging,
  inPlaylist,
  onMusicClick,
}: {
  musicData: Music;
  index: number;
  isDragging?: boolean;
  inPlaylist?: boolean;
  onMusicClick: (type: "play" | "remove", music: Music) => void;
}) => {
  const [music, isPlaying, setIsPlaying] = useAppStore((state) => [
    state.currentMusic,
    state.isPlaying,
    state.setPlayingState,
  ]);

  const { durationSeconds, formattedDuration, output } = useAudioDuration(
    IPFS(musicData.hash)
  );
  const number = index < 10 ? `0${index}` : `${index}`;
  const currentMusic = music && music.id === musicData.id;

  const musicPlayClickHandler = () => {
    if (currentMusic) {
      if (isPlaying) {
        setIsPlaying(false);
      } else {
        setIsPlaying(true);
      }
    } else {
      onMusicClick("play", musicData);
    }
  };

  const removeFromPlaylistClickHandler = () => {
    onMusicClick("remove", musicData);
  };

  return (
    <li style={{ listStyle: "none" }}>
      {output}
      <div className={`${styles.link} ${isDragging ? styles.dragging : ""}`}>
        <span className={styles.number}>{number}</span>
        <Image
          className={styles.img}
          src={IPFS(musicData.cover)}
          width={90}
          height={70}
          loading="lazy"
          alt={`${musicData.name} music cover image`}
        />

        <Link href="/">
          <h5 className={styles.title}>{musicData.name}</h5>
          <h6 className={styles.text}>{musicData.album.artist.name}</h6>
        </Link>

        <span className={styles.time}>
          {durationSeconds ? `${formattedDuration} '` : "00:00 '"}
        </span>
        <button
          className={`btn ${styles.button} ${styles.play} ${
            currentMusic ? styles.active : ""
          }`}
          onClick={musicPlayClickHandler}
        >
          {currentMusic && isPlaying ? (
            <MdPauseCircle className={styles.icon} />
          ) : (
            <MdPlayCircle className={styles.icon} />
          )}
        </button>

        <FavoriteProvider
          className={`btn ${styles.button} ${styles.favorite}`}
          musicId={musicData.id}
          activeClass={styles.active}
        ></FavoriteProvider>
        {!inPlaylist ? (
          <AddToPlayList
            musicId={musicData.id}
            className={`${styles.button} ${styles.playlist}`}
          />
        ) : (
          <button
            onClick={removeFromPlaylistClickHandler}
            className={`btn ${styles.playlist} ${styles.remove}`}
          >
            <CiCircleMinus />
          </button>
        )}
      </div>
    </li>
  );
};

export default Item;
