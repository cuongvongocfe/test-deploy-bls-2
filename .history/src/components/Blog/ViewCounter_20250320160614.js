"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import React, { useEffect, useState, useCallback } from "react";

// Khởi tạo Supabase client bên ngoài component
const supabase = createClientComponentClient();

// Định nghĩa biến chứa className để tái sử dụng và dễ bảo trì
const VIEW_CLASSES = "text-sm sm:text-base text-dark dark:text-light font-medium";

// Component hiển thị số lượt xem của bài viết
const ViewCounter = ({ slug, noCount = false, showCount = true }) => {
  const [views, setViews] = useState(null); // null: đang tải, số: đã tải, -1: lỗi
  const [error, setError] = useState(null);

  // Hàm tăng lượt xem
  const incrementView = useCallback(async () => {
    if (noCount) return; // Không tăng nếu noCount là true

    try {
      const { error: incrementError } = await supabase.rpc("increment", {
        slug_text: slug,
      });
      if (incrementError) throw new Error(`Tăng lượt xem thất bại: ${incrementError.message}`);
    } catch (error) {
      throw new Error(error.message);
    }
  }, [slug, noCount]);

  // Hàm lấy số lượt xem
  const fetchViews = useCallback(async () => {
    try {
      const { data, error: fetchError } = await supabase
        .from("view") // Tên bảng là 'view', cần đảm bảo đúng trong cơ sở dữ liệu
        .select("count")
        .eq("slug", slug)
        .single();

      if (fetchError) throw new Error(`Lấy lượt xem thất bại: ${fetchError.message}`);
      return data?.count ?? 0;
    } catch (error) {
      throw new Error(error.message);
    }
  }, [slug]);

  // Hàm cập nhật lượt xem
  const updateViews = useCallback(async () => {
    if (!slug) {
      setViews(-1);
      setError("Thiếu slug để lấy lượt xem");
      return;
    }

    try {
      // Tăng lượt xem nếu cần
      await incrementView();
      // Lấy số lượt xem
      const viewCount = await fetchViews();
      setViews(viewCount);
      setError(null);
    } catch (error) {
      console.error("Lỗi ViewCounter:", error.message);
      setViews(-1);
      setError(error.message);
    }
  }, [slug, incrementView, fetchViews]);

  // Gọi API khi slug thay đổi
  useEffect(() => {
    updateViews();
  }, [updateViews]);

  // Xử lý giao diện dựa trên trạng thái
  if (!showCount) return null;

  if (views === null) {
    return <div className={VIEW_CLASSES}>Đang tải...</div>;
  }

  if (views === -1) {
    return <div className={VIEW_CLASSES}>Lỗi: {error}</div>;
  }

  return (
    <div className={VIEW_CLASSES}>
      {views} lượt xem{views === 1 ? "" : ""}
    </div>
  );
};

export default ViewCounter;