import Image from "next/image";

import styles from "./PlayerInfoPlayListItem.module.scss";
import { IPFS } from "@/libs/function";

const PlayerInfoPlayListItem = ({
  musicData,
  className,
}: {
  musicData: Music;
  className?: string;
}) => {
  const classes = `${styles.item} ${className ? className : ""}`;

  return (
    <div className={classes}>
      <Image
        className={styles.img}
        src={IPFS(musicData.cover)}
        width={50}
        height={50}
        loading="lazy"
        alt={`${musicData.name} cover image`}
      />
      <div>
        <span className={styles.title}>{musicData.name}</span>
        <span className={styles.text}>{musicData.album.artist.name}</span>
      </div>
    </div>
  );
};

export default PlayerInfoPlayListItem;
