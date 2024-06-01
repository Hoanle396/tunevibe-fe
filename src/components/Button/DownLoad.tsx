import { FCC } from "@/types";
import React from "react";
import { TbDownload } from "react-icons/tb";

type Props = {
  music?: Music;
};

const DownLoad: FCC<Props> = ({ music }) => {
  const onDownLoad = () => {};
  return (
    <button onClick={onDownLoad} className="bg-transparent p-0">
      <TbDownload />
    </button>
  );
};

export default DownLoad;
