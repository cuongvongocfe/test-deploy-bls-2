import { slug } from "github-slugger";
import React from "react";
import Category from "./Category";

// Hàm helper để xóa số ở cuối tag
const removeNumbersFromTag = (tag) => {
  return tag ? tag.replace(/-\d+$/, "") : "";
};

const Categories = ({ categories, currentSlug }) => {
  // Kiểm tra categories có phải là mảng không
  if (!Array.isArray(categories)) {
    console.error("Categories is not an array:", categories);
    return (
      <div className="px-0 md:px-10 sxl:px-20 mt-10 border-t-2 text-dark dark:text-light border-b-2 border-solid border-dark dark:border-light py-4 flex items-start flex-wrap font-medium mx-5 md:mx-10">
        <p>No categories available.</p>
      </div>
    );
  }

  return (
    <div className="px-0 md:px-10 sxl:px-20 mt-10 border-t-2 text-dark dark:text-light border-b-2 border-solid border-dark dark:border-light py-4 flex items-start flex-wrap font-medium mx-5 md:mx-10">
      {categories.map((cat) => {
        const cleanedCat = removeNumbersFromTag(cat);
        const slugifiedCat = slug(cleanedCat);
        return (
          <Category
            key={slugifiedCat}
            link={`/categories/${slugifiedCat}`}
            name={cleanedCat}
            active={currentSlug === slugifiedCat}
          />
        );
      })}
    </div>
  );
};

export default Categories;