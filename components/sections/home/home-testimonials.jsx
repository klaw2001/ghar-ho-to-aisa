import TestimonialCard from "@/components/testimonials/testimonial-card";
import ResponsiveTestimonial from "@/components/testimonials/testimonial-mobile-wrapper";
import TestimonialWrapper from "@/components/testimonials/testimonial-wrapper";
import React from "react";

const HTestimonials = () => {
  return (
    <section className="mb-24 md:md-0 py-16">
      <div className="container">
        <h2 className="mb-6 text-center md:block hidden" data-aos="fade-up">
          Hear from our Customers
        </h2>
        <h3 className="mb-12 text-center md:hidden block" data-aos="fade-up">
          Hear from our Customers
        </h3>
        <div className="lg:block hidden" data-aos="fade-up">
          <TestimonialWrapper />
        </div>
        <div className="block lg:hidden" data-aos="fade-up">
          <ResponsiveTestimonial />
        </div>
      </div>
    </section>
  );
};

export default HTestimonials;
