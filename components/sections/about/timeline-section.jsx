import { timelineData } from "@/utils/timeline";
import React from "react";

const TimelineSection = () => {
  return (
    <section className="py-16">
      <div className="container">
        <div className="timeline-wrapper">
          <div className="timeline-title">
            <p className="small-para manrope font-bold">Our Story</p>
            <h2>Share your journey from the beginning to now</h2>
          </div>
          <div className="timeline-wrap">
            <div class="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
              {timelineData.map((item) => (
                <div
                  key={item.id}
                  class={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group ${
                    item.id % 2 === 0 ? "" : "is-active"
                  }`}
                >
                  {/* Icon */}
                  <div
                    class={`flex items-center justify-center w-10 h-10  shrink-0 md:order-1 ${
                      item.id % 2 === 0
                        ? "md:group-odd:-translate-x-1/2"
                        : "md:group-even:translate-x-1/2"
                    }`}
                  >
                    {/* Render the icon from item.icon */}
                    <div class="flex items-center justify-center w-10 h-10  bg-white md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                      <div dangerouslySetInnerHTML={{ __html: item.icon }} />
                    </div>
                  </div>
                  {/* Card */}
                  <div
                    className={`w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 ${
                      item.id % 2 === 0 ? "md:text-right" : ""
                    }`}
                  >
                    <div className="mb-1">
                      <p className="small-para font-bold manrope">
                        {item.year}
                      </p>
                      <h3 className="font-bold text-slate-900 manrope">
                        {item.title}
                      </h3>
                    </div>
                    <div className="manrope">{item.para}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
