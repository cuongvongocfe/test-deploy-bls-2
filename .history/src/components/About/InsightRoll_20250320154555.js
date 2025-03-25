import React from "react";

// Define constants for class names to improve readability
const CONTAINER_CLASSES =
  "w-full bg-accent dark:bg-accentDark text-light dark:text-dark whitespace-nowrap overflow-hidden";
const ROLL_CLASSES =
  "animate-roll w-full py-2 sm:py-3 flex items-center justify-center capitalize font-semibold tracking-wider text-sm sm:text-base";

const InsightRoll = ({ insights }) => {
  return (
    <div className={CONTAINER_CLASSES}>
      <div className={ROLL_CLASSES}>
        {insights.map((text, index) => (
          <div key={index}>
            {text}
            <span className="px-2 sm:px-4">|</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InsightRoll;