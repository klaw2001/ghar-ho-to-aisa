import HeroGlobal from "@/components/global/hero-global";
import NewLayout from "@/components/global/new-layout";
import EmiSection from "@/components/sections/innovations/emi-cal";
import GrowthPartner from "@/components/sections/innovations/growth-partner";
import InnovationBox from "@/components/sections/innovations/innovation-box";
import React from "react";

const page = () => {
  return (
    <NewLayout>
      <HeroGlobal
        myclass="text-center pt-32 pb-16 border-b-2 border-black relative"
        alignBreadcrumb="justify-center"
        para="we believe that true innovation stems from empathizing with the challenges our customers face and creating solutions that directly address their needs."
        title="Our"
        spanText="Innovations"
        page={"Innovations"}
        image="/images/banner1.jpg"
        circleAlign={"-bottom-[58px] -right-[58px]"}
      />
      <InnovationBox/>
      <EmiSection/>
      <GrowthPartner/>
    </NewLayout>
  );
};

export default page;
