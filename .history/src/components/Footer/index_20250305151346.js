"use client";
import React from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

  // Slider settings
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
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  };

  return (
    <footer className="mt-16 rounded-2xl bg-accentDark/90 dark:bg-accentDark/90 m-2 sm:m-10 flex flex-col items-center text-dark">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="mt-8 font-bold text-center capitalize text-2xl sm:text-3xl lg:text-4xl dark:font-extrabold">
          "Act locally, impact globally"
        </h3>
        
        {/* Infinite Slider with Twice as Large Images */}
        <div className="mt-8 pt-5">
          <Slider {...sliderSettings}>
            {Partners.map((partner, index) => (
              <div key={index} className="px-4">
                <Image 
                  src={partner} 
                  width={200} // Doubled from 100 to 200
                  height={200} // Doubled from 100 to 200
                  alt={`Partner ${index + 1}`} 
                  className="object-contain mx-auto"
                />
              </div>
            ))}
          </Slider>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-7 pt-5 font-medium dark:font-bold">
          {SkillList.map((item) => (
            <li 
              key={item}
              className="font-semibold text-base xs:text-lg sm:text-xl md:text-2xl py-3 px-6 border-2 border-light rounded hover:scale-105 transition-all duration-200 cursor-pointer dark:font-normal text-center"
            >
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-16 md:mt-24 border-t border-light py-6 flex flex-col md:flex-row justify-between gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">Liên Hệ</h3>
            <div className="space-y-3 text-gray-300">
              <a href="tel:+84876789252" className="block text-[20px] text-red-600 font-bold">
                📞(+84) 87.6789.252
              </a>
              <a href="mailto:info@baolongscrap.vn" className="block hover:text-orange">
                info@baolongscrap.vn
              </a>
              <p>Mã Số Thuế: 1702260628</p>
              <a 
                href="https://www.google.com/maps/place/C%C3%B4ng+Ty+TNHH+B%E1%BA%A3o+Long+Scrap+-+Ph%E1%BA%BF+Li%E1%BB%87u+-Tv+X%E1%BB%AD+l%C3%BD+r%C3%A1c+th%E1%BA%A3i+y+t%E1%BA%BF+-+Nguy+h%E1%BA%A1i+-+C%C3%B4ng+nghi%E1%BB%87p/@9.9786998,105.1006974,17z" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block hover:text-orange"
              >
                A17-36A Đường Số 02, Khu Nam An Hòa,<br />
                Phường An Hòa, Thành Phố Rạch Giá,<br />
                Tỉnh Kiên Giang
              </a>
            </div>
          </div>

          <div className="space-y-6">
  <h3 className="text-2xl font-semibold text-white dark:text-blue-200 tracking-tight">
    Dịch Vụ
  </h3>
  <div className="space-y-3">
    {Services.map((service, index) => (
      <a
        key={service}
        href="/"
        className="block text-xl font-medium text-blue-900 dark:text-blue-200 py-2 px-4 rounded-md hover:bg-blue-100 dark:hover:bg-blue-950 hover:text-blue-500 dark:hover:text-blue-400 transition-all duration-300 ease-in-out transform animate-slide-in"
        style={{ animationDelay: `${index * 0.1}s` }}
      >
        {service}
      </a>
    ))}
  </div>
</div>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d982.3653267542196!2d105.10262856962211!3d9.978699799382852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a0b554b75f0c41%3A0xbd4d768eeec11fb3!2zQ8O0bmcgVHkgVE5ISCBC4bqjbyBMb25nIFNjcmFwIC0gUGjhur8gTGnhu4d1IC1UdiBY4butIGzDvSByw6FjIHRh4bqjaSB5IHThur8gLSBOZ3V5IGjhuqFpIC0gQ8O0bmcgbmdoaeG7h3A!5e0!3m2!1svi!2s!4v1708390865079!5m2!1svi!2s"
            width="350"
            height="250"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            className="rounded-lg"
          />
        </div>

        <div className="py-4 text-center text-sm border-t border-light">
          © {new Date().getFullYear()} Bảo Long Scrap. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;