"use client";
import React, { useState } from "react";

export default function PhoneInfo() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-4 left-4 z-50">
      {/* Container chính */}
      <div className="flex items-center">
        {/* Panel thông tin khi mở */}
        {isOpen ? (
          <div className="w-80 bg-white dark:bg-white shadow-lg rounded-lg p-4 text-gray-900 dark:text-black">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Thông tin liên hệ</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-white"
              >
                X
              </button>
            </div>
            <div>
              <p>
                <strong>Số điện thoại:</strong> 087.6789.252
              </p>
              <p>
                <strong>Email:</strong> info@baolongscrap.vn
              </p>
              <p>
                <strong>Địa chỉ:</strong> A17-36A Đường Số 02, Khu Nam An Hòa,
                Phường An Hòa, Thành Phố Rạch Giá, Tỉnh Kiên Giang
              </p>
              <p>
                <strong>Giờ làm việc:</strong> 8:00 - 17:00, Thứ 2 - Thứ 6
              </p>
            </div>
          </div>
        ) : (
          <div className="flex items-center">
            {/* Nút điện thoại */}
            <button
              onClick={() => setIsOpen(true)}
              className="w-20 h-20 bg-blue-500 dark:bg-blue-700 text-white rounded-full flex items-center justify-center hover:bg-blue-600 dark:hover:bg-blue-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-12 h-12"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </button>
            {/* Thông báo nổi */}
            <div className="ml-4 bg-yellow-100 dark:bg-yellow-200 text-yellow-800 dark:text-yellow-900 px-3 py-1 rounded-full text-sm font-medium animate-pulse">
              Liên hệ ngay!
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
