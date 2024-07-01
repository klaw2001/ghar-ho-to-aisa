import React from 'react'
import TestimonialCard from '../testimonial-card'

const CardOne = () => {
  return (
    <div class="grid grid-rows-1 grid-flow-col gap-4">
          <div class="row-span-3 ...">
            <TestimonialCard
              name={"Shiv Kumar Vishwakarma"}
              title={"Horizon Customer"}
              text={
                "Nice flats in less budget...Very professional, experienced, and helpful staff.. highly recommended..👍😃"
              }
              date={"Mar 18, 2023"}
              height={"300px"}
            />
          </div>
          <div class="row-span-3 md:h-[522px] ...">
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
          <div class="col-span-2 ...">
             <TestimonialCard
              name={"Anil Dave"}
              title={"Heights Customer"}
              text={
                "The best project with so many good amenities for low-budget people."
              }
              date={"Mar 18, 2023"}
            />
          </div>
          <div class="row-span-2 col-span-2 ...">
             <TestimonialCard
              name={"Shankar Saroj"}
              title={"Investor"}
              text={
                "Ghar ho to aisa k project is awesome and best for investors also."
              }
              date={"Mar 18, 2023"}
            />
          </div>
        </div>
  )
}

export default CardOne