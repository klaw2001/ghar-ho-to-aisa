import HomeFilters from "@/components/filters/home-filter";
import { properties } from "@/utils/propertiesJson";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const OurProjects = () => {
  return (
    <section className="py-16">
      <div className="container">
        <div className="projects-wrapper text-center">
          <h2>Browse Properties</h2>
          <HomeFilters />
          <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
            {properties.map((elem, ind) => (
              <div
                className="property-box flex text-left gap-1 items-center flex-col md:flex-row"
                key={ind}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={elem.image}
                    width={238}
                    height={245}
                    className="h-full w-full"
                  />
                  <div className="bg-gold text-white absolute top-0 left-[4px] text-xs p-2 manrope">
                    {elem.status}
                  </div>
                </div>
                <div className="property-text p-3">
                  <h4>{elem.name}</h4>
                  <span className="text-xs manrope text-purple font-semibold">
                    {elem.location.address}
                  </span>
                  <p className="manrope small-para font-medium my-2">
                    {elem.description}
                  </p>
                  <div className="grid grid-cols-3 my-3">
                    {elem.amenities.map((a, ind) => (
                      <div key={ind} className="manrope text-xs font-medium">
                        {a.text}
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-semibold manrope">
                      Starting @ {elem.price}...
                    </span>
                    <Link
                      href=""
                      className="manrope text-xs font-bold underline underline-offset-2"
                    >
                      Learn More &gt;
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProjects;
