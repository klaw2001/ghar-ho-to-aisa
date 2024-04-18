import TestimonialCard from "@/components/testimonials/testimonial-card";
import TestimonialWrapper from "@/components/testimonials/testimonial-wrapper";
import React from "react";

const HTestimonials = () => {
  return (
    <section className="py-16">
      <div className="container">
        <h2 className="mb-6 text-center">Hear from our Customers</h2>
        <TestimonialWrapper/>
      </div>
    </section>
  );
};

export default HTestimonials;
