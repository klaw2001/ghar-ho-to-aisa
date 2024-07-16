import React from "react";
import TestimonialCard from "../testimonial-card";
import TestimonialVideoCard from "../testimonial-video-card";

const CardTwo = () => {
  return (
    <div class="grid grid-cols-3 gap-4">
      <div class="relative h-full">
        <TestimonialVideoCard name={"John Doe"} title={"Manager"} video={'/videos/test1.mp4'} />
      </div>
      <div class="">
        <TestimonialCard
          name={"Rupesh Singh"}
          title={"Heights Customer"}
          text={
            "Had a good overview of the project, Like their 2bhk budget-friendly flat. Thank you Nidhi for explaining and guiding me about the project."
          }
          date={"Mar 18, 2023"}
          height={"300px"}
        />
      </div>
      <div class="">
        <TestimonialCard
          name={"Devendra Mehra"}
          title={"Horizon Customer"}
          text={
            "Booked my dream home with the help of Ghar Ho To Aisa's Interest-free Apne Dam Par payment plan. It saves my lacs of rupees. Thank you so much!"
          }
          date={"Mar 18, 2023"}
          height={"300px"}
        />
      </div>
    </div>
  );
};

export default CardTwo;
