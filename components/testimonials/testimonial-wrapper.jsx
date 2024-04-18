"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
import CardOne from "./data/card1";
import CardTwo from "./data/card2";
import CardThree from "./data/card3";

export default function TestimonialWrapper() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        modules={[Autoplay, Pagination]}
        className="mySwiper bg-fixed "
      >
        <SwiperSlide>
          <CardOne />
        </SwiperSlide>
        <SwiperSlide>
          <CardTwo />
        </SwiperSlide>
        <SwiperSlide>
          <CardThree />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
