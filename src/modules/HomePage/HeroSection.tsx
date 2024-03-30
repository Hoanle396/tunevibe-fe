"use client";
import { FCC } from "@/types";
import Image from "next/image";
import React from "react";
import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from "react-parallax-mouse";
import { motion } from "framer-motion";
import { fadeIn } from "@/constants/variants";
import { TypeAnimation } from "react-type-animation";

const data = [
  "Los Angeles, USA",
  3000,
  "Rio de Janeiro, Brazil",
  3000,
  "Paris, France",
  3000,
  "Berlin, Germany",
  3000,
  "Da Nang, Vietnam",
];

const HeroSection: FCC = () => {
  return (
    <section className="h-[calc(100vh-96px)] ">
      <div className="container relative mx-auto h-full flex justify-center items-center xl:justify-start">
        <div className="h-full flex flex-col justify-center items-center xl:items-start z-20 pt-12">
          <MouseParallaxContainer
            globalFactorX={0.1}
            globalFactorY={0.2}
            resetOnLeave
            className="relative flex items-center h-[120px] xl:h-max xl:w-[840px]"
          >
            <MouseParallaxChild
              factorX={0.2}
              factorY={0.4}
              className="relative"
            >
              <motion.div
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.3 }}
                className="w-[250px] h-[101.37px] xl:w-[625px] xl:h-[244.97px]"
              >
                <Image
                  src="/assets/hero/typo-1.svg"
                  fill
                  alt=""
                  className="object-contain"
                />
              </motion.div>
            </MouseParallaxChild>
            <MouseParallaxChild
              factorX={0.9}
              factorY={0.9}
              className="absolute xl:left-6 z-30"
            >
              <motion.div
                variants={fadeIn("up", 0.7)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.3 }}
                className="w-[250px] h-[101.37px] xl:w-[525px] xl:h-[244.97px]"
              >
                <Image
                  src="/assets/hero/typo-2.svg"
                  fill
                  alt=""
                  className="object-contain"
                />
              </motion.div>
            </MouseParallaxChild>
            <MouseParallaxChild
              factorX={0.3}
              factorY={0.6}
              className="hidden xl:flex absolute right-0 z-20 opacity-80"
            >
              <motion.div
                variants={fadeIn("left", 1.4)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.3 }}
                className="w-[150px] h-[100px] xl:w-[348px] xl:h-[200px] mix-blend-luminosity"
              >
                <Image
                  src="/assets/hero/bird.png"
                  fill
                  alt=""
                  className="object-contain"
                />
              </motion.div>
            </MouseParallaxChild>
          </MouseParallaxContainer>
          <motion.div
            variants={fadeIn("up", 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            className="min-h-[60px] flex items-center mb-6 text-[26px]"
          >
            <div className="hidden xl:flex items-center xl:gap-x-0">
              <div>World</div>
              <div className="relative w-2 h-2 mx-2 flex items-center justify-center">
                <Image src="/assets/hero/dot.svg" fill alt="" />
              </div>
              <div>Tour</div>
              <div className="relative w-2 h-2 mx-2 flex items-center justify-center">
                <Image src="/assets/hero/dot.svg" fill alt="" />
              </div>
              <div>2024</div>
            </div>
            <div className="hidden xl:flex items-center justify-center relative w-7 h-7 mx-4">
              <Image src="/assets/hero/mic.svg" fill alt="" />
            </div>
            <TypeAnimation
              sequence={data}
              wrapper="div"
              speed={10}
              deletionSpeed={10}
              repeat={Infinity}
              cursor={false}
            ></TypeAnimation>
          </motion.div>
          <motion.div
            variants={fadeIn("up", 1.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
          >
           <button className="btn btn-lg btn-accent">Get tickets</button>
          </motion.div>
        </div>
        <motion.div
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
          className="hidden xl:flex absolute right-0"
        >
          <div className="relative">
            <div className="absolute top-40 right-4 animate-bounce2 rounded-full w-10 h-10  bg-[linear-gradient(180deg,rgba(226,80,229,0.86)0%,#4B50E6),linear-gradient(0deg,#FFFFFF,#FFFFFF)]"></div>
            <div className="absolute top-10 left-10 animate-bounce3 rounded-full w-10 h-10  bg-[linear-gradient(180deg,rgba(226,80,229,0.86)0%,#4B50E6),linear-gradient(0deg,#FFFFFF,#FFFFFF)]"></div>
            <div className="absolute top-40 left-0 animate-bounce3 rounded-full w-20 h-20  bg-[linear-gradient(180deg,rgba(226,80,229,0.86)0%,#4B50E6),linear-gradient(0deg,#FFFFFF,#FFFFFF)]"></div>
            <div className="absolute top-96 right-0 animate-bounce3 rounded-full w-10 h-10  bg-[linear-gradient(180deg,rgba(226,80,229,0.86)0%,#4B50E6),linear-gradient(0deg,#FFFFFF,#FFFFFF)]"></div>
            <div className="absolute -top-20 right-10 animate-bounce4 rounded-full w-24 h-24 bg-[linear-gradient(180deg,rgba(226,80,229,0.86)0%,#4B50E6),linear-gradient(0deg,#FFFFFF,#FFFFFF)]"></div>

            <Image
              src="/assets/hero/nft.png"
              className="animate-bounce-img z-50"
              width={600}
              height={600}
              alt="bear"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
