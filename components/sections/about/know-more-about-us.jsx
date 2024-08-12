import Image from "next/image";
import React from "react";

const KnowMoreAboutUs = () => {
  return (
    <section className="py-16">
      <div className="container">
        <div className="know-text mb-4">
          <h2>Know More About Us</h2>
          <p className=" manrope">Join our journey on youtube @GharHoToAisa</p>
        </div>
        <div className="video-box grid md:grid-cols-2 grid-cols-1 border-2 border-gray-400 my-8">
          {/* <Image src="/images/video-text.png" width={650} height={500} /> */}
          <div className="w-full">
          <iframe width="560" height="315" className="md:w-[650px] w-full  h-[500px]" src="https://www.youtube.com/embed/msQdi_Tqbyo?si=MZdCoD3QW1W6P5bZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
          <div>
            <div className="flex flex-col justify-between w-full h-full p-8">
              <div>
                <p className="small-para manrope">02:49 mins</p>
                <h3 className="manrope">Introduction of Rashmi Group | Ghar Ho To Aisa | A Real Estate Developer
                </h3>
                <p className="small-para manrope">
                Rashmi Group successful journey from zero to Every Day One Home did not happen overnight, but over the course of 25 years! Let me tell you how it started!
                <br />2 May 2023
                </p>
              </div>
              <div className="mt-5 mb:mt-0">
                <p className="small-para ">
                  <a href="https://www.youtube.com/watch?v=msQdi_Tqbyo" className="manrope underline">Subscribe Now</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KnowMoreAboutUs;
