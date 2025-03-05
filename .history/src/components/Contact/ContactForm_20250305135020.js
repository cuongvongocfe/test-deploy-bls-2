"use client";
import React from "react";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onTouched", // Validates on blur instead of on change
  });

  const onSubmit = (data) => {
    console.log("Form submitted:", data);
  };

  // Log errors only in development
  if (process.env.NODE_ENV === "development") {
    console.log("Form errors:", errors);
  }

  // Input field configuration
  const fields = [
    {
      name: "name",
      type: "text",
      placeholder: "Your name",
      validation: { required: "Name is required", maxLength: { value: 80, message: "Name too long" } },
    },
    {
      name: "email",
      type: "email",
      placeholder: "your@email.com",
      validation: {
        required: "Email is required",
        pattern: { value: /^\S+@\S+$/i, message: "Invalid email" },
      },
    },
    {
      name: "phone",
      type: "tel",
      placeholder: "Your phone",
      validation: {
        pattern: { value: /^[0-9+-]+$/, message: "Invalid phone number" },
      },
    },
  ];

  // Shared input classes
  const inputClasses = "w-full outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-center placeholder:text-lg border-b border-gray focus:border-gray bg-transparent";
  const submitClasses = "mt-8 font-medium inline-block capitalize text-lg sm:text-xl py-2 sm:py-3 px-6 sm:px-8 border-2 border-solid border-dark dark:border-light rounded cursor-pointer hover:bg-dark hover:text-light transition-colors";

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-12 text-base xs:text-lg sm:text-xl font-medium leading-relaxed font-in space-y-6"
      noValidate // Prevents browser default validation
    >
      {fields.map((field) => (
        <div key={field.name} className="relative">
          <input
            type={field.type}
            placeholder={field.placeholder}
            {...register(field.name, field.validation)}
            className={inputClasses}
            aria-invalid={errors[field.name] ? "true" : "false"}
            aria-describedby={errors[field.name] ? `${field.name}-error` : undefined}
          />
          {errors[field.name] && (
            <span
              id={`${field.name}-error`}
              className="text-red-500 text-sm absolute -bottom-6 left-2"
            >
              {errors[field.name].message}
            </span>
          )}
        </div>
      ))}

      <div className="relative">
        <textarea
          {...register("project", {
            maxLength: { value: 500, message: "Project details too long (max 500 characters)" },
          })}
          placeholder="My project is about..."
          rows={3}
          className={`${inputClasses} mx-0 resize-y`}
          aria-invalid={errors.project ? "true" : "false"}
          aria-describedby={errors.project ? "project-error" : undefined}
        />
        {errors.project && (
          <span id="project-error" className="text-red-500 text-sm absolute -bottom-6 left-2">
            {errors.project.message}
          </span>
        )}
      </div>

      <button type="submit" className={submitClasses}>
        Send Request
      </button>
    </form>
  );
};

export default ContactForm;