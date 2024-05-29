"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

export default function BannerCarousel() {
  const bannerImages = ["banner1", "banner2", "banner3", "banner4", "banner5"];

  return (
    <>
      <section className="relative py-40">
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
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {bannerImages.map((elem, ind) => (
            <SwiperSlide key={ind}>
              <Image src={`/images/${elem}.jpg`} width={1250} height={600} className="mx-auto pb-16"/>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
}
