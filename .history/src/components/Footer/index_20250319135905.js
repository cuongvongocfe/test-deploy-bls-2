"use client";
import React, { useState } from "react";
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

const companyInfo = {
  companyName: "CÔNG TY TNHH BẢO LONG SCRAP",
  tradingName: "BLS.COM",
  taxCode: "1702260628",
  issueDate: "15/08/2022",
  operationDate: "15/08/2022",
  status: "Đang Hoạt Động",
  address: "A17-36A Đường Số 02, Khu Nam An Hòa, Phường An Hòa, Thành Phố Rạch Giá, Kiên Giang",
  representative: "Lê Thanh Duy",
  phone: "0876789252",
  email: "thanhduyqdtp@gmail.com",
  companyType: "Công Ty TNHH 2 TV Trở Lên Ngoài Quốc Doanh (100% Vốn Tư Nhân)",
  industry: "Thu Gom Rác Thải Không Độc Hại",
};

const Footer = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [showInfoModal, setShowInfoModal] = useState(false);

  const toggleInfoModal = () => setShowInfoModal(!showInfoModal);

  const sliderSettings = {
    dots: true, // Thêm dots để cải thiện điều hướng
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 640, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
      { breakpoint: 360, settings: { slidesToShow: 1, dots: false } }, // Thêm breakpoint cho màn hình rất nhỏ
    ],
  };

  const filteredServices = Services.filter((service) =>
    service.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <footer className="mt-16 rounded-2xl m-2 sm:m-4 md:m-8 lg:m-10 flex flex-col items-center relative bg-[#F7C566] min-h-[50vh]">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="mt-8 font-bold text-center capitalize text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white">
          "Act locally, impact globally"
        </h3>

        <div className="mt-8 pt-5">
          <Slider {...sliderSettings}>
            {Partners?.map((partner, index) => (
              <div key={index} className="px-2 sm:px-4 flex items-center justify-center h-[150px] sm:h-[200px]">
                <Image
                  src={partner}
                  width={200}
                  height={200}
                  alt={`Partner ${index + 1}`}
                  className="object-contain mx-auto"
                  loading="lazy" // Thêm lazy loading
                  style={{ maxHeight: "150px", maxWidth: "200px" }}
                />
              </div>
            ))}
          </Slider>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-7 pt-5 font-medium">
          {SkillList.map((item) => (
            <li
              key={item}
              className="font-semibold text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl py-2 sm:py-3 px-4 sm:px-6 rounded hover:scale-105 transition-all duration-200 cursor-pointer bg-[#1b1b1b] text-white border-2 border-[#7B00D3]"
            >
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-8 md:mt-12 py-6 flex flex-col md:flex-row justify-between gap-4 border-t border-[#747474]">
          <div className="space-y-0.5 flex-1">
            <h3 className="text-xl sm:text-2xl font-semibold text-black">Liên Hệ</h3>
            <div className="space-y-0.5">
              <a
                href="tel:+84876789252"
                className="flex items-center text-lg sm:text-xl md:text-2xl font-medium transition-colors duration-200 hover:underline text-[#7B00D3]"
                aria-label="Gọi số (+84) 87.6789.252"
              >
                <span className="mr-2">📞</span> (+84) 87.6789.252
              </a>
              <a
                href="mailto:info@baolongscrap.vn"
                className="flex items-center text-lg sm:text-xl md:text-2xl font-medium transition-colors duration-200 hover:underline text-black"
                aria-label="Gửi email đến info@baolongscrap.vn"
              >
                <span className="mr-2">📧</span> info@baolongscrap.vn
              </a>
              <button
                onClick={toggleInfoModal}
                className="flex items-center text-lg sm:text-xl md:text-2xl font-medium transition-colors duration-200 hover:underline text-black"
                aria-label="Xem thông tin công ty"
              >
                <span className="mr-2">📜</span> Mã Số Thuế: 1702260628
              </button>
              <a
                href="https://www.google.com/maps/place/C%C3%B4ng+Ty+TNHH+B%E1%BA%A3o+Long+Scrap+-+Ph%E1%BA%BF+Li%E1%BB%87u+-+Tv+X%E1%BB%83+l%C3%BD+r%C3%A1c+th%E1%BA%A3i+y+t%E1%BA%BF+-+Nguy+h%E1%BA%A1i+-+C%C3%B4ng+nghi%E1%BB%87p/@9.9786998,105.1006974,17z"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-lg sm:text-xl md:text-2xl font-medium transition-colors duration-200 hover:underline text-black"
                aria-label="Xem bản đồ địa chỉ công ty"
              >
                <span className="mr-2">📍</span> A17-36A Đường Số 02, Khu Nam An Hòa, Phường An Hòa, Thành Phố Rạch Giá, Tỉnh Kiên Giang
              </a>
            </div>
          </div>

          <div className="space-y-0.5 flex-1">
            <h3
              className="text-xl sm:text-2xl font-semibold cursor-pointer transition-colors duration-200 text-black"
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              aria-expanded={isServicesOpen}
              aria-controls="services-list"
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
              id="services-list"
            >
              <input
                type="text"
                placeholder="Tìm kiếm dịch vụ..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 mb-3 rounded-lg border focus:outline-none transition-all duration-200 bg-white text-[#1b1b1b] border-[#747474]"
                aria-label="Tìm kiếm dịch vụ"
              />
              <div className="max-h-[350px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-[#7B00D3] scrollbar-track-[#747474]">
                <ul className="space-y-0.5">
                  {filteredServices.length > 0 ? (
                    filteredServices.map((service) => (
                      <li
                        key={service}
                        className="transform transition-all duration-200 hover:translate-x-2"
                      >
                        <a
                          href="/"
                          className="block text-lg sm:text-xl md:text-2xl font-medium transition-colors duration-200 hover:underline text-black"
                        >
                          {service}
                        </a>
                      </li>
                    ))
                  ) : (
                    <li className="text-lg sm:text-xl md:text-2xl font-medium text-black">
                      Không tìm thấy dịch vụ
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>

          <div className="w-full max-w-md mx-auto md:max-w-xs lg:max-w-sm flex-1">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d982.3653267542196!2d105.10262856962211!3d9.978699799382852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a0b554b75f0c41%3A0xbd4d768eeec11fb3!2zQ8O0bmcgTHkgVE5ISCBC4bqjbyBMb25nIFNjcmFwIC0gUGjhur8gTGnhu4d1IC1UdiBY4butIGzDvSByw6FjIHRh4bqjaSB5IHThur8gLSBOZ3V5IGjhuqFpIC0gQ8O0bmc bmhoaeG7h3A!5e0!3m2!1svi!2s!4v1708390865079!5m2!1svi!2s"
              width="100%"
              height="300"
              allowFullScreen=""
              loading="lazy"
              className="w-full h-48 sm:h-64 md:h-72 lg:h-80 rounded-lg border-2 border-[#7B00D3]"
              title="Bản đồ công ty Bảo Long Scrap"
            />
          </div>
        </div>

        {/* Modal hiển thị thông tin công ty */}
        {showInfoModal && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 overflow-y-auto"
            onClick={toggleInfoModal}
            role="dialog"
            aria-modal="true"
            aria-label="Thông tin công ty"
          >
            <div
              className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-lg shadow-lg max-w-lg w-full relative overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={toggleInfoModal}
                className="absolute top-0 right-0 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100 text-3xl w-10 h-10 flex items-center justify-center rounded-full transition-transform duration-300 hover:animate-spin-infinite font-bold bg-[#7B00D3]"
                aria-label="Đóng modal thông tin công ty"
              >
                ✕
              </button>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-center text-[#1b1b1b]">
                Thông Tin Công Ty
              </h3>
              <div className="space-y-2 text-[#1b1b1b]">
                <p>
                  <strong>CÔNG TY TNHH BẢO LONG SCRAP</strong>
                </p>
                <p>
                  <strong>Tên giao dịch:</strong> BLS.COM
                </p>
                <p>
                  <strong>Số ĐKKD/MST:</strong> 1702260628
                </p>
                <p>
                  <strong>Ngày cấp:</strong> 15/08/2022
                </p>
                <p>
                  <strong>Ngày hoạt động:</strong> 15/08/2022
                </p>
                <p>
                  <strong>Tình trạng:</strong> Đang Hoạt Động
                </p>
                <p>
                  <strong>Địa chỉ:</strong> A17-36A Đường Số 02, Khu Nam An Hòa, Phường An Hòa, Thành Phố Rạch Giá, Kiên Giang
                </p>
                <p>
                  <strong>Người đại diện:</strong> Lê Thanh Duy
                </p>
                <p>
                  <strong>Điện thoại:</strong> 0876789252
                </p>
                <p>
                  <strong>Email:</strong> thanhduyqdtp@gmail.com
                </p>
                <p>
                  <strong>Loại hình DN:</strong> Công Ty TNHH 2 TV Trở Lên Ngoài Quốc Doanh (100% Vốn Tư Nhân)
                </p>
                <p>
                  <strong>Ngành nghề KD:</strong> Thu Gom Rác Thải Không Độc Hại
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="py-4 text-center text-lg sm:text-xl border-t border-[#747474] text-white">
          © {new Date().getFullYear()} Bảo Long Scrap. All rights reserved.
        </div>
      </div>

      <PhoneInfo />
    </footer>
  );
};

export default Footer;