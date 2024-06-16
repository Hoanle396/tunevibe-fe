"use client";
import { GET_TRANSACTION } from "@/@apollo/queries/music";
import { useQuery } from "@apollo/client";
import { useState } from "react";
import styles from "./components/Index.module.scss";
import Mylib from "./components/Mylib";
type Props = {};

const MyLibrary = (props: Props) => {
  const [data, setData] = useState<TransactionList | undefined>();
  const { refetch } = useQuery(GET_TRANSACTION, {
    onCompleted: (data) => {
      setData(data.getTransaction);
    },
  });
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <Mylib musics={data?.data.map((tr) => tr.music) ?? []} />
      </div>
    </section>
  );
};

export default MyLibrary;
