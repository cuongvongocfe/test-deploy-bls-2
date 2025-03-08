"use client";
import React from "react";

const LottieAnimation = () => {
  return (
    <div style={{ width: "300px", height: "300px" }}>
      <svg
        width="100"
        height="100"
        viewBox="0 0 100 100"
        style={{ animation: "spin 2s linear infinite" }}
      >
        <circle cx="50" cy="50" r="40" fill="blue" />
        <style>
          {`
            @keyframes spin {
              from { transform: rotate(0deg); }
              to { transform: rotate(360deg); }
            }
          `}
        </style>
      </svg>
    </div>
  );
};

export default LottieAnimation;