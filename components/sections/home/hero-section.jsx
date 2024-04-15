import React from "react";

import hero from "@/assets/images/hero.png";
import { counterJson } from "@/utils/counterJson";
const HeroSection = () => {
  return (
    <section className="hero-wrapper h-screen">
      <div className="">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="hero-img w-full md:w-3/4 h-full">
           <video src="/videos/hero-video.mp4" className="w-full h-full" autoPlay loop muted></video>
           </div>
          <div className="hero-text px-6 pt-16 md:w-3/12 md:self-end">
            <h2 className="leading-20">
              Our Journey Towards{" "}
              <span className="text-purple">Excellence!</span>
            </h2>
            <p className="manrope small-para">
              Welcome to our real estate website. We specialize in land
              development, residential spaces, and commercial premises. Our team
              of experts is dedicated to helping you find the perfect property
              to meet your needs.
            </p>
            <div className="counter-wrapper grid grid-cols-2 gap-2 mx-4 mt-3">
              {counterJson.map((elem, ind) => (
                <div className="counter-box " key={ind}>
                  <h2 className="text-purple manrope">{elem.number}</h2>
                  <h3 className="manrope">{elem.text}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
