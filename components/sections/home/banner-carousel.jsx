"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";

export default function BannerCarousel() {
  const bannerImages = [
    "banner1",
    "banner2",
    "banner3",
    "banner4",
    "banner5",
  ];

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
        className="mySwiper bg-fixed"
      >
        {bannerImages.map((elem, ind) => (
          <SwiperSlide key={ind}>
            <Image src={`/images/${elem}.jpg`} width={1520} height={600}/>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
