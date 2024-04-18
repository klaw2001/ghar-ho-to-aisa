import TestimonialCard from "@/components/testimonials/testimonial-card";
import ResponsiveTestimonial from "@/components/testimonials/testimonial-mobile-wrapper";
import TestimonialWrapper from "@/components/testimonials/testimonial-wrapper";
import React from "react";

const HTestimonials = () => {
  return (
    <section className="py-16">
      <div className="container">
        <h2 className="mb-6 text-center">Hear from our Customers</h2>
        <div className="lg:block hidden">
          <TestimonialWrapper />
        </div>
        <div className="block lg:hidden">
          <ResponsiveTestimonial/>
        </div>
      </div>
    </section>
  );
};

export default HTestimonials;
