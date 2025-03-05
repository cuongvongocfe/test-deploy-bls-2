"use client";
import React from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import Image from "next/image";
import siteMetadata from "@/src/utils/siteMetaData";

// Import images
import partnerImages from "./partnerImages"; // Create a separate file for image imports

const SkillList = [
  "TRUNG TÂM Y TẾ CHÂU THÀNH",
  "TRUNG TÂM Y TẾ VĨNH THUẬN",
  "TRUNG TÂM Y TẾ TÂN HIỆP",
  "TRUNG TÂM Y TẾ AN MINH",
];

const ContactInfo = [
  { text: "📞(+84) 87.6789.252", href: "/", className: "text-red-600" },
  { text: "info@baolongscrap.vn", href: "/" },
  { text: "Mã Số Thuế : 1702260628", href: "/" },
  {
    text: "A17-36A Đường Số 02, Khu Nam An Hòa, Phường An Hòa, Thành Phố Rạch Giá, Tỉnh Kiên Giang",
    href: "https://www.google.com/maps/place/C%C3%B4ng+Ty+TNHH+B%E1%BA%A3o+Long+Scrap+-+Ph%E1%BA%BF+Li%E1%BB%87u+-Tv+X%E1%BB%AD+l%C3%BD+r%C3%A1c+th%E1%BA%A3i+y+t%E1%BA%BF+-+Nguy+h%E1%BA%A1i+-+C%C3%B4ng+nghi%E1%BB%87p/@9.9786998,105.1006974,17z",
    className: "hover:text-orange",
    target: "_blank",
  },
];

const Services = [
  "Tiêu Hủy Giấy Tờ - Hồ Sơ Mật",
  "Xử Lý Chất Thải Y Tế - Nguy Hại",
  "Phá Dở Công Trình",
  "Thu Mua Tài Sản Thanh Lý - Tài Sản Ngân Hàng",
];

const Footer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  if (process.env.NODE_ENV === "development") console.log(errors);

  return (
    <footer className="mt-16 rounded-2xl bg-accentDark/90 m-2 sm:m-10 flex flex-col items-center text-dark">
      <h3 className="mt-8 font-bold text-center capitalize text-2xl sm:text-3xl lg:text-4xl px-4 dark:font-extrabold">
        "Act locally, impact globally"
      </h3>
      
      <p className="mt-5 px-4 text-center w-full sm:w-3/5 font-light dark:font-extrabold text-sm sm:text-base">
        {/* Text content remains unchanged */}
        ...
      </p>

      <div className="grid lg:grid-cols-8 sm:grid-cols-4 grid-cols-2 gap-8 mt-8 px-4 lg:px-24 pt-5">
        {partnerImages.map((partner, index) => (
          <Image
            key={index}
            src={partner.src}
            width={30}
            height={30}
            alt={`Partner ${index + 1}`}
          />
        ))}
      </div>

      <ul className="grid lg:grid-cols-2 sm:grid-cols-2 gap-2 mt-7 px-4 lg:px-24 pt-5">
        {SkillList.map((item, index) => (
          <li
            key={index}
            className="font-semibold text-base xs:text-lg sm:text-xl md:text-2xl py-2 xs:py-3 sm:py-4 lg:py-5 px-4 xs:px-6 sm:px-8 lg:px-12 border-2 border-light rounded mr-3 mb-3 xs:mr-4 xs:mb-4 md:mr-6 md:mb-6 hover:scale-105 transition-all ease duration-200 cursor-pointer dark:font-normal"
          >
            {item}
          </li>
        ))}
      </ul>

      <div className="w-full mt-16 md:mt-24 border-t border-light py-6 px-8 flex flex-col md:flex-row items-center justify-between">
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold">Liên Hệ</h3>
          <div className="space-y-3 text-gray-300">
            {ContactInfo.map((info, index) => (
              <Link
                key={index}
                href={info.href}
                target={info.target || "_self"}
                className={`block ${info.className || ""}`}
              >
                {info.text.split("<br />").map((line, i) => (
                  <span key={i}>
                    {line}
                    {i < info.text.split("<br />").length - 1 && <br />}
                  </span>
                ))}
              </Link>
            ))}
          </div>
        </div>

        <div className="space-y-4 text-gray-300 mt-5 md:mt-0">
          {Services.map((service, index) => (
            <Link
              key={index}
              href="/"
              className="block text-[20px] font-bold text-dark"
            >
              {service}
            </Link>
          ))}
        </div>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d982.3653267542196!2d105.10262856962211!3d9.978699799382852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a0b554b75f0c41%3A0xbd4d768eeec11fb3!2zQ8O0bmcgVHkgVE5ISCBC4bqjbyBMb25nIFNjcmFwIC0gUGjhur8gTGnhu4d1IC1UdiBY4butIGzDvSByw6FjIHRo4bqjaSB5IHThur8gLSBOZ3V5IGjhuqFpIC0gQ8O0bmcgbmdoaeG7h3A!5e0!3m2!1svi!2s!4v1708390865079!5m2!1svi!2s"
          width="350"
          height="250"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          className="mt-5 md:mt-0"
        />
      </div>
    </footer>
  );
};

export default Footer;