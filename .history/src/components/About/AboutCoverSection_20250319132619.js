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
          “Môi trường sạch – nền tảng bất biến cho sự phát triển bền vững”
        </h2>
        <p className="font-medium mt-2 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
          Bảo vệ môi trường không chỉ là yếu tố sống còn mà còn là chìa khóa then
          chốt, góp phần to lớn vào hành trình hội nhập và phát triển bền vững
          của mỗi doanh nghiệp. Mang trong mình sứ mệnh cao cả ấy,{" "}
          <strong>CÔNG TY TNHH BẢO LONG SCRAP</strong> ra đời, kiên định đồng hành cùng
          cộng đồng trong công cuộc bảo vệ thiên nhiên xanh mát. Với triết lý
          hợp tác đôi bên cùng thịnh vượng, chúng tôi cam kết mang đến cho quý
          khách hàng những dịch vụ môi trường xuất sắc nhất, kết hợp chất lượng
          vượt trội và chi phí tối ưu.
          <br />
          <span className="block mt-4 text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-black dark:text-yellow-300">
            “Hãy cùng sánh bước, chung tay kiến tạo một hành tinh xanh, vì một
            tương lai rực rỡ cho thế hệ mai sau!”
          </span>
        </p>
      </div>
    </section>
  );
};

export default AboutCoverSection;