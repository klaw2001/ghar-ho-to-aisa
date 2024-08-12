import React from "react";
import { counterJson } from "@/utils/counterJson";
import CircularText from "@/components/global/circular-text";
import CircularTextNew from "@/components/global/circular-text-2";

const HeroNewText = () => {
  return (
    <section className="hero-new text relative flex py-16">
      <div className="container mx-auto relative">
        <div className="hero-text md:px-6 md:pt-19 p-4 md:w-3/5" data-aos='fade-up'>
          <h2 className="">
            Our Journey Towards <span className="text-purple">Excellence!</span>
          </h2>
          <p className="manrope small-para">
            Welcome to our real estate website. We specialize in land
            development, residential spaces, and commercial premises. Our team
            of experts is dedicated to helping you find the perfect property to
            meet your needs.
          </p>
          <div className="counter-wrapper grid grid-cols-2 gap-2 mt-3 w-max">
            {counterJson.map((elem, ind) => (
              <div className="counter-box " key={ind + elem.number}>
                <h3 className="text-purple manrope">{elem.number}</h3>
                <h4 className="manrope">{elem.text}</h4>
              </div>
            ))}
          </div>
        </div>
        <div>
          <CircularTextNew alignment={'top-0 right-20'}/>
        </div>
      </div>
    </section>
  );
};

export default HeroNewText;
