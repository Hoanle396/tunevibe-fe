"use client";
import Link from "next/link";
import { message } from "antd";
import { useAuthStore } from "@/store/auth-store";

import MainButton from "../ui/button/MainButton";
import HeaderMenu from "./HeaderMenu";
import HeaderSearch from "./HeaderSearch";
import HeaderAccount from "./HeaderAccount";

import styles from "./Header.module.scss";
import { BiLogOut } from "react-icons/bi";

const Header = () => {
  const [token, logout] = useAuthStore((state) => [state.token, state.logout]);
  const [messageApi, contextHolder] = message.useMessage();
  const isLoggedIn = token !== null;

  const logoutClickHandler = () => {
    logout();
    messageApi.open({
      type: "success",
      content: "you are loged out successfully.",
    });
  };

  return (
    <header className={styles.header}>
      <HeaderMenu />
      <HeaderSearch />
      <div className={styles.box}>
        {isLoggedIn ? (
          <>
            <HeaderAccount />
            <MainButton type="primary" onClick={logoutClickHandler} circle>
              <BiLogOut className={styles.icon} />
            </MainButton>
          </>
        ) : (
          <Link href="/login">
            <MainButton type="primary">Login / Register</MainButton>
          </Link>
        )}
      </div>
      {contextHolder}
    </header>
  );
};

export default Header;
