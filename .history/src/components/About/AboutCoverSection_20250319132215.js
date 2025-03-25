import Image from "next/image";
import React from "react";
import profileCharacter from "../../../public/character.png";

// Define constants outside component
const IMAGE_SIZES = "(max-width: 768px) 100vw, (max-width: 1180px) 50vw, 50vw";
const BASE_CLASSES = "w-full border-solid border-dark dark:border-light";

const AboutCoverSection = () => {
  return (
    <section
      className={`${BASE_CLASSES} border-b-2 flex flex-col md:flex-row items-center justify-center text-dark dark:text-light overflow-hidden`}
    >
      {/* Image Container */}
      <div
        className={`${BASE_CLASSES} w-full md:w-1/2 h-auto md:h-[75vh] border-r-2 flex justify-center`}
      >
        <Image
          src={profileCharacter}
          alt="CodeBucks"
          className="w-full h-auto object-contain object-center"
          width={600} // Đặt kích thước cố định để tối ưu
          height={750} // Tùy chỉnh theo tỷ lệ hình ảnh thực tế
          priority={false} // Loại bỏ priority nếu không cần tải ngay
          loading="lazy" // Thêm lazy loading
          sizes={IMAGE_SIZES}
        />
      </div>

      {/* Text Content Container */}
      <div
        className={`${BASE_CLASSES} w-full md:w-1/2 flex flex-col items-start justify-center p-5 sm:p-8 md:p-10 lg:p-16 text-wrap`}
      >
        <h2
          className="font-bold capitalize text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center md:text-left leading-tight"
        >
          “Môi trường sạch là nền tảng của sự phát triển bền vững”
        </h2>
        <p className="font-medium mt-4 text-sm sm:text-base md:text-lg leading-relaxed">
          Bảo vệ môi trường cũng chính là yếu tố sống còn và đặc biệt góp phần quan trọng
          vào quá trình hội nhập và phát triển bền vững của doanh nghiệp. Với sứ
          mệnh đó, <strong>CÔNG TY TNHH BẢO LONG SCRAP</strong> ra đời để cùng chung tay,
          góp sức cùng cộng đồng bảo vệ môi trường. Với phương châm hợp tác đôi
          bên cùng có lợi, công ty chúng tôi cam kết luôn đảm bảo cung cấp cho
          quý khách hàng dịch vụ môi trường tốt nhất với chi phí xử lý hợp lý nhất.
          <br />
          <span className="block mt-4 text-xl sm:text-2xl md:text-3xl font-bold text-black dark:text-yellow-300">
            “Hãy cùng chung tay bảo vệ môi trường sống, tất cả vì tương lai con em chúng ta”
          </span>
        </p>
      </div>
    </section>
  );
};

export default AboutCoverSection;