import Layout from "@/components/global/Layout";
import SearchBox from "@/components/global/search-box";
import BannerCarousel from "@/components/sections/home/banner-carousel";
import ExpertiseSection from "@/components/sections/home/expertise";
import ExploreProjects from "@/components/sections/home/explore-projects";
import HeroNewText from "@/components/sections/home/hero-2-text";
import HeroSection from "@/components/sections/home/hero-section";
import HomeBlogs from "@/components/sections/home/home-blogs";
import HomeMobileBlogs from "@/components/sections/home/home-mobile-blogs";
import HTestimonials from "@/components/sections/home/home-testimonials";
import Innovations from "@/components/sections/home/our-innovations";
import OurProjects from "@/components/sections/home/our-projects";
import Partners from "@/components/sections/home/partners";

export default function Home() {
  return (
    <>
      <Layout>
        {/* <SearchBox/> */}
        <HeroSection/>
        <HeroNewText/>
        <OurProjects/>
        <ExpertiseSection/>
        <BannerCarousel/>
        <Innovations/>
        <ExploreProjects/>
        <HTestimonials/>
        <Partners/>
        <HomeBlogs/>
        <HomeMobileBlogs/>
      </Layout>
      </>
  );
}
