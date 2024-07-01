import HeroGlobal from "@/components/global/hero-global";
import NewLayout from "@/components/global/new-layout";
import HeaderForOthers from "@/components/header/HeaderForOthers";
import ProjectSection from "@/components/sections/projects/project-section";
import React from "react";

const page = () => {
  return (
    <NewLayout>
      <HeaderForOthers />
      <HeroGlobal
        myclass="text-left pt-32 pb-16 border-b-2 border-black relative"
        alignBreadcrumb="justify-start"
        para="Our specialized team excels in understanding and developing areas, strategically placing our projects at the heart of each location. This expertise ensures that our properties are not just buildings but thriving hubs within vibrant communities."
        title="Our"
        spanText="Projects"
        page={"Projects"}
      />
      <ProjectSection/>
    </NewLayout>
  );
};

export default page;
