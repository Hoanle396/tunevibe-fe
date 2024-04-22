import { FormEvent } from "react";

import Icon from "../ui/Icon";

import styles from "./HeaderSearch.module.scss";

const HeaderSearch = () => {
  const searchSubmitHandler = (e: FormEvent<HTMLFormElement>) => {};

  return (
    <div className={styles["search-wrapper"]}>
      <Icon className={styles.icon} icon="search" />
      <form onSubmit={searchSubmitHandler}>
        <input
          className={styles.search}
          type="search"
          placeholder="search your music here..."
        />
      </form>
    </div>
  );
};

export default HeaderSearch;
