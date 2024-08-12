import BreadcrumbBox from "@/components/global/breadcrumb-box";
import React from "react";

const SearchHero = () => {
  return (
    <section className="pt-16">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 grid-cols-1 items-center">
          <div>
            <div className="pt-16">
              <BreadcrumbBox page={"Search"} alignment={"justify-start"} />
              <h1 className="text-[#3A0D32] pl-4">{"Search"}</h1>
              {/* <p className="manrope pl-4">
                Lorem ipsum dolor sit amet consectetur{" "}
              </p> */}
              <p className="manrope pl-4">Results </p>
            </div>
          </div>
          <div>
            <div className="search-box position-relative">
              <div className="mt-10 relative mx-auto text-gray-600">
                <input
                  className="border-2 border-black w-full bg-white h-10 pl-16 pr-6 manrope text-sm placeholder:text-black focus:outline-none"
                  type="search"
                  name="search"
                  placeholder="Search"
                  style={{ height: "50px" }}
                />
                <button
                  type="submit"
                  className="absolute left-0 top-0 bottom-0 ml-4"
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
        </div>
      </div>
    </section>
  );
};

export default SearchHero;
