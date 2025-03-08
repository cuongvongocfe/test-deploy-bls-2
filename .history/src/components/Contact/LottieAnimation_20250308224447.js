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
      style={{ width: "300px", height: "300px" }} // Điều chỉnh kích thước
      onError={(error) => console.error("Lottie error:", error)} // Xử lý lỗi
    />
  );
};

export default LottieAnimation;