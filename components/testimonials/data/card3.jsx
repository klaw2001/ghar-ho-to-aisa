import React from "react";
import TestimonialCard from "../testimonial-card";
import TestimonialVideoCard from "../testimonial-video-card";

const CardThree = () => {
  return (
    <div class="grid grid-rows-1 grid-cols-4 grid-flow-col gap-4">
          <div class="row-span-3 relative h-full">
          <TestimonialVideoCard name={"John Doe"} title={"Manager"} />
          </div>
          
          <div class="col-span-2 ... relative h-[250px]">
          <TestimonialVideoCard name={"John Doe"} title={"Manager"} />
          </div>
          <div class="row-span-2 col-span-2 ... relative h-[250px]">
          <TestimonialVideoCard name={"John Doe"} title={"Manager"} />
          </div>
          <div class="row-span-3">
             <TestimonialCard
              name={"Ganesh"}
              title={"Customer"}
              text={
                "Excellent flat planning resulted in no wasted space and more usable space. A flawless undertaking that surpassed my family's expectations."
              }
              date={"Mar 18, 2023"}
              height={"300px"}
            />
          </div>
        </div>
  );
};

export default CardThree;
