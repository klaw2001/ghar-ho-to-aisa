import CircularText from "@/components/global/circular-text";
import React from "react";

const ExpertiseSection = () => {
  return (
    <section className="pt-16 md:pb-16 bg-[#FEE9FE] relative">
      <div className="container">
        <div className="expertise-wrap grid grid-cols-1 md:grid-cols-2 items-center pb-14">
          <h2 className="mb-4 md:mb-0" data-aos='fade-up'>Expertise</h2>
          <p className="link manrope" data-aos='fade-up'>
            Established in 1998, Rashmi Group has built a Legacy of Excellence
            in the Real Estate market. Known for Customer Centric Product and
            quality construction, the company has delivered over 14,000 homes.
            The Group’s Legacy is defined by groundbreaking innovation and a
            steadfast commitment to excellence and home-owner’s satisfaction.
          </p>
        </div>
        <video
        data-aos='fade-up'
          src="/videos/expertise.mp4"
          autoPlay
          muted
          loop
          className="m-auto w-full"
        ></video>
      </div>
    </section>
  );
};

export default ExpertiseSection;
