import React from "react";

import hero from "@/assets/images/hero.png";
import TypewriterComponent from "@/components/global/typewriter-text-hero";
const HeroSection = () => {
  return (
    <section className="hero-wrapper md:h-screen">
      <div className="relative">
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-[#0000008a]"></div>
        <div className="hero-img h-full">
          <video
            src="/videos/hero-video.mp4"
            className="object-cover w-full h-[616px] md:md:h-[700px]"
            autoPlay
            loop
            muted
          ></video>
        </div>
        <div
          className="hero-text-box absolute bottom-[3rem] md:left-[5.5rem] left-[3rem]"
          // style={{ zIndex: 999 }}
        >
          <div className="container-mx-auto">
            <div class="">
              {/* <div class="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-5xl text-white font-bold"> */}
              <span className="text-white text-3xl md:text-5xl">Delivering</span>
              <br />
              <span className="leading-1 hero-linear text-6xl md:text-9xl">Happiness</span>
              <br />
              <span className="text-white text-3xl md:text-5xl">Since 1998</span>
              {/* </div> */}
            </div>

            {/* <TypewriterComponent/> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
