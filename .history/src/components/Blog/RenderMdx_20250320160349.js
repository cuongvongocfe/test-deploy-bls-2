"use client";
import React, { useMemo } from "react";
import { useMDXComponent } from "next-contentlayer/hooks";
import Image from "next/image";

// Định nghĩa các component tùy chỉnh cho MDX
const mdxComponents = {
  Image,
};

// Định nghĩa biến chứa className để tái sử dụng và dễ bảo trì
const CONTENT_CLASSES = [
  "col-span-12 lg:col-span-8 font-in prose sm:prose-base md:prose-lg max-w-max",
  "prose-blockquote:bg-accent/20 prose-blockquote:p-2 prose-blockquote:px-6 prose-blockquote:border-accent prose-blockquote:not-italic prose-blockquote:rounded-r-lg",
  "prose-li:marker:text-accent",
  "dark:prose-invert dark:prose-blockquote:border-accentDark dark:prose-blockquote:bg-accentDark/20 dark:prose-li:marker:text-accentDark",
  "first-letter:text-3xl sm:first-letter:text-5xl",
].join(" ");

const RenderMdx = ({ blog }) => {
  // Kiểm tra an toàn nếu thiếu dữ liệu
  if (!blog || !blog.body || !blog.body.code) {
    return <div>Lỗi: Thiếu dữ liệu bài blog để render</div>;
  }

  // Sử dụng useMemo để memoize MDXContent, tránh tạo lại nếu code không thay đổi
  const MDXContent = useMemo(() => useMDXComponent(blog.body.code), [blog.body.code]);

  return (
    // Container chính chứa nội dung MDX của bài blog
    <div className={CONTENT_CLASSES}>
      {/* Render nội dung MDX với các component tùy chỉnh */}
      <MDXContent components={mdxComponents} />
    </div>
  );
};

export default RenderMdx;