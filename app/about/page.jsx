import Layout from "@/components/global/Layout";
import CircularText from "@/components/global/circular-text";
import HeroGlobal from "@/components/global/hero-global";
import CurrentProjects from "@/components/sections/about/current-projects";
import KnowMoreAboutUs from "@/components/sections/about/know-more-about-us";
import TimelineSection from "@/components/sections/about/timeline-section";
import React from "react";

const AboutPage = () => {
  return (
    <Layout>
      <HeroGlobal
        myclass="text-center pt-32 pb-16 border-b-2 border-black relative"
        alignBreadcrumb="justify-center"
        para="We believe in building not just homes but lifelong partnerships, where excellence meets experience, and dreams find their address."
        title="Our"
        spanText="Mission"
        image="/images/banner1.jpg"
      />
      <TimelineSection/>
      <CurrentProjects/>
      <KnowMoreAboutUs/>
    </Layout>
  );
};

export default AboutPage;
