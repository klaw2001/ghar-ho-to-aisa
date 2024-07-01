import React from "react";
import Rating from "./ratings";

const TestimonialCard = ({ name, title, text, date , height }) => {
  return (
    <article className="p-6 border-2 border-black manrope h-full rounded">
      <div className="name-box manrope">
        <h5 className="font-bold manrope">{name}</h5>
        <span className="text-xs manrope">{title}</span>
      </div>
      <Rating />
      <article className="text-lg my-4 content-top manrope font-bold" style={{height}}>{text}</article>
      <span className="manrope">{date}</span>
    </article>
  );
};

export default TestimonialCard;
