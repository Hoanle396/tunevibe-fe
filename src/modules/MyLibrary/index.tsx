import styles from "./components/Index.module.scss";
import Mylib from "./components/Mylib";
type Props = {};

const MyLibrary = (props: Props) => {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <Mylib musics={[]} />
      </div>
    </section>
  );
};

export default MyLibrary;
