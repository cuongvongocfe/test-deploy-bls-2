"use client";
import React from "react";
import { DotLottiePlayer } from "@dotlottie/react-player";

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