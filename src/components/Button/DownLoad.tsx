import useDownload from "@/hooks/use-download";
import { FCC } from "@/types";
import React from "react";
import { TbDownload } from "react-icons/tb";

type Props = {
  music?: Music;
};

const DownLoad: FCC<Props> = ({ music }) => {
  const { buy } = useDownload();
  const onDownLoad = async () => {
    if (music) {
      try {
        await buy(music.hash, 1);
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <button onClick={onDownLoad} className="bg-transparent p-0">
      <TbDownload />
    </button>
  );
};

export default DownLoad;
