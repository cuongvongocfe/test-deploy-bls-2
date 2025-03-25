import Image from "next/image";
import React from "react";
import profileCharacter from "../../../public/character.png";

// Define constants outside component
const IMAGE_SIZES = "(max-width: 768px) 100vw, (max-width: 1180px) 50vw, 50vw";
const BASE_CLASSES = "w-full border-solid border-dark dark:border-light";

const AboutCoverSection = () => {
  return (
    <section
      className={`${BASE_CLASSES} border-b-2 flex flex-col md:flex-row items-center justify-center text-dark dark:text-light overflow-hidden min-h-[50vh]`}
    >
      {/* Image Container */}
      <div
        className={`${BASE_CLASSES} w-full md:w-1/2 h-auto md:h-[75vh] border-r-2 flex justify-center`}
      >
        <Image
          src={profileCharacter}
          alt="CodeBucks"
          className="w-full h-auto object-contain object-center"
          width={600} // Kích thước cố định, điều chỉnh theo hình ảnh thực tế
          height={750} // Tùy chỉnh theo tỷ lệ hình ảnh thực tế
          loading="lazy"
          sizes={IMAGE_SIZES}
          style={{ maxHeight: "100%", maxWidth: "100%" }} // Đảm bảo hình ảnh không vượt container
        />
      </div>

      {/* Text Content Container */}
      <div
        className={`${BASE_CLASSES} w-full md:w-1/2 flex flex-col items-start justify-center p-4 sm:p-6 md:p-8 lg:p-12 text-wrap`}
      >
        <h2 className="font-bold capitalize text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center md:text-left leading-tight mb-4">
          “Act locally, impact globally”
        </h2>
       
      </div>
    </section>
  );
};

export default AboutCoverSection;