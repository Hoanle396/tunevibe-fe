import React from "react";

type Props = {};

const MusicHeader = (props: Props) => {
  return (
    <div className="bg-[linear-gradient(180deg,#0c2a5070,#000e1f00)] w-full h-20 rounded-3xl flex flex-row">
      <div className="flex items-center gap-2 w-full mx-4 cursor-pointer">
        <p className="text-white text-xl font-semibold">HEALTH CARE</p>
      </div>
    </div>
  );
};

export default MusicHeader;
