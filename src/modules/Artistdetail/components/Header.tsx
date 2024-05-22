import Image from "next/image";

import FavoriteProvider from "@/components/providers/FavoriteProvider";
import useNumber from "@/hooks/use-number";
import MainButton from "@/components/ui/button/MainButton";

import styles from "./Header.module.scss";

const Header = ({ artist }: { artist: Artist}) => {


  return (
    <div className={styles.slide}>
      <Image
        className={styles.img}
        src={artist.avatar}
        width={1920}
        height={1080}
        loading="eager"
        alt={`${artist.name} music cover image`}
      />
      <div className={styles.body}>
        <span className={styles.title}>Artist verified</span>
        <span className={styles.name}>{artist.name}</span>
        <div className={styles.wrapper}>
          <span className={styles.artist}>{artist.createdAt}</span>
          <span className={styles.played}>{artist.musicCount} media</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
