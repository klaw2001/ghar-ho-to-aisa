"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import { testimonials } from "@/utils/testimonials";
import TestimonialCard from "./testimonial-card";
import TestimonialVideoCard from "./testimonial-video-card";
const ResponsiveTestimonial = () => {
  return (
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
      {testimonials.map((elem, ind) => (
        <>
          {elem.type === "video" ? (
            <>
              <SwiperSlide key={ind}>
                <TestimonialVideoCard name={elem.name} title={elem.title} />
              </SwiperSlide>
            </>
          ) : (
            <SwiperSlide key={ind}>
              <TestimonialCard
                name={elem.name}
                title={elem.title}
                text={elem.text}
                date={elem.date}
              />
            </SwiperSlide>
          )}
        </>
      ))}
    </Swiper>
  );
};

export default ResponsiveTestimonial;
