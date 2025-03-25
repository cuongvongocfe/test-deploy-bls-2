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
        <h2 className="font-bold capitalize text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center md:text-left leading-tight mb-4 text-[#7B00D3] dark:text-yellow-300">
          “Act locally, impact globally”
        </h2>
        <p className="font-medium text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
          Mọi hành động nhỏ bé tại địa phương đều có thể tạo nên sự thay đổi tích cực to lớn. Mỗi hành động cụ thể, mỗi kilôgam phế liệu được tái chế, mỗi tấn chất thải được xử lý an toàn đều giảm thiểu tác động tiêu cực đến môi trường, hạn chế ô nhiễm, tiết kiệm cũng như tái chế tài nguyên. Chúng ta không cần phải chờ đợi những giải pháp lớn lao từ bên ngoài, mà có thể bắt đầu từ chính những gì trong tầm tay. Ngay cả những hành động nhỏ nhất, khi được thực hiện với sự cam kết và ý thức, đều góp phần bảo vệ môi trường, xây dựng một tương lai bền vững, và lan tỏa thông điệp mạnh mẽ về trách nhiệm với nơi chúng ta sống.
        </p>
      </div>
    </section>
  );
};

export default AboutCoverSection;