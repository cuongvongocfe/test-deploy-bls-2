import React, { memo } from "react";

// Define constants outside component
const BASE_CLASSES =
  "w-full bg-accent dark:bg-accentDark text-light dark:text-dark whitespace-nowrap overflow-hidden";
const ROLL_CLASSES =
  "animate-roll w-full py-2 sm:py-3 flex items-center justify-center capitalize font-semibold tracking-wider text-sm sm:text-base";
const SEPARATOR = " | ";

const InsightRoll = memo(({ insights }) => {
  // Early return if insights is empty
  if (!insights?.length) return null;

  return (
    <div className={BASE_CLASSES}>
      <div className={ROLL_CLASSES}>
        {insights.map((text, index) => (
          <span key={index}>
            {text}
            {index < insights.length - 1 && SEPARATOR}
          </span>
        ))}
      </div>
    </div>
  );
});

// Add display name for better debugging
InsightRoll.displayName = "InsightRoll";

export default InsightRoll;