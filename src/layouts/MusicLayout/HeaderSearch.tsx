import { FormEvent, useState } from "react";

import { FaSearch } from "react-icons/fa";
import styles from "./HeaderSearch.module.scss";

const HeaderSearch = () => {
  const [search, setSearch] = useState("");
  const searchSubmitHandler = (e: FormEvent<HTMLFormElement>) => {};

  return (
    <div className={styles["search-wrapper"]}>
      <form
        action="/music"
        method="get"
        className="flex justify-center items-center"
        onSubmit={searchSubmitHandler}
      >
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className={styles.search}
          type="search"
          placeholder="search your music here..."
        />
        <button type="submit" className="bg-transparent">
          <FaSearch />
        </button>
      </form>
    </div>
  );
};

export default HeaderSearch;
