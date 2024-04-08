"use client";
import { fadeIn } from "@/constants/variants";
import { FCC } from "@/types";
import { motion } from "framer-motion";
import { CiStar } from "react-icons/ci";
import "swiper/css";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const data = [
  {
    name: "Trending Music",
    icon: <CiStar />,
    colorClass: "text-pink-600",
  },
  {
    name: "Trending Music",
    icon: <CiStar />,
    colorClass: "text-accent",
  },
  {
    name: "Trending Music",
    icon: <CiStar />,
    colorClass: "text-yellow-300",
  },
  {
    name: "Trending Music",
    icon: <CiStar />,
    colorClass: "text-cyan-500",
  },
  {
    name: "Trending Music",
    icon: <CiStar />,
    colorClass: "text-white",
  },
];

const SlideSection: FCC = () => {
  return (
    <motion.section
      variants={fadeIn("down", 0.4)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.7 }}
      className="section flex flex-col gap-4"
    >
      <div className="container relative mx-auto flex justify-center items-center lg:justify-star">
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={50}
          slidesPerView={3}
          centeredSlides={true}
          navigation={true}
          loop
          autoplay={{
            delay: 3000,
            pauseOnMouseEnter: true,
            disableOnInteraction: true,
          }}
        >
          {data.map(({ colorClass, icon, name }, i) => (
            <SwiperSlide key={i}>
              <div
                className={`flex items-center justify-center gap-3 text-6xl font-alexBrush ${colorClass}`}
              >
                {icon}
                {name}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="container mx-auto bg-white h-1 w-full" />
    </motion.section>
  );
};

export default SlideSection;
