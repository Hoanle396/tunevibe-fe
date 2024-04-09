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
    name: "Beats",
    icon: <CiStar />,
  },
  {
    name: "ChillOut",
    icon: <CiStar />,
  },
  {
    name: "AfroBeat",
    icon: <CiStar />,
  },
  {
    name: "Pop",
    icon: <CiStar />,
  },
  {
    name: "HipPop",
    icon: <CiStar />,
  },
  {
    name: "Deep House",
    icon: <CiStar />,
  },
  {
    name: "Jazz",
    icon: <CiStar />,
  },
];

const CategorySection: FCC = () => {
  return (
    <motion.section
      variants={fadeIn("left", 0.4)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.7 }}
      className="section flex flex-col gap-4"
    >
      <div className="container relative mx-auto p-3 -skew-y-3 bg-[#f0d800] flex justify-center items-center lg:justify-star">
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={1}
          slidesPerView={5}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            639: {
              slidesPerView: 3,
            },
            1480: {
              slidesPerView: 5,
            },
          }}
          centeredSlides={true}
          navigation={true}
          loop
          autoplay={{
            delay: 2000,
            pauseOnMouseEnter: true,
            disableOnInteraction: true,
          }}
        >
          {data.map(({ icon, name }, i) => (
            <SwiperSlide key={i}>
              <div
                className={`flex items-center justify-center gap-3 text-4xl font-alexBrush text-primary`}
              >
                {icon}
                {name}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </motion.section>
  );
};

export default CategorySection;
