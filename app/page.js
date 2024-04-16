import Layout from "@/components/global/Layout";
import HeroSection from "@/components/sections/home/hero-section";
import OurProjects from "@/components/sections/home/our-projects";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Layout>
        <HeroSection/>
        <OurProjects/>
      </Layout>
      </>
  );
}
