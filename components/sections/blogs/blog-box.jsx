import React from "react";
import TabsSec from "./tabs-section";

const BlogBox = () => {
  return (
    <section className="py-8">
      <div className="container">
        <div className="pt-2 relative mx-auto text-gray-600">
          <input
            className="border-2 border-black bg-white h-10 pl-10 pr-16 rounded-lg manrope text-sm placeholder:text-black focus:outline-none"
            type="search"
            name="search"
            placeholder="Search"
          />
          <button type="submit" className="absolute left-[10px] top-0 bottom-0 mt-2 mr-4">
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
        <TabsSec color={'slate'}/>
      </div>
    </section>
  );
};

export default BlogBox;
