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
      <div className="mt-12 text-base xs:text-lg sm:text-xl font-medium leading-relaxed font-in text-center text-gray-900 dark:text-gray-100">
        <p className="text-green-500 dark:text-green-400">CẢM ƠN BẠN ĐÃ LIÊN HỆ VỚI CHÚNG TÔI!</p>
        <PhoneInfo />
      </div>
    );
  }

  return (
    <div className="relative px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-12 text-base xs:text-lg sm:text-xl font-medium leading-relaxed font-in flex flex-col items-center text-gray-900 dark:text-gray-100"
      >
        <div className="flex flex-col sm:flex-row sm:space-x-4 mb-10 w-full justify-center gap-y-4 sm:gap-y-0">
          <div className="w-full sm:w-auto">
            <input
              type="text"
              placeholder="HỌ VÀ TÊN"
              {...register("name", { required: "Name is required", maxLength: 80 })}
              className="outline-none border-0 p-0 focus:ring-0 placeholder:text-center placeholder:text-lg border-b border-gray-400 focus:border-gray-600 bg-transparent w-full sm:w-64 lg:w-72 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-gray-100"
            />
            {errors.name && <p className="text-red-500 dark:text-red-400 text-sm">{errors.name.message}</p>}
          </div>

          <div className="w-full sm:w-auto">
            <input
              type="email"
              placeholder="EMAIL"
              {...register("email", {
                required: "Email is required",
                pattern: { value: /^\S+@\S+$/i, message: "Invalid email" },
              })}
              className="outline-none border-0 p-0 focus:ring-0 placeholder:text-center placeholder:text-lg border-b border-gray-400 focus:border-gray-600 bg-transparent w-full sm:w-64 lg:w-72 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-gray-100"
            />
            {errors.email && <p className="text-red-500 dark:text-red-400 text-sm">{errors.email.message}</p>}
          </div>

          <div className="w-full sm:w-auto">
            <input
              type="tel"
              placeholder="SỐ ĐIỆN THOẠI"
              {...register("phone number", {})}
              className="outline-none border-0 p-0 focus:ring-0 placeholder:text-center placeholder:text-lg border-b border-gray-400 focus:border-gray-600 bg-transparent w-full sm:w-64 lg:w-72 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-gray-100"
            />
          </div>
        </div>

        <div className="w-full flex justify-center">
          <textarea
            {...register("project details", {})}
            placeholder="NỘI DUNG"
            rows={3}
            className="outline-none border-0 p-0 focus:ring-0 placeholder:text-lg border-b border-gray-400 focus:border-gray-600 bg-transparent max-w-3xl w-full mb-6 mt-8 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-gray-100"
          />
        </div>

        <input
          type="submit"
          value="GỬI YÊU CẦU"
          className="mt-8 font-medium inline-block capitalize text-base sm:text-lg lg:text-xl py-2 sm:py-3 px-6 sm:px-8 border-2 border-solid border-dark dark:border-light rounded cursor-pointer text-gray-900 dark:text-gray-100"
        />
      </form>
      <PhoneInfo />
    </div>
  );
}