"use client";
import React from "react";
import { DotLottiePlayer } from "@dotlottie/react-player";
import "@dotlottie/react-player/dist/index.css";
import "./LottieAnimation.css"; // Import file CSS

const LottieAnimation = () => {
  return (
    <div className="lottie-container">
      <DotLottiePlayer
        className="lottie-player" // Áp dụng class cho kích thước
        src="/animation_llqd7ey4.lottie"
        autoplay
        loop
        onError={(error) => console.error("Lottie error:", error)}
      />
    </div>
  );
};

export default LottieAnimation;