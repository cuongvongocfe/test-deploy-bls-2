"use client";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import PhoneInfo from "./PhoneInfo";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false); // Thêm trạng thái gửi email

  useEffect(() => {
    emailjs.init("BKW-oapRfTXpxNYeT");
  }, []);

  const onSubmit = async (data) => {
    setIsSending(true);
    try {
      const response = await emailjs.send("baolongscrap", "template_fi6z8jn", {
        name: data.name,
        phone: data.phone,
        notes: data.notes || "Không có ghi chú",
        service: data.service || "Không chọn dịch vụ",
      }, "BKW-oapRfTXpxNYeT");

      console.log("Email đã được gửi thành công!", response.text);
      setIsSubmitted(true);
      reset();
    } catch (error) {
      console.error("Gửi email thất bại:", error.text);
      alert(`Gửi yêu cầu thất bại: ${error.text}`);
    } finally {
      setIsSending(false); // Kết thúc trạng thái gửi
    }
  };

  if (isSubmitted) {
    return (
      <div className="mt-12 text-base xs:text-lg sm:text-xl font-medium leading-relaxed font-in text-center text-gray-900 dark:text-gray-100">
        <p className="text-green-500 dark:text-green-400">CẢM ƠN BẠN ĐÃ LIÊN HỆ VỚI CHÚNG TÔI!</p>
        <PhoneInfo />
      </div>
    );
  }

  return (
    <div className="relative">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-12 text-base xs:text-lg sm:text-xl font-medium leading-relaxed font-in flex flex-col items-center text-gray-900 dark:text-gray-100"
      >
        <div className="flex flex-col space-y-4 mb-4 w-full max-w-md">
          <div>
            <input
              type="text"
              placeholder="NHẬP TÊN *"
              {...register("name", { required: "Tên là bắt buộc", maxLength: 80 })}
              className="outline-none border-0 p-0 focus:ring-0 placeholder:text-center placeholder:text-lg border-b border-gray-400 focus:border-gray-600 bg-transparent w-full placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-gray-100"
            />
            {errors.name && <p className="text-red-500 dark:text-red-400 text-sm">{errors.name.message}</p>}
          </div>

          <div>
            <input
              type="tel"
              placeholder="SỐ ĐIỆN THOẠI *"
              {...register("phone", { required: "Số điện thoại là bắt buộc" })}
              className="outline-none border-0 p-0 focus:ring-0 placeholder:text-center placeholder:text-lg border-b border-gray-400 focus:border-gray-600 bg-transparent w-full placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-gray-100"
            />
            {errors.phone && <p className="text-red-500 dark:text-red-400 text-sm">{errors.phone.message}</p>}
          </div>

          <div>
            <textarea
              {...register("notes")}
              placeholder="GHI CHÚ (không bắt buộc)"
              rows={3}
              className="w-full outline-none border-0 p-0 mx-0 focus:ring-0 placeholder:text-center placeholder:text-lg border-b border-gray-400 focus:border-gray-600 bg-transparent placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-gray-100"
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label className="text-center">DỊCH VỤ QUAN TÂM</label>
            <div className="flex flex-wrap justify-center gap-4">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  value="Thiết kế APP"
                  {...register("service", { required: "Vui lòng chọn một dịch vụ" })}
                  className="form-radio"
                />
                <span>Thiết kế APP</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  value="Tích hợp AI"
                  {...register("service", { required: "Vui lòng chọn một dịch vụ" })}
                  className="form-radio"
                />
                <span>Tích hợp AI</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  value="Phần mềm"
                  {...register("service", { required: "Vui lòng chọn một dịch vụ" })}
                  className="form-radio"
                />
                <span>Phần mềm</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  value="Blockchain"
                  {...register("service", { required: "Vui lòng chọn một dịch vụ" })}
                  className="form-radio"
                />
                <span>Blockchain</span>
              </label>
            </div>
            {errors.service && <p className="text-red-500 dark:text-red-400 text-sm">{errors.service.message}</p>}
          </div>
        </div>

        <input
          type="submit"
          value={isSending ? "ĐANG GỬI..." : "GỬI ĐI"}
          disabled={isSending}
          className={`mt-8 font-medium inline-block capitalize text-lg sm:text-xl py-2 sm:py-3 px-6 sm:px-8 border-2 border-solid border-dark dark:border-light rounded cursor-pointer text-gray-900 dark:text-gray-100 bg-gradient-to-r from-blue-500 to-yellow-500 ${isSending ? 'opacity-50 cursor-not-allowed' : ''}`}
        />
      </form>
      <PhoneInfo />
    </div>
  );
}