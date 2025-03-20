import React, { useMemo } from "react";
import Image from "next/image";
import { evaluate } from "@mdx-js/mdx";
import * as runtime from "react/jsx-runtime";

// Định nghĩa các component mặc định được chia sẻ
const sharedComponents = {
  Image,
};

// Hook để biên dịch và đánh giá mã MDX
const useMDXComponent = (code) => {
  // Sử dụng useMemo để memoize component, tránh tạo lại nếu code không thay đổi
  return useMemo(() => {
    if (!code) {
      return () => null; // Trả về component rỗng nếu không có code
    }

    try {
      // Biên dịch và đánh giá mã MDX
      const { default: Component } = evaluate(code, {
        ...runtime,
        useMDXComponents: () => sharedComponents,
      });
      return Component;
    } catch (error) {
      console.error("Lỗi khi biên dịch mã MDX:", error);
      return () => <div>Lỗi: Không thể render nội dung MDX</div>;
    }
  }, [code]);
};

// Component chính để render nội dung MDX
const MDXContent = ({ code, components = {}, ...props }) => {
  // Kiểm tra an toàn nếu thiếu dữ liệu
  if (!code) {
    return <div>Lỗi: Thiếu mã MDX để render</div>;
  }

  // Sử dụng hook để lấy component MDX
  const Component = useMDXComponent(code);

  // Kết hợp các component mặc định và component tùy chỉnh
  const allComponents = { ...sharedComponents, ...components };

  return (
    // Render component MDX với các component và props được truyền vào
    <Component components={allComponents} {...props} />
  );
};

export default MDXContent;