import React from "react";
import Image from "next/image";
import hero from "@/assets/images/hero.png";
import { counterJson } from "@/utils/counterJson";

const HeroSection = () => {
  return (
    <section className="hero-wrapper h-screen">
      <div className="">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="hero-img w-full md:w-3/4">
            <Image src={hero} style={{ maxWidth: "-webkit-fill-available"}}/>
          </div>
          <div className="hero-text px-6">
            <h1 className="leading-20">
              Our Journey Towards{" "}
              <span className="text-purple">Excellence!</span>
            </h1>
            <p className="manrope">
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
