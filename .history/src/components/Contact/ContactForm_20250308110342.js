"use client";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [isSubmitted, setIsSubmitted] = useState(false); // Trạng thái gửi thành công

  useEffect(() => {
    emailjs.init("BKW-oapRfTXpxNYeT"); // Khởi tạo EmailJS
  }, []);

  const onSubmit = (data) => {
    console.log("Form data:", data);
    emailjs
      .send("Bảo Long Scrap", "template_fi6z8jn", data, "BKW-oapRfTXpxNYeT")
      .then(
        (result) => {
          console.log("Email sent successfully!", result.text);
          setIsSubmitted(true); // Cập nhật trạng thái khi gửi thành công
          reset(); // Xóa dữ liệu form
        },
        (error) => {
          console.error("Failed to send email:", error.text);
          alert("Failed to send request. Please try again."); // Thông báo lỗi nếu gửi thất bại
        }
      );
  };

  // Nếu gửi thành công, hiển thị thông báo thay vì form
  if (isSubmitted) {
    return (
      <div className="mt-12 text-base xs:text-lg sm:text-xl font-medium leading-relaxed font-in text-center">
        <p className="text-green-500">Your request has been sent successfully!</p>
      </div>
    );
  }

  // Form hiển thị khi chưa gửi
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-12 text-base xs:text-lg sm:text-xl font-medium leading-relaxed font-in"
    >
      <input
        type="text"
        placeholder="Tên"
        {...register("name", { required: "Name is required", maxLength: 80 })}
        className="outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-center placeholder:text-lg border-b border-gray focus:border-gray bg-transparent"
      />
      {errors.name && <p className="text-red-500">{errors.name.message}</p>}

      <input
        type="email"
        placeholder="Email"
        {...register("email", {
          required: "Email is required",
          pattern: { value: /^\S+@\S+$/i, message: "Invalid email" },
        })}
        className="outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-center placeholder:text-lg border-b border-gray focus:border-gray bg-transparent"
      />
      {errors.email && <p className="text-red-500">{errors.email.message}</p>}

      <input
        type="tel"
        placeholder="Số Điện Thoại"
        {...register("phone number", {})}
        className="outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-center placeholder:text-lg border-b border-gray focus:border-gray bg-transparent"
      />
      <br />
      <textarea
        {...register("project details", {})}
        placeholder="NỘI DUNG"
        rows={3}
        className="w-full outline-none border-0 p-0 mx-0 focus:ring-0 placeholder:text-lg border-b border-gray focus:border-gray bg-transparent"
      />
      <input
        type="submit"
        value="send request"
        className="mt-8 font-medium inline-block capitalize text-lg sm:text-xl py-2 sm:py-3 px-6 sm:px-8 border-2 border-solid border-dark dark:border-light rounded cursor-pointer"
      />
    </form>
  );
}