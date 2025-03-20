import { cx } from "@/src/utils";
import Link from "next/link";
import React from "react";

// Định nghĩa các biến chứa className để tái sử dụng và dễ bảo trì
const BASE_CLASSES =
  "inline-block py-1.5 md:py-2 px-6 md:px-10 rounded-full border-2 border-solid border-dark dark:border-light transition-all ease duration-200 m-1 sm:m-2 hover:scale-105 hover:shadow-md hover:border-accent dark:hover:border-accentDark";
const ACTIVE_CLASSES = "bg-dark text-light dark:bg-light dark:text-dark";
const INACTIVE_CLASSES = "bg-light text-dark dark:bg-dark dark:text-light";

const Category = ({ link = "#", name, active, ...props }) => {
  // Kiểm tra an toàn nếu thiếu dữ liệu
  if (!name) {
    return null; // Trả về null nếu thiếu tên danh mục
  }

  return (
    // Liên kết đến danh mục, hiển thị dưới dạng nút với hiệu ứng hover
    <Link
      href={link}
      className={cx(
        BASE_CLASSES, // Lớp cơ bản cho kiểu dáng và hiệu ứng
        active ? ACTIVE_CLASSES : INACTIVE_CLASSES, // Lớp động dựa trên trạng thái active
        props.className // Lớp tùy chỉnh từ props
      )}
    >
      #{name}
    </Link>
  );
};

export default Category;