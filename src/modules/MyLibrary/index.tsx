import { FCC } from "@/types";
import styles from "./components/Index.module.scss";
import Mylib from "./components/Mylib";
type Props = {};

const MyLibrary: FCC = (props: Props) => {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <Mylib musics={[
        {
          id: 121,
          name: "Without Me",
          src: "/musics/trends/without me.mp3",
          artist: "Halsey",
          coverImage: "/images/music/cover.webp",
          avatar: "/images/music/without-me.webp",
          playedCount: 63000000,
        },
        {
          id: 122,
          name: "7 rings",
          src: "/musics/trends/7 rings.mp3",
          artist: "Ariana Grande",
          coverImage: "/images/music/cover-2.webp",
          avatar: "/images/music/7-rings.webp",
          playedCount: 73000000,
        },
        {
          id: 123,
          name: "Only Human",
          src: "/musics/trends/only human.mp3",
          artist: "Jonas Brothers",
          coverImage: "/images/music/cover-3.webp",
          avatar: "/images/music/only-human.webp",
          playedCount: 25000000,
        },
        {
          id: 124,
          name: "Attention",
          src: "/musics/trends/attention.mp3",
          artist: "Charlie Puth",
          coverImage: "/images/music/cover-4.webp",
          avatar: "/images/music/attention.webp",
          playedCount: 110000000,
        },
      ]}/>
      </div>
    </section>
  );
};

export default MyLibrary;
