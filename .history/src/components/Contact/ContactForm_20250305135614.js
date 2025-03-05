"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    mode: "onTouched",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Using fetch to send form data to an API endpoint
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus('success');
        reset(); // Clear form on successful submission
        console.log("Email sent successfully:", data);
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error("Error sending email:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

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

  const inputClasses = "w-full outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-center placeholder:text-lg border-b border-gray focus:border-gray bg-transparent";
  const submitClasses = "mt-8 font-medium inline-block capitalize text-lg sm:text-xl py-2 sm:py-3 px-6 sm:px-8 border-2 border-solid border-dark dark:border-light rounded cursor-pointer hover:bg-dark hover:text-light transition-colors disabled:opacity-50 disabled:cursor-not-allowed";

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">Let&apos;s Contact</h2>
      
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-12 text-base xs:text-lg sm:text-xl font-medium leading-relaxed font-in space-y-6 w-full max-w-lg"
        noValidate
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
              disabled={isSubmitting}
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
            disabled={isSubmitting}
          />
          {errors.project && (
            <span id="project-error" className="text-red-500 text-sm absolute -bottom-6 left-2">
              {errors.project.message}
            </span>
          )}
        </div>

        <button 
          type="submit" 
          className={submitClasses}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Send Request'}
        </button>

        {submitStatus === 'success' && (
          <p className="text-green-500 text-center">Message sent successfully!</p>
        )}
        {submitStatus === 'error' && (
          <p className="text-red-500 text-center">Failed to send message. Please try again.</p>
        )}
      </form>
    </div>
  );
};

export default ContactForm;