"use client";
import { format, parseISO } from "date-fns";
import Link from "next/link";
import React, { useMemo } from "react";
import { slug as slugify } from "github-slugger";
import ViewCounter from "./ViewCounter";

// Định nghĩa các biến chứa className để tái sử dụng và dễ bảo trì
const CONTAINER_CLASSES = [
  "px-2",
  "md:px-10",
  "bg-accent",
  "dark:bg-accentDark",
  "text-light",
  "dark:text-dark",
  "py-2",
  "flex",
  "items-center",
  "justify-around",
  "flex-wrap",
  "text-lg",
  "sm:text-xl",
  "font-medium",
  "mx-5",
  "md:mx-10",
  "rounded-lg",
].join(" ");

const ITEM_CLASSES = "mx-2 sm:mx-4"; // Điều chỉnh khoảng cách cho responsive
const LINK_CLASSES = "mx-2 sm:mx-4 hover:text-yellow-300 transition-colors duration-300"; // Thêm hiệu ứng hover
const FALLBACK_CLASSES = "mx-2 sm:mx-4 italic text-gray-300 dark:text-gray-500"; // Định dạng thông báo lỗi

// Hàm tiện ích để định dạng ngày an toàn
const formatDate = (dateStr) => {
  if (!dateStr || typeof dateStr !== "string") return "Ngày không hợp lệ";
  try {
    return format(parseISO(dateStr), "LLLL d, yyyy");
  } catch (error) {
    console.error("Lỗi định dạng ngày:", error);
    return "Ngày không hợp lệ";
  }
};

// Component hiển thị thông báo lỗi khi thiếu dữ liệu
const FallbackMessage = ({ message }) => (
  <section className={CONTAINER_CLASSES}>
    <span className={FALLBACK_CLASSES}>{message}</span>
  </section>
);

const BlogDetails = ({ blog, slug: blogSlug }) => {
  // Kiểm tra sớm nếu thiếu dữ liệu quan trọng
  if (!blog || !blogSlug) {
    return <FallbackMessage message="Lỗi: Thiếu dữ liệu bài blog" />;
  }

  const { publishedAt, readingTime, tags } = blog;

  // Sử dụng useMemo để memoize định dạng ngày, tránh tính toán lại
  const formattedDate = useMemo(() => formatDate(publishedAt), [publishedAt]);

  // Lấy tag đầu tiên và tạo slug cho danh mục
  const firstTag = tags?.[0];
  const categorySlug = firstTag ? slugify(firstTag) : "";

  return (
    // Phần chính hiển thị thông tin chi tiết của bài blog
    <section className={CONTAINER_CLASSES}>
      {/* Ngày xuất bản của bài blog */}
      <time className={ITEM_CLASSES} dateTime={publishedAt || undefined}>
        {formattedDate}
      </time>

      {/* Số lượt xem của bài blog */}
      <span className={ITEM_CLASSES}>
        <ViewCounter slug={blogSlug} />
      </span>

      {/* Thời gian đọc ước tính của bài blog */}
      <div className={ITEM_CLASSES}>
        {readingTime?.text ?? "Thời gian đọc không khả dụng"}
      </div>

      {/* Liên kết đến danh mục (tag đầu tiên) hoặc thông báo nếu không có danh mục */}
      {firstTag ? (
        <Link
          href={`/categories/${categorySlug}`}
          className={LINK_CLASSES}
          aria-label={`Xem tất cả bài viết trong danh mục ${firstTag}`}
        >
          #{firstTag}
        </Link>
      ) : (
        <span className={FALLBACK_CLASSES}>Không có danh mục</span>
      )}
    </section>
  );
};

// Bọc component trong React.memo để tránh re-render không cần thiết
export default React.memo(BlogDetails);