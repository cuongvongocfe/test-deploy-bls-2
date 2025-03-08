"use client";
import React from "react";
import { DotLottiePlayer } from "@dotlottie/react-player";
import "@dotlottie/react-player/dist/index.css";

const LottieAnimation = () => {
  return (
    <div className="lottie-container">
      <DotLottiePlayer
        src="/animation_llqd7ey4.lottie"
        autoplay
        loop
        style={{ width: "300px", height: "300px" }}
        onError={(error) => console.error("Lottie error:", error)}
      />

    </div>
  );
};

export default LottieAnimation;