import { FormEvent } from "react";


import { FaSearch } from "react-icons/fa";
import styles from "./HeaderSearch.module.scss";

const HeaderSearch = () => {
  const searchSubmitHandler = (e: FormEvent<HTMLFormElement>) => {};

  return (
    <div className={styles["search-wrapper"]}>
      <FaSearch className={styles.icon} />
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
