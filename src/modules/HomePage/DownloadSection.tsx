"use client";

import { FCC } from "@/types";

const Download: FCC = () => {
  return (
    <section className="section ">
      <div className="container mx-auto rounded-3xl bg-gradient py-[9rem] flex flex-col items-center justify-start px-[5rem] h-[38rem] ">
        <img
          src="/assets/hero/Musicplayer/Path 318.png"
          alt=""
          className="w-[5rem]"
        />
        <div className="headline mt-7 flex flex-col items-center text-5xl gap-2">
          <span className="font-medium"> Never stop listening </span>
          <span>
            <b>App Now!</b>
          </span>
          <span className="text-[1rem] px-[15rem] text-center mt-[1rem]">
            An available on Web, iOS, Android, Sonos, Chromecast, and Xbox One
          </span>
        </div>
        <div className="mt-20">
          <div className="download">
            <div className="download_images flex">
              <img
                src={"/assets/hero/Musicplayer/App Store.png"}
                alt=""
                className="border-[2px] border-[#F0D800] rounded-[18px] h-[4.5rem] w-[15rem] mr-[2rem]"
              />
              <img
                src={"/assets/hero/Musicplayer/Google Play.png"}
                alt=""
                className="border-[2px] border-[#F0D800] rounded-[18px] h-[4.5rem] w-[15rem]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;
