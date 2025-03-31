import { slug } from "github-slugger";
import React from "react";
import Category from "./Category";

// Định nghĩa biến chứa className để tái sử dụng và dễ bảo trì
const CONTAINER_CLASSES =
  "px-0 md:px-10 sxl:px-20 mt-10 border-t-2 border-b-2 border-solid border-dark dark:border-light py-4 flex items-start flex-wrap gap-2 sm:gap-4 font-medium mx-5 md:mx-10 text-dark dark:text-light";

const Categories = ({ categories, currentSlug }) => {
  // Kiểm tra an toàn nếu thiếu dữ liệu
  if (!categories || !Array.isArray(categories) || !currentSlug) {
    return null; // Trả về null nếu thiếu dữ liệu quan trọng
  }

  return (
    // Container chính chứa danh sách các danh mục
    <div className={CONTAINER_CLASSES}>
      {categories.map((cat, index) => (
        // Hiển thị từng danh mục dưới dạng liên kết
        <Category
          key={index} // Sử dụng index làm key để đảm bảo duy nhất
          link={`/categories/${cat}`}
          name={cat}
          active={currentSlug === slug(cat)} // Đánh dấu danh mục hiện tại là active
        />
      ))}
    </div>
  );
};

export default Categories;