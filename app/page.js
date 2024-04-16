import Layout from "@/components/global/Layout";
import ExpertiseSection from "@/components/sections/home/expertise";
import ExploreProjects from "@/components/sections/home/explore-projects";
import HeroSection from "@/components/sections/home/hero-section";
import Innovations from "@/components/sections/home/our-innovations";
import OurProjects from "@/components/sections/home/our-projects";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Layout>
        <HeroSection/>
        <OurProjects/>
        <ExpertiseSection/>
        <Innovations/>
        <ExploreProjects/>
      </Layout>
      </>
  );
}
