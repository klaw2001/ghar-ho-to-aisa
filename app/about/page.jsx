import CircularText from "@/components/global/circular-text";
import HeroGlobal from "@/components/global/hero-global";
import NewLayout from "@/components/global/new-layout";
import CurrentProjects from "@/components/sections/about/current-projects";
import KnowMoreAboutUs from "@/components/sections/about/know-more-about-us";
import TimelineSection from "@/components/sections/about/timeline-section";
import React from "react";

const AboutPage = () => {
  return (
    <NewLayout>
      <HeroGlobal
        myclass="text-center pt-32 pb-16 border-b-2 border-black relative"
        alignBreadcrumb="justify-center"
        para="We believe in building not just homes but lifelong partnerships, where excellence meets experience, and dreams find their address."
        title="Our"
        spanText="Mission"
        image="/images/banner1.jpg"
        page={'About'}
      />
      <TimelineSection/>
      <CurrentProjects/>
      <KnowMoreAboutUs/>
    </NewLayout>
  );
};

export default AboutPage;
