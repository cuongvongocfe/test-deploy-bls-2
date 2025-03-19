"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PhoneInfo from "./PhoneInfo";

// Static assets
import iso27001 from "../../../public/blogs/iso_27001.png";
import iso140001 from "../../../public/blogs/iso-140001-2015.png";
import partner1 from "../../../public/blogs/biasaigonkiengianglogo.png";
import partner2 from "../../../public/blogs/sannhilogo.png";
import partner3 from "../../../public/blogs/ungbuoulogo.png";
import partner4 from "../../../public/blogs/dakhoalogo.png";
import partner5 from "../../../public/blogs/logo-mm-mega-mart-compressed.png";
import partner6 from "../../../public/blogs/sg-rg.jpg";
import partner7 from "../../../public/blogs/hoabinhrachgia.png";
import partner8 from "../../../public/blogs/yduoccotruyenkg.png";

// Constants
const Partners = [partner2, partner4, partner8, partner3, partner5, partner1, partner6, partner7];

const SkillList = [
  "TRUNG TÂM Y TẾ CHÂU THÀNH",
  "TRUNG TÂM Y TẾ VĨNH THUẬN",
  "TRUNG TÂM Y TẾ TÂN HIỆP",
  "TRUNG TÂM Y TẾ AN MINH",
];

const Services = [
  "Tiêu Hủy Giấy Tờ - Hồ Sơ Mật",
  "Xử Lý Chất Thải Y Tế - Nguy Hại",
  "Phá Dở Công Trình",
  "Thu Mua Tài Sản Thanh Lý - Tài Sản Ngân Hàng",
];

