import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import React, { useMemo } from "react";

// Định nghĩa các biến chứa className để tái sử dụng và dễ bảo trì
const CONTAINER_CLASSES = "group grid grid-cols-12 gap-4 items-center text-dark dark:text-light";
const IMAGE_CONTAINER_CLASSES = "col-span-12 lg:col-span-4 h-full rounded-xl overflow-hidden";
const IMAGE_CLASSES =
  "aspect-square w-full h-full object-cover object-center group-hover:scale-105 transition-all ease duration-300";
const CONTENT_CLASSES = "col-span-12 lg:col-span-8 w-full";
const TAG_CLASSES =
  "inline-block w-full uppercase text-accent dark:text-accentDark font-semibold text-xs sm:text-sm hover:text-accent/80 dark:hover:text-accentDark/80 transition-colors duration-300";
const TITLE_CLASSES = "font-semibold capitalize text-base sm:text-lg";
const TITLE_HIGHLIGHT_CLASSES =
  "bg-gradient-to-r from-accent/50 dark:from-accentDark/50 to-accent/50 dark:to-accentDark/50 bg-[length:0px_6px] group-hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500";
const DATE_CLASSES = "inline-block w-full capitalize text-gray dark:text-light/50 font-semibold text-xs sm:text-base";

// Hàm tiện ích để định dạng ngày an toàn
const formatDate = (dateStr) => {
  if (!dateStr) return "Ngày không hợp lệ";
  try {
    return format(new Date(dateStr), "MMMM dd, yyyy");
  } catch (error) {
    console.error("Lỗi định dạng ngày:", error);
    return "Ngày không hợp lệ";
  }
};

const BlogLayoutTwo = ({ blog }) => {
  // Kiểm tra an toàn nếu thiếu dữ liệu blog
  if (!blog || !blog.image || !blog.tags || !blog.tags[0] || !blog.publishedAt) {
    return null; // Trả về null nếu thiếu dữ liệu quan trọng
  }

  // Xử lý đường dẫn hình ảnh an toàn
  const imagePath = blog.image.filePath?.replace("../public", "") || "";

  // Sử dụng useMemo để memoize định dạng ngày, tránh tính toán lại
  const formattedDate = useMemo(() => formatDate(blog.publishedAt), [blog.publishedAt]);

  return (
    // Container chính của thẻ blog, sử dụng lưới để chia cột
    <div className={CONTAINER_CLASSES}>
      {/* Hình ảnh đại diện của bài blog, với liên kết đến bài viết */}
      <Link href={blog.url} className={IMAGE_CONTAINER_CLASSES}>
        <Image
          src={imagePath}
          placeholder="blur"
          blurDataURL={blog.image.blurhashDataUrl}
          alt={blog.title}
          width={blog.image.width}
          height={blog.image.height}
          className={IMAGE_CLASSES}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          loading="lazy" // Tối ưu tải hình ảnh
        />
      </Link>

      {/* Phần nội dung (tag, tiêu đề, ngày xuất bản) */}
      <div className={CONTENT_CLASSES}>
        {/* Tag (danh mục) đầu tiên của bài blog */}
        <span className={TAG_CLASSES}>{blog.tags[0]}</span>

        {/* Tiêu đề bài blog với hiệu ứng gạch chân khi hover */}
        <Link href={blog.url} className="inline-block my-1">
          <h2 className={TITLE_CLASSES}>
            <span className={TITLE_HIGHLIGHT_CLASSES}>{blog.title}</span>
          </h2>
        </Link>

        {/* Ngày xuất bản của bài blog */}
        <span className={DATE_CLASSES}>{formattedDate}</span>
      </div>
    </div>
  );
};

export default BlogLayoutTwo;