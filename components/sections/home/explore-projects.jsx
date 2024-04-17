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
    <section className="py-16 bg-lavendar">
      <div className="container">
        <div className="exp-projects-wrapper text-center">
          <h1 className="relative exp-heading">
            Explore Projects in your desired locations
          </h1>
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
