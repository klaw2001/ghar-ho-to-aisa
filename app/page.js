import Layout from "@/components/global/Layout";
import BannerCarousel from "@/components/sections/home/banner-carousel";
import ExpertiseSection from "@/components/sections/home/expertise";
import ExploreProjects from "@/components/sections/home/explore-projects";
import HeroSection from "@/components/sections/home/hero-section";
import HTestimonials from "@/components/sections/home/home-testimonials";
import Innovations from "@/components/sections/home/our-innovations";
import OurProjects from "@/components/sections/home/our-projects";
import Partners from "@/components/sections/home/partners";

export default function Home() {
  return (
    <>
      <Layout>
        <HeroSection/>
        <OurProjects/>
        <ExpertiseSection/>
        <BannerCarousel/>
        <Innovations/>
        <ExploreProjects/>
        <HTestimonials/>
        <Partners/>
      </Layout>
      </>
  );
}
