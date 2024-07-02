import { dynamicBrands } from "@/utils/brands";
import Image from "next/image";
import React from "react";

const Partners = () => {
  return (
    <section className="py-16 bg-[#FEE9FE]">
      <div className="container">
        <div className="partners-wrap text-center">
          <h2 data-aos="fade-up">Partners</h2>
          <div className="flex flex-wrap justify-center gap-x-8 md:gap-x-24 gap-y-12 my-10 mx-auto">
            {dynamicBrands.map((elem, ind) => (
              <div style={{width:"100px"}} className="text-center m-auto" >
                <Image
                  src={elem.img}
                  key={ind}
                  width={75}
                  height={75}
                  data-aos="fade-up"
                  className="object-contain justify-self-center m-auto mix-blend-darken	"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
