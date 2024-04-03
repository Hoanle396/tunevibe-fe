"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import VisibilitySensor from "react-visibility-sensor";
import MusicPlayer from "./components/MusicPlayer";
import { fadeIn } from "@/constants/variants";
function Search() {
  const [elementIsVisible, setElementIsVisible] = useState(false);
  const bg = {
    true: {
      left: "-20rem",
    },
    false: {
      left: "-30rem",
    },
  };
  const redimg = {
    true: {
      left: "18rem",
    },
    false: {
      left: "16rem",
    },
  };
  const musicimg = {
    true: {
      left: "2rem",
    },
    false: {
      left: "6rem",
    },
  };
  return (
    <section className="h-screen">
      <div className="container relative px-[5rem] mx-auto pb-[10rem] z-[1] flex items-center justify-between rounded-b-[5rem]">
        {/* left side */}
        <div className="left flex-1">
          <motion.img
            variants={bg}
            animate={`${elementIsVisible}`}
            transition={{
              duration: 1,
              type: "ease-out",
            }}
            src="/assets/bg.svg"
            alt=""
            className="absolute top-[0rem] left-[-47rem] z-[0]"
          />
          <motion.img
            src="/assets/hero/Musicplayer/d1.png"
            alt=""
            className="w-[16rem] top-[11rem] absolute"
          />
          <motion.img
            src="/assets/hero/Musicplayer/d2.png"
            alt=""
            className="w-[9rem] absolute top-[17.7rem] left-[7rem]"
          />
          <motion.img
            variants={redimg}
            animate={`${elementIsVisible}`}
            transition={{
              duration: 1.2,
              type: "ease-out",
            }}
            src="/assets/hero/Musicplayer/d3.png"
            alt=""
            className="w-[9rem] top-[18rem] left-[17rem] absolute"
          />
          <motion.img
            variants={musicimg}
            animate={`${elementIsVisible}`}
            transition={{
              duration: 1,
              type: "ease-out",
            }}
            src="/assets/hero/Musicplayer/d4.png"
            alt=""
            className="w-[17rem] top-[35rem] left-[2rem] absolute"
          />
        </div>
        {/* right side */}
        <motion.div
          variants={fadeIn("left", 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.5 }}
          className="right flex items-start flex-col justify-start flex-1 h-[100%] px-8 pt-[12rem] z-[40]">
          {/* Search */}
          <div className="searchbar flex justify-start w-[100%]">
            <input
              type="text"
              placeholder="Enter the keyword or URL"
              className="flex-[19] outline-none bg-[#020917] rounded-xl p-3 h-[3rem]"
            />
            {/* SearchIcon */}
            <div className="searchIcon flex flex-1 items-center rounded-xl ml-4 bg-gradient-to-bl from-[#F3071D] to-[#E600FF] p-4 h-[3rem]">
              <img
                src="/assets/hero/Musicplayer/search.png"
                alt=""
                className="w-[1.5rem]"
              />
            </div>
          </div>
          {/* tild icon */}
          <div className="tild flex justify-start mt-7 items-center w-[100%]">
            <img
              src="/assets/hero/Musicplayer/Path 318.png"
              alt=""
              className="w-[5rem]"
            />
          </div>

          {/* paragraph */}
          <div className="detail flex flex-col mt-5 text-4xl">
            <span>Search Music by</span>
            <span>
              <b>Name or Direct URL</b>
            </span>
            <span className="text-sm mt-3">
              Duis feugiat congue metus, ultrices vulputate <br /> nibh viverra
              eget. Vestibulum ullamcorper <br /> volutpat varius.
            </span>
          </div>
          <VisibilitySensor
            onChange={(isVisible: any) => setElementIsVisible(isVisible)}
          >
            <MusicPlayer />
          </VisibilitySensor>
        </motion.div>
      </div>
    </section>
  );
}

export default Search;
