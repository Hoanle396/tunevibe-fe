"use client"
import { FCC } from "@/types";
import React from "react";

type Props = {
  icon: JSX.Element;
  title: string;
  description: string;
};

const StepCard: FCC<Props> = ({ description, icon, title }) => {
  return (
    <div className="flex-grow lg:w-[calc(100%*(1/4)-10px-1px)] xl:w-[calc(100%*(1/5)-10px-1px)] h-fit flex flex-col gap-4  justify-start ">
      <div className="">{icon}</div>
      <p className="text-lg md:text-2xl font-bold text-white">{title}</p>
      <p className="text-xs md:text-sm font-normal text-[#FFFFFF90]">{description}</p>
    </div>
  );
};

export default StepCard;