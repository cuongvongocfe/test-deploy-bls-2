"use client";
import Link from "next/link";
import Logo from "./Logo";
import { MoonIcon, SunIcon } from "../Icons";
import { FacebookIcon, ZaloIcon, TiktokIcon } from "../Icons";
import siteMetadata from "@/src/utils/siteMetaData";
import { useThemeSwitch } from "../Hooks/useThemeSwitch";
import { useState } from "react";
import { cx } from "@/src/utils";
import Image from "next/image";
import styles from "./Header.module.css";

const Header = () => {
  const [mode, setMode] = useThemeSwitch();
  const [click, setClick] = useState(false);
  const [showImages, setShowImages] = useState(false);

  const toggle = () => setClick(!click);
  const toggleImages = () => setShowImages(!showImages);

  const navClass = cx(
    "w-max py-3 px-8 border border-solid border-dark rounded-full font-medium capitalize items-center bg-light/80 backdrop-blur-sm z-50 transition-all ease duration-300 flex sm:hidden flex-col items-center gap-4 fixed top-6 right-1/2 translate-x-1/2",
    click ? styles.navActive : styles.navInactive
  );
  const linkClass = "mx-2 my-2";
  const themeButtonClass = cx(
    "w-8 h-8 ease ml-2 flex items-center justify-center rounded-full p-1",
    mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
  );
  const imageButtonClass = cx(
    "py-2 px-4 border border-solid border-dark rounded-full font-medium hover:bg-gray-200 transition-colors duration-200 ml-2",
    styles.animatedBorder,
    mode === "light" ? "bg-light text-dark" : "bg-dark text-light"
  );

  return (
    <header className="w-full p-4 px-5 sm:px-10 flex items-center justify-between relative">
      <Logo />

      {/* Hamburger Menu */}
      <button 
        className={`inline-block sm:hidden z-50 ${styles.hamburger}`} 
        onClick={toggle} 
        aria-label="Hamburger Menu"
      >
        <div className={styles.hamburgerInner}>
          <span 
            className={cx(
              styles.hamburgerLine,
              styles.hamburgerLineTop,
              click && styles.hamburgerLineTopActive
            )}
          />
          <span 
            className={cx(
              styles.hamburgerLine,
              styles.hamburgerLineMiddle,
              click && styles.hamburgerLineMiddleActive
            )}
          />
          <span 
            className={cx(
              styles.hamburgerLine,
              styles.hamburgerLineBottom,
              click && styles.hamburgerLineBottomActive
            )}
          />
        </div>
      </button>

      {/* Mobile Navigation */}
      <nav className={navClass}>
        <div className="flex flex-col items-center w-full gap-4">
          <Link href="/about" className={linkClass}>About</Link>
          <Link href="/contact" className={linkClass}>Contact</Link>
          <button
            onClick={toggleImages}
            className={imageButtonClass}
            aria-label="Show ISO certificates"
          >
            ISO Certificates
          </button>
          <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className={themeButtonClass}
            aria-label="Theme switcher"
          >
            {mode === "light" ? <MoonIcon className="fill-dark" /> : <SunIcon className="fill-dark" />}
          </button>
        </div>
        <button
          onClick={toggle}
          className="mt-4 py-1 px-3 border border-solid border-dark rounded-full text-sm font-medium hover:bg-gray-200 transition-colors duration-200"
          aria-label="Close menu"
        >
          Close
        </button>
      </nav>

      {/* Desktop Navigation Container */}
      <div className="hidden sm:flex items-center space-x-4 absolute top-6 right-10">
        {/* Navigation */}
        <nav className="w-max py-3 px-8 border border-solid border-dark rounded-full font-medium capitalize items-center bg-light/80 backdrop-blur-sm z-50 transition-all ease duration-300">
          <Link href="/about" className={linkClass}>About</Link>
          <Link href="/contact" className={linkClass}>Contact</Link>
          <button
            onClick={toggleImages}
            className={imageButtonClass}
            aria-label="Show ISO certificates"
          >
            ISO Certificates
          </button>
          <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className={themeButtonClass}
            aria-label="Theme switcher"
          >
            {mode === "light" ? <MoonIcon className="fill-dark" /> : <SunIcon className="fill-dark" />}
          </button>
        </nav>

        {/* Social Icons */}
        <div className="flex items-center justify-center space-x-4">
          <a 
            href={siteMetadata.facebook} 
            className={`w-[50px] h-[50px] flex items-center justify-center rounded-full hover:scale-125 transition-all ease duration-200 ${styles.animatedBorder}`} 
            aria-label="Reach out to me via Facebook" 
            target="_blank"
          >
            <FacebookIcon className="w-[30px] h-[30px] fill-current text-white" />
          </a>
          <a 
            href={siteMetadata.zalo} 
            className={`w-[50px] h-[50px] flex items-center justify-center rounded-full hover:scale-125 transition-all ease duration-200 ${styles.animatedBorder}`} 
            aria-label="Reach out to me via Zalo" 
            target="_blank"
          >
            <ZaloIcon className="w-[30px] h-[30px] fill-current text-white" />
          </a>
          <a 
            href={siteMetadata.tiktok} 
            className={`w-[50px] h-[50px] flex items-center justify-center rounded-full hover:scale-125 transition-all ease duration-200 ${styles.animatedBorder}`} 
            aria-label="Check my profile on TikTok" 
            target="_blank"
          >
            <TiktokIcon className="w-[30px] h-[30px] fill-current text-white" />
          </a>
        </div>
      </div>

      {/* Modal hiển thị ảnh */}
      {showImages && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-3xl w-full relative">
            <button
              onClick={toggleImages}
              className="absolute top-2 right-2 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100"
            >
              ✕
            </button>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Image
                src="/blogs/image2.jpg"
                alt="ISO Certificate 1"
                width={400}
                height={300}
                className="w-full h-auto object-cover rounded-lg"
              />
              <Image
                src="/blogs/image2.jpg"
                alt="ISO Certificate 2"
                width={400}
                height={300}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;