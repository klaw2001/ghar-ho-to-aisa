import React from "react";
import DistrictNavCarousel from "./district-nav-carousel";

const ExploreProjects = () => {
  const districts = [
    { id: 1, dist: "Mira Road" },
    { id: 2, dist: "Vasai" },
    { id: 3, dist: "Nalasopara" },
    { id: 4, dist: "Thane" },
    { id: 5, dist: "Naigaon" },
    { id: 6, dist: "Malad" },
  ];
  return (
    <section className="mb-24 md:my-28 py-16 bg-[#FEE9FE]">
      <div className="container mx-auto">
        <div className="exp-projects-wrapper text-center">
          <h2 className="relative exp-heading">
            Explore Projects in your desired locations
          </h2>
          <span className="text-sm manrope">
            Explore our wide range of residential and commercial properties and
            discover your perfect space.
          </span>
          <DistrictNavCarousel districts={districts} />
        </div>
      </div>
    </section>
  );
};

export default ExploreProjects;
