import IndexTopChart from "./top-chart/IndexTopChart";
import IndexTrends from "./trends/IndexTrends";

import styles from "./Index.module.scss";
import Recommend from "./recommend/Recommend";
import { Result } from "@/apis/transcript";

const Index = ({
  trends = [],
  topMusics = [],
  hiddenTrend = false,
  recommend,
}: {
  trends?: Music[];
  topMusics?: Music[];
  recommend?: Result;
  hiddenTrend?: boolean;
}) => {
  return (
    <section className={styles.section}>
      {!hiddenTrend && <IndexTrends trendsInfo={trends} />}
      <div className={styles.content}>
        {recommend && <Recommend musics={recommend} />}
        <IndexTopChart musics={topMusics} />
      </div>
    </section>
  );
};

export default Index;
