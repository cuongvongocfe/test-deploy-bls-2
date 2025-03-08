"use client";
import React from "react";
import { DotLottiePlayer } from "@dotlottie/react-player";
import "@dotlottie/react-player/dist/index.css";

const LottieAnimation = () => {
  return (
    <DotLottiePlayer
      src="/animation_llqd7ey4.lottie" // Đảm bảo file tồn tại trong public/
      autoplay
      loop
      style={{ width: "300px", height: "300px" }} // Tùy chỉnh kích thước
      onError={(error) => console.error("Lottie error:", error)} // Xử lý lỗi
    />
  );
};

export default LottieAnimation;