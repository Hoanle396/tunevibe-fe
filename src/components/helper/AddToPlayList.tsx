"use client";
import { message } from "antd";
import { CSSProperties, useState } from "react";

import { useAppStore } from "@/store/app-store";

import { MdPlaylistAdd } from "react-icons/md";

const AddToPlayList = ({
  musicId,
  className,
  style,
}: {
  musicId: number;
  className?: string;
  style?: CSSProperties;
}) => {
  const [loading, setLoading] = useState<boolean>(false);

  const [setPlayListModal, setMusicClicked] = useAppStore((state) => [
    state.setPlayListModal,
    state.setMusicClicked,
  ]);
  const [messageApi, contextHolder] = message.useMessage();

  const addToPlayListClickHandler = async () => {
    // setLoading(true);
    // const musicRes = await GetMusic(musicId);
    // setLoading(false);
    // if (musicRes.data) {
    //   setMusicClicked(musicRes.data);
    //   setPlayListModal(true);
    //   return;
    // }
    // messageApi.open({
    //   type: "error",
    //   content: musicRes.error,
    // });
  };

  return (
    <>
      <button
        className={`btn ${className} ${loading ? "overlay-loading" : ""}`}
        style={{ ...style }}
        onClick={addToPlayListClickHandler}
      >
        <MdPlaylistAdd />
      </button>
      {contextHolder}
    </>
  );
};

export default AddToPlayList;
