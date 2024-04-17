import { dynamicBrands } from "@/utils/brands";
import Image from "next/image";
import React from "react";

const Partners = () => {
  return (
    <section className="py-16 bg-lavendar">
      <div className="container">
        <div className="partners-wrap text-center">
          <h2>Partners</h2>
          <div className="grid md:grid-cols-6 grid-cols-3 w-full items-center justify-center gap-6 mt-8">
            {dynamicBrands.map((elem, ind) => (
              <div style={{width:"100px"}} className="text-center m-auto">
                <Image
                  src={elem.img}
                  key={ind}
                  width={75}
                  height={75}
                  className="object-contain justify-self-center m-auto"
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
