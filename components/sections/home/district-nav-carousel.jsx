"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay } from "swiper/modules";

export default function DistrictNavCarousel({ districts }) {
  return (
    <>
      <Swiper
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        loop={true}
        grabCursor={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper mt-12"
      >
        {districts.map((elem, ind) => (
          <SwiperSlide key={elem.id} className="text-2xl manrope font-bold district-swiper">{elem.dist}</SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
