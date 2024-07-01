import Image from "next/image";
import React from "react";

const GrowthPartner = () => {
  return (
    <>
      <section className="py-16">
        <div className="container">
          <div className="inn-wrapper grid grid-cols-1 md:grid-cols-2 items-center">
            <div className="inn-img mx-auto md:mr-auto md:ml-0">
              <Image
                src="/images/innovation-3.png"
                width={400}
                height={400}
                className="object-contain w-full"
              />
            </div>
            <div className="inn-text p-5">
              <h6 className="manrope text-[#C69E58] font-semibold">
                3rd Innovation
              </h6>
              <h2>Growth Partner</h2>
              <p className="manrope mt-3">
                Rashmi Group Introduces Mumbai's First Growth-Partner. This
                Floor-to-Floor Revolutionary Retail Property Investment Plan
                gets you Monthly Income with 50:50 Profit Sharing.
              </p>
              <ul className="pl-6 mt-5">
                <li className="manrope text-lg list-disc">35% ROI</li>
                <li className="manrope text-lg list-disc">Hassel Free Exit</li>
                <li className="manrope text-lg list-disc">
                  Monthly Income Assuredly
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto">
          <div className="social-wrapper text-center">
            <h2 className="text-[#3A0D32]">Get Social</h2>
            <p className="manrope">Join us on Instagram, Facebook & Youtube</p>
            <div className="grid md:grid-cols-3 grid-cols-1 my-10 gap-6 justify-center">
                <div className="social-box text-left">
                    <Image src='/images/social1.png' width={300} height={300} className="object-contain mx-auto w-full"/>
                    <p className="manrope text-black mt-2">Instagram @rashmigroupofficial_</p>
                </div>
                <div className="social-box text-left">
                    <Image src='/images/social2.png' width={300} height={300} className="object-contain mx-auto w-full"/>
                    <p className="manrope text-black mt-2">Facebook @Rashmigroupmumbai</p>
                </div>
                <div className="social-box text-left">
                    <Image src='/images/social3.png' width={300} height={300} className="object-contain mx-auto w-full"/>
                    <p className="manrope text-black mt-2">Youtube  @GharHoToAisa</p>
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GrowthPartner;
