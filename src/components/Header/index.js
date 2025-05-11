```jsx
"use client";
import Link from "next/link";
import Logo from "./Logo";
import {
  DribbbleIcon,
  GithubIcon,
  LinkedinIcon,
  MoonIcon,
  SunIcon,
  TwitterIcon,
} from "../Icons";
import siteMetadata from "@/src/utils/siteMetaData";
import { useThemeSwitch } from "../Hooks/useThemeSwitch";
import { useState } from "react";
import { cx } from "@/src/utils";
import Image from "next/image";
import Head from "next/head";

const Header = () => {
  const [mode, setMode] = useThemeSwitch();
  const [click, setClick] = useState(false);
  const [showImages, setShowImages] = useState(false);
  const [showEcolong, setShowEcolong] = useState(false);

  const toggle = () => setClick(!click);
  const toggleImages = () => setShowImages(!showImages);
  const toggleEcolong = () => setShowEcolong(!showEcolong);

  const navClass = cx(
    "w-max py-2 px-6 border border-solid border-dark rounded-full font-medium capitalize items-center fixed top-6 right-1/2 translate-x-1/2 bg-white/90 backdrop-blur-sm z-50 transition-all ease duration-300",
    mode === "light" ? "bg-white/90" : "bg-gray-900/90"
  );
  const linkClass = "mx-2 my-1 text-base font-medium text-black";
  const themeButtonClass = cx(
    "w-8 h-8 ease ml-2 flex items-center justify-center rounded-full p-1 transition-colors duration-200",
    mode === "light" ? "bg-gray-200 text-dark" : "bg-gray-700 text-black"
  );
  const imageButtonClass = cx(
    "py-1 px-3 rounded-full font-medium transition-colors duration-200 mx-1 text-sm",
    mode === "light" ? "bg-gray-100 text-black специалист" : "bg-gray-800 text-black"
  );

  return (
    <>
      <Head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-369M1Q01X2"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-369M1Q01X2');
            `,
          }}
        />
      </Head>

      <header className="w-full p-4 px-5 sm:px-10 flex items-center justify-between">
        <Logo className="logo transition-transform duration-200 hover:scale-110" />

        {/* Hamburger Menu */}
        <button
          className="inline-block sm:hidden z-50"
          onClick={toggle}
          aria-label="Hamburger Menu"
        >
          <div className="w-8 cursor-pointer transition-all ease duration-300">
            <div className="relative">
              <span
                className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200"
                style={{
                  transform: click
                    ? "rotate(-45deg) translateY(0)"
                    : "rotate(0deg) translateY(6px)",
                }}
              />
              <span
                className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200"
                style={{ opacity: click ? 0 : 1 }}
              />
              <span
                className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200"
                style={{
                  transform: click
                    ? "rotate(45deg) translateY(0)"
                    : "rotate(0deg) translateY(-6px)",
                }}
              />
            </div>
          </div>
        </button>

        {/* Mobile Navigation */}
        <nav
          className={`${navClass} flex sm:hidden flex-col items-center gap-2 animate-slideIn`}
          style={{
            top: click ? "4rem" : "-15rem",
            opacity: click ? 1 : 0,
            visibility: click ? "visible" : "hidden",
          }}
        >
          <div className="flex flex-col items-center w-full gap-2">
            <Link href="/" className={linkClass}>
              Trang Chủ
            </Link>
            <Link href="/about" className={linkClass}>
              Giới Thiệu
            </Link>
            <Link href="/contact" className={linkClass}>
              Liên Hệ
            </Link>
            <button
              onClick={toggleEcolong}
              className={`${imageButtonClass} uppercase`}
              aria-label="Show Ecolong project details"
            >
              ECOLONG
            </button>
            <button
              onClick={toggleImages}
              className={imageButtonClass}
              aria-label="Show ISO certificates"
            >
              Chứng Chỉ ISO
            </button>
            <button
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
              className={themeButtonClass}
              aria-label="theme-switcher"
            >
              {mode === "light" ? (
                <MoonIcon className="fill-dark" />
              ) : (
                <SunIcon className="fill-dark" />
              )}
            </button>
          </div>
          <button
            onClick={toggle}
            className="mt-2 py-1 px-3 rounded-full text-sm font-medium transition-colors duration-200 text-black"
            aria-label="Close menu"
          >
            Đóng
          </button>
        </nav>

        {/* Desktop Navigation */}
        <nav className={`${navClass} hidden sm:flex gap-2 animate-slideIn`}>
          <Link href="/" className={linkClass}>
            Trang Chủ
          </Link>
          <Link href="/about" className={linkClass}>
            Giới Thiệu
          </Link>
          <Link href="/contact" className={linkClass}>
            Liên Hệ
          </Link>
          <button
            onClick={toggleEcolong}
            className={`${imageButtonClass} uppercase`}
            aria-label="Show Ecolong project details"
          >
            ECOLONG
          </button>
          <button
            onClick={toggleImages}
            className={imageButtonClass}
            aria-label="Show ISO certificates"
          >
            Chứng Chỉ ISO
          </button>
          <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className={themeButtonClass}
            aria-label="theme-switcher"
          >
            {mode === "light" ? (
              <MoonIcon className="fill-dark" />
            ) : (
              <SunIcon className="fill-dark" />
            )}
          </button>
        </nav>

        {/* Social Icons */}
        <div className="hidden sm:flex items-center justify-center space-x-3 p-2 social-icon">
          <a
            href={siteMetadata.linkedin}
            className="w-10 h-10 flex items-center justify-center rounded-full transition-all duration-200"
            aria-label="Reach out to me via LinkedIn"
            target="_blank"
          >
            <LinkedinIcon className="w-6 h-6 fill-current text-dark dark:text-light hover:scale-110 transition-transform duration-200" />
          </a>
          <a
            href={siteMetadata.twitter}
            className="w-10 h-10 flex items-center justify-center rounded-full transition-all duration-200"
            aria-label="Reach out to me via Twitter"
            target="_blank"
          >
            <TwitterIcon className="w-6 h-6 fill-current text-dark dark:text-light hover:scale-110 transition-transform duration-200" />
          </a>
          <a
            href={siteMetadata.github}
            className="w-10 h-10 flex items-center justify-center rounded-full transition-all duration-200"
            aria-label="Check my profile on Github"
            target="_blank"
          >
            <GithubIcon className="w-6 h-6 fill-current text-dark dark:text-light hover:scale-110 transition-transform duration-200" />
          </a>
        </div>

        {/* Modal hiển thị ảnh ISO */}
        {showImages && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 overflow-y-auto"
            onClick={toggleImages}
          >
            <div
              className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg max-w-6xl w-full relative max-h-screen overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={toggleImages}
                className="absolute top-0 right-0 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100 text-3xl w-10 h-10 flex items-center justify-center rounded-full transition-transform duration-300 hover:animate-spin-infinite font-bold"
                aria-label="Close modal"
              >
                ✕
              </button>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <Image
                  src="/blogs/image1.jpg"
                  alt="ISO Certificate 1"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover rounded-lg"
                />
                <Image
                  src="/blogs/image2.jpg"
                  alt="ISO Certificate 2"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        )}

        {/* Modal hiển thị nội dung Ecolong */}
        {showEcolong && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 overflow-y-auto"
            onClick={toggleEcolong}
          >
            <div
              className="bg-green-50 p-8 rounded-lg shadow-lg max-w-4xl w-full relative max-h-screen overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={toggleEcolong}
                className="absolute top-0 right-0 text-gray-600 hover:text-gray-800 text-3xl w-10 h-10 flex items-center justify-center rounded-full transition-transform duration-300 hover:animate-spin-infinite font-bold"
                aria-label="Close modal"
              >
                ✕
              </button>
              <div className="flex flex-col gap-8 text-green-800">
                {/* Tiêu đề */}
                <h1 className="text-4xl font-bold text-center uppercase">
                  Dự án môi trường Ecolong
                </h1>
                <h2 className="text-2xl font-semibold text-center">
                  Tái sinh phế liệu – Xanh hoá tương lai
                </h2>

                {/* Giới thiệu */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold flex items-center gap-2">
                      🧩 Giới thiệu dự án EcoLong
                    </h3>
                    <p className="mt-2">
                      EcoLong là sáng kiến cộng đồng của Công ty TNHH Bảo Long Scrap, hướng đến mục tiêu nâng cao nhận thức và hành động trong việc phân loại – tái chế – tái sinh phế liệu một cách an toàn và bền vững. Dự án không chỉ góp phần giảm thiểu ô nhiễm môi trường mà còn tạo ra giá trị vật chất, tinh thần, và lan toả ý thức sống xanh trong cộng đồng.
                    </p>
                  </div>
                  <div className="flex justify-center">
                    <Image
                      src="/ecolong/illustration.jpg"
                      alt="EcoLong illustration"
                      width={300}
                      height={200}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </section>

                {/* Mục tiêu dự án */}
                <section>
                  <h2 className="text-2xl font-bold text-center uppercase mb-6">
                    🎯 Mục tiêu của dự án
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-start gap-3">
                      <span className="text-3xl">🌱</span>
                      <div>
                        <p>Tái sinh tối đa lượng phế liệu thu gom tại tỉnh Kiên Giang</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-3xl">🔁</span>
                      <div>
                        <p>Xây dựng chuỗi thu gom – phân loại – tái chế khép kín, hiệu quả</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-3xl">🧑‍🤝‍🧑</span>
                      <div>
                        <p>Kết nối hộ dân, trường học, doanh nghiệp và các tổ chức xã hội trong cùng một hệ sinh thái “phế liệu sạch – tái chế xanh”</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-3xl">📈</span>
                      <div>
                        <p>Góp phần vào chiến lược phát triển bền vững của địa phương và quốc gia</p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Các hoạt động nổi bật */}
                <section>
                  <h2 className="text-2xl font-bold uppercase mb-4">
                    🌍 Các hoạt động nổi bật
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold flex items-center gap-2">
                        ♻️ Điểm thu gom xanh
                      </h3>
                      <p className="mt-2">Lắp đặt các điểm thu gom thân thiện tại trường học, chợ, khu dân cư</p>
                      <p>Nhận phân loại theo nhóm: giấy – kim loại – nhựa – thủy tinh</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold flex items-center gap-2">
                        📣 Truyền thông & Giáo dục
                      </h3>
                      <p className="mt-2">Tổ chức các buổi hội thảo, workshop, gameshow tái chế</p>
                      <p>Phối hợp truyền thông trên fanpage, TikTok, và truyền hình địa phương</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold flex items-center gap-2">
                        🔒 Tiêu huỷ tài liệu an toàn
                      </h3>
                      <p className="mt-2">Dành cho cơ quan, tổ chức: hồ sơ cũ, tài liệu mật sẽ được tiêu huỷ theo chuẩn ISO/IEC 27001:2022</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold flex items-center gap-2">
                        🔄 Tái chế & Tái sử dụng
                      </h3>
                      <p className="mt-2">Chuyển giao phế liệu đến các đơn vị tái chế được kiểm định</p>
                      <p>Khuyến khích tái sử dụng đồ vật cũ vào hoạt động cộng đồng, giáo dục</p>
                    </div>
                  </div>
                </section>

                {/* Thông điệp hành động */}
                <section className="text-center">
                  <h2 className="text-2xl font-bold uppercase mb-4">
                    🏆 Thông điệp hành động
                  </h2>
                  <p className="text-2xl italic font-semibold bg-green-100 p-4 rounded-lg">
                    🌱 “Tái sinh phế liệu – Xanh hoá tương lai” không chỉ là khẩu hiệu, mà là cam kết hành động của chúng tôi đối với môi trường và thế hệ mai sau.
                  </p>
                </section>

                {/* Hình ảnh – Video – Tài liệu truyền thông */}
                <section>
                  <h2 className="text-2xl font-bold uppercase mb-4">
                    📸 Hình ảnh – Video – Tài liệu truyền thông
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <p className="font-medium">Hình ảnh hoạt động thực tế:</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                        <Image
                          src="/ecolong/activity1.jpg"
                          alt="EcoLong activity 1"
                          width={400}
                          height={300}
                          className="w-full h-auto object-cover rounded-lg"
                        />
                        <Image
                          src="/ecolong/activity2.jpg"
                          alt="EcoLong activity 2"
                          width={400}
                          height={300}
                          className="w-full h-auto object-cover rounded-lg"
                        />
                      </div>
                    </div>
                    <div>
                      <p className="font-medium">Video clip truyền thông:</p>
                      <video
                        controls
                        className="w-full h-auto rounded-lg mt-2"
                        src="/ecolong/promo-video.mp4"
                      >
                        Trình duyệt của bạn không hỗ trợ thẻ video.
                      </video>
                    </div>
                    <div className="flex flex-col gap-2">
                      <a
                        href="/ecolong/brochure.pdf"
                        className="text-blue-600 underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Tải brochure dự án
                      </a>
                      <a
                        href="/ecolong/register-collection-point"
                        className="text-blue-600 underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Đăng ký điểm thu gom
                      </a>
                      <a
                        href="/ecolong/partnership"
                        className="text-blue-600 underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Hợp tác đồng hành
                      </a>
                    </div>
                  </div>
                </section>

                {/* Liên hệ */}
                <section>
                  <h2 className="text-2xl font-bold uppercase text-center mb-6">
                    📞 Liên hệ đồng hành cùng EcoLong
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">📍 Công ty TNHH Bảo Long Scrap</h3>
                      <p>🏢 A17-36A đường số 02, khu Nam An Hòa, phường An Hòa, TP. Rạch Giá, tỉnh Kiên Giang</p>
                      <p className="mt-2">
                        📧 <a href="mailto:info@baolongscrap.vn" className="text-blue-600 underline">info@baolongscrap.vn</a>
                      </p>
                      <p>
                        ☎️ <a href="tel:0876789252" className="text-blue-600 underline">087.6789.252</a>
                      </p>
                      <p>
                        🌐 <a href="https://www.baolongscrap.vn" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">www.baolongscrap.vn</a>
                      </p>
                      <p>
                        👉 Fanpage & TikTok: <a href="https://www.tiktok.com/@baolongscrap" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">@baolongscrap</a>
                      </p>
                    </div>
                    <div className="flex justify-center">
                      <Image
                        src="/ecolong/wheelbarrow.jpg"
                        alt="EcoLong wheelbarrow illustration"
                        width={300}
                        height={200}
                        className="w-full h-auto object-contain"
                      />
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        )}

        {/* Thêm CSS cho animation */}
        <style jsx>{`
          @keyframes slideIn {
            from {
              opacity: 0;
              transform: translateY(-10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-slideIn {
            animation: slideIn 0.3s ease-out;
          }
        `}</style>
      </header>
    </>
  );
};

export default Header;
```