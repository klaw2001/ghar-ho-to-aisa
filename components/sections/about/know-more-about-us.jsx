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
        <div className="video-box grid md:grid-cols-2 grid-cols-1 border-2 border-black my-8">
          <Image src="/images/video-text.png" width={650} height={500} />
          <div>
            <div className="flex flex-col justify-between w-full h-full p-8">
              <div>
                <p className="small-para manrope">5 mins</p>
                <h3 className="manrope">Video Title</h3>
                <p className="small-para manrope">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros. <br />1 month ago
                </p>
              </div>
              <div className="mt-5 mb:mt-0">
                <p className="small-para manrope">Subscribe Now</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KnowMoreAboutUs;
