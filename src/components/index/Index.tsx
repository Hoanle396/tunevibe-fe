import IndexTopChart from "./top-chart/IndexTopChart";
import IndexTrends from "./trends/IndexTrends";

import styles from "./Index.module.scss";

const Index = ({
  trends = [],
  topMusics = [],
  hiddenTrend = false,
}: {
  trends?: Music[];
  topMusics?: Music[];
  hiddenTrend?: boolean;
}) => {
  return (
    <section className={styles.section}>
      {!hiddenTrend && <IndexTrends trendsInfo={trends} />}
      <div className={styles.content}>
        <IndexTopChart musics={topMusics} />
      </div>
    </section>
  );
};

export default Index;
