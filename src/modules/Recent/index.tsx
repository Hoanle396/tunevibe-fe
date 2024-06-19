"use client";
import { getStorage } from "@/libs/function";
import styles from "./components/Index.module.scss";
import Mylib from "./components/Mylib";
type Props = {};

const Recent = (props: Props) => {
  const recent = getStorage("recent", "[]");
  const data = JSON.parse(recent) ?? [];
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <Mylib musics={data ?? []} />
      </div>
    </section>
  );
};

export default Recent;
