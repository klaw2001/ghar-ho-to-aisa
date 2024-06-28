"use client"
import React, { useState, useEffect } from "react";

const TypewriterText = ({ text, delay }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayedText((prev) => prev + text[currentIndex]);
        currentIndex++;
      } else {
        clearInterval(intervalId);
      }
    }, delay);

    return () => clearInterval(intervalId);
  }, [text, delay]);

  return (
    <span className="typewriter-text">
      {displayedText}
    </span>
  );
};

const TypewriterComponent = () => {
  return (
    <div className="typewriter-container">
      <div>
        <span className="text-white text-5xl"><TypewriterText text="Delivering" delay={100} /></span><br />
        <span className="leading-1 hero-linear text-9xl"><TypewriterText text="Happiness" delay={100} /></span><br />
        <span className="text-white text-5xl"><TypewriterText text="Since 1998" delay={100} /></span>
      </div>
    </div>
  );
};

export default TypewriterComponent;
