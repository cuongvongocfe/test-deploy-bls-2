"use client";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import PhoneInfo from./PhoneInfoInfo"; // Import PhoneInfo

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    emailjs.init("BKW-oapRfTXpxNYeT");
  }, []);

  const onSubmit = (data) => {
    console.log("Form data:", data);
    emailjs
      .send("baolongscrap", "template_fi6z8jn", data, "BKW-oapRfTXpxNYeT")
      .then(
        (result) => {
          console.log("Email sent successfully!", result.text);
          setIsSubmitted(true);
          reset();
        },
        (error) => {
          console.error("Failed to send email:", error.text);
          alert(`Failed to send request: ${error.text}`);
        }
      );
  };

  if (isSubmitted) {
    return (
      <div className="mt-12 text-base xs:text-lg sm:text-xl font-medium leading-relaxed font-in text-center">
        <p className="text-green-500">CẢM ƠN BẠN ĐÃ LIÊN HỆ VỚI CHÚNG TÔI!</p>
        <PhoneInfo /> {/* Thêm PhoneInfo */}
      </div>
    );
  }

  return (
    <div className="relative">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-12 text-base xs:text-lg sm:text-xl font-medium leading-relaxed font-in flex flex-col items-center"
      >
        <div className="flex flex-row space-x-4 mb-4 w-full justify-center">
          <div>
            <input
              type="text"
              placeholder="HỌ VÀ TÊN"
              {...register("name", { required: "Name is required", maxLength: 80 })}
              className="outline-none border-0 p-0 focus:ring-0 placeholder:text-center placeholder:text-lg border-b border-gray focus:border-gray bg-transparent w-72"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
          </div>

          <div>
            <input
              type="email"
              placeholder="EMAIL"
              {...register("email", {
                required: "Email is required",
                pattern: { value: /^\S+@\S+$/i, message: "Invalid email" },
              })}
              className="outline-none border-0 p-0 focus:ring-0 placeholder:text-center placeholder:text-lg border-b border-gray focus:border-gray bg-transparent w-72"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>

          <div>
            <input
              type="tel"
              placeholder="SỐ ĐIỆN THOẠI"
              {...register("phone number", {})}
              className="outline-none border-0 p-0 focus:ring-0 placeholder:text-center placeholder:text-lg border-b border-gray focus:border-gray bg-transparent w-72"
            />
          </div>
        </div>

        <textarea
          {...register("project details", {})}
          placeholder="NỘI DUNG"
          rows={3}
          className="w-full outline-none border-0 p-0 mx-0 focus:ring-0 placeholder:text-lg border-b border-gray focus:border-gray bg-transparent mb-4"
        />
        <input
          type="submit"
          value="GỬI YÊU CẦU"
          className="mt-8 font-medium inline-block capitalize text-lg sm:text-xl py-2 sm:py-3 px-6 sm:px-8 border-2 border-solid border-dark dark:border-light rounded cursor-pointer"
        />
      </form>
      <PhoneInfo /> {/* Thêm PhoneInfo */}
    </div>
  );
}