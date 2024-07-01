import React from "react";
import Rating from "./ratings";

const TestimonialVideoCard = ({ video, name, title }) => {
  return (
    <article className="border-2 border-black relative h-full rounded">
      <div className="flex justify-between items-end absolute bottom-0 left-0 right-0 h-full p-4">
        <div className="play-icon ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-12 h-12"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
            />
          </svg>
        </div>
        <div className="test-test box">
            <h5 className="font-bold manrope">{name}</h5>
            <span className="text-xs manrope">{title}</span>
            <Rating/>
        </div>
      </div>
    </article>
  );
};

export default TestimonialVideoCard;