const Footer = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => console.log(data);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const filteredServices = Services.filter(service =>
    service.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <footer
      className="mt-16 rounded-2xl m-2 sm:m-10 flex flex-col items-center relative"
      style={{ backgroundColor: "#2D3748" }} // dark: Xám đậm nhẹ
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3
          className="mt-8 font-bold text-center capitalize text-2xl sm:text-3xl lg:text-4xl"
          style={{ color: "#F5F5F5" }} // light: Xám trắng nhạt
        >
          "Act locally, impact globally"
        </h3>

        <div className="mt-8 pt-5">
          <Slider {...sliderSettings}>
            {Partners.map((partner, index) => (
              <div key={index} className="px-4 flex items-center justify-center h-[200px]">
                <Image
                  src={partner}
                  width={200}
                  height={200}
                  alt={`Partner ${index + 1}`}
                  className="object-contain mx-auto"
                  style={{ maxHeight: "200px" }} // Không có viền
                />
              </div>
            ))}
          </Slider>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-7 pt-5 font-medium">
          {SkillList.map((item) => (
            <li
              key={item}
              className="font-semibold text-base xs:text-lg sm:text-xl md:text-2xl py-3 px-6 rounded hover:scale-105 transition-all duration-200 cursor-pointer"
              style={{
                backgroundColor: "#E8C547", // accentDark: Vàng nhạt
                color: "#1C2526", // dark: Xám đen đậm
                border: "2px solid #C7A17A", // accent: Nâu cam nhạt
              }}
            >
              {item}
            </li>
          ))}
        </ul>

        <div
          className="mt-8 md:mt-12 py-6 flex flex-col md:flex-row justify-between gap-8"
          style={{ borderTop: `1px solid #6B7280` }} // gray: Xám trung tính
        >
          <div className="space-y-4">
            <h3
              className="text-3xl font-semibold"
              style={{ color: "#F5F5F5" }} // light: Xám trắng nhạt
            >
              Liên Hệ
            </h3>
            <div className="space-y-3">
              <a
                href="tel:+84876789252"
                className="block text-xl font-bold transition-colors duration-200"
                style={{ color: "#C7A17A" }} // accent: Nâu cam nhạt
              >
                📞 (+84) 87.6789.252
              </a>
              <a
                href="mailto:info@baolongscrap.vn"
                className="block text-xl font-medium transition-colors duration-200"
                style={{ color: "#F5F5F5", hover: { color: "#E8C547" } }} // light: Xám trắng nhạt, hover vàng nhạt
              >
                info@baolongscrap.vn
              </a>
              <p
                className="text-xl font-medium"
                style={{ color: "inherit" }} // Màu mặc định (xám trắng nhạt từ text cha)
              >
                Mã Số Thuế: 1702260628
              </p>
              <a
                href="https://www.google.com/maps/place/C%C3%B4ng+Ty+TNHH+B%E1%BA%A3o+Long+Scrap+-+Ph%E1%BA%BF+Li%E1%BB%87u+-+Tv+X%E1%BB%83+l%C3%BD+r%C3%A1c+th%E1%BA%A3i+y+t%E1%BA%BF+-+Nguy+h%E1%BA%A1i+-+C%C3%B4ng+nghi%E1%BB%87p/@9.9786998,105.1006974,17z"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-xl font-medium transition-colors duration-200"
                style={{ color: "#F5F5F5", hover: { color: "#E8C547" } }} // light: Xám trắng nhạt, hover vàng nhạt
              >
                A17-36A Đường Số 02, Khu Nam An Hòa,<br />
                Phường An Hòa, Thành Phố Rạch Giá,<br />
                Tỉnh Kiên Giang
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3
              className="text-2xl font-semibold cursor-pointer transition-colors duration-200"
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              style={{ color: "#F5F5F5" }} // light: Xám trắng nhạt
            >
              Dịch Vụ
              <span className="ml-1 text-sm inline-block transition-transform duration-200">
                {isServicesOpen ? "▲" : "▼"}
              </span>
            </h3>

            <div
              className={`transition-all duration-300 overflow-hidden ${
                isServicesOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <input
                type="text"
                placeholder="Tìm kiếm dịch vụ..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 mb-3 rounded-lg border focus:outline-none transition-all duration-200"
                style={{
                  backgroundColor: "#F5F5F5", // light: Xám trắng nhạt
                  color: "#1C2526", // dark: Xám đen đậm
                  border: `1px solid #6B7280`, // gray: Xám trung tính
                  focus: { ring: `2px solid #C7A17A` }, // accent: Nâu cam nhạt khi focus
                }}
              />
              <div
                className="max-h-[250px] overflow-y-auto pr-2 scrollbar-thin"
                style={{
                  scrollbarThumb: "#C7A17A", // accent: Nâu cam nhạt
                  scrollbarTrack: "#6B7280", // gray: Xám trung tính
                }}
              >
                <ul className="space-y-3">
                  {filteredServices.length > 0 ? (
                    filteredServices.map((service) => (
                      <li
                        key={service}
                        className="transform transition-all duration-200 hover:translate-x-2"
                      >
                        <a
                          href="/"
                          className="block text-[20px] font-bold transition-colors duration-200"
                          style={{ color: "#F5F5F5", hover: { color: "#E8C547" } }} // light: Xám trắng nhạt, hover vàng nhạt
                        >
                          {service}
                        </a>
                      </li>
                    ))
                  ) : (
                    <li
                      className="text-[20px] font-bold"
                      style={{ color: "#6B7280" }} // gray: Xám trung tính
                    >
                      Không tìm thấy dịch vụ
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>

          {/* Google Maps Iframe với responsive */}
          <div className="w-full max-w-md mx-auto md:max-w-xs lg:max-w-sm">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d982.3653267542196!2d105.10262856962211!3d9.978699799382852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a0b554b75f0c41%3A0xbd4d768eeec11fb3!2zQ8O0bmcgTHkgVE5ISCBC4bqjbyBMb25nIFNjcmFwIC0gUGjhur8gTGnhu4d1IC1UdiBY4butIGzDvSByw6FjIHRh4bqjaSB5IHThur8gLSBOZ3V5IGjhuqFpIC0gQ8O0bmc bmhoaeG7h3A!5e0!3m2!1svi!2s!4v1708390865079!5m2!1svi!2s"
              width="100%"
              height="300"
              style={{ border: `2px solid #E8C547` }} // accentDark: Vàng nhạt
              allowFullScreen=""
              loading="lazy"
              className="w-full h-64 sm:h-72 md:h-80 rounded-lg"
            />
          </div>
        </div>

        <div
          className="py-4 text-center text-sm"
          style={{ borderTop: `1px solid #6B7280`, color: "inherit" }} // gray: Viền xám, màu text kế thừa từ cha (#F5F5F5)
        >
          © {new Date().getFullYear()} Bảo Long Scrap. All rights reserved.
        </div>
      </div>

      <PhoneInfo />
    </footer>
  );
};

export default Footer;