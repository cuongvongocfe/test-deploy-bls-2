import React from "react";
import Tag from "../Elements/Tag";
import Link from "next/link";
import Image from "next/image";
import { slug } from "github-slugger";

// Định nghĩa các biến chứa className để tái sử dụng và dễ bảo trì
const CONTAINER_CLASSES = "group inline-block overflow-hidden rounded-xl";
const GRADIENT_CLASSES =
  "absolute top-0 left-0 bottom-0 right-0 h-full bg-gradient-to-b from-transparent from-0% to-dark/90 rounded-xl z-10";
const IMAGE_CLASSES =
  "w-full h-full object-center object-cover rounded-xl group-hover:scale-105 transition-all ease duration-300";
const CONTENT_CLASSES = "w-full absolute bottom-0 p-4 xs:p-6 sm:p-10 z-20";
const TITLE_CLASSES =
  "font-bold capitalize text-sm xs:text-base sm:text-xl md:text-2xl text-light mt-2 sm:mt-4";
const TITLE_HIGHLIGHT_CLASSES =
  "bg-gradient-to-r from-accent to-accent bg-[length:0px_6px] dark:from-accentDark/50 dark:to-accentDark/50 group-hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500";
const TAG_CLASSES = "px-6 text-xs sm:text-sm py-1 sm:py-2 !border hover:bg-light/20 transition-colors duration-300";

const BlogLayoutOne = ({ blog }) => {
  // Kiểm tra an toàn nếu thiếu dữ liệu blog
  if (!blog || !blog.image || !blog.tags || !blog.tags[0]) {
    return null; // Trả về null nếu thiếu dữ liệu quan trọng
  }

  // Xử lý đường dẫn hình ảnh an toàn
  const imagePath = blog.image.filePath?.replace("../public", "") || "";

  return (
    // Container chính của thẻ blog, với hiệu ứng hover
    <div className={CONTAINER_CLASSES}>
      {/* Lớp gradient phủ lên hình ảnh, tạo hiệu ứng tối dần từ trên xuống */}
      <div className={GRADIENT_CLASSES} />

      {/* Hình ảnh đại diện của bài blog */}
      <Image
        src={imagePath}
        placeholder="blur"
        blurDataURL={blog.image.blurhashDataUrl}
        alt={blog.title}
        width={blog.image.width}
        height={blog.image.height}
        className={IMAGE_CLASSES}
        sizes="(max-width: 1180px) 100vw, 50vw"
        loading="lazy" // Tối ưu tải hình ảnh
      />

      {/* Phần nội dung (tag và tiêu đề) hiển thị phía dưới hình ảnh */}
      <div className={CONTENT_CLASSES}>
        {/* Tag (danh mục) đầu tiên của bài blog */}
        <Tag
          link={`/categories/${slug(blog.tags[0])}`}
          name={blog.tags[0]}
          className={TAG_CLASSES}
        />

        {/* Tiêu đề bài blog với hiệu ứng gạch chân khi hover */}
        <Link href={blog.url} className="mt-6">
          <h2 className={TITLE_CLASSES}>
            <span className={TITLE_HIGHLIGHT_CLASSES}>{blog.title}</span>
          </h2>
        </Link>
      </div>
    </div>
  );
};

export default BlogLayoutOne;