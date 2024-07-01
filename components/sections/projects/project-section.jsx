"use client";
import React, { useState } from "react";
import ImageView from "./image-view";
import MapView from "./map-view";

const ProjectSection = () => {
  const [activeTab, setActiveTab] = useState("image");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <section className="py-16">
      <div className="container mx-auto">
        <div className="project-wrapper">
          <div className="grid grid-cols-2 items-center">
            <div className="tabs-box">
              <ul className="flex">
                <li
                  className={`mr-6 cursor-pointer text-black py-2 px-4 manrope  ${
                    activeTab === "image"
                      ? "font-bold bg-purple text-white"
                      : "border-2 border-black"
                  }`}
                  onClick={() => handleTabClick("image")}
                >
                  Image View
                </li>
                <li
                  className={`cursor-pointer text-black py-2 px-4 manrope  ${
                    activeTab === "map"
                      ? "font-bold bg-purple text-white"
                      : "border-2 border-black"
                  }`}
                  onClick={() => handleTabClick("map")}
                >
                  Map View
                </li>
              </ul>
             
            </div>
            <div className="input-box text-right">
              <div className="pt-2 relative mx-auto text-gray-600">
                <input
                  className="border-2 border-black bg-white h-10 pl-10 pr-16 rounded-lg manrope text-sm placeholder:text-black focus:outline-none"
                  type="search"
                  name="search"
                  placeholder="Search"
                />
                <button
                  type="submit"
                  className="absolute right-[220px] top-0 bottom-0 mt-2 mr-4"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-search"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.3-4.3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          {activeTab === "image" && (
                <ImageView/>
              )}
              {activeTab === "map" && (
                <MapView/>
              )}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
