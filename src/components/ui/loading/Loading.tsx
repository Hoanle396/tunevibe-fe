import styles from "./Loading.module.scss";

const Loading = () => {
  return (
    <div className={styles.backdrop}>
      <img src="/searching-duck.gif" className="w-fit min-w-48 h-auto" alt="" />
      <div className={styles.falling}></div>
    </div>
  );
};

export default Loading;
