"use client";
import { projectCategories, projects } from "@/utils/projects";
import Image from "next/image";
import React, { useState } from "react";

const ImageView = () => {
  const [activeTab, setActiveTab] = useState("Completed");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <section className="py-16">
      <ul className="grid grid-cols-3 gap-4">
        {projectCategories.map((elem, index) => (
          <li
            key={index}
            className={`cursor-pointer py-2 px-4 text-center font-bold manrope text-xl ${
              activeTab === elem.name
                ? "border-b-2 border-[#9f238b] text-purple"
                : "border-b-2 border-black"
            }`}
            onClick={() => handleTabClick(elem.name)}
          >
            {elem.name}
          </li>
        ))}
      </ul>
      <section className="py-32">
        {projects.map((elem, ind) => {
          const index = ind % 2 == !0;
          return (
            <div
              className="project-property-box grid md:grid-cols-2 grid-cols-1 mb-20"
              key={ind}
               data-aos='fade-up'
            >
              <div className={`image-box ${index ? "order-1" : "order-none"}`}>
                <Image
                  src={elem.image}
                  width={620}
                  height={450}
                  className="object-contain w-full"
                />
              </div>
              <div className={`p-text p-5 h-full content-center ${index && 'text-right'}`}
             
              >
                <h3 className={`manrope mb-8 relative w-max pr-10 before:content-[''] before:absolute before:-bottom-2 before:w-full before:border-2 before:border-black ${index && 'ml-auto'}`}>
                  {elem.name}
                </h3>
                <div className={`tags flex items-center gap-4 my-4 ${index && 'justify-end'}`}>
                  <div className="text-base bg-gray-200 p-2 manrope">
                    {elem.mainCategory}
                  </div>
                  <div className="text-base p-2 manrope">{elem.location}</div>
                </div>
                <p className="manrope">{elem.text}</p>
              </div>
            </div>
          );
        })}
      </section>
    </section>
  );
};

export default ImageView;
