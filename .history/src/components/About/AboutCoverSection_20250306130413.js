import Image from "next/image";
import React from "react";
import profileCharacter from "../../../public/character.png";

// Define constants outside component to prevent re-creation
const IMAGE_SIZES = "(max-width: 768px) 100vw, (max-width: 1180px) 50vw, 50vw";
const BASE_CLASSES = "w-full border-solid border-dark dark:border-light";

const AboutCoverSection = () => {
  return (
    <section
      className={`${BASE_CLASSES} md:h-[75vh] border-b-2 flex flex-col md:flex-row items-center justify-center text-dark dark:text-light`}
    >
      {/* Image Container */}
      <div className={`${BASE_CLASSES} md:w-1/2 h-full border-r-2 flex justify-center`}>
        <Image
          src={profileCharacter}
          alt="CodeBucks"
          className="w-4/5 xs:w-3/4 md:w-full h-full object-contain object-center"
          priority
          sizes={IMAGE_SIZES}
        />
      </div>

      {/* Text Content Container */}
      <div className={`${BASE_CLASSES} md:w-1/2 flex flex-col items-start justify-center px-5 xs:p-10 pb-10 lg:px-16`}>
        <h2
          className="font-bold capitalize text-4xl xs:text-5xl sxl:text-6xl text-center lg:text-left"
        >
          “Môi trường sạch là nền tảng của sự phát triển bền vững”
        </h2>
        <p className="font-medium mt-4 text-base">
          Bảo vệ môi trường cũng chính là yếu tố sống còn và đặc biệt góp phần quan trọng
          vào quá trình hội nhập và phát triển bền vững của doanh nghiệp. Với sứ
          mệnh đó, <strong>CÔNG TY TNHH BẢO LONG SCRAP</strong> ra đời để cùng chung tay,
          góp sức cùng cộng đồng bảo vệ môi trường. Với phương châm hợp tác đôi
          bên cùng có lợi, công ty chúng tôi cam kết luôn đảm bảo cung cấp cho
          quý khách hàng dịch vụ môi trường tốt nhất với chi phí xử lý hợp lý nhất.
          <br />
          <span className="block mt-2 text-2xl font-bold text-yellow-300">
            “Hãy cùng chung tay bảo vệ môi trường sống, tất cả vì tương lai con em chúng ta”
          </span>
        </p>
      </div>
    </section>
  );
};

export default AboutCoverSection;