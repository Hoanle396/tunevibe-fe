"use client";
import { fadeIn } from "@/constants/variants";
import { FCC } from "@/types";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from "react-parallax-mouse";
import { TypeAnimation } from "react-type-animation";

const IntroSection: FCC = () => {
  return (
    <section className="section ">
      <div className="container relative mx-auto h-full grid grid-cols-1 lg:grid-cols-2 justify-center items-center lg:justify-start">
        <div className="col-span-1 h-full flex flex-col justify-center items-center lg:items-start z-20 ">
          <MouseParallaxContainer
            globalFactorX={0.1}
            globalFactorY={0.2}
            resetOnLeave
            className="relative flex items-center lg:h-max lg:w-[640px]"
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
              >
                <p className="text-5xl font-bold text-white">
                  Some of The Most Famous
                  <span className="text-yellow-400"> Artists </span>Of All
                  <span className="text-accent">
                    <TypeAnimation
                      sequence={[
                        "Time in the Berlin",
                        3000,
                        "Time in the Paris",
                        3000,
                        "Time in the Vietnam",
                        3000,
                        "Time in the Brazil",
                        3000,
                        "Time in the World",
                      ]}
                      wrapper="div"
                      speed={1}
                      deletionSpeed={1}
                      repeat={Infinity}
                      cursor={false}
                    />
                  </span>
                </p>
              </motion.div>
            </MouseParallaxChild>
          </MouseParallaxContainer>
          <motion.div
            variants={fadeIn("up", 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            className="flex items-center mb-6 text-lg mt-8"
          >
            <p>
              World music is an easy way for people to describe the melding
              traditional and nontraditional music from foreign countries.
              Generally, world music refers to sounds from the non-Western part
              of the world.
            </p>
          </motion.div>
        </div>
        <motion.div
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
          className="col-span-1 flex w-full"
        >
          <div className="circle-blur absolute right-0 z-0 h-[412px] w-[412px] bg-[#4ee39d] opacity-[0.3] blur-[179.5px] before:backdrop-blur-[179.5px] md:h-[666px] md:w-[666px]"></div>
          <div className="container mt-12 max-w-[1200px] lg:mt-0">
            <div className="flex w-full flex-col justify-center gap-16">
              <div className="mx-auto mt-6 w-fit text-center sm:mx-0 sm:mt-0 sm:w-full">
                <div className="text-[72px] font-semibold uppercase leading-[91px] text-[#F0D800]">
                  <CountUp end={540000} decimal="," suffix="+" />
                </div>
                <h5 className="text-2xl font-semibold leading-[30px]">
                  People register this website
                </h5>
              </div>
              <div className="mx-auto mt-6 w-fit text-center sm:mx-0 sm:mt-0 sm:w-full">
                <div className="text-[72px] font-semibold uppercase leading-[91px]">
                  <CountUp end={50000} decimal="," suffix="+" />
                </div>
                <h5 className="text-2xl font-semibold leading-[30px]">
                  Virtual concept held this year
                </h5>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default IntroSection;
