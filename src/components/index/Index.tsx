import IndexTopChart from "./top-chart/IndexTopChart";
import IndexTrends from "./trends/IndexTrends";

import styles from './Index.module.scss';

const Index = ({
    trends,
    topMusics,
} : {
    trends: Music[],
    topMusics: Music[],
}) => {
    return <section className={styles.section}>
        <IndexTrends trendsInfo={trends} />
        <div className={styles.content}>
            <IndexTopChart musics={topMusics} />
        </div>
    </section>
}

export default Index;