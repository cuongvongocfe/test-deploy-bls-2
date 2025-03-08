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
          alert("Failed to send request. Please try again.");
        }
      );
  };

  if (isSubmitted) {
    return (
      <div className="mt-12 text-base xs:text-lg sm:text-xl font-medium leading-relaxed font-in text-center">
        <p className="text-green-500">Your request has been sent successfully!</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-12 text-base xs:text-lg sm:text-xl font-medium leading-relaxed font-in"
    >
      <input
        type="text"
        placeholder="your name"
        {...register("name", { required: "Name is required", maxLength: 80 })}
        className="outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-center placeholder:text-lg border-b border-gray focus:border-gray bg-transparent w-96" // Tăng chiều rộng
      />
      {errors.name && <p className="text-red-500">{errors.name.message}</p>}

      <input
        type="email"
        placeholder="your@email"
        {...register("email", {
          required: "Email is required",
          pattern: { value: /^\S+@\S+$/i, message: "Invalid email" },
        })}
        className="outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-center placeholder:text-lg border-b border-gray focus:border-gray bg-transparent w-96" // Tăng chiều rộng
      />
      {errors.email && <p className="text-red-500">{errors.email.message}</p>}

      <input
        type="tel"
        placeholder="your phone"
        {...register("phone number", {})}
        className="outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-center placeholder:text-lg border-b border-gray focus:border-gray bg-transparent w-96" // Tăng chiều rộng
      />
      <br />
      <textarea
        {...register("project details", {})}
        placeholder="My project is about..."
        rows={3}
        className="w-full outline-none border-0 p-0 mx-0 focus:ring-0 placeholder:text-lg border-b border-gray focus:border-gray bg-transparent" // Giữ nguyên w-full
      />
      <input
        type="submit"
        value="send request"
        className="mt-8 font-medium inline-block capitalize text-lg sm:text-xl py-2 sm:py-3 px-6 sm:px-8 border-2 border-solid border-dark dark:border-light rounded cursor-pointer"
      />
    </form>
  );
}