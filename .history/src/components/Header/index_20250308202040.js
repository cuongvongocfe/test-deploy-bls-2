const Header = () => {
  const [mode, setMode] = useThemeSwitch();
  const [click, setClick] = useState(false);
  const [showImages, setShowImages] = useState(false);

  const toggle = () => setClick(!click);
  const toggleImages = () => setShowImages(!showImages);

  const navClass = "w-max py-3 px-8 border border-solid border-dark rounded-full font-medium capitalize items-center fixed top-6 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm z-50 transition-all ease duration-300";
  const linkClass = "mx-6"; // Đã thay đổi từ mx-2 thành mx-6
  const iconClass = "inline-block w-8 h-8 mr-4 hover:scale-125 transition-all ease duration-200";
  const themeButtonClass = cx(
    "w-8 h-8 ease ml-2 flex items-center justify-center rounded-full p-1",
    mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
  );
  const imageButtonClass = cx(
    "py-2 px-4 border border-solid border-dark rounded-full font-medium hover:bg-gray-200 transition-colors duration-200 ml-2 animated-border",
    mode === "light" ? "bg-light text-dark" : "bg-dark text-light"
  );

  return (
    <header className="w-full p-4 px-5 sm:px-10 flex items-center justify-between">
      <style jsx global>{styles}</style>

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
        className={`${navClass} flex sm:hidden flex-col items-center`}
        style={{ 
          top: click ? "4rem" : "-15rem",
          opacity: click ? 1 : 0,
          visibility: click ? "visible" : "hidden"
        }}
      >
        <div className="flex flex-col items-center w-full">
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
        </div>
        <button
          onClick={toggle}
          className="mt-2 py-1 px-3 border border-solid border-dark rounded-full text-sm font-medium hover:bg-gray-200 transition-colors duration-200"
          aria-label="Close menu"
        >
          Đóng
        </button>
      </nav>

      {/* Desktop Navigation */}
      <nav className={`${navClass} hidden sm:flex`}>
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
                src="/images/image1.jpg"
                alt="ISO Certificate 1"
                width={400}
                height={300}
                className="w-full h-auto object-cover rounded-lg"
              />
              <Image
                src="/images/image2.jpg"
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