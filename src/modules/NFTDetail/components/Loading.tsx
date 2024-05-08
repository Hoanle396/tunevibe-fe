"use client"
import { FCC } from "@/types";

type Props = {};

const Loading: FCC = (props: Props) => {
  return (
    <div className="h-full min-h-[calc(100vh-256px)] w-full flex justify-center items-center py-16">
      <div className="container max-w-screen-2xl grid grid-cols-12 gap-12">
        <div className="col-span-12 aspect-square animate-pulse xl:col-span-6 bg-gray-400 justify-center items-center flex rounded-xl">
          <svg
            className="w-32 h-32 text-gray-500 dark:text-gray-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 16 20"
          >
            <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
            <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
          </svg>
        </div>
        <div className="col-span-12 xl:col-span-6 items-center lg:items-start flex flex-col gap-6">
          <div className="flex flex-row animate-pulse w-full items-center gap-2 justify-between">
            <div className="h-7 w-[60%] bg-gray-400 rounded-md dark:bg-gray-700"></div>
            <div className="flex space-x-1">
              <div className="h-8 w-16 bg-gray-400 dark:bg-gray-700 rounded-full"></div>
              <div className="h-8 w-16 bg-gray-400 dark:bg-gray-700 rounded-full"></div>
            </div>
          </div>
          <div className="flex flex-row  w-full space-x-8 gap-y-2">
            <div className="animate-pulse flex flex-row items-center gap-3 px-2 w-full h-[68px] border rounded-2xl border-[#343444] bg-[#343444]">
              <div className="h-12 w-12 bg-gray-400 rounded-xl dark:bg-gray-700"></div>
              <div className="flex flex-col items-start gap-2">
                <div className="h-4 w-32 bg-gray-400 rounded-md dark:bg-gray-700"></div>
                <div className="h-4 w-32 bg-gray-400 rounded-md dark:bg-gray-700"></div>
              </div>
            </div>
            <div className="animate-pulse flex flex-row items-center gap-3 px-2 w-full h-[68px] border rounded-2xl border-[#343444] bg-[#343444] ">
              <div className="h-12 w-12 bg-gray-400 rounded-xl dark:bg-gray-700"></div>
              <div className="flex flex-col items-start gap-2">
                <div className="h-4 w-32 bg-gray-400 rounded-md dark:bg-gray-700"></div>
                <div className="h-4 w-32 bg-gray-400 rounded-md dark:bg-gray-700"></div>
              </div>
            </div>
          </div>
          <a className="text-white text-sm font-normal w-full flex flex-col gap-4 animate-pulse">
            <div className="h-4 w-[100%] bg-gray-400 rounded-md dark:bg-gray-700"></div>
            <div className="h-4 w-[100%] bg-gray-400 rounded-md dark:bg-gray-700"></div>
            <div className="h-4 w-[80%] bg-gray-400 rounded-md dark:bg-gray-700"></div>
          </a>
          <div className="grid w-full grid-cols-2 gap-6 animate-pulse">
            <div className="text-white flex flex-col bg-[#343444] border rounded-lg border-[#343444] p-4">
              <a className="p-2">
                <div className="h-4 w-32 bg-gray-400 rounded-md dark:bg-gray-700"></div>
              </a>
              <a className="p-2">
                <div className="h-4 w-32 bg-gray-400 rounded-md dark:bg-gray-700"></div>
              </a>
              <a className="p-2">
                <div className="h-4 w-32 bg-gray-400 rounded-md dark:bg-gray-700"></div>
              </a>
              <a className="p-2">
                <div className="h-4 w-32 bg-gray-400 rounded-md dark:bg-gray-700"></div>
              </a>
            </div>
            <div className="grid grid-rows-2 gap-4">
              <div className="animate-pulse flex items-center text-white bg-[#343444] border rounded-lg border-[#343444] justify-between p-4 px-6">
                <div className="h-6 w-32 bg-gray-400 rounded-md dark:bg-gray-700"></div>
                <div className="h-6 w-16 bg-gray-400 rounded-md dark:bg-gray-700"></div>
              </div>
              <div className="animate-pulse text-white bg-[#343444] border rounded-lg border-[#343444] flex justify-center items-center font-bold text-2xl p-4 px-6">
                <div className="h-6 w-[60%] bg-gray-400 rounded-md dark:bg-gray-700"></div>
              </div>
            </div>
          </div>
          <div className="h-12 rounded-full animate-pulse w-full bg-gray-200 dark:bg-gray-700"></div>
          <div className="flex flex-row w-full gap-12 text-white pb-2">
            <div className="h-4 w-20 bg-gray-200 rounded-md animate-pulse dark:bg-gray-700"></div>
            <div className="h-4 w-20 bg-gray-200 rounded-md animate-pulse dark:bg-gray-700"></div>
            <div className="h-4 w-20 bg-gray-200 rounded-md animate-pulse dark:bg-gray-700"></div>
          </div>

          <div className="text-white animate-pulse flex justify-between w-full h-[68px] pb-2 border-b-[1px] border-b-[#1F1F2C]">
            <div className="text-[15px] flex flex-row gap-2 items-center">
              <div className="h-12 w-12 bg-gray-400 rounded-lg dark:bg-gray-700"></div>
              <div className="flex flex-col items-start gap-2">
                <div className="h-4 w-32 bg-gray-400 rounded-md dark:bg-gray-700"></div>
                <div className="h-4 w-32 bg-gray-400 rounded-md dark:bg-gray-700"></div>
              </div>
            </div>
            <div className="h-4 w-20 bg-gray-400 rounded-md dark:bg-gray-700"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
