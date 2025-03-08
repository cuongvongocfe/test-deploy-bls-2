"use client";
import Link from "next/link";
import Logo from "./Logo";
import { DribbbleIcon, GithubIcon, LinkedinIcon, MoonIcon, SunIcon, TwitterIcon } from "../Icons";
import siteMetadata from "@/src/utils/siteMetaData";
import { useThemeSwitch } from "../Hooks/useThemeSwitch";
import { useState } from "react";
import { cx } from "@/src/utils";

const Header = () => {
  const [mode, setMode] = useThemeSwitch();
  const [click, setClick] = useState(false);

  const toggle = () => setClick(!click);

  const navClass = "w-max py-3 px-8 border border-solid border-dark rounded-full font-medium capitalize items-center fixed top-6 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm z-50";
  const linkClass = "mx-2";
  const iconClass = "inline-block w-8 h-8 mr-4 hover:scale-125 transition-all ease duration-200";
  const themeButtonClass = cx(
    "w-8 h-8 ease ml-2 flex items-center justify-center rounded-full p-1",
    mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
  );

  return (
    <header className="w-full p-4 px-5 sm:px-10 flex items-center justify-between">
      <Logo />

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
                transform: click ? "rotate(-45deg) translateY(0)" : "rotate(0deg) translateY(6px)"
              }}
            />
            <span 
              className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200"
              style={{ opacity: click ? 0 : 1 }}
            />
            <span 
              className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200"
              style={{
                transform: click ? "rotate(45deg) translateY(0)" : "rotate(0deg) translateY(-6px)"
              }}
            />
          </div>
        </div>
      </button>

      {/* Mobile Navigation */}
      <nav 
        className={`${navClass} flex sm:hidden transition-all ease duration-300`}
        style={{ top: click ? "1rem" : "-5rem" }}
      >
        <Link href="/" className={linkClass}>Home</Link>
        <Link href="/about" className={linkClass}>Giới Thiệu</Link>
        <Link href="/contact" className={linkClass}>Liên Hệ</Link>
        <button
          onClick={() => setMode(mode === "light" ? "dark" : "light")}
          className={themeButtonClass}
          aria-label="theme-switcher"
        >
          {mode === "light" ? <MoonIcon className="fill-dark" /> : <SunIcon className="fill-dark" />}
        </button>
      </nav>

      {/* Desktop Navigation */}
      <nav className={`${navClass} hidden sm:flex`}>
        <Link href="/" className={linkClass}>Home</Link>
        <Link href="/about" className={linkClass}>Giới Thiệu</Link>
        <Link href="/contact" className={linkClass}>Liên Hệ</Link>
        <button
          onClick={() => setMode(mode === "light" ? "dark" : "light")}
          className={themeButtonClass}
          aria-label="theme-switcher"
        >
          {mode === "light" ? <MoonIcon className="fill-dark" /> : <SunIcon className="fill-dark" />}
        </button>
      </nav>

      {/* Social Icons */}
      <div className="hidden sm:flex items-center">
        <a href={siteMetadata.linkedin} className={iconClass} aria-label="Reach out to me via LinkedIn" target="_blank">
          <LinkedinIcon />
        </a>
        <a href={siteMetadata.twitter} className={iconClass} aria-label="Reach out to me via Twitter" target="_blank">
          <TwitterIcon />
        </a>
        <a href={siteMetadata.github} className={`${iconClass} dark:fill-light`} aria-label="Check my profile on Github" target="_blank">
          <GithubIcon />
        </a>
        {/* Uncomment if you want to use Dribbble
        <a href={siteMetadata.dribbble} className={iconClass} aria-label="Check my profile on Dribbble" target="_blank">
          <DribbbleIcon />
        </a>
        */}
      </div>
    </header>
  );
};

export default Header;