"use client";
import Link from "next/link";
import Logo from "./Logo";
import { DribbbleIcon, GithubIcon, LinkedinIcon, MoonIcon, SunIcon, TwitterIcon } from "../Icons";
import siteMetadata from "@/src/utils/siteMetaData";
import { useThemeSwitch } from "../Hooks/useThemeSwitch";
import { useState } from "react";
import { cx } from "@/src/utils";
import Image from "next/image";

// [Same CSS styles remain unchanged]

const Header = () => {
  const [mode, setMode] = useThemeSwitch();
  const [click, setClick] = useState(false);
  const [showImages, setShowImages] = useState(false);

  const toggle = () => setClick(!click);
  const toggleImages = () => setShowImages(!showImages);

  const navClass = "w-max py-3 px-8 border border-solid border-dark rounded-full font-medium capitalize items-center bg-light/80 backdrop-blur-sm z-50 transition-all ease duration-300";
  const linkClass = "mx-2 my-2";
  const themeButtonClass = cx(
    "w-8 h-8 ease ml-2 flex items-center justify-center rounded-full p-1",
    mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
  );
  const imageButtonClass = cx(
    "py-2 px-4 border border-solid border-dark rounded-full font-medium hover:bg-gray-200 transition-colors duration-200 ml-2 animated-border",
    mode === "light" ? "bg-light text-dark" : "bg-dark text-light"
  );

  return (
    <header className="w-full p-4 px-5 sm:px-10 flex items-center justify-between relative">
      <Logo />

      {/* Hamburger Menu */}
      {/* [Same hamburger menu code remains unchanged] */}

      {/* Mobile Navigation */}
      {/* [Same mobile navigation code remains unchanged] */}

      {/* Desktop Navigation Container */}
      <div className="hidden sm:flex items-center space-x-4 absolute top-6 right-10">
        {/* Navigation */}
        <nav className={`${navClass}`}>
          <Link href="/about" className={linkClass}>Giới Thiệu</Link>
          <Link href="/contact" className={linkClass}>Liên Hệ</Link>
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
            {mode === "light" ? <MoonIcon className="fill-dark" /> : <SunIcon className="fill-dark" />}
          </button>
        </nav>

        {/* Social Icons */}
        <div className="flex items-center justify-center space-x-4">
          <a href={siteMetadata.linkedin} className="w-[50px] h-[50px] flex items-center justify-center rounded-full hover:scale-125 transition-all ease duration-200 animated-border" aria-label="Reach out to me via LinkedIn" target="_blank">
            <LinkedinIcon className="w-[30px] h-[30px] fill-current text-dark dark:text-light" />
          </a>
          <a href={siteMetadata.twitter} className="w-[50px] h-[50px] flex items-center justify-center rounded-full hover:scale-125 transition-all ease duration-200 animated-border" aria-label="Reach out to me via Twitter" target="_blank">
            <TwitterIcon className="w-[30px] h-[30px] fill-current text-dark dark:text-light" />
          </a>
          <a href={siteMetadata.github} className="w-[50px] h-[50px] flex items-center justify-center rounded-full hover:scale-125 transition-all ease duration-200 animated-border" aria-label="Check my profile on Github" target="_blank">
            <GithubIcon className="w-[30px] h-[30px] fill-current text-dark dark:text-light" />
          </a>
        </div>
      </div>

      {/* Modal hiển thị ảnh */}
      {/* [Same modal code remains unchanged] */}
    </header>
  );
};

export default Header;