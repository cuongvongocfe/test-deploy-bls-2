"use client";
import React from "react";
import { DotLottiePlayer } from "@dotlottie/react-player";
import "@dotlottie/react-player/dist/index.css";

const LottieAnimation = () => {
  return (
    <DotLottiePlayer
      src="/office-animation.lottie" // Thay bằng file animation mới
      autoplay
      loop
      style={{ width: "300px", height: "300px" }}
      onError={(error) => console.error("Lottie error:", error)}
    />
  );
};

export default LottieAnimation;