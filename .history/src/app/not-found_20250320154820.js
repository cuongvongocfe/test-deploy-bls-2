import Link from "next/link";
import { FaExclamationTriangle } from "react-icons/fa";

const TEXT_CLASSES = "text-dark dark:text-light font-bold capitalize text-center";
const TITLE_CLASSES = `${TEXT_CLASSES} text-6xl sm:text-7xl xl:text-8xl`;
const SUBTITLE_CLASSES = `${TEXT_CLASSES} text-4xl sm:text-5xl xl:text-6xl mt-4 tracking-wide leading-snug`;
const BUTTON_CLASSES =
  "self-center mt-8 inline-block rounded-lg border-2 border-solid bg-dark px-4 py-2 font-semibold text-light hover:border-dark hover:bg-light hover:text-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light transition-all duration-300";

const NotFound = () => {
  return (
    // Phần chính của trang 404, căn giữa nội dung và thêm margin trên/dưới
    <main className="my-32 w-full dark:bg-dark flex justify-center font-mr">
      <div className="relative flex flex-col items-center justify-center">
        {/* Icon minh họa lỗi */}
        <FaExclamationTriangle className="text-5xl sm:text-6xl text-red-500 dark:text-red-400 mb-4" />

        {/* Tiêu đề "404" với kích thước lớn, responsive trên các màn hình */}
        <h1 className={TITLE_CLASSES}>404</h1>

        {/* Tiêu đề phụ "Page Not Found!" với kích thước nhỏ hơn */}
        <h2 className={SUBTITLE_CLASSES}>Page Not Found!</h2>

        {/* Nút dẫn về trang chủ với hiệu ứng hover */}
        <Link href="/" className={BUTTON_CLASSES}>
          Go To Home
        </Link>
      </div>
    </main>
  );
};

export default NotFound;