"use client";
import { timelineData } from "@/utils/timeline";
import React, { useState, useEffect, useRef } from "react";

const TimelineSection = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const iconsRefs = useRef([]);
 
  useEffect(() => {
    const updateScrollProgress = () => {
      const timelineSection = document.querySelector(".timeline-wrapper");
      if (!timelineSection) return;

      const scrollTop = window.scrollY || window.pageYOffset;
      const timelineOffsetTop = timelineSection.offsetTop;
      const timelineHeight = timelineSection.offsetHeight;
      const windowScrollHeight = window.innerHeight;
      const scrollPosition =
        scrollTop - timelineOffsetTop + windowScrollHeight / 2;
      const scrollPercentage = Math.max(
        0,
        Math.min(1, scrollPosition / timelineHeight)
      );

      setScrollProgress(scrollPercentage * 100);

      // Check scroll position relative to each icon
      iconsRefs.current.forEach((iconRef, index) => {
        const iconOffsetTop = iconRef.offsetTop;
        const iconHeight = iconRef.offsetHeight;
        const iconPosition = iconOffsetTop - timelineOffsetTop;

        if (
          scrollPosition >= iconPosition &&
          scrollPosition <= iconPosition + iconHeight
        ) {
          // If scroll bar touches or passes the icon, update its class
          iconRef.classList.add("text-purple");
        } else {
          // Otherwise, reset to default class
          iconRef.classList.remove("text-purple");
        }
      });
    };

    const scrollHandler = () => {
      updateScrollProgress();
      setIsScrolling(true);
      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => setIsScrolling(false), 150); // Adjust this value to control when to stop updating after scroll stops
    };

    let timeoutRef = { current: null };

    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
      clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <section className="py-16">
      <div className="container">
        <div className="timeline-wrapper">
          <div className="timeline-title">
            <p className="small-para manrope font-bold">Our Story</p>
            <h2>Share your journey from the beginning to now</h2>
          </div>
          <div className="timeline-wrap relative">
            <div
              className="line absolute top-0 left-[15px] md:left-0 md:right-0 bottom-0 h-full w-[5px] mx-auto"
              style={{
                backgroundColor: isScrolling
                  ? "rgb(128,0,128)"
                  : "rgb(192,192,192)"
                  ,
                height: `${scrollProgress}%`,
              }}
            ></div>
            <div className="space-y-8 relative">
              {timelineData.map((item, index) => (
                <div
                  key={item.id}
                  data-aos="fade-up"
                  className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group ${
                    item.id % 2 === 0 ? "" : "is-active"
                  }`}
                >
                  {/* Icon */}
                  <div
                    ref={(ref) => (iconsRefs.current[index] = ref)}
                    className={`flex items-center justify-center w-10 h-10 shrink-0 md:order-1 ${
                      item.id % 2 === 0
                        ? "md:group-odd:-translate-x-1/2"
                        : "md:group-even:translate-x-1/2"
                    } ${
                      scrollProgress >= index * (100 / timelineData.length)
                        ? "text-purple"
                        : "text-black"
                    }`}
                  >
                    {/* Render the icon from item.icon */}
                    <div className="flex items-center justify-center w-10 h-10 bg-white md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                      <div
                        dangerouslySetInnerHTML={{ __html: item.icon }}
                        ref={(ref) => (iconsRefs.current[index] = ref)}
                        className={`${
                          scrollProgress >= index * (130 / timelineData.length)
                            ? "text-purple"
                            : "text-black"
                        }`}
                      />
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
