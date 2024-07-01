import EmiCalculator from "@/components/calculators/emi-calculator";
import React from "react";

const EmiSection = () => {
  return (
    <section className="py-16 emi-calulator-wrapper">
      <div className="container mx-auto">
        <h2 className="mb-5">EMI Calculator</h2>
        <EmiCalculator/>
      </div>
    </section>
  );
};

export default EmiSection;
