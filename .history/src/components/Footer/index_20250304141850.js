"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { DribbbleIcon, GithubIcon, LinkedinIcon, TwitterIcon } from "../Icons";
import Link from "next/link";
import siteMetadata from "@/src/utils/siteMetaData";
import Image from "next/image";
import iso27001 from "../../../public/blogs/iso_27001.png";
import iso140001 from "../../../public/blogs/iso-140001-2015.png";
import partner1 from "../../../public/blogs/biasaigonkiengianglogo.png";
import partner2 from "../../../public/blogs/sannhilogo.png";
import partner3 from "../../../public/blogs/ungbuoulogo.png";
import partner4 from "../../../public/blogs/dakhoalogo.png";
import partner5 from "../../../public/blogs/logo-mm-mega-mart-compressed.png";
import partner6 from "../../../public/blogs/sg-rg.jpg";
import partner7 from "../../../public/blogs/hoabinhrachgia.png";
import partner8 from "../../../public/blogs/yduoccotruyenkg).png";

const SkillList = [
  "TRUNG TÂM Y TẾ CHÂU THÀNH",
  "TRUNG TÂM Y TẾ VĨNH THUẬN",
  "TRUNG TÂM Y TẾ TÂN HIỆP",
  "TRUNG TÂM Y TẾ AN MINH",
];
const Footer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <footer className="mt-16 rounded-2xl bg-accentDark/90 dark:bg-accentDark/90 m-2 sm:m-10 flex flex-col items-center text-dark dark:text-dark">
      <h3 className="mt-8 font-bold text-center capitalize text-2xl sm:text-3xl lg:text-4xl px-4 dark:font-extrabold">
        "Act locally, impact globally"
      </h3>
      <p className="mt-5 px-4 text-center w-full sm:w-3/5 font-light dark:font-extrabold text-sm sm:text-base">
        – Mọi hành động nhỏ bé tại địa phương đều có thể tạo nên sự thay đổi
        tích cực to lớn. Mỗi hành động cụ thể, mỗi kilôgam phế liệu được tái
        chế, mỗi tấn chất thải được xử lý an toàn đều giảm thiểu tác động tiêu
        cực đến môi trường, hạn chế ô nhiễm, tiết kiệm cũng như tái chế tài
        nguyên. Chúng ta không cần phải chờ đợi những giải pháp lớn lao từ bên
        ngoài, mà có thể bắt đầu từ chính những gì trong tầm tay. Ngay cả những
        hành động nhỏ nhất, khi được thực hiện với sự cam kết và ý thức, đều góp
        phần bảo vệ môi trường, xây dựng một tương lai bền vững, và lan tỏa
        thông điệp mạnh mẽ về trách nhiệm với nơi chúng ta sống. "Act locally,
        impact globally" không chỉ là một khẩu hiệu mà còn phản ánh tinh thần
        trách nhiệm và tầm nhìn của Bảo Long Scrap trong các hoạt động kinh
        doanh của mình. Những gì chúng ta làm hôm nay sẽ đóng góp vào bức tranh
        lớn hơn của nhân loại, nơi sự hợp lực của nhiều cá nhân và tổ chức có
        thể tạo nên sự thay đổi mang tính toàn cầu. Mỗi bước đi hiện tại đều có
        thể trở thành nền tảng cho một tương lai tốt đẹp hơn.
      </p>
      <div className="grid lg:grid-cols-7 mt-8 sm:grid-cols-3 grid-cols-2 items-center  gap-8 lg:px-24 px-4 pt-5 ">


        <Image className="" src={partner2} width="30px" height="30px"></Image>
        <Image className="" src={partner3} width="30px" height="30px"></Image>
        <Image className="" src={partner4} width="30px" height="30px"></Image>
        <Image className="" src={partner5} width="30px" height="30px"></Image>
        <Image className="" src={partner1} width="30px" height="30px"></Image>
        <Image className="" src={partner6} width="30px" height="30px"></Image>
        <Image className="" src={partner7} width="30px" height="30px"></Image>
        <Image className="" src={partner8} width="30px" height="30px"></Image>
      </div>

      <ul className="grid lg:grid-cols- mt-7 sm:grid-cols-2 grid-cols-2 items-center gap-2 lg:px-24 px-4 pt-5 font-medium dark:font-bold ">
        {SkillList.map((item, index) => {
          return (
            <li
              key={index}
              className="font-semibold inline-block capitalize text-base xs:text-lg sm:text-xl  md:text-2xl py-2 xs:py-3 sm:py-4 lg:py-5 px-4 xs:px-6 sm:px-8 lg:px-12 border-2 border-solid border-light dark:border-light rounded mr-3 mb-3 xs:mr-4 xs:mb-4  md:mr-6 md:mb-6 hover:scale-105 transition-all ease duration-200 cursor-pointer dark:font-normal "
            >
              {item}
            </li>
          );
        })}
      </ul>
      <div className="w-full  mt-16 md:mt-24 relative font-medium dark:font-bold border-t border-solid border-light py-6 px-8 flex  flex-col md:flex-row items-center justify-between">
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold">Liên Hệ</h3>
          <div className="space-y-3 text-gray-300 ">
            <a
              href="/"
              className=" relative block text-[20px] items-center rounded-3xl text-red-600 font-bold"
            >
              📞(+84) 87.6789.252
            </a>
            <a href="/" className="block">
              info@baolongscrap.vn
            </a>
            <a href="/" className="block">
              Mã Số Thuế : 1702260628
            </a>
            <a
              href="https://www.google.com/maps/place/C%C3%B4ng+Ty+TNHH+B%E1%BA%A3o+Long+Scrap+-+Ph%E1%BA%BF+Li%E1%BB%87u+-Tv+X%E1%BB%AD+l%C3%BD+r%C3%A1c+th%E1%BA%A3i+y+t%E1%BA%BF+-+Nguy+h%E1%BA%A1i+-+C%C3%B4ng+nghi%E1%BB%87p/@9.9786998,105.1006974,17z/data=!3m1!4b1!4m6!3m5!1s0x31a0b554b75f0c41:0xbd4d768eeec11fb3!8m2!3d9.9786998!4d105.1032723!16s%2Fg%2F11tf0tm57y?hl=vi-VN&entry=ttu"
              target="blank"
              className="block hover:text-orange"
            >
              A17-36A Đường Số 02, <br /> Khu Nam An Hòa, Phường An Hòa, Thành
              Phố Rạch Giá, Tỉnh Kiên Giang,
            </a>
          </div>
        </div>

        {/* text */}
        <div className="space-y-3 text-gray-300 mt-5 ">
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold"></h3>
            <a
              href="/"
              className=" relative block text-[20px] items-center rounded-3xl font-bold text-dark "
            >
              Tiêu Hủy Giấy Tờ - Hồ Sơ Mật
            </a>

            <a
              href="/"
              className=" relative block text-[20px] items-center rounded-3xl font-bold text-dark"
            >
              Xử Lý Chất Thải Y Tế - Nguy Hại
            </a>

            <a
              href="/"
              className=" relative block text-[20px] items-center rounded-3xl font-bold text-dark"
            >
              Phá Dở Công Trình
            </a>

            <a
              href="/"
              className=" relative block text-[20px] items-center rounded-3xl font-bold text-dark"
            >
              Thu Mua Tài Sản Thanh Lý - Tài Sản Ngân Hàng
            </a>
          </div>
        </div>
        <div className="flex items-center mt-3 mb-2"></div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d982.3653267542196!2d105.10262856962211!3d9.978699799382852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a0b554b75f0c41%3A0xbd4d768eeec11fb3!2zQ8O0bmcgVHkgVE5ISCBC4bqjbyBMb25nIFNjcmFwIC0gUGjhur8gTGnhu4d1IC1UdiBY4butIGzDvSByw6FjIHRo4bqjaSB5IHThur8gLSBOZ3V5IGjhuqFpIC0gQ8O0bmcgbmdoaeG7h3A!5e0!3m2!1svi!2s!4v1708390865079!5m2!1svi!2s"
          width="350"
          height="250"
          style={{ border: "0" }}
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
    </footer>
  );
};

export default Footer;
